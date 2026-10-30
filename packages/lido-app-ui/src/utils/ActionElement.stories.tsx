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
  args: {
    children: 'Action',
    onClick: fn(),
  },
  argTypes: {
    children: { control: { type: 'text' } },
    href: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
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
