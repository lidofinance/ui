import { StoryFn, Meta } from '@storybook/react'
import { Checkbox, CheckboxProps } from '.'

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
} satisfies Meta

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
