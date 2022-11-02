import BigNumber from 'bignumber.js'
import { bscRpcProvider } from 'utils/providers'
import erc20ABI from 'config/abi/erc20.json'
import fromPairs from 'lodash/fromPairs'
import { getAddress } from 'utils/addressHelpers'
// import sousChefABI from 'config/abi/sousChef.json'
import masterChefABI from 'config/abi/masterchef.json'
import multicall from 'utils/multicall'
import poolsConfig from 'config/constants/pools'
import uniq from 'lodash/uniq'

// Pool 0, Cake / Cake is a different kind of contract (master chef)
// BNB pools use the native BNB token (wrapping ? unwrapping is done at the contract level)
const nonBnbPools = poolsConfig.filter((pool) => pool.stakingToken.symbol !== 'KCS')
const bnbPools = poolsConfig.filter((pool) => pool.stakingToken.symbol === 'KCS')
const nonMasterPools = poolsConfig.filter((pool) => pool.sousId !== 100)   // Changed from 0 to 100

export const fetchPoolsAllowance = async (account) => {
  const calls = nonBnbPools.map((pool) => ({
    address: pool.stakingToken.address,
    name: 'allowance',
    params: [account, getAddress(pool.contractAddress)],
  }))

  const allowances = await multicall(erc20ABI, calls)
  return fromPairs(nonBnbPools.map((pool, index) => [pool.sousId, new BigNumber(allowances[index]).toJSON()]))
}

export const fetchUserBalances = async (account) => {
  // Non BNB pools
  const tokens = uniq(nonBnbPools.map((pool) => pool.stakingToken.address))
  const calls = tokens.map((token) => ({
    address: token,
    name: 'balanceOf',
    params: [account],
  }))
  const [tokenBalancesRaw, bnbBalance] = await Promise.all([
    multicall(erc20ABI, calls),
    bscRpcProvider.getBalance(account),
  ])
  const tokenBalances = fromPairs(tokens.map((token, index) => [token, tokenBalancesRaw[index]]))

  const poolTokenBalances = fromPairs(
    nonBnbPools
      .map((pool) => {
        if (!tokenBalances[pool.stakingToken.address]) return null
        return [pool.sousId, new BigNumber(tokenBalances[pool.stakingToken.address]).toJSON()]
      })
      .filter(Boolean),
  )

  // BNB pools
  const bnbBalanceJson = new BigNumber(bnbBalance.toString()).toJSON()
  const bnbBalances = fromPairs(bnbPools.map((pool) => [pool.sousId, bnbBalanceJson]))

  return { ...poolTokenBalances, ...bnbBalances }
}

export const fetchUserStakeBalances = async (account) => {
  const calls = nonMasterPools.map((pool) => ({
    address: getAddress(pool.contractAddress),
    name: 'userInfo',
    params: [pool.sousId, account],
  }))
  const userInfo = await multicall(masterChefABI, calls)
  return fromPairs(
    nonMasterPools.map((pool, index) => [pool.sousId, new BigNumber(userInfo[index].amount._hex).toJSON()]),
  )
}

export const fetchUserPendingRewards = async (account) => {
  const calls = nonMasterPools.map((pool) => ({
    address: getAddress(pool.contractAddress),
    name: 'pendingOrk',
    params: [pool.sousId, account],
  }))
  const res = await multicall(masterChefABI, calls)
  return fromPairs(nonMasterPools.map((pool, index) => [pool.sousId, new BigNumber(res[index]).toJSON()]))
}
