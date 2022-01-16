import React, { useState } from "react";
import "./header.scss";
import MaiaLogo from "../../../../assets/icons/maia.png";
import { ReactComponent as WonderlandIcon } from "../../../../assets/icons/wonderland-icon.svg";
import { SvgIcon, Link, Box, Popper, Fade } from "@material-ui/core";
import { ReactComponent as GitHub } from "../../../../assets/icons/github.svg";
import { ReactComponent as Twitter } from "../../../../assets/icons/twitter.svg";
import { ReactComponent as Discord } from "../../../../assets/icons/discord.svg";
import DexScreener from "../../../../assets/icons/dexscreen.png";
import Medium from "../../../../assets/icons/medium.png";
import Telegram from "../../../../assets/icons/telegram.png";

function Header() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event: any) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);

    return (
        <div className="landing-header">
            {/* <img alt="" src={MaiaLogo} /> */}
            <div className="landing-header-nav-wrap">
                <Box component="div" onMouseEnter={e => handleClick(e)} onMouseLeave={e => handleClick(e)}>
                    <p className="landing-header-nav-text">Social</p>
                    <Popper className="landing-header-poper" open={open} anchorEl={anchorEl} transition>
                        {({ TransitionProps }) => (
                            <Fade {...TransitionProps} timeout={200}>
                                <div className="tooltip">
                                    <Link className="tooltip-item" href="https://github.com/MaiaDao" target="_blank">
                                        <SvgIcon color="primary" component={GitHub} />
                                        <p>GitHub</p>
                                    </Link>
                                    <Link className="tooltip-item" href="https://twitter.com/MaiaDAOMetis" target="_blank">
                                        <SvgIcon color="primary" component={Twitter} />
                                        <p>Twitter</p>
                                    </Link>
                                    <Link className="tooltip-item" href="https://discord.gg/7hXXFRC8Wv" target="_blank">
                                        <SvgIcon color="primary" component={Discord} />
                                        <p>Discord</p>
                                    </Link>
                                    <Link className="tooltip-item" href="https://t.me/maiadao" target="_blank">
                                        <img src={Telegram} width="25" height="25"/>
                                        <p>Telegram</p>
                                    </Link>
                                    <Link className="tooltip-item" href="https://dexscreener.com/metis/0x82758824b93f2648bcc9387878cf443c9c0cb768" target="_blank">
                                        <img src={DexScreener} width="25" height="25"/>
                                        <p>Dex Screener</p>
                                    </Link>
                                    <Link className="tooltip-item" href="https://medium.com/@maiaDAO/" target="_blank">
                                        <img src={Medium} width="25" height="25"/>
                                        <p>Medium</p>
                                    </Link>
                                </div>
                            </Fade>
                        )}
                    </Popper>
                </Box>
            </div>
        </div>
    );
}

export default Header;
