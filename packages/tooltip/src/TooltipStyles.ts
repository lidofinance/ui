import styled from 'styled-components'
import { Popover } from '@lidofinance/popover'

export const TooltipPopoverStyle = styled(Popover)`
  padding: 12px;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.secondaryContrast};
  font-size: ${({ theme }) => theme.fontSizesMap.xxs}px;
  line-height: 1.5em;
  max-width: 256px;
  border-radius: ${({ theme }) => theme.borderRadiusesMap.md}px;
  box-shadow: ${({ theme }) =>
    `${theme.boxShadows.sm} ${theme.colors.shadowLight}`};
  pointer-events: none;
`
