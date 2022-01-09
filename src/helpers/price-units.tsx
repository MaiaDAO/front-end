import { SvgIcon } from "@material-ui/core";
import { ReactComponent as MimImg } from "../assets/tokens/USDC.svg";
import { IAllBondData } from "../hooks/bonds";
import { usdc } from "../helpers/bond";

export const priceUnits = (bond: IAllBondData) => {
    if (!bond.isLP) return bond.displayName;

    return "$";
};
