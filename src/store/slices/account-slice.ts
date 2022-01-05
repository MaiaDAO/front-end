import { ethers } from "ethers";
import { getAddresses } from "../../constants";
import { MaiaTokenContract, sMaiaTokenContract, MimTokenContract, PresaleContract, WhitelistContract } from "../../abi";
import { setAll } from "../../helpers";

import { createSlice, createSelector, createAsyncThunk } from "@reduxjs/toolkit";
import { JsonRpcProvider, StaticJsonRpcProvider } from "@ethersproject/providers";
import { Bond } from "../../helpers/bond/bond";
import { Networks } from "../../constants/blockchain";
import React from "react";
import { RootState } from "../store";
import { IToken } from "../../helpers/tokens";

interface IGetBalances {
    address: string;
    networkID: Networks;
    provider: StaticJsonRpcProvider | JsonRpcProvider;
}

interface IAccountBalances {
    balances: {
        sMaia: string;
        maia: string;
    };
}

export const getBalances = createAsyncThunk("account/getBalances", async ({ address, networkID, provider }: IGetBalances): Promise<IAccountBalances> => {
    const addresses = getAddresses(networkID);

    const sMaiaContract = new ethers.Contract(addresses.sMAIA_ADDRESS, sMaiaTokenContract, provider);
    const sMaiaBalance = await sMaiaContract.balanceOf(address);

    const maiaContract = new ethers.Contract(addresses.MAIA_ADDRESS, MaiaTokenContract, provider);
    const maiaBalance = await maiaContract.balanceOf(address);

    return {
        balances: {
            sMaia: ethers.utils.formatUnits(sMaiaBalance, "gwei"),
            maia: ethers.utils.formatUnits(maiaBalance, "gwei"),
        },
    };
});

interface ILoadAccountDetails {
    address: string;
    networkID: Networks;
    provider: StaticJsonRpcProvider | JsonRpcProvider;
}

interface IUserAccountDetails {
    balances: {
        maia: string;
        sMaia: string;
    };
    staking: {
        maia: number;
        sMaia: number;
    };
}

export const loadAccountDetails = createAsyncThunk("account/loadAccountDetails", async ({ networkID, provider, address }: ILoadAccountDetails): Promise<IUserAccountDetails> => {
    let maiaBalance = 0;
    let sMaiaBalance = 0;
    let stakeAllowance = 0;
    let unstakeAllowance = 0;

    const addresses = getAddresses(networkID);

    try {
        if (addresses.MAIA_ADDRESS) {
            const maiaContract = new ethers.Contract(addresses.MAIA_ADDRESS, MaiaTokenContract, provider);
            maiaBalance = await maiaContract.balanceOf(address);
            stakeAllowance = await maiaContract.allowance(address, addresses.STAKING_HELPER_ADDRESS);
        }

        if (addresses.sMAIA_ADDRESS) {
            const sMaiaContract = new ethers.Contract(addresses.sMAIA_ADDRESS, sMaiaTokenContract, provider);
            sMaiaBalance = await sMaiaContract.balanceOf(address);
            unstakeAllowance = await sMaiaContract.allowance(address, addresses.STAKING_ADDRESS);
        }
    } catch (error) {}

    return {
        balances: {
            sMaia: ethers.utils.formatUnits(sMaiaBalance, "gwei"),
            maia: ethers.utils.formatUnits(maiaBalance, "gwei"),
        },
        staking: {
            maia: Number(stakeAllowance),
            sMaia: Number(unstakeAllowance),
        },
    };
});

interface ICalcUserBondDetails {
    address: string;
    bond: Bond;
    provider: StaticJsonRpcProvider | JsonRpcProvider;
    networkID: Networks;
}

export interface IUserBondDetails {
    allowance: number;
    balance: number;
    maticBalance: number;
    interestDue: number;
    bondMaturationBlock: number;
    pendingPayout: number; //Payout formatted in gwei.
}

export const calculateUserBondDetails = createAsyncThunk("account/calculateUserBondDetails", async ({ address, bond, networkID, provider }: ICalcUserBondDetails) => {
    if (!address) {
        return new Promise<any>(resevle => {
            resevle({
                bond: "",
                displayName: "",
                bondIconSvg: "",
                isLP: false,
                allowance: 0,
                balance: 0,
                interestDue: 0,
                bondMaturationBlock: 0,
                pendingPayout: "",
                maticBalance: 0,
            });
        });
    }

    const bondContract = bond.getContractForBond(networkID, provider);
    const reserveContract = bond.getContractForReserve(networkID, provider);

    let interestDue, pendingPayout, bondMaturationBlock;

    const bondDetails = await bondContract.bondInfo(address);
    interestDue = bondDetails.payout / Math.pow(10, 9);
    bondMaturationBlock = Number(bondDetails.vesting) + Number(bondDetails.lastMaia);
    pendingPayout = await bondContract.pendingPayoutFor(address);

    let allowance,
        balance = 0,
        balanceVal = 0;

    allowance = await reserveContract.allowance(address, bond.getAddressForBond(networkID));
    balance = await reserveContract.balanceOf(address);
    if(bond.isLP){
        balanceVal = balance / 1e18;
    }else{
        balanceVal = balance / 1e6;
    }
    
    const maticBalance = await provider.getSigner().getBalance();
    const maticVal = ethers.utils.formatEther(maticBalance);

    const pendingPayoutVal = ethers.utils.formatUnits(pendingPayout, "gwei");

    return {
        bond: bond.name,
        displayName: bond.displayName,
        bondIconSvg: bond.bondIconSvg,
        isLP: bond.isLP,
        allowance: Number(allowance),
        balance: Number(balanceVal),
        maticBalance: Number(maticVal),
        interestDue,
        bondMaturationBlock,
        pendingPayout: Number(pendingPayoutVal),
    };
});

interface ICalcUserTokenDetails {
    address: string;
    token: IToken;
    provider: StaticJsonRpcProvider | JsonRpcProvider;
    networkID: Networks;
}

export interface IUserTokenDetails {
    allowance: number;
    balance: number;
    isMatic?: boolean;
}

export const calculateUserTokenDetails = createAsyncThunk("account/calculateUserTokenDetails", async ({ address, token, networkID, provider }: ICalcUserTokenDetails) => {
    if (!address) {
        return new Promise<any>(resevle => {
            resevle({
                token: "",
                address: "",
                img: "",
                allowance: 0,
                balance: 0,
            });
        });
    }

    if (token.isMetis) {
        const maticBalance = await provider.getSigner().getBalance();
        const maticVal = ethers.utils.formatEther(maticBalance);

        return {
            token: token.name,
            tokenIcon: token.img,
            balance: Number(maticVal),
            isMatic: true,
        };
    }

    const addresses = getAddresses(networkID);

    const tokenContract = new ethers.Contract(token.address, MimTokenContract, provider);

    let allowance = "0",
        balance = "0",
        balanceVal = 0;

    // allowance = await tokenContract.allowance(address, addresses.ZAPIN_ADDRESS);
    try {
        balance = await tokenContract.balanceOf(address);

        balanceVal = Number(balance) / Math.pow(10, token.decimals);       
    } catch (error) {}

    return {
        token: token.name,
        address: token.address,
        img: token.img,
        allowance: Number(allowance),
        balance: Number(balanceVal),
    };
});

export interface IAccountSlice {
    bonds: { [key: string]: IUserBondDetails };
    balances: {
        sMaia: string;
        maia: string;
    };
    loading: boolean;
    staking: {
        maia: number;
        sMaia: number;
    };
    presale: {
        deposited: number;
        claimable: number;
        weiRaised: number;
        presaleEnd: Date;
        whitelisted: boolean;
    };
    tokens: { [key: string]: IUserTokenDetails };
}

const initialState: IAccountSlice = {
    loading: true,
    bonds: {},
    balances: { sMaia: "", maia: "" },
    staking: { maia: 0, sMaia: 0 },
    presale: {
        deposited: 0,
        claimable: 0,
        weiRaised: 0,
        presaleEnd: new Date(Date.now()),
        whitelisted: false,
    },
    tokens: {},
};

const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        fetchAccountSuccess(state, action) {
            setAll(state, action.payload);
        },
    },
    extraReducers: builder => {
        builder
            .addCase(loadAccountDetails.pending, state => {
                state.loading = true;
            })
            .addCase(loadAccountDetails.fulfilled, (state, action) => {
                setAll(state, action.payload);
                state.loading = false;
            })
            .addCase(loadAccountDetails.rejected, (state, { error }) => {
                state.loading = false;
                console.log(error);
            })
            .addCase(getBalances.pending, state => {
                state.loading = true;
            })
            .addCase(getBalances.fulfilled, (state, action) => {
                setAll(state, action.payload);
                state.loading = false;
            })
            .addCase(getBalances.rejected, (state, { error }) => {
                state.loading = false;
                console.log(error);
            })
            .addCase(calculateUserBondDetails.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(calculateUserBondDetails.fulfilled, (state, action) => {
                if (!action.payload) return;
                const bond = action.payload.bond;
                state.bonds[bond] = action.payload;
                state.loading = false;
            })
            .addCase(calculateUserBondDetails.rejected, (state, { error }) => {
                state.loading = false;
                console.log(error);
            })
            .addCase(calculateUserTokenDetails.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(calculateUserTokenDetails.fulfilled, (state, action) => {
                if (!action.payload) return;
                const token = action.payload.token;
                state.tokens[token] = action.payload;
                state.loading = false;
            })
            .addCase(calculateUserTokenDetails.rejected, (state, { error }) => {
                state.loading = false;
                console.log(error);
            });
    },
});

export default accountSlice.reducer;

export const { fetchAccountSuccess } = accountSlice.actions;

const baseInfo = (state: RootState) => state.account;

export const getAccountState = createSelector(baseInfo, account => account);
