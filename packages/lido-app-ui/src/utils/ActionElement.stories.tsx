import type { ComponentType, ReactNode } from 'react'
import { fn } from '@storybook/test'
import type { Meta, StoryObj } from '@storybook/react'

import { StorySection } from '../../.storybook/components'
import { ActionElement } from './ActionElement'

type DemoProps = {
  children?: ReactNode
  href?: string
  disabled?: boolean
  onClick?: () => void
}

const meta: Meta<DemoProps> = {
  title: 'Internal/ActionElement',
  component: ActionElement as ComponentType<DemoProps>,
  tags: ['autodocs'],
  args: {
    children: 'Action',
    onClick: fn(),
  },
  argTypes: {
    children: { control: { type: 'text' } },
    href: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
  },
  // ActionElement is unstyled; this only makes the demo elements visible.
  decorators: [
    (Story) => (
      <div
        style={{
          fontFamily: 'var(--lido-app-ui-font-family)',
          color: 'var(--lido-app-ui-color-text)',
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          "Internal primitive (not exported from the package yet) for upcoming components. Renders an `<a>` through `Anchor`, so `LinkProvider` applies, when `href` is set, otherwise a `<button type='button'>`. `disabled` on a link drops the `href`, sets `aria-disabled`, `tabIndex={-1}` and blocks `onClick`. It has no styles of its own.",
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Button: Story = {}

export const Link: Story = {
  args: { href: '#section', children: 'Link' },
}

export const DisabledLink: Story = {
  args: { href: '#section', disabled: true, children: 'Disabled link' },
}

export const Variants: Story = {
  render: () => (
    <StorySection>
      <ActionElement>Button</ActionElement>
      <ActionElement href='#section'>Link</ActionElement>
      <ActionElement href='#section' disabled>
        Disabled link
      </ActionElement>
    </StorySection>
  ),
  parameters: {
    controls: { disable: true },
  },
}
