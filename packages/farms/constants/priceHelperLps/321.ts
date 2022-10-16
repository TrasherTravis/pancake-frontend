import { SerializedFarmConfig } from '@pancakeswap/farms'
import { bscTokens } from '@pancakeswap/tokens'
import { ORK_USDT_LP_MAINNET } from '../common'

const priceHelperLps: SerializedFarmConfig[] = [
  {
    pid: null,
    lpSymbol: 'ORK-USDT LP',
    lpAddress: ORK_USDT_LP_MAINNET,
    token: bscTokens.cake,
    quoteToken: bscTokens.usdt,
  },
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default priceHelperLps
