import { Box, Button, Grid, styled, Typography, useMediaQuery } from "@material-ui/core";
import "./third-section.scss";
import bg from "src/assets/illustration/bg-section3.png";

const LeftImage = styled("img")({
    objectFit: "none",
    objectPosition: "0px 50%",
});

const RightImage = styled("img")({
    objectFit: "none",
    objectPosition: "100% 50%",
});

const Right = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    background: "#B97DDD",
});

const Title = styled(Typography)({
    fontFamily: "Montserrat Bold",
    fontSize: 60,
    lineHeight: 1,
    color: "white",
    padding: "10px 50px 10px 50px",
});

const ButtonStyled = styled(Button)({
    borderRadius: 5,
    background: "#1D3473",
    width: 350,
    color: "white",
    fontFamily: "Montserrat Bold",
    fontSize: 20,
    boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.15)",
});

const ThirdSection = () => {
    const isDesktop = useMediaQuery("(min-width:960px)");

    return (
        <>
            <Box height={isDesktop ? 720 : 360}>
                <Grid container>
                    {isDesktop && (
                        <Grid item xs={12} md={6}>
                            <Box width="100%" height="100%">
                                <LeftImage src={bg} alt="bg1" height="100%" width="100%" />
                            </Box>
                        </Grid>
                    )}
                    <Grid item xs={12} md={6}>
                        {/*
                        // @ts-ignore-next-line */}
                        <Right height={isDesktop ? 720 : 360} withImage={isDesktop}>
                            <Title>100%</Title>
                            <Title>Community</Title>
                            <Box display="flex" width={350} mt={2}>
                                <ButtonStyled>ENTER APP</ButtonStyled>
                            </Box>
                        </Right>
                    </Grid>
                </Grid>
            </Box>
            <Box height={isDesktop ? 720 : 360}>
                <Grid container direction="row-reverse">
                    {isDesktop && (
                        <Grid item xs={12} md={6}>
                            <Box width="100%" height={720}>
                                <RightImage src={bg} alt="bg1" height="100%" width="100%" />
                            </Box>
                        </Grid>
                    )}
                    <Grid item xs={12} md={6}>
                        <Right height={isDesktop ? 720 : 360}>
                            <Title>100%</Title>
                            <Title>Community</Title>
                            <Box display="flex" width={350} mt={2}>
                                <ButtonStyled>ENTER APP</ButtonStyled>
                            </Box>
                        </Right>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default ThirdSection;
