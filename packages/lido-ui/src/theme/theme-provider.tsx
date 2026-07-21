import { FC, PropsWithChildren } from 'react'
import styled, {
  ThemeProvider as StyledThemeProvider,
} from '../utils/styled-components-wrapper.js'
import {
  reverseThemeMap,
  themeDark,
  themeDefault,
  themeLight,
} from './themes.js'
import { initColors } from './document-head-contents/index.js'
import { generateCssColorVariables } from './utils/generate-css-color-variables.js'
import { Theme } from './types.js'

// we need to initialize this before react component code if we're using this provider or CookieThemeProvider
initColors()

const StyledWrapper = styled.div<{ colors?: Record<string, string> }>`
  display: contents;
  ${({ colors }) => (colors ? generateCssColorVariables(colors) : null)}
`
export const ThemeProvider: FC<PropsWithChildren<{ theme?: Theme }>> = ({
  theme = themeDefault,
  children,
  ...rest
}) => {
  const internalThemeName = reverseThemeMap.get(theme)
  const props = internalThemeName
    ? {
        // if theme is detected as internally defined, we can just use data-lido-theme to set CSS vars instead of colors
        'data-lido-theme': internalThemeName,
      }
    : {
        // if theme is auto-detected from cookies, it will interfere with global script logic - so we need to not provide CSS
        colors: theme.colors,
      }

  return (
    <StyledWrapper {...props}>
      <StyledThemeProvider theme={theme} {...rest}>
        {children}
      </StyledThemeProvider>
    </StyledWrapper>
  )
}

export const LightThemeProvider: FC<PropsWithChildren> = (props) => (
  <ThemeProvider {...props} theme={themeLight} />
)

export const DarkThemeProvider: FC<PropsWithChildren> = (props) => (
  <ThemeProvider {...props} theme={themeDark} />
)
