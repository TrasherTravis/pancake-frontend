import ActionPanel from './ActionPanel/ActionPanel'
import AprCell from './Cells/AprCell'
import AutoAprCell from './Cells/AutoAprCell'
import AutoEarningsCell from './Cells/AutoEarningsCell'
import EarningsCell from './Cells/EarningsCell'
import EndsInCell from './Cells/EndsInCell'
import ExpandRow from './ExpandRow'
import NameCell from './Cells/NameCell'
import StakedCell from './Cells/StakedCell'
import TotalStakedCell from './Cells/TotalStakedCell'
import { VaultKey } from 'state/types'
import { memo } from 'react'
import { useMatchBreakpoints } from '@pancakeswap/uikit'
import { usePool } from 'state/pools/hooks' //, useDeserializedPoolByVaultKey

export const VaultPoolRow: React.FC<
  React.PropsWithChildren<{sousId: number; vaultKey: VaultKey; account: string; initialActivity?: boolean }>
> = memo(({ vaultKey, account, initialActivity }) => {
  const { isXs, isSm, isMd, isLg, isXl, isXxl } = useMatchBreakpoints()
  const isLargerScreen = isLg || isXl || isXxl
  const isXLargerScreen = isXl || isXxl
  // const pool = useDeserializedPoolByVaultKey(vaultKey)

  return (
    <h1>pool</h1>
    // <ExpandRow
    //   initialActivity={initialActivity}
    //   panel={
    //     <ActionPanel account={account} pool={{pool}} expanded breakpoints={{ isXs, isSm, isMd, isLg, isXl, isXxl }} />
    //   }
    // >
    //   {/* <NameCell pool={pool} />
    //   {isXLargerScreen && <AutoEarningsCell pool={pool} account={account} />}
    //   {isXLargerScreen ? <StakedCell pool={pool} account={account} /> : null}
    //   <AutoAprCell pool={pool} />
    //   {isLargerScreen && <TotalStakedCell pool={pool} />} */}
    // </ExpandRow>
  )
})

const PoolRow: React.FC<React.PropsWithChildren<{ sousId: number; account: string; initialActivity?: boolean }>> = ({
  sousId,
  account,
  initialActivity,
}) => {
  const { isXs, isSm, isMd, isLg, isXl, isXxl, isDesktop } = useMatchBreakpoints()
  const isLargerScreen = isLg || isXl || isXxl
  const { pool } = usePool(sousId)

  return (
    <ExpandRow
      initialActivity={initialActivity}
      panel={
        <ActionPanel account={account} pool={pool} expanded breakpoints={{ isXs, isSm, isMd, isLg, isXl, isXxl }} />
      }
    >
      <NameCell pool={pool} />
      <EarningsCell pool={pool} account={account} />
      {isLargerScreen && <TotalStakedCell pool={pool} />}
      <AprCell pool={pool} />
      {isDesktop && <EndsInCell pool={pool} />}
    </ExpandRow>
  )
}

export default memo(PoolRow)
