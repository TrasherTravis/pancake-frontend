import { BOOSTED_FARM_GAS_LIMIT, DEFAULT_TOKEN_DECIMAL } from 'config'

import BigNumber from 'bignumber.js'
import { getFullDecimalMultiplier } from 'utils/getFullDecimalMultiplier'
import { useCallback } from 'react'
import { useGasPrice } from 'state/user/hooks'
import { useSousChef } from 'hooks/useContract'

const options = {
  gasLimit: BOOSTED_FARM_GAS_LIMIT,
}

const sousStake = async (sousId, sousChefContract, amount, decimals = 18, gasPrice: string) => {
  return sousChefContract.deposit(sousId, new BigNumber(amount).times(getFullDecimalMultiplier(decimals)).toString(), {
    ...options,
    gasPrice,
  })
}

const sousStakeBnb = async (sousId, sousChefContract, amount, gasPrice: string) => {
  return sousChefContract.deposit(sousId, new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toString(), {
    ...options,
    gasPrice,
  })
}

const useStakePool = (sousId: number, isUsingBnb = false) => {
  const sousChefContract = useSousChef(sousId)
  const gasPrice = useGasPrice()
  console.log('sousId', sousId)
  const handleStake = useCallback(
    async (amount: string, decimals: number) => {
      if (isUsingBnb) {
        console.log(1);
        return sousStakeBnb(sousId, sousChefContract, amount, gasPrice)
      }
      console.log(2);
      return sousStake(sousId, sousChefContract, amount, decimals, gasPrice)
    },
    [isUsingBnb, sousChefContract, gasPrice],
  )

  return { onStake: handleStake }
}

export default useStakePool
