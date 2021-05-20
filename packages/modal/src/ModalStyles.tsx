import styled from 'styled-components'
import { Close } from '@lidofinance/icons'
import { ButtonIcon } from '@lidofinance/button'

export const ModalStyle = styled.div<{ $center: boolean }>`
  text-align: ${({ $center }) => ($center ? 'center' : 'left')};
  width: 432px;
  max-width: 100%;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.foreground};
  border-radius: ${({ theme }) => theme.borderRadiusesMap.xl}px;
  box-shadow: ${({ theme }) =>
    `${theme.boxShadows.xxl} ${theme.colors.shadowDark}`};
`

export const ModalHeaderStyle = styled.div<{ $short: boolean }>`
  display: flex;
  align-items: center;
  min-height: 32px;
  margin: 0;
  margin-bottom: ${({ $short, theme }) => ($short ? -theme.spaceMap.md : 0)}px;
  padding: ${({ theme }) => theme.spaceMap.xl}px
    ${({ theme }) => theme.spaceMap.xxl}px;
  font-size: ${({ theme }) => theme.fontSizesMap.lg}px;
  line-height: 1.3em;

  ${({ theme }) => theme.mediaQueries.md} {
    padding: ${({ theme }) => theme.spaceMap.xl}px
      ${({ theme }) => theme.spaceMap.lg}px;
  }
`

export const ModalTitleStyle = styled.div<{ $center: boolean }>`
  font-size: ${({ theme }) => theme.fontSizesMap.lg}px;
  line-height: 1.3em;
  font-weight: 600;
  margin-right: auto;
  padding-right: 32px;
  padding-left: ${({ $center }) => ($center ? '32px' : '0px')};
  flex-grow: 1;
`

export const ModalCloseStyle = styled(ButtonIcon).attrs({
  icon: <Close />,
  color: 'secondary',
  variant: 'ghost',
  size: 'xs',
})`
  flex-shrink: 0;
  margin: 0 -10px 0 -22px;
  border-radius: 50%;

  ${({ theme }) => theme.mediaQueries.md} {
    margin: 0 0 0 -32px;
  }
`

export const ModalContentStyle = styled.div`
  padding: ${({ theme }) => theme.spaceMap.xxl}px;
  padding-top: 0;

  ${({ theme }) => theme.mediaQueries.md} {
    padding: ${({ theme }) => theme.spaceMap.lg}px;
    padding-top: 0;
  }
`
