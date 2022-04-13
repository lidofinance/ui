import React from 'react'
import styled, { css } from 'styled-components'
import { Theme } from '@lidofinance/theme'
import { LidoComponentProps } from '@lidofinance/utils'

const variantColors = {
  active: css`
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};

    :not(:disabled):hover {
      border-color: ${({ theme }) => theme.colors.primaryHover};
      color: ${({ theme }) => theme.colors.primaryHover};
    }
  `,
  default: css`
    border-color: ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.text};

    :not(:disabled):hover {
      border-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.primary};
    }
  `,
}

enum PageItemVariant {
  default,
  active,
}

export type PageItemVariants = keyof typeof PageItemVariant

type InjectedProps = {
  $variant: PageItemVariants
  theme: Theme
}

export type PaginationItemProps = LidoComponentProps<
  'button',
  {
    variant?: PageItemVariants
    icon: React.ReactNode
  }
>

const PaginationItemStyle = styled.button<InjectedProps>`
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
    opacity: 0.5;
  }
`

const PaginationItem: React.FC<PaginationItemProps> = (props) => {
  const { icon, variant = 'default' } = props
  return <PaginationItemStyle $variant={variant}>{icon}</PaginationItemStyle>
}

export default PaginationItem
