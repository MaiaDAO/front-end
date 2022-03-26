import { IAllBondData } from "../hooks/bonds";
import { usdc, usdt, busd } from "../helpers/bond";

export const priceUnits = (bond: IAllBondData) => {
    if (!bond.isLP && (bond.name === usdc.name || bond.name === usdt.name || bond.name === busd.name)) return bond.bondToken;

    return "$";
};
