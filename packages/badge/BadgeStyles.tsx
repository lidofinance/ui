import styled, { css } from '../utils/styled-components-wrapper.js'
import { BadgeVariants } from './types.js'

type InjectedPropsTr = {
  $variant: BadgeVariants
  $interactive: boolean
  $hasIcon?: boolean
}

const BadgeVariantsStyle = {
  positive: css`
    background: var(--lido-color-success);
    color: var(--lido-color-foreground);
  `,
  negative: css`
    background: var(--lido-color-error);
    color: var(--lido-color-foreground);
  `,
  gray: css`
    background: var(--lido-color-backgroundBadge);
    color: var(--lido-color-textSecondary);
  `,
  warning: css`
    background: var(--lido-color-warning);
    color: var(--lido-color-foreground);
  `,
  gradient: css`
    background: linear-gradient(
      88deg,
      #6a9aff 0.68%,
      #c9acff 40.63%,
      #ffcebe 106.85%
    );
    color: var(--lido-color-textDark);
  `,
}

export const BadgeWrapperStyle = styled.div<InjectedPropsTr>`
  font-size: 12px;
  line-height: 18px;
  font-weight: 700;
  display: inline-flex;
  gap: 2px;
  max-width: 100%;
  box-sizing: border-box;
  align-items: center;
  white-space: nowrap;
  outline: none;
  border-radius: ${({ theme }) => theme.borderRadiusesMap.sm}px;
  padding: 0.5em 1em 0.5em ${({ $hasIcon }) => ($hasIcon ? '8px' : '1em')};
  cursor: ${({ $interactive }) => ($interactive ? 'pointer' : 'auto')};
  ${({ $variant }) => BadgeVariantsStyle[$variant]}
`
