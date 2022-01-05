import { Networks } from '../../constants/blockchain'
import { LPBond } from './lp-bond'
import { StableBond, CustomBond } from './stable-bond'

import DaiIcon from '../../assets/tokens/mUSDC.png'
import MaiaMUSDCIcon from '../../assets/tokens/MAIA-USDC.png'
import USDTIcon from '../../assets/tokens/USDT.e.png'

import { getAddresses } from 'src/constants'

import {
  StableBondContract,
  LpBondContract,
  StableReserveContract,
  LpReserveContract,
} from '../../abi'

export const mim = new StableBond({
  name: 'musdc',
  displayName: 'm.USDC',
  bondToken: 'm.USDC',
  bondIconSvg: DaiIcon,
  bondContractABI: StableBondContract,
  reserveContractAbi: StableReserveContract,
  networkAddrs: {
    [Networks.METIS]: {
      bondAddress: '0x62c90f32E05776d811FD7Dc1c2206413893078C5',
      reserveAddress: '0xEA32A96608495e54156Ae48931A7c20f0dcc1a21',
    },
  },
})

export const usdt = new StableBond({
  name: 'musdt',
  displayName: 'm.USDT',
  bondToken: 'm.USDT',
  bondIconSvg: USDTIcon,
  bondContractABI: StableBondContract,
  reserveContractAbi: StableReserveContract,
  networkAddrs: {
    [Networks.METIS]: {
      bondAddress: '0x15Ac5940d9805Fa7d7E57E2E931F4f2e32e3fe70',
      reserveAddress: '0xbB06DCA3AE6887fAbF931640f67cab3e3a16F4dC',
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
  networkAddrs: {
    [Networks.METIS]: {
      bondAddress: '0x63E132328138C0Ae0287F679876C59b29D6c4aFC',
      reserveAddress: '0x82758824b93F2648bCC9387878CF443C9c0cB768',
    },
  },
  lpUrl:
    'https://tethys.finance/pool/add?inputCurrency=0xEA32A96608495e54156Ae48931A7c20f0dcc1a21&outputCurrency=0x72c232D56542Ba082592DEE7C77b1C6CFA758BCD',
})

export default [mim, mimMaia, usdt]
