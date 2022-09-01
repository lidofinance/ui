import { Story, Meta } from '@storybook/react'
import {
  DarkThemeProvider,
  LightThemeProvider,
  ThemeProvider,
} from './provider'
import { themeLight } from './themes'
import { Block } from './styles'

export default {
  title: 'Theme/Providers',
} as Meta

const themeCustom = {
  ...themeLight,
  colors: {
    ...themeLight.colors,
    text: '#FFA29A',
    foreground: '#323161',
  },
}

export const Providers: Story = (props) => (
  <>
    <Block>Component inherits global theme</Block>
    <LightThemeProvider {...props}>
      <Block>Wrapped in LightThemeProvider</Block>
    </LightThemeProvider>
    <DarkThemeProvider {...props}>
      <Block>Wrapped in DarkThemeProvider</Block>
    </DarkThemeProvider>
    <ThemeProvider theme={themeCustom} {...props}>
      <Block>Wrapped in ThemeProvider, which provides custom theme</Block>
    </ThemeProvider>
  </>
)
