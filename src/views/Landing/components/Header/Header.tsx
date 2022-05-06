import type { FC } from "react";
import { Box, Typography } from "@material-ui/core";
import maiaLogoWhite from "src/assets/icons/maialogowhite.png";
import { styled } from "@material-ui/core/styles";

const MenuLink = styled(Typography)({
    color: "white",
    fontFamily: "Montserrat Bold",
    fontSize: "24px",
    marginRight: "30px",
    textTransform: "uppercase",
    cursor: "pointer",
});

const Header: FC = () => {
    return (
        <Box display="flex" justifyContent="space-between" height={120} alignItems="center">
            <img src={maiaLogoWhite} alt="Logo MAIA" width={110} height={110} />
            <Box display="flex">
                <MenuLink color="initial">Staking</MenuLink>
                <MenuLink color="initial">Dashboard</MenuLink>
            </Box>
        </Box>
    );
};

export default Header;
