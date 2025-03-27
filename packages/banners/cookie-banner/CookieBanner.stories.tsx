import { Meta, StoryFn } from '@storybook/react'
import { CookieBannerProps, CookieBanner } from '../index'

export default {
  component: CookieBanner,
  title: 'Banners/CookieBanner',
  args: {
    privacyUrl: 'https://example.com',
  },
  argTypes: {
    onDecline: { action: 'clicked on decline' },
    onAllow: { action: 'clicked on allow' },
  },
} satisfies Meta

export const Basic: StoryFn<CookieBannerProps> = (props) => (
  <CookieBanner {...props} />
)
