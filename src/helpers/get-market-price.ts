import { ethers } from 'ethers'
import { LpReserveContract } from '../abi'
import { mimMaia } from '../helpers/bond'
import { Networks } from '../constants/blockchain'

export async function getMarketPrice(
  networkID: Networks,
  provider: ethers.Signer | ethers.providers.Provider,
): Promise<number> {
  const mimMaiaAddress = mimMaia.getAddressForReserve(networkID)
  const pairContract = new ethers.Contract(
    mimMaiaAddress,
    LpReserveContract,
    provider,
  )
  const reserves = await pairContract.getReserves()
  const marketPrice = (reserves[1] / reserves[0]) * 1e3 //TODO
  return marketPrice
}
