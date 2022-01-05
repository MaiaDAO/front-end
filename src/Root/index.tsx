import React, { useEffect, useState } from "react";
import App from "./App";
import Dashboard from "../views/Dashboard/index";
import { HashRouter } from "react-router-dom";
import { loadTokenPrices } from "../helpers";
import Loading from "../components/Loader";
import Landing from "./Landing";

function Root() {
    const isApp = (): boolean => {
        return window.location.host.includes("app");
        //return true;
    };

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadTokenPrices()
            .then(() => setLoading(false))
            .catch(error => console.log(error));
    }, []);

    if (loading) return <Loading />;

    const app = () => (
        <HashRouter>
            <App />
        </HashRouter>
    );

    return isApp() ? app() : <Landing />;
}

export default Root;
