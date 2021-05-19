import styled from 'styled-components'
import { ArrowBottom } from '@lidofinance/icons'

export const AccordionStyle = styled.div`
  margin: 0 0 ${({ theme }) => theme.spaceMap.sm}px 0;
  background: ${({ theme }) => theme.colors.foreground};
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

  ${({ theme }) => theme.mediaQueries.sm} {
    padding: ${({ theme }) => theme.spaceMap.lg}px;
  }
`

export const AccordionTitleStyle = styled.div`
  color: ${({ theme }) => theme.colors.text};
  flex-grow: 1;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizesMap.sm}px;
  line-height: 1.25em;
`

export const AccordionArrowStyle = styled(ArrowBottom)<{ $expanded: boolean }>`
  flex-shrink: 0;
  transform: rotate(${(props) => (props.$expanded ? 180 : 0)}deg);
  transition: transform ${({ theme }) => theme.duration.norm} ease;
  margin: -2px;
  margin-left: ${({ theme }) => theme.spaceMap.md}px;
  fill: ${({ theme }) => theme.colors.textSecondary};
`

export const AccordionContentStyle = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: ${({ theme }) => theme.spaceMap.xxl}px;
  padding-top: 0;
  font-size: ${({ theme }) => theme.fontSizesMap.xs}px;
  line-height: 1.5em;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding: ${({ theme }) => theme.spaceMap.lg}px;
    padding-top: 0;
  }

  p,
  ul,
  ol {
    margin: 0 0 1.5em 0;

    &:last-child {
      margin-bottom: 0;
    }
  }

  ul,
  ol {
    padding: 0 0 0 1.5em;
  }
`
