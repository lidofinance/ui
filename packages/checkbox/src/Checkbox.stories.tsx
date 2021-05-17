import { Story } from '@storybook/react'
import { CheckboxProps } from './types'
import Checkbox from './Checkbox'

export default {
  component: Checkbox,
  title: 'Controls/Checkbox',
  args: {
    disabled: false,
  },
  argTypes: {
    onChange: {
      action: 'change',
      table: { disable: true },
    },
  },
}

export const Uncontrolled: Story<CheckboxProps> = (props) => (
  <Checkbox {...props} />
)

Uncontrolled.args = {
  defaultChecked: false,
}

export const Controlled: Story<CheckboxProps> = (props) => {
  return <Checkbox {...props} />
}

Controlled.args = {
  checked: true,
}
