import styled from 'styled-components'
import theme from '@lidofinance/theme'
import { ArrowBottom } from '@lidofinance/icons'

export const AccordionStyle = styled.div`
  margin: 0 0 ${theme.spacing.small} 0;
  background: ${theme.colors.controlBg};
  border-radius: 20px;
`

export const AccordionSummaryStyle = styled.div`
  padding: calc(${theme.spacing.extraLarge} - 2px) ${theme.spacing.extraLarge};
  cursor: pointer;
  display: flex;
  outline: none;
`

export const AccordionTitleStyle = styled.div`
  color: ${theme.colors.text};
  flex-grow: 1;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
`

export const AccordionArrowStyle = styled(ArrowBottom)<{ $expanded: boolean }>`
  flex-shrink: 0;
  transform: rotate(${(props) => (props.$expanded ? 180 : 0)}deg);
  transition: transform 0.3s ease;
  margin: -2px -2px -2px 10px;
  fill: ${theme.colors.textSecondary};
`

export const AccordionContentStyle = styled.div`
  color: ${theme.colors.textSecondary};
  padding: ${theme.spacing.extraLarge};
  padding-top: 0;
  font-size: 14px;
  line-height: 20px;

  p,
  ul,
  ol {
    margin: 0 0 20px 0;

    &:last-child {
      margin-bottom: 0;
    }
  }

  ul,
  ol {
    padding: 0 0 0 20px;
  }
`
