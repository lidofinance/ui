import { StoryFn, Meta } from '@storybook/react'
import { useState } from 'react'
import { OptionsSlider, SliderInputProps } from '.'

export default {
  component: OptionsSlider,
  title: 'Controls/OptionsSlider',
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

export const Basic: StoryFn<SliderInputProps> = (props) => {
  const [value, setValue] = useState('weekly')
  return (
    <OptionsSlider
      {...props}
      value={value}
      onChange={(val: string) => setValue(val)}
      options={[
        { value: 'weekly', label: 'Weekly' },
        { value: 'monthly', label: 'Monthly' },
        { value: 'quarterly', label: 'Quarterly' },
        { value: 'yearly', label: 'Yearly' },
      ]}
    />
  )
}
