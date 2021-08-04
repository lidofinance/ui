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

export const IdenticonAddressStyle = styled.div`
  position: relative;
  display: inline-block;
  font-weight: 500;
  margin: 0 6px;

  &:empty {
    display: none;
  }

  & > .trimmed {
    user-select: none;
    pointer-events: none;
  }

  & > .full {
    position: absolute;
    overflow: hidden;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    color: transparent;
  }
`

export const IdenticonStyle = styled.div`
  border-radius: 1000px;
  overflow: hidden;
  line-height: 0;
  display: inline-block;
`
