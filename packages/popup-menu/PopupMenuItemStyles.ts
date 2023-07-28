import styled, { css } from 'styled-components'
import { PopupMenuVariants } from './types'

export const PopupMenuItemStyle = styled.button<{ $active: boolean }>`
  text-align: left;
  display: flex;
  width: 100%;
  align-items: stretch;
  box-sizing: border-box;
  font-family: inherit;
  font-weight: inherit;
  font-size: inherit;
  line-height: inherit;
  background: transparent;
  border-radius: 0;
  color: var(--lido-color-text);
  border: none;
  box-shadow: none;
  outline: none;
  cursor: pointer;
  padding: 0 15px;
  margin: 0;
  position: relative;

  &:disabled {
    cursor: default;
    color: var(--lido-color-text-secondary);
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    pointer-events: none;
    border-radius: inherit;
    opacity: ${({ $active }) => ($active ? 0.04 : 0)};
    background: var(--lido-color-popupMenuItemBgActiveHover);
    transition: opacity ${({ theme }) => theme.duration.fast} ease;
  }

  &:focus:not(:disabled):before {
    opacity: 0.04;
  }
`

const variants = {
  small: css`
    padding: 12px 0;
    font-size: ${({ theme }) => theme.fontSizesMap.xxs}px;
    line-height: 1.35em;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    font-weight: 800;
  `,
  default: css`
    padding: 18px 0;
    font-size: ${({ theme }) => theme.fontSizesMap.xs}px;
    line-height: 1.4em;
    font-weight: 400;
  `,
}

export const PopupMenuItemContentStyle = styled.span<{
  $variant: PopupMenuVariants
}>`
  position: relative;
  padding: 18px 0;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({ $variant }) => variants[$variant]}
`

const decoratorCSS = css`
  flex-grow: 0;
  flex-shrink: 0;
  cursor: default;
  display: flex;
  align-items: center;
`

export const PopupMenuItemLeftDecoratorStyle = styled.span`
  ${decoratorCSS};
  padding-right: 16px;
`

export const PopupMenuItemRightDecoratorStyle = styled.span`
  ${decoratorCSS};
  padding-left: 16px;
`
