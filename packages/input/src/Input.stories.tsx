import { Story, Meta } from '@storybook/react'
import Input from './Input'
import { Button } from '@lidofinance/button'
import { IconEth } from './storybook'
import styled from 'styled-components'

export default {
  component: Input,
  title: 'Controls/Input',
} as Meta

export const Basic: Story = () => <Input placeholder='Basic' />

export const WithIcon: Story = () => (
  <Input placeholder='Basic' icon={<IconEth />} />
)

export const FloatingPlaceholder: Story = () => (
  <Input placeholder='Email address' isPlaceholderFloats />
)

export const SelectOnFocus: Story = () => (
  <Input defaultValue='10500' selectOnFocus />
)

export const WithValue: Story = () => (
  <Input placeholder='Email address' defaultValue='alexpro@gmail.com' />
)

export const WithError: Story = () => (
  <Input
    placeholder='Email address'
    errorMessage='Error message'
    defaultValue='alexpro@gmail.com'
  />
)

export const WithAction: Story = () => (
  <Input
    placeholder='Email address'
    defaultValue='alexpro@gmail.com'
    action={<Button size='sm'>Subscribe</Button>}
  />
)

const SuccessAction = styled.div`
  padding: 0 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #61b75f;
  line-height: 44px;
`

export const WithSuccessAction: Story = () => (
  <Input
    placeholder='Email address'
    defaultValue='alexpro@gmail.com'
    action={<SuccessAction>Subscribed</SuccessAction>}
    successMessage='Thank you for subscribing! We will notify you once we kick off our platform.'
  />
)
