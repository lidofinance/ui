import { Story, Meta } from '@storybook/react'
import { CheckboxProps } from './types'
import { Checkbox } from './Checkbox'

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
} as Meta

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

export const WithLabel: Story<CheckboxProps> = (props) => {
  return <Checkbox {...props} />
}

WithLabel.args = {
  label: 'Label',
}
