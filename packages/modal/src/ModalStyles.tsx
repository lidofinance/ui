import styled, { css } from 'styled-components'
import { Close, ArrowBack } from '@lidofinance/icons'
import { ButtonIcon } from '@lidofinance/button'

export const ModalStyle = styled.div<{ $center: boolean }>`
  ${({
    theme: { fontSizesMap, borderRadiusesMap, colors, boxShadows },
    $center,
  }) => css`
    width: 432px;
    max-width: 100%;
    font-weight: 400;
    font-size: ${fontSizesMap.xs}px;
    line-height: 1.5em;
    text-align: ${$center ? 'center' : 'left'};
    border-radius: ${borderRadiusesMap.xl}px;
    box-shadow: ${boxShadows.xxl} ${colors.shadowDark};
  `}
`

export const ModalBaseStyle = styled.div`
  ${({ theme: { colors } }) => css`
    color: ${colors.text};
    background: ${colors.foreground};
    border-radius: inherit;
    position: relative;
    z-index: 1;
  `}
`

export const ModalHeaderStyle = styled.div<{
  $short: boolean
}>`
  ${({ theme: { spaceMap, fontSizesMap, mediaQueries }, $short }) => css`
    display: flex;
    align-items: flex-start;
    min-height: 32px;
    margin-bottom: ${$short ? -spaceMap.md : 0}px;
    padding: ${spaceMap.xl}px;
    font-size: ${fontSizesMap.md}px;
    line-height: 1.5em;

    ${mediaQueries.md} {
      padding: ${spaceMap.lg}px;
    }
  `}
`

export const ModalTitleStyle = styled.div<{
  $center: boolean
  $withTitleIcon: boolean
  $withCloseButton: boolean
  $withBackButton: boolean
}>`
  ${({
    theme: { fontSizesMap, spaceMap, mediaQueries },
    $center,
    $withBackButton,
    $withCloseButton,
    $withTitleIcon,
  }) => css`
    font-size: ${fontSizesMap.sm}px;
    line-height: 1.5em;
    font-weight: 700;
    margin-left: ${$center && !$withBackButton ? spaceMap.xxl : '0'}px;
    margin-right: ${$center && !$withCloseButton ? spaceMap.xxl : '0'}px;
    padding-top: ${$withTitleIcon ? spaceMap.sm : '0'}px;
    padding-left: ${spaceMap.sm}px;
    padding-right: ${spaceMap.sm}px;
    flex-grow: 1;
    align-self: center;

    ${mediaQueries.md} {
      padding-left: ${spaceMap.xs}px;
      padding-right: ${spaceMap.xs}px;
    }
  `}
`

export const ModalTitleIconStyle = styled.div<{
  $center: boolean
}>`
  ${({ theme: { spaceMap }, $center }) => css`
    display: ${$center ? 'flex' : 'block'};
    justify-content: ${$center ? 'center' : 'flex-start'};
    line-height: 0.7;
    margin-bottom: ${spaceMap.md}px;
  `}
`

export const ModalTitleTextStyle = styled.div`
  margin: ${({ theme }) => theme.spaceMap.xs}px 0;
`

export const ModalSubtitleStyle = styled.div`
  ${({ theme: { colors, fontSizesMap, spaceMap, mediaQueries } }) => css`
    color: ${colors.textSecondary};
    font-size: ${fontSizesMap.xs}px;
    font-weight: 400;
    line-height: 24px;
    margin-top: -${spaceMap.xl}px;
    padding-top: 0;
    padding-bottom: ${spaceMap.sm}px;
    padding-left: ${spaceMap.xxl}px;
    padding-right: ${spaceMap.xxl}px;

    ${mediaQueries.md} {
      padding-left: ${spaceMap.xl}px;
      padding-right: ${spaceMap.xl}px;
    }
  `}
`

export const ModalContentStyle = styled.div`
  ${({ theme: { spaceMap, mediaQueries } }) => css`
    padding: ${spaceMap.xxl}px;
    padding-top: 0;

    ${mediaQueries.md} {
      padding: ${spaceMap.xl}px;
      padding-top: 0;
    }
  `}
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
