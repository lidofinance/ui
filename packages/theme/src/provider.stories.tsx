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
    {/* @ts-expect-error fix later */}
    <Block>Component inherits global theme</Block>
    <LightThemeProvider {...props}>
      {/* @ts-expect-error fix later */}
      <Block>Wrapped in LightThemeProvider</Block>
    </LightThemeProvider>
    <DarkThemeProvider {...props}>
      {/* @ts-expect-error fix later */}
      <Block>Wrapped in DarkThemeProvider</Block>
    </DarkThemeProvider>
    <ThemeProvider theme={themeCustom} {...props}>
      {/* @ts-expect-error fix later */}
      <Block>Wrapped in ThemeProvider, which provides custom theme</Block>
    </ThemeProvider>
  </>
)
