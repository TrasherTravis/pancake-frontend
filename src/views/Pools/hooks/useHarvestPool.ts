import { BIG_ZERO } from 'utils/bigNumber'
import { BOOSTED_FARM_GAS_LIMIT } from 'config'
import { useCallback } from 'react'
import { useGasPrice } from 'state/user/hooks'
import { useSousChef } from 'hooks/useContract'

const options = {
  gasLimit: BOOSTED_FARM_GAS_LIMIT,
}

const harvestPool = async (sousId, sousChefContract, gasPrice) => {
  return sousChefContract.deposit(sousId, '0', { ...options, gasPrice })
}

const harvestPoolBnb = async (sousId, sousChefContract, gasPrice) => {
  return sousChefContract.deposit(sousId, '0', { ...options, value: BIG_ZERO, gasPrice })
}

const useHarvestPool = (sousId, isUsingBnb = false) => {
  const sousChefContract = useSousChef(sousId)
  const gasPrice = useGasPrice()
 
  const handleHarvest = useCallback(async () => {
    if (isUsingBnb) {
      return harvestPoolBnb(sousId, sousChefContract, gasPrice)
    }

    return harvestPool(sousId,sousChefContract, gasPrice)
  }, [isUsingBnb, sousChefContract, gasPrice])

  return { onReward: handleHarvest }
}

export default useHarvestPool
