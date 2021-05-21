import styled from 'styled-components'
import { PopupMenuItemStyle } from './PopupMenuItemStyles'

export const PopupMenuStyle = styled.div`
  box-sizing: border-box;
  border: 1px solid transparent;
  margin: ${({ theme }) => theme.spaceMap.xs}px 0 0 0;
  background: ${({ theme }) => theme.colors.foreground};
  color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.borderRadiusesMap.lg}px;
  box-shadow: ${({ theme }) =>
    `${theme.boxShadows.xs} ${theme.colors.shadowLight}`};

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
