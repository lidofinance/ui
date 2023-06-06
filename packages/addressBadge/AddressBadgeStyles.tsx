import { IdenticonBadge } from '@lidofinance/identicon'
import { InferStyledComponentPropsWithoutRef } from '@lidofinance/utils'
import styled from 'styled-components'

export type AddressBadgeStyleProps = InferStyledComponentPropsWithoutRef<typeof AddressBadgeStyle>

export const AddressBadgeStyle = styled(IdenticonBadge)`
  max-width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  & > * {
    flex-shrink: 0;
  }
  & > :first-child {
    flex-shrink: 1;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
