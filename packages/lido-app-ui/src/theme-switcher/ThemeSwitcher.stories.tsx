import type { Meta, StoryObj } from '@storybook/react'

import { ThemeSwitcher } from '.'

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'Buttons/ThemeSwitcher',
  component: ThemeSwitcher,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: { type: 'boolean' } },
    type: { table: { disable: true } },
  },
  parameters: {
    controls: { exclude: ['type'] },
    docs: {
      description: {
        component:
          'Surface IconButton that flips the light/dark theme via `useThemeToggle`. Icon and `aria-label` follow the active theme.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}
