import { Story, Meta } from '@storybook/react'
import { Textarea, TextareaProps } from '.'

export default {
  component: Textarea,
  title: 'Controls/Textarea',
  args: {
    disabled: false,
    fullwidth: false,
    active: false,
  },
  argTypes: {
    onChange: {
      action: 'change',
      table: { disable: true },
    },
  },
} as Meta

export const Basic: Story<TextareaProps> = (props) => <Textarea {...props} />

Basic.args = {
  placeholder: 'Amount',
  label: '',
  rows: 5,
}
