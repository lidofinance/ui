import { Story, Meta } from '@storybook/react'
import { ServicePageProps } from './types'
import ServicePage from './ServicePage'

export default {
  component: ServicePage,
  title: 'Layout/ServicePage',
  args: {
    title: '404',
    children: 'Page Not Found',
  },
} as Meta

export const Basic: Story<ServicePageProps> = (props) => (
  <ServicePage {...props} />
)
