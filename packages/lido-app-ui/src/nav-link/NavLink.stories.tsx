import type { Meta, StoryObj } from '@storybook/react'

import { IconLightning } from '../icons'
import { NavLink } from './NavLink'

const meta: Meta<typeof NavLink> = {
  title: 'Navigation/NavLink',
  component: NavLink,
  argTypes: {
    active: {
      control: 'boolean',
    },
    external: {
      control: 'boolean',
    },
    icon: {
      options: ['none', 'lightning'],
      mapping: { none: undefined, lightning: <IconLightning /> },
      control: 'select',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const nav = { display: 'flex', gap: 24 }

export const Basic: Story = {
  args: { href: '#', children: 'Stake', active: true },
}

export const InNavigation: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <nav style={nav}>
      <NavLink href='#' active>
        Stake
      </NavLink>
      <NavLink href='#'>Earn</NavLink>
      <NavLink href='#'>Lend</NavLink>
      <NavLink href='#'>Yieldcoin</NavLink>
      <NavLink href='#'>Swap</NavLink>
      <NavLink href='#'>Portfolio</NavLink>
    </nav>
  ),
}

export const WithIcons: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <nav style={nav}>
      <NavLink href='#' active icon={<IconLightning />}>
        Lend
      </NavLink>
      <NavLink href='#' external>
        Stake
      </NavLink>
      <NavLink href='#' external>
        Earn
      </NavLink>
      <NavLink href='#' external>
        Yieldcoin
      </NavLink>
      <NavLink href='#' external>
        Swap
      </NavLink>
    </nav>
  ),
}
