import type { Meta, StoryObj } from '@storybook/react'
import { Button, LinkButton, type ButtonVariant } from '.'

import { StoryContainer, StorySection } from '../../.storybook/components'
import { Counter, type CounterVariant } from '../counter'
import { IconInfo } from '../icons'

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
    type: { table: { disable: true } },
  },
}

export default meta
type Story = StoryObj<typeof meta>

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

export const AsLink: Story = {
  render: () => (
    <StoryContainer>
      <StorySection title='LinkButton'>
        {variants.map((variant) => (
          <LinkButton key={variant} variant={variant} href='#section'>
            {variant}
          </LinkButton>
        ))}
      </StorySection>
      <StorySection title='disabled'>
        {variants.map((variant) => (
          <LinkButton key={variant} variant={variant} href='#section' disabled>
            {variant}
          </LinkButton>
        ))}
      </StorySection>
    </StoryContainer>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          '`LinkButton` is the same button as an `<a>`, for navigation: it keeps link semantics and routes through `LinkProvider`. `disabled` drops the `href` and sets `aria-disabled`. It takes `external` and the anchor attributes instead of `type` and `loading`.',
      },
    },
  },
}
