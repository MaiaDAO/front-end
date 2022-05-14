import { useMediaQuery, Box, styled, Grid } from "@material-ui/core";
import "./fourth-section.scss";
import maiaLogoWhite from "src/assets/icons/maialogowhite.png";
import hermesLogoWhite from "src/assets/icons/maialogowhite.png";
import zeusLogoWhite from "src/assets/icons/zeus.png";
import metisLogoWhite from "src/assets/tokens/METIS.svg";

const FourthBox = styled(Box)({
    background: "#1D3473",
    borderRadius: 30,
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    padding: "20px 10px 20px 10px",

    "& h2": {
        color: "white",
        fontFamily: "Montserrat Bold",
        fontSize: 36,
        lineHeight: 0,
    },

    "& p": {
        color: "white",
        fontFamily: "Montserrat Light",
        fontSize: 14,
        textAlign: "justify",
        maxWidth: "60%",
    },

    "& a": {
        marginTop: "1rem",
        color: "#B97DDD",
        cursor: "pointer",
        fontFamily: "Montserrat Medium",
        fontSize: 18,
        maxWidth: "60%",
        textAlign: "justify",
        textDecoration: "none",

        "&:hover": {
            color: "white",
            textDecoration: "underline",
        },
    },
});

const FourthSection = () => {
    const isDesktop = useMediaQuery("(min-width:960px)");

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
                            <h2>MAIA</h2>
                            <p>
                                Maia is the yield powerhouse of Metis with its community rooted in this Ethereum L2. With a 100% fair launch via bonds Maia is a truly community
                                owned token.
                            </p>
                            <a href="/staking">Learn More...</a>
                        </FourthBox>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FourthBox>
                            <img src={hermesLogoWhite} alt="Logo HERMES" width={96} height={96} />
                            <h2>HERMES</h2>
                            <p>
                                Hermes Protocol allows low cost, near 0 slippage trades on uncorrelated or tightly correlated assets. The protocol incentivizes fees instead of
                                liquidity.
                            </p>
                            <a href="/staking">Learn More...</a>
                        </FourthBox>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FourthBox>
                            <img src={zeusLogoWhite} alt="Logo ZEUS" width={96} height={96} />
                            <h2>ZEUS</h2>
                            <p>TBA</p>
                            <a href="/staking">Learn More...</a>
                        </FourthBox>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FourthBox>
                            <img src={metisLogoWhite} alt="Logo METIS" width={96} height={96} />
                            <h2>METIS</h2>
                            <p>METIS IS SOLVING ETHEREUM’S SIX BIGGEST CHALLENGES. SIMPLICITY. SPEED. STORAGE. SCALABILITY. SECURITY. SAVINGS.</p>
                            <a href="/staking">Learn More...</a>
                        </FourthBox>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default FourthSection;
