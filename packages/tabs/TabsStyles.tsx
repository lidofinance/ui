import styled, { css } from '../utils/styled-components-wrapper.js'

export const TabsListStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  position: relative;
  border-bottom: 1px solid var(--lido-color-borderSubtle);
`

export const TabLabelStyle = styled.span<{ $active: boolean }>`
  font-size: ${({ theme }) => theme.fontSizesMap.sm}px;
  line-height: 1.5em;
  font-weight: 700;
  color: var(--lido-color-text);
  opacity: ${({ $active }) => ($active ? 1 : 0.5)};
`

export const TabButtonStyle = styled.button<{ $active: boolean }>`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: 0;
  background: transparent;
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  color: var(--lido-color-text);
  padding: ${({ theme }) => theme.spaceMap.sm}px 0;
  font-size: inherit;
  white-space: nowrap;

  ${({ $active }) =>
    $active &&
    css`
      anchor-name: --tabs-active;
    `}

  &:hover ${TabLabelStyle},
  &:focus-visible ${TabLabelStyle} {
    opacity: 1;
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
`

export const TabsIndicatorStyle = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: var(--tabs-indicator-width, 0px);
  height: 2px;
  background-color: var(--lido-color-text);
  transition:
    transform ${({ theme }) => theme.duration.norm} ease,
    width ${({ theme }) => theme.duration.norm} ease;
  pointer-events: none;
  z-index: 1;
  will-change: transform, width;
  transform: translateX(var(--tabs-indicator-left, 0px));

  @supports (position-anchor: --tabs-active) {
    position-anchor: --tabs-active;
    transform: translateX(anchor(left));
    width: anchor-size(width);
  }
`
