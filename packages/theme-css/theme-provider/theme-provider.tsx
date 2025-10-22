import { FC, PropsWithChildren } from 'react'
import { ThemeName } from '../constants'

type ThemeProviderProps = PropsWithChildren & {
  themeName: ThemeName
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
  themeName,
  children,
}) => (
  <div data-lido-theme={themeName} style={{ display: 'contents' }}>
    {children}
  </div>
)

export const LightThemeProvider: FC<PropsWithChildren> = ({ children }) => (
  <div data-lido-theme='light' style={{ display: 'contents' }}>
    {children}
  </div>
)

export const DarkThemeProvider: FC<PropsWithChildren> = ({ children }) => (
  <div data-lido-theme='dark' style={{ display: 'contents' }}>
    {children}
  </div>
)
