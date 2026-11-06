import type { Meta, StoryObj } from '@storybook/react'
import { Button, type ButtonProps, type ButtonVariant } from '.'

import {
  DemoRouter,
  StoryContainer,
  StorySection,
} from '../../.storybook/components'
import { Counter, type CounterVariant } from '../counter'
import { IconArrowNarrowUpRight, IconInfo } from '../icons'

const meta: Meta<typeof Button> = {
  title: 'Buttons/Button',
  component: Button,
  args: {
    children: 'Button',
  },
  argTypes: {
    children: { control: { type: 'text' } },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'outline', 'subtle', 'ghost', 'error'],
    },
    size: {
      control: { type: 'select' },
      options: ['big', 'small'],
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
type Story = StoryObj<ButtonProps>

export const Basic: Story = {}

const variants: ButtonVariant[] = [
  'primary',
  'outline',
  'subtle',
  'ghost',
  'error',
]

export const Variants: Story = {
  render: () => (
    <StoryContainer>
      <StorySection title='big'>
        {variants.map((variant) => (
          <Button key={variant} variant={variant}>
            {variant}
          </Button>
        ))}
      </StorySection>
      <StorySection title='small'>
        {variants.map((variant) => (
          <Button key={variant} variant={variant} size='small'>
            {variant}
          </Button>
        ))}
      </StorySection>
    </StoryContainer>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'The five variants at both sizes.',
      },
    },
  },
}

export const States: Story = {
  render: () => (
    <StoryContainer>
      {variants.map((variant) => (
        <StorySection key={variant} title={variant}>
          <Button variant={variant}>Default</Button>
          <Button variant={variant} loading>
            Loading
          </Button>
          <Button variant={variant} disabled>
            Disabled
          </Button>
          <Button variant={variant} disabled loading>
            Disabled loading
          </Button>
          <Button variant={variant} size='small'>
            Default
          </Button>
          <Button variant={variant} size='small' loading>
            Loading
          </Button>
          <Button variant={variant} size='small' disabled>
            Disabled
          </Button>
          <Button variant={variant} size='small' disabled loading>
            Disabled loading
          </Button>
        </StorySection>
      ))}
    </StoryContainer>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Loading keeps the default look and swaps the leading icon slot for a spinner; the button is inert. Disabled dims the label and drops the fill, and disabled with loading shows that look with a dimmed spinner.',
      },
    },
  },
}

export const WithIcons: Story = {
  render: () => (
    <StorySection>
      <Button iconLeft={<IconInfo />}>Left icon</Button>
      <Button iconRight={<IconInfo />}>Right icon</Button>
      <Button variant='outline' size='small' iconLeft={<IconInfo />}>
        Small
      </Button>
      <Button variant='outline' size='small' iconRight={<IconInfo />}>
        Small
      </Button>
    </StorySection>
  ),
  parameters: {
    controls: { disable: true },
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
      {variants.map((variant) => (
        <StorySection key={variant} title={variant}>
          {(['big', 'small'] as const).map((size) =>
            (
              [
                ['Default', {}],
                ['Loading', { loading: true }],
                ['Disabled', { disabled: true }],
              ] as const
            ).map(([label, state]) => (
              <Button
                key={`${size}-${label}`}
                variant={variant}
                size={size}
                counter={<Counter variant='error'>3</Counter>}
                counterLabel='3 unread'
                {...state}
              >
                {label}
              </Button>
            )),
          )}
        </StorySection>
      ))}
      <StorySection title='counter variants'>
        {counterVariants.map((counterVariant) => (
          <Button
            key={counterVariant}
            variant='outline'
            counter={<Counter variant={counterVariant}>3</Counter>}
            counterLabel='3 unread'
          >
            {counterVariant}
          </Button>
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

export const FullWidth: Story = {
  render: () => (
    <StoryContainer>
      <div style={{ width: 320 }}>
        <StorySection title='button'>
          <Button fullWidth>Continue</Button>
          <Button fullWidth variant='outline' size='small'>
            Cancel
          </Button>
        </StorySection>
        <StorySection title='link'>
          <Button fullWidth href='#keys' variant='subtle'>
            View keys
          </Button>
        </StorySection>
      </div>
    </StoryContainer>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          '`fullWidth` makes the button (or link button) fill its container; content stays centered.',
      },
    },
  },
}

export const AsLink: Story = {
  render: () => (
    <StoryContainer>
      {(['big', 'small'] as const).map((size) => (
        <StorySection key={size} title={size}>
          {variants.map((variant) => (
            <Button key={variant} variant={variant} size={size} href='#keys'>
              {variant}
            </Button>
          ))}
        </StorySection>
      ))}
      <StorySection title='disabled'>
        {variants.map((variant) => (
          <Button key={variant} variant={variant} href='#keys' disabled>
            {variant}
          </Button>
        ))}
      </StorySection>
    </StoryContainer>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'With `href`, `Button` renders an `<a>` for navigation: it keeps link semantics and routes through `LinkProvider`. It takes the anchor attributes instead of `type` and `loading`. `disabled` drops the `href` and `onClick` and sets `aria-disabled`, so the link is neither clickable nor focusable.',
      },
    },
  },
}

export const External: Story = {
  render: () => (
    <Button
      href='https://lido.fi'
      variant='outline'
      iconRight={<IconArrowNarrowUpRight />}
    >
      lido.fi
    </Button>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Absolute `http(s)` URLs open in a new tab with `rel="noopener noreferrer"`; pass `target` to override. An up-right arrow marks an outbound link.',
      },
    },
  },
}

export const WithRouter: Story = {
  render: () => (
    <DemoRouter>
      <StorySection>
        <Button href='/keys'>In-app: /keys</Button>
        <Button href='/settings' variant='outline'>
          In-app: /settings
        </Button>
        <Button
          href='https://lido.fi'
          variant='subtle'
          iconRight={<IconArrowNarrowUpRight />}
        >
          External: lido.fi
        </Button>
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
