import { SvgIcon, Link } from "@material-ui/core";
import { ReactComponent as GitHub } from "../../../assets/icons/github.svg";
import { ReactComponent as Twitter } from "../../../assets/icons/twitter.svg";
import { ReactComponent as Telegram } from "../../../assets/icons/telegram.svg";
import { ReactComponent as Discord } from "../../../assets/icons/discord.svg";
import DexScreener from "../../../assets/icons/dexscreen.png";
import Medium from "../../../assets/icons/medium.png";

export default function Social() {
    return (
        <div className="social-row">
            <Link href="https://github.com/MaiaDao" target="_blank">
                <SvgIcon color="primary" component={GitHub} />
            </Link>

            <Link href="https://twitter.com/MaiaDAOMetis" target="_blank">
                <SvgIcon color="primary" component={Twitter} />
            </Link>

            <Link href="https://discord.gg/hMjdSTKT" target="_blank">
                <SvgIcon color="primary" component={Discord} />
            </Link>

            <Link href="https://dexscreener.com/metis/0x82758824b93f2648bcc9387878cf443c9c0cb768" target="_blank">
                <img src={DexScreener} />
            </Link>
            
            <Link className="tooltip-item" href="https://medium.com/@maiaDAO/" target="_blank">
                <img src={Medium} />
            </Link>
        </div>
    );
}
