import styled from 'styled-components'
import PopoverRoot from './PopoverRoot'
import { PopoverOffsets, PopoverPlacements } from './types'
import { Theme } from '@lidofinance/theme'

type InjectedProps = {
  $offset: PopoverOffsets
  placement: PopoverPlacements
  theme: Theme
}

const getOffset = (props: InjectedProps): string => {
  const { $offset, placement, theme } = props
  const offset = theme.spaceMap[$offset]

  if (placement.startsWith('top')) return `margin-top: ${-offset}px`
  if (placement.startsWith('right')) return `margin-left: ${offset}px`
  if (placement.startsWith('bottom')) return `margin-top: ${offset}px`
  if (placement.startsWith('left')) return `margin-left: ${-offset}px`
  return ''
}

export const PopoverStyle = styled(PopoverRoot)`
  background: ${({ theme }) => theme.colors.foreground};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizesMap.xs}px;
  line-height: 1.5em;
  font-weight: 400;
  border-radius: ${({ theme }) => theme.borderRadiusesMap.lg}px;
  box-shadow: ${({ theme }) =>
    `${theme.boxShadows.xs} ${theme.colors.shadowLight}`};
  padding: ${({ theme }) => theme.spaceMap.lg}px;
  overflow: auto;

  ${getOffset}
`
