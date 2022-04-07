import styled from 'styled-components'
import { Close, ArrowBack } from '@lidofinance/icons'
import { ButtonIcon } from '@lidofinance/button'

export const ModalStyle = styled.div<{ $center: boolean }>`
  width: 432px;
  max-width: 100%;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizesMap.xs}px;
  line-height: 1.5em;
  text-align: ${({ $center }) => ($center ? 'center' : 'left')};
  border-radius: ${({ theme }) => theme.borderRadiusesMap.xl}px;
  box-shadow: ${({ theme }) =>
    `${theme.boxShadows.xxl} ${theme.colors.shadowDark}`};
`

export const ModalBaseStyle = styled.div`
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.foreground};
  border-radius: inherit;
  position: relative;
  z-index: 1;
`

export const ModalHeaderStyle = styled.div<{
  $short: boolean
}>`
  display: flex;
  align-items: flex-start;
  min-height: 32px;
  margin-bottom: ${({ $short, theme }) => ($short ? -theme.spaceMap.md : 0)}px;
  padding: ${({ theme }) => theme.spaceMap.xl}px;
  font-size: ${({ theme }) => theme.fontSizesMap.md}px;
  line-height: 1.5em;

  ${({ theme }) => theme.mediaQueries.md} {
    padding: ${({ theme }) => theme.spaceMap.lg}px;
  }
`

export const ModalTitleStyle = styled.div<{
  $center: boolean
  $withTitleIcon: boolean
  $withCloseButton: boolean
  $withBackButton: boolean
}>`
  font-size: ${({ theme }) => theme.fontSizesMap.sm}px;
  line-height: 1.5em;
  font-weight: 700;
  margin-left: ${({ theme, $center, $withBackButton }) =>
    $center && !$withBackButton ? theme.spaceMap.xxl : '0'}px;
  margin-right: ${({ theme, $center, $withCloseButton }) =>
    $center && !$withCloseButton ? theme.spaceMap.xxl : '0'}px;
  padding-top: ${({ theme, $withTitleIcon }) =>
    $withTitleIcon ? theme.spaceMap.sm : '0'}px;
  padding-left: ${({ theme }) => theme.spaceMap.sm}px;
  padding-right: ${({ theme }) => theme.spaceMap.sm}px;
  flex-grow: 1;
  align-self: center;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-left: ${({ theme }) => theme.spaceMap.xs}px;
    padding-right: ${({ theme }) => theme.spaceMap.xs}px;
  }
`

export const ModalTitleIconStyle = styled.div<{
  $center: boolean
}>`
  line-height: 0.7;
  margin-bottom: ${({ theme }) => theme.spaceMap.md}px;

  ${({ $center }) =>
    $center &&
    `
    display: flex;
    justify-content: center;
  `}
`

export const ModalTitleTextStyle = styled.div`
  margin: ${({ theme }) => theme.spaceMap.xs}px 0;
`

export const ModalSubtitleStyle = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizesMap.xs}px;
  font-weight: 400;
  line-height: 24px;
  margin-top: -${({ theme }) => theme.spaceMap.xl}px;
  padding-top: 0;
  padding-bottom: ${({ theme }) => theme.spaceMap.sm}px;
  padding-left: ${({ theme }) => theme.spaceMap.xxl}px;
  padding-right: ${({ theme }) => theme.spaceMap.xxl}px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-left: ${({ theme }) => theme.spaceMap.xl}px;
    padding-right: ${({ theme }) => theme.spaceMap.xl}px;
  }
`

export const ModalContentStyle = styled.div`
  padding: ${({ theme }) => theme.spaceMap.xxl}px;
  padding-top: 0;

  ${({ theme }) => theme.mediaQueries.md} {
    padding: ${({ theme }) => theme.spaceMap.xl}px;
    padding-top: 0;
  }
`

export const ModalCloseStyle = styled(ButtonIcon).attrs({
  icon: <Close />,
  color: 'secondary',
  variant: 'ghost',
  size: 'xs',
})`
  color: ${({ theme }) => theme.colors.textSecondary};
  flex-shrink: 0;
  border-radius: 50%;
`

export const ModalBackStyle = styled(ButtonIcon).attrs({
  icon: <ArrowBack />,
  color: 'secondary',
  variant: 'ghost',
  size: 'xs',
})`
  color: ${({ theme }) => theme.colors.textSecondary};
  flex-shrink: 0;
  margin: 0;
  border-radius: 50%;
  background: transparent !important;
`
