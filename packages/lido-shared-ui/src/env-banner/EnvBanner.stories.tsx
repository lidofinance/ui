import type { StoryObj } from '@storybook/react'
import { EnvBanner } from './EnvBanner'

export default {
  component: EnvBanner,
  title: 'Shared/EnvBanner',
  parameters: { layout: 'fullscreen' },
  argTypes: {
    children: { control: 'text', name: 'text' },
    shortText: { control: 'text' },
  },
}

export const Default: StoryObj<typeof EnvBanner> = {}
