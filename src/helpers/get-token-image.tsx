import MaiaImg from "../assets/tokens/MAIA.png";
import sMaiaImg from "../assets/tokens/MEMO.png";

function toUrl(tokenPath: string): string {
    const host = window.location.origin;
    return `${host}/${tokenPath}`;
}

export function getTokenUrl(name: string) {
    if (name === "maia") {
        return toUrl(MaiaImg);
    }

    if (name === "smaia") {
        return toUrl(sMaiaImg);
    }

    throw Error(`Token url doesn't support: ${name}`);
}
