import { Story, Meta } from '@storybook/react'
import { ServicePageProps } from './types'
import ServicePage from './ServicePage'

// const getOptions = (enumObject: Record<string, string | number>) =>
//   Object.values(enumObject).filter((value) => typeof value === 'string')

export default {
  component: ServicePage,
  title: 'Layout/ServicePage',
  args: {
    title: '404',
    children: 'This page could not be found.',
  },
  // argTypes: {
  //   variant: {
  //     options: getOptions(BlockVariant),
  //     control: 'inline-radio',
  //   },
  //   color: {
  //     options: getOptions(BlockColor),
  //     control: 'inline-radio',
  //   },
  // },
} as Meta

export const Basic: Story<ServicePageProps> = (props) => (
  <ServicePage {...props} />
)
