import React from "react";
import "./background.scss";
import MaiasTop from "../../../../assets/icons/landing-maias-center.png";
import MaiasCenter from "../../../../assets/icons/landing-maias-center.png";
import back from "../../../../assets/icons/gg.png";

function Background() {
    return (
        <div className="landing-background">
            <div className="landing-background-maias-top">{/* <img alt="" src={back} /> */}</div>

            <div className="landing-background-maias-center">{/* <img alt="" src={MaiasCenter} /> */}</div>
        </div>
    );
}

export default Background;
