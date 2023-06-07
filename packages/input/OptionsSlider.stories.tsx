import { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import { SliderInputProps, OptionsSlider } from '.'

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
} as Meta

export const Basic: Story<SliderInputProps> = (props) => {
  const [value, setValue] = useState('weekly')
  return (
    <OptionsSlider
      {...props}
      value={value}
      onChange={(val) => setValue(val as string)}
      options={[
        { value: 'weekly', label: 'Weekly' },
        { value: 'monthly', label: 'Monthly' },
        { value: 'quarterly', label: 'Quarterly' },
        { value: 'yearly', label: 'Yearly' },
      ]}
    />
  )
}
