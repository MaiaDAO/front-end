import { useMediaQuery, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
    root: {
        background: "linear-gradient(105deg, #B97DDD 0%, #1D3473 40%);",
    },
});

const LandingLayout: React.FC = ({ children }) => {
    const isDesktop = useMediaQuery("(min-width:772px)");
    const styles = useStyles();
    return <div className={isDesktop ? "" : styles.root}>{children}</div>;
};

export default LandingLayout;
