import { ChainId } from '@pancakeswap/sdk'
import FarmsBscPriceHelper from './321'
import FarmsBscTestnetPriceHelper from './97'
import FarmsEthereumPriceHelper from './1'
import FarmsGoerliPriceHelper from './5'

export const getFarmsPriceHelperLpFiles = (chainId: ChainId) => {
  switch (chainId) {
    case ChainId.BSC:
      return FarmsBscPriceHelper
    case ChainId.BSC_TESTNET:
      return FarmsBscTestnetPriceHelper
    case ChainId.ETHEREUM:
      return FarmsEthereumPriceHelper
    case ChainId.GOERLI:
      return FarmsGoerliPriceHelper
    default:
      return []
  }
}
