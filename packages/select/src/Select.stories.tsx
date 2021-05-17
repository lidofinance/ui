import { Story } from '@storybook/react'
import { Select } from './'

export default {
  component: Select,
  title: 'Controls/Select',
}

const options = [
  { label: 'One', value: 'one' },
  { label: 'Two', value: 'two' },
  { label: 'Three', value: 'three' },
]

export const Basic: Story = () => (
  <Select placeholder='Select' options={options} />
)

export const SmallStrong: Story = () => (
  <Select
    size='small'
    appearance='strong'
    placeholder='Select'
    options={options}
  />
)
