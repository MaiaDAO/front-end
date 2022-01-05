import { Box, SvgIcon } from "@material-ui/core";
import { Bond } from "../helpers/bond/bond";

interface IBondLogoProps {
    bond: Bond;
}

function BondLogo({ bond }: IBondLogoProps) {
    let style = { height: "40px", width: "40px" };

    if (bond.isLP) {
        style = { height: "60px", width: "60px" };
    }
    if (bond.name == "GOHM") {
        style = { height: "40px", width: "40px" };
    }

    return (
        <Box display="flex" alignItems="center" justifyContent="center" width={"64px"}>
            <img alt="" src={bond.bondIconSvg} style={style} />
        </Box>
    );
}

export default BondLogo;
