import type { Meta, StoryObj } from '@storybook/react'

import { IconLightning } from '../icons'
import { NavLink } from './NavLink'

const meta: Meta<typeof NavLink> = {
  title: 'Navigation/NavLink',
  component: NavLink,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Top-navigation link for a Header without a Sidebar. 64px tall so the active underline sits on the Header border. Renders an anchor; wrap the app in `LinkProvider` to route in-app hrefs through your router.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const nav = { display: 'flex', gap: 24 }

export const Basic: Story = {
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
