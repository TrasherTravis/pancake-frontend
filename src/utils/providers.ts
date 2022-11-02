import { StaticJsonRpcProvider } from '@ethersproject/providers'

export const BSC_PROD_NODE = process.env.NEXT_PUBLIC_NODE_PRODUCTION || 'https://kcc.getblock.io/mainnet/?api_key=7577d4e7-8a0c-455f-9fcf-e2ea365590b1'

export const bscRpcProvider = new StaticJsonRpcProvider(BSC_PROD_NODE)

export default null
