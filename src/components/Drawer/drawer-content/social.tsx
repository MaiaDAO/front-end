import { SvgIcon, Link } from "@material-ui/core";
import { ReactComponent as GitHub } from "../../../assets/icons/github.svg";
import { ReactComponent as Twitter } from "../../../assets/icons/twitter.svg";
import { ReactComponent as Discord } from "../../../assets/icons/discord.svg";
import DexScreener from "../../../assets/icons/dexscreen.png";
import Medium from "../../../assets/icons/medium.png";
import Telegram from "../../../assets/icons/telegram.png";

export default function Social() {
    return (
        <div className="social-row">
            <Link href="https://github.com/MaiaDao" target="_blank">
                <SvgIcon color="primary" component={GitHub} />
            </Link>

            <Link href="https://twitter.com/MaiaDAOMetis" target="_blank">
                <SvgIcon color="primary" component={Twitter} />
            </Link>

            <Link href="https://discord.gg/7hXXFRC8Wv" target="_blank">
                <SvgIcon color="primary" component={Discord} />
            </Link>

            <Link className="tooltip-item" href="https://t.me/maiadao" target="_blank">
                <img src={Telegram} alt="telegram link icon" />
            </Link>

            <Link href="https://dexscreener.com/metis/0xa3e8e7eb4649ffc6f3cbe42b4c2ecf6625d3e802" target="_blank">
                <img src={DexScreener} alt="dexscreener link icon" />
            </Link>

            <Link className="tooltip-item" href="https://medium.com/@maiaDAO/" target="_blank">
                <img src={Medium} alt="medium link icon" />
            </Link>
        </div>
    );
}
