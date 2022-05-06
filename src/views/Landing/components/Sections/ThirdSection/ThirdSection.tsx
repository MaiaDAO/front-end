import { Box, Button, Grid, styled, Typography } from "@material-ui/core";
import "./third-section.scss";

const Left = styled(Box)({
    background: "red",
    height: "100%",
    width: "100%",
});

const Right = styled(Box)({
    height: "720px",
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
    return (
        <>
            <Box height={720}>
                <Grid container>
                    <Grid item xs={6}>
                        <Left />
                    </Grid>
                    <Grid item xs={6}>
                        <Right>
                            <Title>100%</Title>
                            <Title>Community</Title>
                            <Box display="flex" width={350} mt={2}>
                                <ButtonStyled>ENTER APP</ButtonStyled>
                            </Box>
                        </Right>
                    </Grid>
                </Grid>
            </Box>
            <Box height={720}>
                <Grid container>
                    <Grid item xs={6}>
                        <Right>
                            <Title>100%</Title>
                            <Title>Community</Title>
                            <Box display="flex" width={350} mt={2}>
                                <ButtonStyled>ENTER APP</ButtonStyled>
                            </Box>
                        </Right>
                    </Grid>
                    <Grid item xs={6}>
                        <Left />
                    </Grid>
                </Grid>
            </Box>
            <Box height={720}>
                <Grid container>
                    <Grid item xs={6}>
                        <Left />
                    </Grid>
                    <Grid item xs={6}>
                        <Right>
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
