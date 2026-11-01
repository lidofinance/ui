import type { Meta, StoryObj } from '@storybook/react'
import { CloseButton, IconButton, type IconButtonProps } from '.'

import {
  DemoRouter,
  StoryContainer,
  StorySection,
} from '../../.storybook/components'
import { Counter, type CounterVariant } from '../counter'
import { IconBell, IconCross, IconEtherscan } from '../icons'

const meta: Meta<typeof IconButton> = {
  title: 'Buttons/IconButton',
  component: IconButton,
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
    counter: { control: { type: 'text' } },
    href: { control: { type: 'text' } },
    type: { table: { disable: true } },
    linkProps: { table: { disable: true } },
  },
}

export default meta
// A union of props breaks `StoryObj<typeof meta>` (args collapse to never).
type Story = StoryObj<IconButtonProps>

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
          'Each row is default, loading, disabled, then disabled with loading. Hover and press a button to see its hover and pressed states.',
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
            aria-label='Notifications'
            counterLabel={`${count} unread`}
          />
        ))}
      </StorySection>
      {(['outline', 'surface', 'ghost'] as const).map((variant) => (
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
                aria-label='Notifications'
                counterLabel='3 unread'
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
            aria-label='Notifications'
            counterLabel='3 unread'
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
          'Corner `counter` slot, typically a `Counter`. It is aria-hidden; `counterLabel` adds the count to the accessible name.',
      },
    },
  },
}

export const Close: Story = {
  render: () => (
    <StorySection>
      <CloseButton />
      <CloseButton aria-label='Close menu' />
    </StorySection>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          '`CloseButton`: ghost `IconButton` with a cross icon. `aria-label` defaults to "Close".',
      },
    },
  },
}

const linkVariants = ['outline', 'surface', 'ghost'] as const

export const AsLink: Story = {
  render: () => (
    <StoryContainer>
      <StorySection title='variants'>
        {linkVariants.map((variant) => (
          <IconButton
            key={variant}
            icon={<IconBell />}
            variant={variant}
            href='#notifications'
            aria-label={`Notifications (${variant})`}
          />
        ))}
      </StorySection>
      <StorySection title='disabled'>
        {linkVariants.map((variant) => (
          <IconButton
            key={variant}
            icon={<IconBell />}
            variant={variant}
            href='#notifications'
            aria-label={`Notifications (${variant})`}
            disabled
          />
        ))}
      </StorySection>
      <StorySection title='with counter'>
        {['1', '12', '99+'].map((count) => (
          <IconButton
            key={count}
            icon={<IconBell />}
            href='#notifications'
            aria-label='Notifications'
            counter={count}
            counterLabel={`${count} unread`}
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
          'With `href`, `IconButton` renders an `<a>` for navigation: it keeps link semantics and routes through `LinkProvider`. It takes the anchor attributes instead of `type` and `loading`. `disabled` drops the `href` and `onClick` and sets `aria-disabled`, so the link is neither clickable nor focusable.',
      },
    },
  },
}

export const External: Story = {
  render: () => (
    <IconButton
      icon={<IconEtherscan />}
      href='https://etherscan.io'
      aria-label='View on Etherscan'
    />
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Absolute `http(s)` URLs open in a new tab with `rel="noopener noreferrer"`; pass `target` to override.',
      },
    },
  },
}

export const WithRouter: Story = {
  render: () => (
    <DemoRouter>
      <StorySection>
        <IconButton
          icon={<IconBell />}
          href='/notifications'
          aria-label='In-app: /notifications'
        />
        <IconButton
          icon={<IconBell />}
          variant='surface'
          href='/settings'
          aria-label='In-app: /settings'
        />
        <IconButton
          icon={<IconBell />}
          variant='ghost'
          href='https://lido.fi'
          aria-label='External: lido.fi'
        />
      </StorySection>
    </DemoRouter>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Inside `LinkProvider`, in-app hrefs go to `component` and absolute URLs to `externalComponent`. Click a button to see which handled it; navigation is prevented in the demo.',
      },
    },
  },
}
