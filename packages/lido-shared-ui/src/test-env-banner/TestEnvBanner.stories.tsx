import type { StoryObj } from '@storybook/react'
import { TestEnvBanner } from './TestEnvBanner'

export default {
  component: TestEnvBanner,
  title: 'Banners/TestEnvBanner',
  parameters: { layout: 'fullscreen' },
  argTypes: {
    text: { control: 'text' },
    shortText: { control: 'text' },
  },
}

export const Default: StoryObj<typeof TestEnvBanner> = {}
