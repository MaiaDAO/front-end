import { Box, Grid, styled, Typography, Link } from "@material-ui/core";
import React from "react";

const Title = styled(Typography)({
    color: "white",
    fontFamily: "Montserrat Bold",
    fontSize: 22,
});

const TextLink = styled(Link)({
    color: "white",
    cursor: "pointer",
});

const Text = styled(Typography)({
    color: "white",
    fontFamily: "Montserrat Medium",
    fontSize: 18,
});

const FootNote = styled(Typography)({
    color: "white",
    fontFamily: "Montserrat Medium",
    fontSize: 12,
});

const Footer = () => {
    return (
        <Box bgcolor="#1D3473" minHeight={400} pt={10}>
            <Grid container direction="row" justifyContent="center">
                <Grid item xs={6} md={4} lg={3}>
                    <Title paragraph align="center">
                        Community
                    </Title>
                    <Grid container direction="column">
                        <Grid item>
                            <Text align="center">
                                <TextLink href="#">Discord</TextLink>
                            </Text>
                        </Grid>
                        <Grid item>
                            <Text align="center">
                                <TextLink href="#">Twitter</TextLink>
                            </Text>
                        </Grid>
                        <Grid item>
                            <Text align="center">
                                <TextLink href="#">Telegram</TextLink>
                            </Text>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6} md={4} lg={3}>
                    <Title paragraph align="center">
                        Tools
                    </Title>
                    <Grid container direction="column">
                        <Grid item>
                            <Text align="center">
                                <TextLink href="#">DefiLlama</TextLink>
                            </Text>
                        </Grid>
                        <Grid item>
                            <Text align="center">
                                <TextLink href="#">CoinGecko</TextLink>
                            </Text>
                        </Grid>
                        <Grid item>
                            <Text align="center">
                                <TextLink href="#">CoinMarketCap</TextLink>
                            </Text>
                        </Grid>
                        <Grid item>
                            <Text align="center">
                                <TextLink href="#">Discord</TextLink>
                            </Text>
                        </Grid>
                        <Grid item>
                            <Text align="center">
                                <TextLink href="#">Bridge List</TextLink>
                            </Text>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={6} md={4} lg={3}>
                    <Title paragraph align="center">
                        Info
                    </Title>
                    <Grid container direction="column">
                        <Grid item>
                            <Text align="center">
                                <TextLink href="#">Discord</TextLink>
                            </Text>
                        </Grid>
                        <Grid item>
                            <Text align="center">
                                <TextLink href="#">Docs</TextLink>
                            </Text>
                        </Grid>
                        <Grid item>
                            <Text align="center">
                                <TextLink href="#">FAQ's</TextLink>
                            </Text>
                        </Grid>
                        <Grid item>
                            <Text align="center">
                                <TextLink href="#">Media Kit</TextLink>
                            </Text>
                        </Grid>
                        <Grid item>
                            <Text align="center">
                                <TextLink href="#">Legacy Website</TextLink>
                            </Text>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6} md={4} lg={3}>
                    <Title paragraph align="center">
                        Participate
                    </Title>
                    <Grid container direction="column">
                        <Grid item>
                            <Text align="center">
                                <TextLink href="#">Governance</TextLink>
                            </Text>
                        </Grid>
                        <Grid item>
                            <Text align="center">
                                <TextLink href="#">Propose Partnership</TextLink>
                            </Text>
                        </Grid>
                        <Grid item>
                            <Text align="center">
                                <TextLink href="#">Join as Contributor</TextLink>
                            </Text>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Box mt={10} px={4} pb={10}>
                <FootNote>
                    Use of hermes.maiadao.io (the “Site”) and the Hermes Protocol (the “Protocol”) is strictly at your own risk. Before using the Protocol, users should fully
                    understand and accept the risks involved, which include, but are not limited to, front-end errors, bugs, hacks, regulatory and tax uncertainty, and total loss
                    of funds. Do not deploy funds you cannot afford to lose. No representations or warranties are made as to the safety of funds deployed, and Hermes Protocol or
                    Maia DAO will not be liable or responsible for any losses incurred. By using the Site or the Protocol, you represent and warrant that your use does not violate
                    any law, rule or regulation in your jurisdiction of residence. Nothing on the Site or any of Hermes Protocol's and Maia DAO's social media channels should be
                    considered financial advice.
                </FootNote>
            </Box>
        </Box>
    );
};

export default Footer;
