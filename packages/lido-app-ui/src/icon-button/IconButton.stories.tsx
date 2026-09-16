import type { Meta, StoryObj } from '@storybook/react'
import { IconButton } from '.'

import { StoryContainer, StorySection } from '../../.storybook/components'
import { IconBell, IconCross } from '../icons'

const meta: Meta<typeof IconButton> = {
  title: 'Buttons/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  args: {
    icon: <IconCross />,
    'aria-label': 'Close',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['outline', 'ghost'],
    },
    disabled: { control: { type: 'boolean' } },
    loading: { control: { type: 'boolean' } },
    type: { table: { disable: true } },
  },
  parameters: {
    controls: { exclude: ['type'] },
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
      <IconButton icon={<IconCross />} variant='outline' aria-label='Close' />
      <IconButton
        icon={<IconBell />}
        variant='ghost'
        aria-label='Notifications'
      />
    </StorySection>
  ),
  parameters: { controls: { disable: true } },
}

export const States: Story = {
  render: () => (
    <StoryContainer>
      <StorySection title='outline'>
        <IconButton icon={<IconCross />} variant='outline' aria-label='Close' />
        <IconButton
          icon={<IconCross />}
          variant='outline'
          loading
          aria-label='Close'
        />
        <IconButton
          icon={<IconCross />}
          variant='outline'
          disabled
          aria-label='Close'
        />
      </StorySection>
      <StorySection title='ghost'>
        <IconButton
          icon={<IconBell />}
          variant='ghost'
          aria-label='Notifications'
        />
        <IconButton
          icon={<IconBell />}
          variant='ghost'
          loading
          aria-label='Notifications'
        />
        <IconButton
          icon={<IconBell />}
          variant='ghost'
          disabled
          aria-label='Notifications'
        />
      </StorySection>
    </StoryContainer>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Each row is default, loading, then disabled.',
      },
    },
  },
}
