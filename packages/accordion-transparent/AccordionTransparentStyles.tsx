import styled from '../utils/styled-components-wrapper.js'
import { ArrowBottom } from '../icons'

export const AccordionTransparentStyle = styled.div`
  padding: ${({ theme }) => theme.spaceMap.md}px 0;
  background: transparent;
  border-bottom: 1px solid var(--lido-color-borderSubtle);
  overflow: hidden;
  transition: border-color ${({ theme }) => theme.duration.norm} ease;

  &:hover {
    border-bottom-color: var(--lido-color-text);
  }
`
export const AccordionTransparentSummaryStyle = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  outline: none;
  box-sizing: content-box;
  background: transparent;
`

export const AccordionTransparentTitleStyle = styled.div`
  color: var(--lido-color-text);
  flex-grow: 1;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizesMap.xs}px;
  line-height: 1.7em;
`

export const AccordionTransparentArrowStyle = styled(ArrowBottom)<{
  $expanded: boolean
}>`
  flex-shrink: 0;
  transform: rotate(${(props) => (props.$expanded ? 180 : 0)}deg);
  transition: transform ${({ theme }) => theme.duration.norm} ease;
  width: 24px;
  height: 24px;
  margin-left: ${({ theme }) => theme.spaceMap.md}px;
  fill: var(--lido-color-text);
`

export const AccordionTransparentContentStyle = styled.div<{
  $expanded?: boolean
}>`
  color: var(--lido-color-text);
  padding-top: ${({ theme }) => theme.spaceMap.md}px;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizesMap.xxs}px;
  line-height: 1.6em;

  ul,
  ol {
    padding: 0 0 0 1.5em;
  }

  p,
  ul,
  ol {
    margin: 0 0 1.6em;

    &:last-child {
      margin-bottom: 0;
    }
  }
`
