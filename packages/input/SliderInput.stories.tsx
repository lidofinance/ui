import { Story, Meta } from '@storybook/react'
import { SliderInputProps } from './types'
import React, { useState } from 'react'
import SliderInput from './SliderInput'

export default {
  component: SliderInput,
  title: 'Controls/SliderInput',
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

export const Basic: Story<SliderInputProps> = (props) => {
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
