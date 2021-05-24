import styled from 'styled-components'
import { Popover } from '@lidofinance/popover'
import { PopupMenuItemStyle } from './PopupMenuItemStyles'

export const PopupMenuStyle = styled(Popover)`
  outline: none;
  box-sizing: border-box;
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.borderRadiusesMap.lg}px;
  overflow: auto;
  overflow-x: hidden;
  box-shadow: ${({ theme }) =>
    `${theme.boxShadows.xs} ${theme.colors.shadowLight}`};
  padding: 0;

  ${PopupMenuItemStyle}:first-child {
    border-top-left-radius: ${({ theme }) => theme.borderRadiusesMap.lg - 1}px;
    border-top-right-radius: ${({ theme }) => theme.borderRadiusesMap.lg - 1}px;
  }

  ${PopupMenuItemStyle}:last-child {
    border-bottom-left-radius: ${({ theme }) =>
      theme.borderRadiusesMap.lg - 1}px;
    border-bottom-right-radius: ${({ theme }) =>
      theme.borderRadiusesMap.lg - 1}px;
  }
`
