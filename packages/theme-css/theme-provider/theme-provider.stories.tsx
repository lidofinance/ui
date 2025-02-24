import { StoryFn, Meta } from '@storybook/react'
import { DarkThemeProvider, LightThemeProvider } from '.'
import { Block } from '../block'

export default {
  title: 'Theme/Providers',
} satisfies Meta

export const Providers: StoryFn = (props) => (
  <>
    <Block>Component inherits global theme</Block>
    <LightThemeProvider>
      <Block>Wrapped in LightThemeProvider</Block>
    </LightThemeProvider>
    <DarkThemeProvider>
      <Block>Wrapped in DarkThemeProvider</Block>
    </DarkThemeProvider>
    <div
      style={
        {
          '--lido-color-text': '#ffa29a',
          '--lido-color-foreground': '#323161',
        } as any
      }
      {...props}
    >
      <Block>Wrapped in ThemeProvider, which overwrites CSS variables</Block>
    </div>
  </>
)
