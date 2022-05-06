import { Grid, Typography, Box, styled, Button } from "@material-ui/core";
import React from "react";

const HeroImage = styled("div")({
    width: "500px",
    height: "500px",
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
    return (
        <Box my={10} height={500}>
            <Grid container>
                <Grid item xs={6}>
                    <Box height={500} display="flex" flexDirection="column" alignItems="flex-end" justifyContent="center" marginRight={5}>
                        <Box display="flex" width={350}>
                            <Title paragraph>Maia DAO</Title>
                        </Box>
                        <Box display="flex" width={350}>
                            <Subtitle>
                                The yield powerhouse of <strong>Metis</strong> with its community rooted in this Ethereum L2.
                            </Subtitle>
                        </Box>
                        <Box display="flex" width={350} mt={2}>
                            <ButtonStyled>ENTER APP</ButtonStyled>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box marginLeft={5}>
                        <HeroImage />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default FirstSection;
