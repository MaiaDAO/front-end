import React from "react";
import { Link } from "@material-ui/core";
import "./main.scss";
import MaiaIcon from "../../../../assets/icons/maialogowhite.png";

function Main() {
    return (
        <div className="landing-main">
            <div className="landing-main-title-wrap">
                <Link href="https://app.maiadao.io/#/dashboard" target="_blank">
                    <img alt="" src={MaiaIcon} />
                </Link>
                <p>Maia DAO</p>
                <p></p>
            </div>
            <div className="landing-main-help-text-wrap">
                <p>Join the Polis</p>
                {/* <p>Community owned decentralized reserve currency of Metis</p> */}
            </div>
            <div className="landing-main-btns-wrap">
                <nav>
                    <ul>
                        <li>
                            <div>
                                <Link href="http://app.maiadao.io/#/dashboard" target="_blank" rel="noreferrer">
                                    <p>ENTER APP</p>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div>
                                <Link href="https://docs.maiadao.xyz/" target="_blank" rel="noreferrer">
                                    <p>Documentation</p>
                                </Link>
                            </div>
                        </li>
                        <li className="hermes-btn">
                            <div>
                                <Link href="https://hermes.maiadao.io/" target="_blank" rel="noreferrer">
                                    <p>Hermes</p>
                                </Link>
                            </div>
                        </li>
                    </ul>
                </nav>
                {/* <Link href="http://app.maiadao.xyz/#/" target="_blank" rel="noreferrer">
                    <div className="landing-main-btn">
                        <p>Enter App</p>
                    </div>
                </Link>
                <Link href="/" target="_blank" rel="noreferrer">
                    <div className="landing-main-btn">
                        <p>Documentation</p>
                    </div>
                </Link> */}
            </div>
        </div>
    );
}

export default Main;
