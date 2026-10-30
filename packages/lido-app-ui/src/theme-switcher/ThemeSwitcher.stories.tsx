import type { Meta, StoryObj } from '@storybook/react'

import {
  DarkThemeProvider,
  LightThemeProvider,
  ThemeName,
  ThemeToggleContext,
} from '@lidofinance/lido-shared-ui'

import { StorySection } from '../../.storybook/components'
import { ThemeSwitcher } from '.'

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'Buttons/ThemeSwitcher',
  component: ThemeSwitcher,
  argTypes: {
    disabled: { control: { type: 'boolean' } },
    type: { table: { disable: true } },
  },
  parameters: {
    themeSwitcher: false,
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

const noop = () => {}

const themes = [
  [ThemeName.light, LightThemeProvider],
  [ThemeName.dark, DarkThemeProvider],
] as const

export const States: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <>
      {themes.map(([themeName, ThemeScope]) => (
        <StorySection key={themeName} title={themeName}>
          <ThemeToggleContext.Provider value={{ themeName, toggleTheme: noop }}>
            <ThemeScope>
              <ThemeSwitcher />
            </ThemeScope>
          </ThemeToggleContext.Provider>
        </StorySection>
      ))}
    </>
  ),
}
