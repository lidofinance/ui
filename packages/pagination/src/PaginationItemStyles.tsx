import styled, { css } from 'styled-components'
import { Theme } from '@lidofinance/theme'
import { PaginationItemVariant } from './types'

type InjectedProps = {
  $variant: PaginationItemVariant
  theme: Theme
}

const variantColors = {
  [PaginationItemVariant.active]: css`
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};

    :not(:disabled):hover {
      border-color: ${({ theme }) => theme.colors.primaryVisited};
      color: ${({ theme }) => theme.colors.primaryVisited};
    }
  `,
  [PaginationItemVariant.default]: css`
    border-color: ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.text};

    :not(:disabled):hover {
      border-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.primary};
    }
  `,
}

export const PaginationItemStyle = styled.button<InjectedProps>`
  width: 32px;
  height: 32px;
  background-color: ${({ theme }) => theme.colors.foreground};
  border: 1px solid;
  display: grid;
  place-items: center;
  box-sizing: border-box;
  border-radius: 6px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;
  padding: 0;

  ${({ $variant }) => variantColors[$variant]}

  :disabled {
    border-color: ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.textSecondary};
    cursor: unset;
  }
`
