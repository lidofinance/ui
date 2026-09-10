import type { Meta, StoryObj } from '@storybook/react'
import { IconButton } from '.'

import { StorySection } from '../../.storybook/components'
import { IconCross } from '../icons'

const meta: Meta<typeof IconButton> = {
  title: 'Controls/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  args: {
    'aria-label': 'Close',
    icon: <IconCross />,
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['outline', 'ghost'],
    },
    disabled: { control: { type: 'boolean' } },
    loading: { control: { type: 'boolean' } },
  },
  parameters: {
    docs: {
      description: {
        component:
          '36px square, fully rounded. Icon-only, so `aria-label` is required. `loading` swaps the icon for a spinner and disables the button.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const Variants: Story = {
  render: () => (
    <StorySection>
      <IconButton aria-label='Close' icon={<IconCross />} variant='outline' />
      <IconButton aria-label='Close' icon={<IconCross />} variant='ghost' />
    </StorySection>
  ),
  parameters: { controls: { disable: true } },
}

export const States: Story = {
  render: () => (
    <StorySection>
      <IconButton aria-label='Close' icon={<IconCross />} variant='outline' />
      <IconButton
        aria-label='Close'
        icon={<IconCross />}
        variant='outline'
        loading
      />
      <IconButton
        aria-label='Close'
        icon={<IconCross />}
        variant='outline'
        disabled
      />
      <IconButton aria-label='Close' icon={<IconCross />} variant='ghost' />
      <IconButton
        aria-label='Close'
        icon={<IconCross />}
        variant='ghost'
        loading
      />
      <IconButton
        aria-label='Close'
        icon={<IconCross />}
        variant='ghost'
        disabled
      />
    </StorySection>
  ),
  parameters: { controls: { disable: true } },
}
