import { StoryFn, Meta } from '@storybook/react'
import { ServicePage, ServicePageProps } from '.'

export default {
  component: ServicePage,
  title: 'Layout/ServicePage',
  args: {
    title: '404',
    children: 'Page Not Found',
  },
} satisfies Meta

export const Basic: StoryFn<ServicePageProps> = (props) => (
  <ServicePage {...props} />
)
