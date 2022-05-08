import { Box, Grid, styled, Typography, useMediaQuery } from "@material-ui/core";
import React from "react";
import zeusImage from "src/assets/icons/zeus.png";

const Title = styled(Typography)({
    color: "#1D3473",
    fontFamily: "Montserrat Medium",
    fontSize: 40,
});

const Text = styled(Typography)({
    color: "#1D3473",
    background: "white",
    fontFamily: "Montserrat Medium",
});

const InvertedText = styled(Typography)({
    background: "#1D3473",
    color: "white",
    fontFamily: "Montserrat Medium",
});

const SixthSection = () => {
    const isDesktop = useMediaQuery("(min-width:960px)");
    return (
        <Box bgcolor="rgba(49, 69, 137, 0.21);" height={500} pt={5}>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <Box justifyContent="center" display="flex" mt={2}>
                        <Title>Never was so easy!</Title>
                    </Box>
                    {isDesktop && (
                        <Box mt={-10}>
                            <img src={zeusImage} alt="Zeus Logo" width="auto" height="auto" />
                        </Box>
                    )}
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box mx={2} my={4} p={2} bgcolor="white" height={50} borderRadius={10}>
                        <Text>1. Get ETH</Text>
                    </Box>
                    <Box mx={2} my={4} p={2} bgcolor="white" height={50} borderRadius={10}>
                        <Text>2. Bridge to Metis L2</Text>
                    </Box>
                    <Box mx={2} my={4} p={2} bgcolor="white" height={50} borderRadius={10}>
                        <Text>3. Swap for MAIA</Text>
                    </Box>
                    <Box mx={2} my={4} p={2} bgcolor="#1D3473" height={50} borderRadius={10}>
                        <InvertedText>4. Start Staking!</InvertedText>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SixthSection;
