import { StoryFn, Meta } from '@storybook/react'
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
} satisfies Meta

export const Basic: StoryFn<TextareaProps> = (props) => <Textarea {...props} />

Basic.args = {
  placeholder: 'Amount',
  rows: 5,
}

export const Labeled: StoryFn<TextareaProps> = (props) => (
  <Textarea {...props} />
)

Labeled.args = {
  label: 'Amount',
  rows: 5,
}
