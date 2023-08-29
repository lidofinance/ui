import { StoryFn, Meta } from '@storybook/react'
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
} as Meta

export const Uncontrolled: StoryFn<CheckboxProps> = (props) => (
  <Checkbox {...props} />
)

Uncontrolled.args = {
  defaultChecked: false,
}

export const Controlled: StoryFn<CheckboxProps> = (props) => {
  return <Checkbox {...props} />
}

Controlled.args = {
  checked: true,
}

export const WithLabel: StoryFn<CheckboxProps> = (props) => {
  return <Checkbox {...props} />
}

WithLabel.args = {
  label: 'Label',
}
