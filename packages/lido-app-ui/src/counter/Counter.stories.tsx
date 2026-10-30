import type { Meta, StoryObj } from '@storybook/react'

import { StorySection } from '../../.storybook/components'
import { Counter } from '.'

const meta: Meta<typeof Counter> = {
  title: 'Tags & Badges/Counter',
  component: Counter,
  args: {
    variant: 'default',
    children: '1',
  },
  argTypes: {
    variant: {
      options: ['default', 'neutral', 'error', 'warning', 'action', 'active'],
      control: { type: 'select' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const Variants: Story = {
  render: () => (
    <StorySection>
      <Counter variant='default'>1</Counter>
      <Counter variant='neutral'>12</Counter>
      <Counter variant='error'>1</Counter>
      <Counter variant='warning'>99+</Counter>
      <Counter variant='action'>100000</Counter>
      <Counter variant='active'>hello</Counter>
    </StorySection>
  ),
  parameters: { controls: { disable: true } },
}
