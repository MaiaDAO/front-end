import { Box, Grid, Typography, useMediaQuery } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { styled } from "@material-ui/styles";
import { useSelector } from "react-redux";
import { IAppSlice } from "src/store/slices/app-slice";
import { IReduxState } from "src/store/slices/state.interface";
import { trim } from "src/helpers";

const Container = styled(Box)({
    background: "#1D3473",
    display: "flex",
    justifyContent: "center",
});

const StyledBox = styled(Box)({
    borderRadius: 10,
    background: "#4469BD",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    textAlign: "center",
    padding: "10px 0px",
});

const Hero = styled(Typography)({
    fontFamily: "Montserrat Light",
    fontSize: 18,
    letterSpacing: "1.5rem",
    color: "white",
    textTransform: "uppercase",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)",
    lineHeight: "4rem",
});

const Title = styled(Typography)({
    fontFamily: "Montserrat Bold",
    fontSize: 24,
    color: "white",
    padding: "5px 50px 5px 50px",
});

const Subtitle = styled(Typography)({
    fontFamily: "Montserrat Medium",
    fontSize: 22,
    color: "white",
    padding: "5px 50px 5px 50px",
});

const SecondSection = () => {
    const isAppLoading = useSelector<IReduxState, boolean>(state => state.app.loading);
    const app = useSelector<IReduxState, IAppSlice>(state => state.app);
    const trimmedStakingAPY = trim(app.stakingAPY * 100, 1);

    const isDesktop = useMediaQuery("(min-width:960px)");

    return (
        <Container mt={10} py={10}>
            <Box display="flex" flexDirection="column" px={2}>
                <Grid container spacing={isDesktop ? 10 : 2}>
                    <Grid item xs={12} md={6}>
                        <StyledBox minWidth={isDesktop ? 400 : "inherit"}>
                            <Title>MAIA Price</Title>
                            <Subtitle>{isAppLoading ? <Skeleton width="100px" /> : `$${trim(app.marketPrice, 2)}`}</Subtitle>
                        </StyledBox>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <StyledBox minWidth={isDesktop ? 400 : "inherit"}>
                            <Title>Treasury Balance</Title>
                            <Subtitle>
                                {isAppLoading ? (
                                    <Skeleton width="250px" />
                                ) : (
                                    new Intl.NumberFormat("en-US", {
                                        style: "currency",
                                        currency: "USD",
                                        maximumFractionDigits: 0,
                                        minimumFractionDigits: 0,
                                    }).format(app.stakingTVL)
                                )}
                            </Subtitle>
                        </StyledBox>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12}>
                        <Box sx={{ textAlign: "center" }}>
                            <Hero>Community Owned</Hero>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={isDesktop ? 10 : 2}>
                    <Grid item xs={12} md={6}>
                        <StyledBox minWidth={isDesktop ? 400 : "inherit"}>
                            <Title>Market Cap</Title>
                            <Subtitle>
                                {isAppLoading ? (
                                    <Skeleton width="160px" />
                                ) : (
                                    new Intl.NumberFormat("en-US", {
                                        style: "currency",
                                        currency: "USD",
                                        maximumFractionDigits: 0,
                                        minimumFractionDigits: 0,
                                    }).format(app.marketCap)
                                )}
                            </Subtitle>
                        </StyledBox>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <StyledBox minWidth={isDesktop ? 400 : "inherit"}>
                            <Title>Current APY</Title>
                            <Subtitle>{isAppLoading ? <Skeleton width="250px" /> : `${new Intl.NumberFormat("en-US").format(Number(trimmedStakingAPY))}%`}</Subtitle>
                        </StyledBox>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default SecondSection;
