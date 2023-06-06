import styled, { css } from 'styled-components'
import { IdenticonBadgeColors } from './types'
import { InferStyledComponentPropsWithoutRef } from '@lidofinance/utils'

const colors = {
  background: css`
    background: var(--lido-color-background);
    color: var(--lido-color-textSecondary);
  `,
  accent: css`
    background: var(--lido-color-accentDarken);
    color: var(--lido-color-accentContrast);
  `,
}

export type IdenticonBadgeStyleProps = InferStyledComponentPropsWithoutRef<
  typeof IdenticonBadgeStyle
>

export const IdenticonBadgeStyle = styled.div<{ $color: IdenticonBadgeColors }>`
  border-radius: 1000px;
  padding: 4px;
  margin: 0 6px;
  display: inline-flex;
  align-items: center;

  ${({ $color }) => colors[$color]}
`

export type IdenticonStyleProps = InferStyledComponentPropsWithoutRef<
  typeof IdenticonStyle
>

export const IdenticonStyle = styled.div`
  border-radius: 1000px;
  overflow: hidden;
  line-height: 0;
  display: inline-block;
`

export const AddressWrapperStyle = styled.div`
  padding: 0 6px;
`
