import { SvgIcon } from "@material-ui/core";
import { ReactComponent as MimImg } from "../assets/tokens/USDC.svg";
import { IAllBondData } from "../hooks/bonds";
import { usdc, usdt } from "../helpers/bond";

export const priceUnits = (bond: IAllBondData) => {
    if (!bond.isLP && (bond.name === usdc.name || bond.name === usdt.name)) return bond.bondToken;

    return "$";
};
