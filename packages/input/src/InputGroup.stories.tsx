import { Story, Meta } from '@storybook/react'
import Input from './Input'
import InputGroup from './InputGroup'
import { InputGroupProps } from './types'

export default {
  component: Input,
  title: 'Controls/InputGroup',
  args: {
    fullwidth: false,
  },
} as Meta

export const Basic: Story<InputGroupProps> = (props) => (
  <InputGroup {...props}>
    <Input placeholder='First Name' fullwidth={props.fullwidth} />
    <Input placeholder='Last Name' fullwidth={props.fullwidth} />
  </InputGroup>
)
