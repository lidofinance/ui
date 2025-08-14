import { Meta, StoryFn } from '@storybook/react'
import { DarkThemeProvider, LightThemeProvider, ThemeProvider } from '.'
import { Block } from '../block'
import { ThemeName } from '../constants'

export default {
  title: 'Theme/Providers',
} satisfies Meta

export const Providers: StoryFn = (props) => (
  <>
    <Block>Component inherits global theme</Block>
    <p style={{ borderBottom: '1px solid black' }}></p>
    <ThemeProvider themeName={ThemeName.light}>
      <Block>
        Wrapped in ThemeProvider with prop <i>light</i>
      </Block>
    </ThemeProvider>
    <ThemeProvider themeName={ThemeName.dark}>
      <Block>
        Wrapped in ThemeProvider with prop <i>dark</i>
      </Block>
    </ThemeProvider>

    <p style={{ marginTop: '20px', borderBottom: '1px solid black' }}></p>
    <LightThemeProvider>
      <Block>Wrapped in LightThemeProvider</Block>
    </LightThemeProvider>
    <DarkThemeProvider>
      <Block>Wrapped in DarkThemeProvider</Block>
    </DarkThemeProvider>
    <p style={{ marginTop: '20px', borderBottom: '1px solid black' }}></p>
    <div
      style={
        {
          '--lido-ui-color-text-primary': '#ffa29a',
          '--lido-ui-color-backgrounds-surface': '#323161',
        } as any
      }
      {...props}
    >
      <Block>Wrapped in ThemeProvider, which overwrites CSS variables</Block>
    </div>
  </>
)
