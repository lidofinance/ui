import styled from 'styled-components'
import { ArrowBottom } from '../icons/index.js'

export const AccordionStyle = styled.div`
  margin: 0 0 ${({ theme }) => theme.spaceMap.sm}px 0;
  background: var(--lido-color-foreground);
  border-radius: ${({ theme }) => theme.borderRadiusesMap.xl}px;
`

export const AccordionSummaryStyle = styled.div`
  padding: ${({ theme }) => theme.spaceMap.lg}px
    ${({ theme }) => theme.spaceMap.xxl}px;
  cursor: pointer;
  display: flex;
  align-items: center;
  outline: none;
  min-height: 40px;
  box-sizing: content-box;

  ${({ theme }) => theme.mediaQueries.md} {
    padding: ${({ theme }) => theme.spaceMap.lg}px;
  }
`

export const AccordionTitleStyle = styled.div`
  color: var(--lido-color-text);
  flex-grow: 1;
  font-weight: 800;
  font-size: ${({ theme }) => theme.fontSizesMap.xs}px;
  line-height: 1.6em;
`

export const AccordionArrowStyle = styled(ArrowBottom)<{ $expanded: boolean }>`
  flex-shrink: 0;
  transform: rotate(${(props) => (props.$expanded ? 180 : 0)}deg);
  transition: transform ${({ theme }) => theme.duration.norm} ease;
  margin: -2px;
  margin-left: ${({ theme }) => theme.spaceMap.md}px;
  fill: var(--lido-color-textSecondary);
`

export const AccordionContentStyle = styled.div`
  color: var(--lido-color-textSecondary);
  padding: ${({ theme }) => theme.spaceMap.xxl}px;
  padding-top: 0;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizesMap.xxs}px;
  line-height: 1.6em;

  ${({ theme }) => theme.mediaQueries.md} {
    padding: ${({ theme }) => theme.spaceMap.lg}px;
    padding-top: 0;
  }

  p,
  ul,
  ol {
    margin: 0 0 1.6em;

    &:last-child {
      margin-bottom: 0;
    }
  }

  /* stylelint-disable-next-line no-descending-specificity */
  ul,
  /* stylelint-disable-next-line no-descending-specificity */
  ol {
    padding: 0 0 0 1.5em;
  }
`
