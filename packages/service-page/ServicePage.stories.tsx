import { StoryFn, Meta } from '@storybook/react'
import { ServicePage, ServicePageProps } from './index.js'

export default {
  component: ServicePage,
  title: 'Layout/ServicePage',
  args: {
    title: '404',
    children: 'Page Not Found',
  },
} as Meta

export const Basic: StoryFn<ServicePageProps> = (props) => (
  <ServicePage {...props} />
)
