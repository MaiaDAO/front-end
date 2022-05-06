import { Box, Grid, Typography } from "@material-ui/core";
import { styled } from "@material-ui/styles";

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
});

const Title = styled(Typography)({
    fontFamily: "Montserrat Bold",
    fontSize: 24,
    color: "white",
    padding: "10px 50px 10px 50px",
});
const Subtitle = styled(Typography)({
    fontFamily: "Montserrat Medium",
    fontSize: 22,
    color: "white",
    padding: "10px 50px 10px 50px",
});

const SecondSection = () => {
    return (
        <Container mt={10} py={10}>
            <Box display="flex" flexDirection="column">
                <Grid container spacing={10}>
                    <Grid item xs={6}>
                        <StyledBox>
                            <Title>Treasury Balance</Title>
                            <Subtitle>$4,537,292</Subtitle>
                        </StyledBox>
                    </Grid>
                    <Grid item xs={6}>
                        <StyledBox>
                            <Title>Treasury Balance</Title>
                            <Subtitle>$4,537,292</Subtitle>
                        </StyledBox>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12}>
                        <Box sx={{ textAlign: "center" }}>
                            <Title>Community Owned</Title>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={10}>
                    <Grid item xs={6}>
                        <StyledBox>
                            <Title>Treasury Balance</Title>
                            <Subtitle>$4,537,292</Subtitle>
                        </StyledBox>
                    </Grid>
                    <Grid item xs={6}>
                        <StyledBox>
                            <Title>Treasury Balance</Title>
                            <Subtitle>$4,537,292</Subtitle>
                        </StyledBox>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default SecondSection;
