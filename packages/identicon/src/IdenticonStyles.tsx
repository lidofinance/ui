import styled, { css } from 'styled-components'
import { IdenticonBadgeColors } from './types'

const colors = {
  background: css`
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textSecondary};
  `,
  accent: css`
    background: ${({ theme }) => theme.colors.accentDarken};
    color: ${({ theme }) => theme.colors.accentContrast};
  `,
}

export const IdenticonBadgeStyle = styled.div<{ $color: IdenticonBadgeColors }>`
  border-radius: 1000px;
  padding: 4px;
  display: inline-flex;
  align-items: center;

  ${({ $color }) => colors[$color]}
`

export const IdenticonStyle = styled.div`
  border-radius: 1000px;
  overflow: hidden;
  line-height: 0;
  display: inline-block;
`
