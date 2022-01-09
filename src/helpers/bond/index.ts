import { Networks } from '../../constants/blockchain'
import { LPBond } from './lp-bond'
import { StableBond, CustomBond } from './stable-bond'

import DaiIcon from '../../assets/tokens/mUSDC.png'
import MaiaMUSDCIcon from '../../assets/tokens/MAIA-USDC.png'
import USDTIcon from '../../assets/tokens/USDT.e.png'
import ETHicon from '../../assets/tokens/WETH.e.png'
import WMETISicon from '../../assets/tokens/WMETIS.png'

import { getAddresses } from 'src/constants'

import {
  StableBondContract,
  LpBondContract,
  StableReserveContract,
  LpReserveContract,
} from '../../abi'


export const usdc = new StableBond({
  name: 'musdc',
  displayName: 'm.USDC',
  bondToken: 'USDC',
  bondIconSvg: DaiIcon,
  bondContractABI: StableBondContract,
  reserveContractAbi: StableReserveContract,
  isClosed: false,
  decimals: 6,
  networkAddrs: {
    [Networks.METIS]: {
      bondAddress: '0xDdC272987d8DB3584e48ef74761AfAF5EcaA5297',
      reserveAddress: '0xEA32A96608495e54156Ae48931A7c20f0dcc1a21',
    },

  },

})

export const usdt = new StableBond({
  name: 'musdt',
  displayName: 'm.USDT',
  bondToken: 'USDT',
  bondIconSvg: USDTIcon,
  bondContractABI: StableBondContract,
  reserveContractAbi: StableReserveContract,
  isClosed: false,
  decimals: 6,
  networkAddrs: {
    [Networks.METIS]: {
      bondAddress: '0xD1395b72350ec98887DC3d9b388FCc92fb778183',
      reserveAddress: '0xbB06DCA3AE6887fAbF931640f67cab3e3a16F4dC',
    },
  },
})



export const weth = new StableBond({
  name: 'weth',
  displayName: 'WETH',
  bondToken: 'WETH',
  bondIconSvg: ETHicon,
  bondContractABI: StableBondContract,
  reserveContractAbi: StableReserveContract,
  isClosed: false,
  decimals: 18,
  networkAddrs: {
    [Networks.METIS]: {
      bondAddress: '0xf4d84C68C8a02530deDdF5B67134B4d6F7c41A76',
      reserveAddress: '0x420000000000000000000000000000000000000A',
    },
  },
})

export const metis = new StableBond({
  name: 'wmetis',
  displayName: 'WMETIS',
  bondToken: 'METIS',
  bondIconSvg: WMETISicon,
  bondContractABI: StableBondContract,
  reserveContractAbi: StableReserveContract,
  isClosed: false,
  decimals: 18,
  networkAddrs: {
    [Networks.METIS]: {
      bondAddress: '0xd39F300731Ad59EE755300D00e77aE2711bCe5Ca',
      reserveAddress: '0x75cb093E4D61d2A2e65D8e0BBb01DE8d89b53481',
    },
  },
})

export const mimMaia = new LPBond({
  name: 'musdc_maia_lp',
  displayName: 'MAIA-mUSDC LP',
  bondToken: 'MAIA-mUSDC LP',
  bondIconSvg: MaiaMUSDCIcon,
  bondContractABI: LpBondContract,
  reserveContractAbi: LpReserveContract,
  isClosed: false,
  networkAddrs: {
    [Networks.METIS]: {
      bondAddress: '0x5c89dcfb4b319b3878E2CfBfFEA75e681C24C2B6',
      reserveAddress: '0x82758824b93F2648bCC9387878CF443C9c0cB768',
    },
  },
  lpUrl:
    'https://tethys.finance/pool/add?inputCurrency=0xEA32A96608495e54156Ae48931A7c20f0dcc1a21&outputCurrency=0x72c232D56542Ba082592DEE7C77b1C6CFA758BCD',
})

export const usdcSold = new StableBond({
  name: 'musdcSold',
  displayName: 'Second m.USDC',
  bondToken: 'USDC',
  bondIconSvg: DaiIcon,
  bondContractABI: StableBondContract,
  reserveContractAbi: StableReserveContract,
  isClosed: true,
  decimals: 6,
  networkAddrs: {
    [Networks.METIS]: {
      bondAddress: '0x6e23a7981A7918b7B825a073Dd20a4cfc9C1F578',
      reserveAddress: '0xEA32A96608495e54156Ae48931A7c20f0dcc1a21',
    },

  },

})

export const usdtSold = new StableBond({
  name: 'musdtSold',
  displayName: 'Second m.USDT',
  bondToken: 'USDT',
  bondIconSvg: USDTIcon,
  bondContractABI: StableBondContract,
  reserveContractAbi: StableReserveContract,
  isClosed: true,
  decimals: 6,
  networkAddrs: {
    [Networks.METIS]: {
      bondAddress: '0x4C1bBb3C8a495c40108461fb97eC022405aCd315',
      reserveAddress: '0xbB06DCA3AE6887fAbF931640f67cab3e3a16F4dC',
    },
  },
})

export const mimMaiaSold = new LPBond({
  name: 'musdc_maia_lpSold',
  displayName: 'Second MAIA-mUSDC LP',
  bondToken: 'MAIA-mUSDC LP',
  bondIconSvg: MaiaMUSDCIcon,
  bondContractABI: LpBondContract,
  reserveContractAbi: LpReserveContract,
  isClosed: true,
  networkAddrs: {
    [Networks.METIS]: {
      bondAddress: '0x5c6b075e347695F23CFb5831E5f9b563AfdBBf75',
      reserveAddress: '0x82758824b93F2648bCC9387878CF443C9c0cB768',
    },
  },
  lpUrl:
    'https://tethys.finance/pool/add?inputCurrency=0xEA32A96608495e54156Ae48931A7c20f0dcc1a21&outputCurrency=0x72c232D56542Ba082592DEE7C77b1C6CFA758BCD',
})

export const usdcSoldOut = new StableBond({
  name: 'firstmusdcSoldOut',
  displayName: 'First m.USDC',
  bondToken: 'USDC',
  bondIconSvg: DaiIcon,
  bondContractABI: StableBondContract,
  reserveContractAbi: StableReserveContract,
  isClosed: true,
  decimals: 6,
  networkAddrs: {
    [Networks.METIS]: {
      bondAddress: '0x62c90f32E05776d811FD7Dc1c2206413893078C5',
      reserveAddress: '0xEA32A96608495e54156Ae48931A7c20f0dcc1a21',
    },

  },
})

export const usdtSoldOut = new StableBond({
  name: 'firstmusdtSoldOut',
  displayName: 'First m.USDT',
  bondToken: 'USDT',
  bondIconSvg: USDTIcon,
  bondContractABI: StableBondContract,
  reserveContractAbi: StableReserveContract,
  isClosed: true,
  decimals: 6,
  networkAddrs: {
    [Networks.METIS]: {
      bondAddress: '0x15Ac5940d9805Fa7d7E57E2E931F4f2e32e3fe70',
      reserveAddress: '0xbB06DCA3AE6887fAbF931640f67cab3e3a16F4dC',
    },
  },
})

export const mimMaiaSoldOut = new LPBond({
  name: 'firstmusdc_maia_lpSoldOut',
  displayName: 'First MAIA-mUSDC LP',
  bondToken: 'MAIA-mUSDC LP',
  bondIconSvg: MaiaMUSDCIcon,
  bondContractABI: LpBondContract,
  reserveContractAbi: LpReserveContract,
  networkAddrs: {
    [Networks.METIS]: {
      bondAddress: '0x63E132328138C0Ae0287F679876C59b29D6c4aFC',
      reserveAddress: '0x82758824b93F2648bCC9387878CF443C9c0cB768',
    },
  },
  lpUrl:
    'https://tethys.finance/pool/add?inputCurrency=0xEA32A96608495e54156Ae48931A7c20f0dcc1a21&outputCurrency=0x72c232D56542Ba082592DEE7C77b1C6CFA758BCD',
  isClosed: true,
})

export const mUsdcBondingRitual = new StableBond({
  name: 'firstmUsdcBondingRitual',
  displayName: 'm.USDC Bonding Ritual',
  bondToken: 'mUSDC LP',
  bondIconSvg: DaiIcon,
  bondContractABI: LpBondContract,
  reserveContractAbi: LpReserveContract,
  decimals: 6,
  networkAddrs: {
    [Networks.METIS]: {
      bondAddress: '0xCEbd1cda107cB6f60DAf6578433137925928Ac74',
      reserveAddress: '0xEA32A96608495e54156Ae48931A7c20f0dcc1a21',
    },
  },
  isClosed: true,
})


export default [usdc, mimMaia, usdt, usdcSold, mimMaiaSold, usdtSold, usdcSoldOut, usdtSoldOut, mimMaiaSoldOut, mUsdcBondingRitual]
