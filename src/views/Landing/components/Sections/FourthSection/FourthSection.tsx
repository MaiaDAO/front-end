import { useMediaQuery, Box, styled, Typography, Grid } from "@material-ui/core";
import "./fourth-section.scss";
import maiaLogoWhite from "src/assets/icons/maialogowhite.png";

const FourthBox = styled(Box)({
    background: "#1D3473",
    borderRadius: 30,
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    padding: "20px 10px 20px 10px",
});

const Title = styled(Typography)({
    color: "white",
    fontFamily: "Montserrat Medium",
    fontSize: 24,
});

const Text = styled(Typography)({
    color: "white",
    fontFamily: "Montserrat Medium",
    fontSize: 18,
    maxWidth: "60%",
    textAlign: "justify",
});

const Link = styled(Typography)({
    color: "#B97DDD",
    cursor: "pointer",
    fontFamily: "Montserrat Medium",
    fontSize: 18,
    maxWidth: "60%",
    textAlign: "justify",
    "&:hover": {
        color: "white",
        textDecoration: "underline",
    },
});

const FourthSection = () => {
    const isDesktop = useMediaQuery("(min-width:772px)");

    return (
        <div className={isDesktop ? "fourth-section" : "fourth-section-mobile"}>
            <div className="inner-logo">
                <img src={maiaLogoWhite} alt="Logo Maia" width={80} height={80} />
            </div>
            <Box mx={5}>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={6}>
                        <FourthBox>
                            <img src={maiaLogoWhite} alt="Logo Maia" width={96} height={96} />
                            <Title paragraph>MAIA</Title>
                            <Text paragraph>Staking is the primary value accrual strategy of Maia holders.</Text>
                            <Link>Learn More...</Link>
                        </FourthBox>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FourthBox>
                            <img src={maiaLogoWhite} alt="Logo Maia" width={96} height={96} />
                            <Title paragraph>MAIA</Title>
                            <Text paragraph>Staking is the primary value accrual strategy of Maia holders.</Text>
                            <Link>Learn More...</Link>
                        </FourthBox>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FourthBox>
                            <img src={maiaLogoWhite} alt="Logo Maia" width={96} height={96} />
                            <Title paragraph>MAIA</Title>
                            <Text paragraph>Staking is the primary value accrual strategy of Maia holders.</Text>
                            <Link>Learn More...</Link>
                        </FourthBox>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FourthBox>
                            <img src={maiaLogoWhite} alt="Logo Maia" width={96} height={96} />
                            <Title paragraph>MAIA</Title>
                            <Text paragraph>Staking is the primary value accrual strategy of Maia holders.</Text>
                            <Link>Learn More...</Link>
                        </FourthBox>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default FourthSection;
