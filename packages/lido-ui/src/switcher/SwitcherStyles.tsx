import styled from '../utils/styled-components-wrapper.js'

type InjectedProps = {
  $active: boolean
}

const CONTAINER_PADDING = 2
const ITEM_PADDING_Y = 2
const ITEM_PADDING_X = 12
const PILL_RADIUS = 110

export const SwitcherListStyle = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0;
  padding: ${CONTAINER_PADDING}px;
  background: var(--lido-color-backgroundDarken);
  border-radius: ${PILL_RADIUS}px;
  box-sizing: border-box;
  position: relative;

  --switcher-indicator-left: 0px;
  --switcher-indicator-width: 0px;
`

export const SwitcherIndicatorStyle = styled.span`
  position: absolute;
  top: ${CONTAINER_PADDING}px;
  bottom: ${CONTAINER_PADDING}px;
  left: 0;
  width: var(--switcher-indicator-width, 0);
  background: var(--lido-color-foreground);
  border-radius: ${PILL_RADIUS}px;
  transition:
    transform ${({ theme }) => theme.duration.norm} ease,
    width ${({ theme }) => theme.duration.norm} ease;
  pointer-events: none;
  z-index: 0;
  will-change: transform, width;
  transform: translateX(var(--switcher-indicator-left, 0));
`

export const SwitcherLabelStyle = styled.span<InjectedProps>`
  font-size: ${({ theme }) => theme.fontSizesMap.xxs}px;
  line-height: 20px;
  font-weight: 700;
  color: var(--lido-color-text);
  opacity: ${({ $active }) => ($active ? 1 : 0.5)};
  transition: opacity ${({ theme }) => theme.duration.fast} ease;
  white-space: nowrap;
`

export const SwitcherItemStyle = styled.button<InjectedProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  border: none;
  background: transparent;
  padding: ${ITEM_PADDING_Y}px ${ITEM_PADDING_X}px;
  border-radius: ${PILL_RADIUS}px;
  box-sizing: border-box;
  cursor: pointer;
  color: var(--lido-color-text);
  font-family: inherit;
  -webkit-tap-highlight-color: transparent;
  position: relative;
  z-index: 1;

  &:hover ${SwitcherLabelStyle}, &:focus-visible ${SwitcherLabelStyle} {
    opacity: 1;
  }

  &:disabled {
    cursor: default;
  }

  &:disabled ${SwitcherLabelStyle} {
    opacity: 0.5;
  }
`
