import { Grid, Typography, Box, styled, Button, useMediaQuery } from "@material-ui/core";
import React from "react";

const HeroImageDesktop = styled("div")({
    width: "500px",
    height: "500px",
    background: "grey",
    borderRadius: "50%",
});
const HeroImageMobile = styled("div")({
    width: "300px",
    height: "300px",
    background: "grey",
    borderRadius: "50%",
});

const Title = styled(Typography)({
    fontFamily: "Montserrat Medium",
    fontSize: 48,
    color: "white",
});

const Subtitle = styled(Typography)({
    color: "white",
    fontFamily: "Montserrat Medium",
    fontSize: 24,
    textAlign: "justify",
});

const ButtonStyled = styled(Button)({
    borderRadius: 5,
    background: "#B97DDD",
    width: 289,
    color: "white",
    fontFamily: "Montserrat Bold",
    fontSize: 20,
    boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.15)",
});

const FirstSection = () => {
    const isDesktop = useMediaQuery("(min-width:960px)");
    return (
        <Box my={2}>
            <Grid container direction="row-reverse" justifyContent="center" alignItems="center">
                <Grid item xs={12} md={6}>
                    <Box display="flex" justifyContent="center" alignItems="center">
                        {isDesktop ? <HeroImageDesktop /> : <HeroImageMobile />}
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box display="flex" flexDirection="column" alignItems={isDesktop ? "flex-end" : "center"} justifyContent="center" marginRight={isDesktop ? 5 : 0}>
                        <Box display="flex" width={isDesktop ? 350 : "auto"} paddingX={4}>
                            <Title paragraph>Maia DAO</Title>
                        </Box>
                        <Box display="flex" width={isDesktop ? 350 : "auto"} paddingX={4}>
                            <Subtitle>
                                The yield powerhouse of <strong>Metis</strong> with its community rooted in this Ethereum L2.
                            </Subtitle>
                        </Box>
                        <Box display="flex" width={isDesktop ? 350 : "auto"} paddingX={4} mt={2}>
                            <ButtonStyled>ENTER APP</ButtonStyled>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default FirstSection;
