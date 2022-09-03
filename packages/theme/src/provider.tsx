import React, { FC, PropsWithChildren, useEffect } from 'react'
import styled, {
  ThemeProvider as StyledThemeProvider,
  ThemeProviderProps,
} from 'styled-components'
import { themeDark, themeDefault, themeLight } from './themes'
import { Theme } from './types'
import { initColors } from './document-head-contents'
import { generateCssColorVariables } from './document-head-contents/utils/generate-css-color-variables'
import { useThemeToggle } from '@lidofinance/cookie-theme-toggler'

// you need this if you're using themes, so we initiate this automatically
initColors()

const StyledWrapper = styled.div<{ colors?: Record<string, string> }>`
  display: contents;
  ${({ colors }) => (colors ? generateCssColorVariables(colors) : null)}
`
export const ThemeProvider: FC<
  PropsWithChildren<{ theme: Theme; isAutoDetectedTheme?: boolean }>
> = ({
  theme = themeDefault,
  children,
  isAutoDetectedTheme = false,
  ...rest
}) => {
  const parentTheme = useThemeToggle()
  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }
    if (isAutoDetectedTheme) {
      return
    }
    if (!parentTheme.themeName) {
      return
    }
    document.documentElement.dataset.lidoTheme = theme.name
  }, [isAutoDetectedTheme, parentTheme.themeName, theme.name])
  return (
    <StyledWrapper
      colors={isAutoDetectedTheme ? undefined : theme.colors}
      {...(isAutoDetectedTheme ? {} : { 'data-lido-theme': theme.name })}
    >
      <StyledThemeProvider theme={theme} {...rest}>
        {children}
      </StyledThemeProvider>
    </StyledWrapper>
  )
}

type BoundThemeProvider = FC<Omit<ThemeProviderProps<Theme>, 'theme'>>

export const LightThemeProvider: BoundThemeProvider = (props) => (
  <ThemeProvider {...props} theme={themeLight} />
)

export const DarkThemeProvider: BoundThemeProvider = (props) => (
  <ThemeProvider {...props} theme={themeDark} />
)
