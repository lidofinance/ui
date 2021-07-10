import styled, { css } from 'styled-components'
import { InputColors } from './types'

const colors = {
  default: css`
    color: ${({ theme }) => theme.colors.textSecondary};
  `,
  accent: css`
    color: ${({ theme }) => theme.colors.accentContrastSecondary};
  `,
}

export const labelEmptyValueCSS = css<{ $color: InputColors }>`
  ${({ $color }) => colors[$color]}

  transform: scale(1);
  opacity: 0.5;
`

export const labelFilledValueCSS = css<{ $color: InputColors }>`
  ${({ $color }) => colors[$color]}

  transform: translateY(-14px) scale(0.75);
  opacity: 1;
`

export const labelFocusCSS = css`
  color: ${({ theme }) => theme.colors.primary};
  opacity: 1;
`

export const labelErrorCSS = css`
  color: ${({ theme }) => theme.colors.error};
`

export const InputLabelStyle = styled.span`
  position: absolute;
  left: 0;
  top: 50%;
  font-size: 1em;
  line-height: 1.25em;
  margin: -0.625em 0 0 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  color: inherit;
  transform-origin: 0% 100%;
  transition: transform ${({ theme }) => theme.duration.fast} ease;
  transition-property: transform, opacity, color;
  ${labelFilledValueCSS};
`
