import type { Meta, StoryObj } from '@storybook/react'

import { Breadcrumbs } from '../breadcrumbs'
import { IconButton } from '../icon-button'
import { IconBell } from '../icons'
import { Logo } from '../logo'
import { NavLink } from '../nav-link'
import { ThemeSwitcher } from '../theme-switcher'
import { Header } from './Header'
import { HeaderNav } from './HeaderNav'

const meta: Meta<typeof Header> = {
  title: 'Navigation/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: { sticky: { control: 'boolean' } },
  args: { sticky: false },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'App top bar shell: 64px, page background, bottom border, gutters 52 / 32 (≤md) / 12 (≤sm). Content comes from the consumer: `children` fills the left, `actions` sits right with an 8px gap. Only the last child of `children` shrinks (put Breadcrumbs or HeaderNav last). `sticky` pins it to the viewport top; no ancestor may have `overflow: hidden/auto`.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const actions = (
  <>
    <ThemeSwitcher />
    <IconButton
      variant='surface'
      icon={<IconBell />}
      aria-label='Notifications'
    />
  </>
)

const breadcrumbs = (
  <Breadcrumbs
    items={[{ label: 'Page title', href: '#' }, { label: 'Page title' }]}
  />
)

const links = ['Stake', 'Earn', 'Lend', 'Swap', 'Portfolio']

export const Basic: Story = {
  parameters: {
    docs: {
      description: { story: 'Breadcrumbs on the left, controls on the right.' },
    },
  },
  render: (args) => (
    <Header {...args} actions={actions}>
      {breadcrumbs}
    </Header>
  ),
}

export const WithNavigation: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Logo and top-level links in `HeaderNav` (24px gap, page-gutter inset). See Navigation/HeaderNav for overflow behavior.',
      },
    },
  },
  render: (args) => (
    <Header {...args} actions={actions}>
      <Logo href='#' />
      <HeaderNav>
        {links.map((label, i) => (
          <NavLink key={label} href='#' active={i === 0}>
            {label}
          </NavLink>
        ))}
      </HeaderNav>
    </Header>
  ),
}
