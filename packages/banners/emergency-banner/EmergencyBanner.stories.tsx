import { Meta, StoryFn } from '@storybook/react'
import { EmergencyBanner, EmergencyBannerProps } from '../index'

export default {
  component: EmergencyBanner,
  title: 'Banners/EmergencyBanner',
  args: {
    description: 'Test text',
    title: 'Important announcement',
    link: 'https://example.com',
    linkText: 'Check out important details here',
  },
} satisfies Meta

export const Basic: StoryFn<EmergencyBannerProps> = (props) => (
  <EmergencyBanner {...props} />
)
