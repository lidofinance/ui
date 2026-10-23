import type { Meta, StoryObj } from '@storybook/react'
import { IconButton } from '.'

import { StoryContainer, StorySection } from '../../.storybook/components'
import { Counter, type CounterVariant } from '../counter'
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
      options: ['outline', 'ghost', 'surface'],
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
        variant='surface'
        aria-label='Notifications'
      />
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
        <IconButton
          icon={<IconCross />}
          variant='outline'
          disabled
          loading
          aria-label='Close'
        />
      </StorySection>
      <StorySection title='surface'>
        <IconButton
          icon={<IconBell />}
          variant='surface'
          aria-label='Notifications'
        />
        <IconButton
          icon={<IconBell />}
          variant='surface'
          loading
          aria-label='Notifications'
        />
        <IconButton
          icon={<IconBell />}
          variant='surface'
          disabled
          aria-label='Notifications'
        />
        <IconButton
          icon={<IconBell />}
          variant='surface'
          disabled
          loading
          aria-label='Notifications'
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
        <IconButton
          icon={<IconBell />}
          variant='ghost'
          disabled
          loading
          aria-label='Notifications'
        />
      </StorySection>
    </StoryContainer>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Each row is default, loading, disabled, then disabled with loading.',
      },
    },
  },
}

const counterVariants: CounterVariant[] = [
  'default',
  'neutral',
  'error',
  'warning',
  'action',
  'active',
]

export const WithCounter: Story = {
  render: () => (
    <StoryContainer>
      <StorySection title='counts'>
        {['1', '12', '99+'].map((count) => (
          <IconButton
            key={count}
            icon={<IconBell />}
            variant='outline'
            counter={<Counter>{count}</Counter>}
            aria-label={`Notifications, ${count} unread`}
          />
        ))}
      </StorySection>
      {(['outline', 'ghost'] as const).map((variant) => (
        <StorySection key={variant} title={variant}>
          {(['default', 'error'] as const).map((counterVariant) =>
            (
              [
                ['Default', {}],
                ['Loading', { loading: true }],
                ['Disabled', { disabled: true }],
              ] as const
            ).map(([label, state]) => (
              <IconButton
                key={`${counterVariant}-${label}`}
                icon={<IconBell />}
                variant={variant}
                counter={<Counter variant={counterVariant}>3</Counter>}
                aria-label='Notifications, 3 unread'
                {...state}
              />
            )),
          )}
        </StorySection>
      ))}
      <StorySection title='counter variants'>
        {counterVariants.map((counterVariant) => (
          <IconButton
            key={counterVariant}
            icon={<IconBell />}
            variant='outline'
            counter={<Counter variant={counterVariant}>3</Counter>}
            aria-label='Notifications, 3 unread'
          />
        ))}
      </StorySection>
    </StoryContainer>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Corner `counter` slot, typically a `Counter`. It is aria-hidden, so include the count in `aria-label`.',
      },
    },
  },
}
