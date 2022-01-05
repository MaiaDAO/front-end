import { useCallback, useState } from "react";
import { NavLink } from "react-router-dom";
import Social from "./social";
import StakeIcon from "../../../assets/icons/stake.svg";
import CalculatorIcon from "../../../assets/icons/calculator.svg";

import MintIcon from "../../../assets/icons/mint.svg";
import PresaleIcon from "../../../assets/icons/presale.svg";
import BondIcon from "../../../assets/icons/bond.svg";
import WonderlandIcon from "../../../assets/icons/maia.png";
import DashboardIcon from "../../../assets/icons/dashboard.svg";
import { trim, shorten } from "../../../helpers";
import { useAddress } from "../../../hooks";
import useBonds from "../../../hooks/bonds";
import { Link } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import "./drawer-content.scss";
import DocsIcon from "../../../assets/icons/docs.svg";
import BrowserIcon from "../../../assets/icons/browser.png";
import MaiaIcon from "../../../assets/icons/whiteicon.png";
import classnames from "classnames";

function SideBar() {
    const [isActive] = useState();
    const address = useAddress();
    const { bonds } = useBonds();

    const checkPage = useCallback((location: any, page: string): boolean => {
        const currentPath = location.pathname.replace("/", "");
        if (currentPath.indexOf("dashboard") >= 0 && page === "dashboard") {
            return true;
        }
        if (currentPath.indexOf("stake") >= 0 && page === "stake") {
            return true;
        }
        if (currentPath.indexOf("mints") >= 0 && page === "mints") {
            return true;
        }
        // if (currentPath.indexOf("presale") >= 0 && page === "presale") {
        //     return true;
        // }
        if (currentPath.indexOf("calculator") >= 0 && page === "calculator") {
            return true;
        }
        return false;
    }, []);

    return (
        <div className="dapp-sidebar">
            <div className="branding-header">
                <Link href="https://maiadao.xyz" target="_blank">
                    <img alt="" src={MaiaIcon} />
                </Link>

                {address && (
                    <div className="wallet-link">
                        <Link href={`https://cchain.explorer.matic.network/address/${address}`} target="_blank">
                            <p>{shorten(address)}</p>
                        </Link>
                    </div>
                )}
            </div>

            <div className="dapp-menu-links">
                <div className="dapp-nav">
                    <Link
                        component={NavLink}
                        to="/dashboard"
                        isActive={(match: any, location: any) => {
                            return checkPage(location, "dashboard");
                        }}
                        className={classnames("button-dapp-menu", { active: isActive })}
                    >
                        <div className="dapp-menu-item">
                            <p>Dashboard</p>
                        </div>
                    </Link>

                    <Link
                        component={NavLink}
                        to="/stake"
                        isActive={(match: any, location: any) => {
                            return checkPage(location, "stake");
                        }}
                        className={classnames("button-dapp-menu", { active: isActive })}
                    >
                        <div className="dapp-menu-item">
                            <p>Stake</p>
                        </div>
                    </Link> 

                    <Link
                        component={NavLink}
                        id="bond-nav"
                        to="/mints"
                        isActive={(match: any, location: any) => {
                            return checkPage(location, "mints");
                        }}
                        className={classnames("button-dapp-menu", { active: isActive })}
                    >
                        <div className="dapp-menu-item">
                            {/* <img alt="" src={MintIcon} /> */}
                            <p>Mint</p>
                        </div>
                    </Link>

                    <div className="bond-discounts">
                        <p>Mint discounts</p>
                        {bonds.map((bond, i) => (
                            <Link component={NavLink} to={`/mints/${bond.name}`} key={i} className={"bond"}>
                                {!bond.bondDiscount ? (
                                    <Skeleton variant="text" width={"150px"} />
                                ) : (
                                    <p>
                                        {bond.displayName}
                                        <span className="bond-pair-roi">{bond.bondDiscount && trim(bond.bondDiscount * 100, 2)}%</span>
                                    </p>
                                )}
                            </Link>
                        ))}
                    </div>
                    <Link
                        component={NavLink}
                        to="/calculator"
                        isActive={(match: any, location: any) => {
                            return checkPage(location, "calculator");
                        }}
                        className={classnames("button-dapp-menu", { active: isActive })}
                    >
                        <div className="dapp-menu-item">
                            <p>Calculator</p>
                        </div>
                    </Link>

                </div>
            </div>
            {/* <div className="dapp-menu-doc-link">
                <Link href="/" target="_blank">
                    <img alt="" src={DocsIcon} />
                    <p>Docs</p>
                </Link>
                <Link href="/" target="_blank">
                    <p>Legacy website</p>
                </Link>
            </div> */}
            <Social />
        </div>
    );
}

export default SideBar;
