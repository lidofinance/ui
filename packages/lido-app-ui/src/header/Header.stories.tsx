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
  argTypes: { sticky: { control: 'boolean' } },
  args: { sticky: false },
  parameters: {
    layout: 'fullscreen',
    storyBackground: 'page',
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

const navigation = (
  <HeaderNav>
    {links.map((label, i) => (
      <NavLink key={label} href='#' active={i === 0}>
        {label}
      </NavLink>
    ))}
  </HeaderNav>
)

export const WithNavigation: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Logo and top-level links in `HeaderNav` (24px gap, page-gutter spacing from the logo). See Navigation/HeaderNav for overflow behavior.',
      },
    },
  },
  render: (args) => (
    <Header {...args} actions={actions}>
      <Logo href='#' />
      {navigation}
    </Header>
  ),
}

export const Sticky: Story = {
  args: { sticky: true },
  parameters: {
    docs: {
      description: {
        story: 'Scroll the page: the Header stays pinned to the top.',
      },
    },
  },
  render: (args) => (
    <>
      <Header {...args} actions={actions}>
        <Logo href='#' />
        {navigation}
      </Header>
      <div style={{ height: '200vh' }} />
    </>
  ),
}

export const Mobile: Story = {
  globals: { viewport: { value: 'px375' } },
  render: (args) => (
    <Header {...args} actions={actions}>
      <Logo href='#' variant='auto' product='Operators' />
      {navigation}
    </Header>
  ),
}
