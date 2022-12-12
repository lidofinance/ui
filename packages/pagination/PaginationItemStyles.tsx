import styled, { css } from 'styled-components'
import { Theme } from '@lidofinance/theme'
import { PaginationItemVariant } from './types'

type InjectedProps = {
  $variant: PaginationItemVariant
  theme: Theme
}

const variantColors = {
  [PaginationItemVariant.active]: css`
    border-color: var(--lido-color-primary);
    color: var(--lido-color-primary);

    :not(:disabled):hover {
      border-color: var(--lido-color-primaryVisited);
      color: var(--lido-color-primaryVisited);
    }
  `,
  [PaginationItemVariant.default]: css`
    border-color: var(--lido-color-border);
    color: var(--lido-color-text);

    :not(:disabled):hover {
      border-color: var(--lido-color-primary);
      color: var(--lido-color-primary);
    }
  `,
}

export const PaginationItemStyle = styled.button<InjectedProps>`
  width: 32px;
  height: 32px;
  background-color: var(--lido-color-foreground);
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
    border-color: var(--lido-color-border);
    color: var(--lido-color-textSecondary);
    cursor: unset;
  }
`
