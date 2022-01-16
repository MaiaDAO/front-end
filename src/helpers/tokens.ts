import MaticIcon from '../assets/tokens/METIS.svg'
import AaveIcon from '../assets/tokens/AAVE.e.png'
import ApeXIcon from '../assets/tokens/Ape-X.png'
import ApeinIcon from '../assets/tokens/APEIN.png'
import BifiIcon from '../assets/tokens/BIFI.png'
import BlizzIcon from '../assets/tokens/BLIZZ.png'
import BnbIcon from '../assets/tokens/BNB.png'
import BoofiIcon from '../assets/tokens/BOOFI.png'
import ChartIcon from '../assets/tokens/CHART.png'
import DaiEIcon from '../assets/tokens/mUSDC.png'
import DreggIcon from '../assets/tokens/DREGG.png'
import EleIcon from '../assets/tokens/ELE.png'
import ElkIcon from '../assets/tokens/ELK.png'
import FraxIcon from '../assets/tokens/FRAX.png'
import GbIcon from '../assets/tokens/GB.png'
import HatIcon from '../assets/tokens/HAT.png'
import HuskyIcon from '../assets/tokens/HUSKY.png'
import IceIcon from '../assets/tokens/ICE.png'
import JoeIcon from '../assets/tokens/JOE.png'
import KloIcon from '../assets/tokens/KLO.png'
import LinkEIcon from '../assets/tokens/LINK.e.png'
import MainIcon from '../assets/tokens/MAI.png'
import MimIcon from '../assets/tokens/MIM.svg'
import MYakIcon from '../assets/tokens/mYAK.png'
import OliveIcon from '../assets/tokens/OLIVE.png'
import PefiIcon from '../assets/tokens/PEFI.png'
import PngIcon from '../assets/tokens/PNG.png'
import QiIcon from '../assets/tokens/QI.png'
import RelayIcon from '../assets/tokens/RELAY.png'
import SherpaIcon from '../assets/tokens/SHERPA.png'
import ShibxIcon from '../assets/tokens/SHIBX.png'
import SingIcon from '../assets/tokens/SING.png'
import SnobIcon from '../assets/tokens/SNOB.png'
import SpellIcon from '../assets/tokens/SPELL.png'
import SushiEIcon from '../assets/tokens/SUSHI.e.png'
import SynIcon from '../assets/tokens/SYN.png'
import TeddyIcon from '../assets/tokens/TEDDY.png'
import MaiaIcon from '../assets/tokens/MAIA.png'
import TsdIcon from '../assets/tokens/TSD.png'
import UsdcEIcon from '../assets/tokens/USDC.e.png'
import UsdtEIcon from '../assets/tokens/USDT.e.png'
import VsoIcon from '../assets/tokens/VSO.png'
import WmaticIcon from '../assets/tokens/WMETIS.png'
import WBtcIcon from '../assets/tokens/WBTC.e.png'
import WetIcon from '../assets/tokens/WET.png'
import WethEIcon from '../assets/tokens/WETH.e.png'
import XavaIcon from '../assets/tokens/XAVA.png'
import YakIcon from '../assets/tokens/YAK.png'
import UsdcIcon from '../assets/tokens/USDC.svg'

export interface IToken {
  name: string
  address: string
  img: string
  isMetis?: boolean
  decimals: number
}

export const metis: IToken = {
    name: "METIS",
    isMetis: true,
    img: MaticIcon,
    address: "",
    decimals: 18,
};

export const musdc: IToken = {
  name: 'm.USDC',
  address: '0xEA32A96608495e54156Ae48931A7c20f0dcc1a21',
  img: DaiEIcon,
  decimals: 6,
}

const maia: IToken = {
  name: 'MAIA',
  address: '0x72c232D56542Ba082592DEE7C77b1C6CFA758BCD',
  img: MaiaIcon,
  decimals: 9,
}

const weth: IToken = {
    name: "WETH.e",
    address: "0x420000000000000000000000000000000000000A",
    img: WethEIcon,
    decimals: 18,
};

export const wmetis: IToken = {
    name: "WMETIS",
    address: "0x75cb093E4D61d2A2e65D8e0BBb01DE8d89b53481",
    img: WmaticIcon,
    decimals: 18,
};

export const tethys: IToken = {
    name: "TETHYS",
    address: "0x69fdb77064ec5c84FA2F21072973eB28441F43F3",
    img: WmaticIcon,
    decimals: 18,
};

// const aave: IToken = {
//     name: "AAVE.e",
//     address: "",
//     img: AaveIcon,
//     decimals: 18,
// };

// const apeX: IToken = {
//     name: "APE-X",
//     address: "",
//     img: ApeXIcon,
//     decimals: 9,
// };

// const apein: IToken = {
//     name: "APEIN",
//     address: "",
//     img: ApeinIcon,
//     decimals: 18,
// };

// const bifi: IToken = {
//     name: "BIFI",
//     address: "",
//     img: BifiIcon,
//     decimals: 18,
// };

// const blizz: IToken = {
//     name: "BLIZZ",
//     address: "",
//     img: BlizzIcon,
//     decimals: 18,
// };

// const bnb: IToken = {
//     name: "BNB",
//     address: "",
//     img: BnbIcon,
//     decimals: 18,
// };

// const boofi: IToken = {
//     name: "BOOFI",
//     address: "",
//     img: BoofiIcon,
//     decimals: 18,
// };

// const chart: IToken = {
//     name: "CHART",
//     address: "",
//     img: ChartIcon,
//     decimals: 18,
// };

// const dregg: IToken = {
//     name: "DREGG",
//     address: "",
//     img: DreggIcon,
//     decimals: 18,
// };

// const ele: IToken = {
//     name: "ELE",
//     address: "",
//     img: EleIcon,
//     decimals: 18,
// };

// const elk: IToken = {
//     name: "ELK",
//     address: "",
//     img: ElkIcon,
//     decimals: 18,
// };

// const frax: IToken = {
//     name: "FRAX",
//     address: "",
//     img: FraxIcon,
//     decimals: 18,
// };

// const gb: IToken = {
//     name: "GB",
//     address: "",
//     img: GbIcon,
//     decimals: 9,
// };

// const hat: IToken = {
//     name: "HAT",
//     address: "",
//     img: HatIcon,
//     decimals: 18,
// };

// const husky: IToken = {
//     name: "HUSKY",
//     address: "",
//     img: HuskyIcon,
//     decimals: 18,
// };

// const ice: IToken = {
//     name: "ICE",
//     address: "",
//     img: IceIcon,
//     decimals: 18,
// };

// const joe: IToken = {
//     name: "JOE",
//     address: "",
//     img: JoeIcon,
//     decimals: 18,
// };

// const klo: IToken = {
//     name: "KLO",
//     address: "",
//     img: KloIcon,
//     decimals: 18,
// };

// const link: IToken = {
//     name: "LINK.e",
//     address: "",
//     img: LinkEIcon,
//     decimals: 18,
// };

// const mai: IToken = {
//     name: "MAI",
//     address: "",
//     img: MainIcon,
//     decimals: 18,
// };

// export const mim: IToken = {
//     name: "MIM",
//     address: "",
//     img: MimIcon,
//     decimals: 18,
// };
// export const usdc: IToken = {
//     name: "USDC",
//     address: "",
//     img: UsdcIcon,
//     decimals: 18,
// };

// const myak: IToken = {
//     name: "mYAK",
//     address: "",
//     img: MYakIcon,
//     decimals: 12,
// };

// const olive: IToken = {
//     name: "OLIVE",
//     address: "",
//     img: OliveIcon,
//     decimals: 18,
// };

// const pefi: IToken = {
//     name: "PEFI",
//     address: "",
//     img: PefiIcon,
//     decimals: 18,
// };

// const png: IToken = {
//     name: "PNG",
//     address: "",
//     img: PngIcon,
//     decimals: 18,
// };

// const qi: IToken = {
//     name: "QI",
//     address: "",
//     img: QiIcon,
//     decimals: 18,
// };

// const relay: IToken = {
//     name: "RELAY",
//     address: "",
//     img: RelayIcon,
//     decimals: 18,
// };

// const sherpa: IToken = {
//     name: "SHERPA",
//     address: "",
//     img: SherpaIcon,
//     decimals: 18,
// };

// const shibx: IToken = {
//     name: "SHIBX",
//     address: "",
//     img: ShibxIcon,
//     decimals: 18,
// };

// const sing: IToken = {
//     name: "SING",
//     address: "",
//     img: SingIcon,
//     decimals: 18,
// };

// const snob: IToken = {
//     name: "SNOB",
//     address: "",
//     img: SnobIcon,
//     decimals: 18,
// };

// const spell: IToken = {
//     name: "SPELL",
//     address: "",
//     img: SpellIcon,
//     decimals: 18,
// };

// const sushi: IToken = {
//     name: "SUSHI.e",
//     address: "",
//     img: SushiEIcon,
//     decimals: 18,
// };

// const syn: IToken = {
//     name: "SYN",
//     address: "",
//     img: SynIcon,
//     decimals: 18,
// };

// const teddy: IToken = {
//     name: "TEBBY",
//     address: "",
//     img: TeddyIcon,
//     decimals: 18,
// };

// const tsd: IToken = {
//     name: "TSD",
//     address: "",
//     img: TsdIcon,
//     decimals: 18,
// };

// const usdc: IToken = {
//     name: "USDC.e",
//     address: "",
//     img: UsdcEIcon,
//     decimals: 6,
// };

const usdt: IToken = {
  name: 'USDT.e',
  address: '',
  img: UsdtEIcon,
  decimals: 6,
}

// const vso: IToken = {
//     name: "VSO",
//     address: "",
//     img: VsoIcon,
//     decimals: 18,
// };

// const wbtc: IToken = {
//     name: "WBTC.e",
//     address: "",
//     img: WBtcIcon,
//     decimals: 8,
// };

// const wet: IToken = {
//     name: "WET",
//     address: "",
//     img: WetIcon,
//     decimals: 18,
// };

// const xava: IToken = {
//     name: "XAVA",
//     address: "",
//     img: XavaIcon,
//     decimals: 18,
// };

// const yak: IToken = {
//     name: "YAK",
//     address: "",
//     img: YakIcon,
//     decimals: 18,
// };

export default [
  // matic,
  // aave,
  // apeX,
  // apein,
  // bifi,
  // blizz,
  maia,
  // bnb,
  // boofi,
  // chart,
  musdc,
  // dregg,
  // ele,
  // elk,
  // frax,
  // gb,
  // hat,
  // husky,
  // ice,
  // joe,
  // klo,
  // link,
  // mai,
  // mim,
  // usdc,
  // myak,
  // olive,
  // pefi,
  // png,
  // qi,
  // relay,
  // sherpa,
  // shibx,
  // sing,
  // snob,
  // spell,
  // sushi,
  // syn,
  // teddy,
  // tsd,
  // usdc,
  usdt,
  // vso,
  // wmetis,
  // wbtc,
  // wet,
  weth,
  // xava,
  // yak,
]
