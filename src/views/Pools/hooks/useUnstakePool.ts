import { parseUnits } from '@ethersproject/units'
import { useCallback } from 'react'
import { useGasPrice } from 'state/user/hooks'
import { useSousChef } from 'hooks/useContract'

const sousUnstake = (sousId, sousChefContract: any, amount: string, decimals: number, gasPrice: string) => {
  const units = parseUnits(amount, decimals)

  return sousChefContract.withdraw(sousId, units.toString(), {
    gasPrice,
  })
}

const sousEmergencyUnstake = (sousId, sousChefContract: any, gasPrice: string) => {
  return sousChefContract.emergencyWithdraw(sousId, { gasPrice })
}

const useUnstakePool = (sousId: number, enableEmergencyWithdraw = false) => {
  const sousChefContract = useSousChef(sousId)
  const gasPrice = useGasPrice()

  const handleUnstake = useCallback(
    async (amount: string, decimals: number) => {
      if (enableEmergencyWithdraw) {
        return sousEmergencyUnstake(sousId, sousChefContract, gasPrice)
      }
    
      return sousUnstake(sousId, sousChefContract, amount, decimals, gasPrice)
    },
    [enableEmergencyWithdraw, sousChefContract, gasPrice],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstakePool
