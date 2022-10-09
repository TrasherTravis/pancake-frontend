import { rinkeby, mainnet, goerli } from 'wagmi/chains'
import { Chain } from 'wagmi'

export const avalandche: Chain = {
  id: 43114,
  name: 'Avalanche C-Chain',
  network: 'avalanche',
  rpcUrls: {
    default: 'https://rpc.ankr.com/avalanche',
  },
  nativeCurrency: { name: 'Avalanche', symbol: 'AVAX', decimals: 18 },
  blockExplorers: {
    default: {
      name: 'snowtrace',
      url: 'https://snowtrace.io/',
    },
  },
}

export const avalandcheFuji: Chain = {
  id: 43113,
  name: 'Avalanche Fuji',
  network: 'avalanche-fuji',
  rpcUrls: {
    default: 'https://rpc.ankr.com/avalanche_fuji',
  },
  nativeCurrency: { name: 'Avalanche', symbol: 'AVAX', decimals: 18 },
  blockExplorers: {
    default: {
      name: 'snowtrace',
      url: 'https://testnet.snowtrace.io/',
    },
  },
  testnet: true,
}

export const fantomOpera: Chain = {
  id: 250,
  name: 'Fantom Opera',
  network: 'fantom',
  nativeCurrency: { name: 'Fantom', symbol: 'FTM', decimals: 18 },
  rpcUrls: {
    default: 'https://rpc.ftm.tools',
  },
  blockExplorers: {
    default: {
      name: 'FTMScan',
      url: 'https://ftmscan.com',
    },
  },
}

export const fantomTestnet: Chain = {
  id: 4002,
  name: 'Fantom Testnet',
  network: 'fantom-testnet',
  nativeCurrency: { name: 'Fantom', symbol: 'FTM', decimals: 18 },
  rpcUrls: {
    default: 'https://rpc.testnet.fantom.network',
  },
  blockExplorers: {
    default: {
      name: 'FTMScan',
      url: 'https://testnet.ftmscan.com',
    },
  },
  testnet: true,
}

const bscExplorer = { name: 'BscScan', url: 'https://bscscan.com' }

export const bsc: Chain = {
  id: 321,
  name: 'BNB Smart Chain',
  network: 'bsc',
  rpcUrls: {
    public: 'https://rpc-testnet.kcc.network',
    default: 'https://rpc-testnet.kcc.network',
  },
  blockExplorers: {
    default: bscExplorer,
    etherscan: bscExplorer,
  },
  nativeCurrency: {
    name: 'KuChain Native Token',
    symbol: 'KCS',
    decimals: 18,
  },
  multicall: {
    address: '0xfaC1B5F42709A7700EE459378287854283589B72',
    blockCreated: 15228606,
  },
}

export const bscTest: Chain = {
  id: 97,
  name: 'BNB Smart Chain Testnet',
  network: 'bsc-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Binance Chain Native Token',
    symbol: 'tBNB',
  },
  rpcUrls: {
    public: 'https://data-seed-prebsc-1-s2.binance.org:8545/',
    default: 'https://data-seed-prebsc-1-s2.binance.org:8545/',
  },
  blockExplorers: {
    default: { name: 'BscScan', url: 'https://testnet.bscscan.com' },
  },
  multicall: {
    address: '0xfaC1B5F42709A7700EE459378287854283589B72',
    blockCreated: 17422483,
  },
  testnet: true,
}

export { rinkeby, mainnet, goerli }
