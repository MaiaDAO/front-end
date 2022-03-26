import { Contract, ethers } from "ethers";
import { Interface } from "ethers/lib/utils";
import veAbi from "../abi/ve.json";

const axios = require("axios");


export async function getHermesValue(provider:any) {

    const veContract: Contract = new ethers.Contract("0xa4C546c8F3ca15aa537D2ac3f62EE808d915B65b", new Interface(veAbi), provider);

    let hermesBalance = 0;

    for (let j = 1; j < 43; j++) {
        try{
            hermesBalance += Number((await veContract.locked(j)).amount)/1e18
        }
    catch{}
    }

    let response = await axios.get("https://api.dexscreener.io/latest/dex/pairs/metis/0xb0fe5114e2d770d696cba21361bf30e14684c020");

    let price = response.data.pair.priceUsd

    return hermesBalance*price

    
}
