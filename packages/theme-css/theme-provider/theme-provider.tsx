import { FC, PropsWithChildren } from 'react'
import { ThemeName } from '../constants'

type ThemeProviderProps = PropsWithChildren & {
  themeName: ThemeName
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
  themeName,
  children,
}) => <div data-lido-theme={themeName}>{children}</div>

export const LightThemeProvider: FC<PropsWithChildren> = ({ children }) => (
  <div data-lido-theme='light'>{children}</div>
)

export const DarkThemeProvider: FC<PropsWithChildren> = ({ children }) => (
  <div data-lido-theme='dark'>{children}</div>
)
