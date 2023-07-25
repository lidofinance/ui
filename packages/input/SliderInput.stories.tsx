import { StoryFn, Meta } from '@storybook/react'
import { useState } from 'react'
import { SliderInput, SliderInputProps } from '.'

export default {
  component: SliderInput,
  title: 'Controls/SliderInput',
  args: {
    disabled: false,
    fullwidth: false,
    active: false,
    borderNone: false,
  },
  argTypes: {
    onChange: {
      action: 'change',
      table: { disable: true },
    },
  },
} satisfies Meta

export const Basic: StoryFn<SliderInputProps> = (props) => {
  const [value, setValue] = useState(100000)
  return (
    <SliderInput
      {...props}
      value={value}
      onChange={(e) => setValue(Number(e.target.value))}
      getLabel={(value) => `${value} DOT`}
      minLabel={'0 DOT'}
      maxLabel={'1000000 DOT'}
      max={1000000}
    />
  )
}
