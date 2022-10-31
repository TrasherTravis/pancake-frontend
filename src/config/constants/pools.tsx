import { BigNumber } from '@ethersproject/bignumber'
// import Trans from 'components/Trans'
// import { VaultKey } from 'state/types'
import { bscTokens } from '@pancakeswap/tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

export const MAX_LOCK_DURATION = 31536000
export const UNLOCK_FREE_DURATION = 604800
export const ONE_WEEK_DEFAULT = 604800
export const BOOST_WEIGHT = BigNumber.from('20000000000000')
export const DURATION_FACTOR = BigNumber.from('31536000')

export const vaultPoolConfig = {
//   [VaultKey.CakeVaultV1]: {
//     name: <Trans>Auto CAKE</Trans>,
//     description: <Trans>Automatic restaking</Trans>,
//     autoCompoundFrequency: 5000,
//     gasLimit: 380000,
//     tokenImage: {
//       primarySrc: `/images/tokens/${bscTokens.cake.address}.svg`,
//       secondarySrc: '/images/tokens/autorenew.svg',
//     },
//   },
//   [VaultKey.CakeVault]: {
//     name: <Trans>Stake ORK</Trans>,
//     description: <Trans>Stake, Earn – And more!</Trans>,
//     autoCompoundFrequency: 5000,
//     gasLimit: 500000,
//     tokenImage: {
//       primarySrc: `/images/tokens/${bscTokens.cake.address}.png`,
//       secondarySrc: '/images/tokens/autorenew.svg',
//     },
//   },
//   [VaultKey.CakeFlexibleSideVault]: {
//     name: <Trans>Flexible CAKE</Trans>,
//     description: <Trans>Flexible staking on the side.</Trans>,
//     autoCompoundFrequency: 5000,
//     gasLimit: 500000,
//     tokenImage: {
//       primarySrc: `/images/tokens/${bscTokens.cake.address}.svg`,
//       secondarySrc: '/images/tokens/autorenew.svg',
//     },
//   },
//   [VaultKey.IfoPool]: {
//     name: 'IFO CAKE',
//     description: <Trans>Stake CAKE to participate in IFOs</Trans>,
//     autoCompoundFrequency: 1,
//     gasLimit: 500000,
//     tokenImage: {
//       primarySrc: `/imahttps://github.com/TrasherTravis/pancake-frontend/blob/develop/src/config/constants/contracts.tsges/tokens/${bscTokens.cake.address}.svg`,
//       secondarySrc: `/images/tokens/ifo-pool-icon.svg`,
//     },
//   },
} as const

export const livePools: SerializedPoolConfig[] = [
  {
    sousId: 0,
    stakingToken: bscTokens.ork,
    earningToken: bscTokens.ork,
    contractAddress: {
      97: '0xB4A466911556e39210a6bB2FaECBB59E4eB7E43d',
      321: '0xeB62cD87F456048183C4Ed6302df1d7Cc88acc04',
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '30',
    isFinished: false,
  },

  // {
  //   sousId: 291,
  //   stakingToken: bscTokens.cake,
  //   earningToken: bscTokens.pstake,
  //   contractAddress: {
  //     56: '0x56D6955Ba6404647191DD7A5D65A5c9Fe43905e1',
  //     97: '',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   tokenPerBlock: '1.1574',
  //   version: 3,
  // }, 

].map((p) => ({
  ...p,
  stakingToken: p.stakingToken.serialize,
  earningToken: p.earningToken.serialize,
}))

// known finished pools
const finishedPools = [
  // {
  //   sousId: 287,
  //   stakingToken: bscTokens.cake,
  //   earningToken: bscTokens.ole,
  //   contractAddress: {
  //     56: '0xda6F750be1331963E5772BEe757062f6bddcEA4C',
  //     97: '',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   tokenPerBlock: '2.2569',
  //   version: 3,
  // },


].map((p) => ({
  ...p,
  isFinished: true,
  stakingToken: p.stakingToken.serialize,
  earningToken: p.earningToken.serialize,
}))

export default [...livePools, ...finishedPools]
