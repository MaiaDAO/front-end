import { Box, Typography, styled, useMediaQuery } from "@material-ui/core";
import React from "react";

const Title = styled(Typography)({
    color: "white",
    fontFamily: "Montserrat Medium",
    fontSize: 96,
});

const TitleMobile = styled(Typography)({
    color: "white",
    fontFamily: "Montserrat Medium",
    fontSize: 48,
});

const Text = styled(Typography)({
    color: "white",
    fontFamily: "Montserrat Medium",
    fontSize: 48,
});

const TextMobile = styled(Typography)({
    color: "white",
    fontFamily: "Montserrat Medium",
    fontSize: 24,
});

const FifthSection = () => {
    const isDesktop = useMediaQuery("(min-width:1024px)");

    return (
        <Box bgcolor="#B97DDD" sx={{ height: "400px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            {isDesktop ? <Title>+5000 Token Holders</Title> : <TitleMobile>+5000 Token Holders</TitleMobile>}
            {isDesktop ? <Text>Join the Community</Text> : <TextMobile>Join the Community</TextMobile>}
        </Box>
    );
};

export default FifthSection;
