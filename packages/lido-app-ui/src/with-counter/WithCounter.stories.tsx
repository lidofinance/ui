import type { Meta, StoryObj } from '@storybook/react'

import { StorySection } from '../../.storybook/components'
import { Button } from '../button'
import type { CounterVariant } from '../counter'
import { IconButton } from '../icon-button'
import { IconBell } from '../icons'
import { WithCounter } from '.'

const VARIANTS: CounterVariant[] = [
  'default',
  'neutral',
  'error',
  'warning',
  'action',
  'active',
]

const meta: Meta<typeof WithCounter> = {
  title: 'Buttons/WithCounter',
  component: WithCounter,
  tags: ['autodocs'],
  args: {
    count: 1,
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: VARIANTS,
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Pins a Counter to the top-right corner of a Button or IconButton. The counter is `aria-hidden`, so put the count into the wrapped control’s `aria-label`.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: (args) => (
    <WithCounter {...args}>
      <IconButton
        icon={<IconBell />}
        aria-label={`Notifications, ${args.count} unread`}
      />
    </WithCounter>
  ),
}

export const Variants: Story = {
  render: () => (
    <StorySection>
      {VARIANTS.map((variant) => (
        <WithCounter key={variant} count={1} variant={variant}>
          <IconButton
            icon={<IconBell />}
            aria-label={`Notifications, ${variant}`}
          />
        </WithCounter>
      ))}
    </StorySection>
  ),
  parameters: {
    controls: { disable: true },
    docs: { description: { story: 'Every counter variant.' } },
  },
}

export const WithButton: Story = {
  render: () => (
    <WithCounter count='9+'>
      <Button>Inbox, 9+ unread</Button>
    </WithCounter>
  ),
  parameters: {
    controls: { disable: true },
    docs: { description: { story: 'Works with a regular Button too.' } },
  },
}

export const Values: Story = {
  render: () => (
    <StorySection>
      {([1, 12, '99+'] as const).map((count) => (
        <WithCounter key={count} count={count}>
          <IconButton
            icon={<IconBell />}
            aria-label={`Notifications, ${count} unread`}
          />
        </WithCounter>
      ))}
    </StorySection>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'The counter widens leftward from the corner as the value grows.',
      },
    },
  },
}
