import type { ReactNode } from 'react'

import { TestEnvBanner } from '@lidofinance/lido-shared-ui'

import { AddressButton } from '../address-button'
import { Breadcrumbs } from '../breadcrumbs'
import { Button } from '../button'
import { Card } from '../card'
import { Counter } from '../counter'
import { Footer } from '../footer'
import { Header, HeaderNav } from '../header'
import { Hidden } from '../hidden'
import { IconButton } from '../icon-button'
import {
  IconAdjust,
  IconBell,
  IconBox,
  IconCircleStar,
  IconDashboard,
  IconGem,
  IconInfo,
  IconKeyRound,
  IconListCheck,
  IconSearch,
} from '../icons'
import { Logo } from '../logo'
import { NavLink } from '../nav-link'
import { Layout, Main, PageContent } from '../page-layout'
import {
  Sidebar,
  SidebarGroup,
  SidebarInset,
  SidebarItem,
  SidebarLayout,
  SidebarToggle,
} from '../sidebar'
import { SkipLink } from '../skip-link'
import { Stack } from '../stack'
import { TextLink } from '../text-link'
import { ThemeSwitcher } from '../theme-switcher'
import { Typography } from '../typography'

export const ADDRESS = '0x56f4a7c1d2e3b4a5968778695a4b3c2d1e0fc12e'

export const notifications = (
  <IconButton
    variant='surface'
    icon={<IconBell />}
    counter={<Counter>1</Counter>}
    aria-label='Notifications, 1 unread'
  />
)

export const connectedActions = (
  <>
    <ThemeSwitcher />
    {notifications}
    <AddressButton address={ADDRESS} />
  </>
)

// At ≤ sm only the address fits next to the burger and compact logo.
export const mobileActions = (
  <>
    <Hidden below='sm'>
      <ThemeSwitcher />
      {notifications}
    </Hidden>
    <AddressButton address={ADDRESS} />
  </>
)

export const disconnectedActions = (
  <>
    <ThemeSwitcher />
    <Button size='small'>Connect wallet</Button>
  </>
)

export const connectedSidebarGroups = (
  <>
    <SidebarGroup label='Protocol'>
      <SidebarItem href='#' icon={<IconDashboard />}>
        Overview
      </SidebarItem>
      <SidebarItem href='#' icon={<IconBox />}>
        Operators
      </SidebarItem>
      <SidebarItem href='#' icon={<IconSearch />}>
        Resources
      </SidebarItem>
    </SidebarGroup>
    <SidebarGroup label='My node operator'>
      <SidebarItem href='#' icon={<IconDashboard />} active>
        Dashboard
      </SidebarItem>
      <SidebarItem href='#' icon={<IconKeyRound />}>
        Keys
      </SidebarItem>
      <SidebarItem href='#' icon={<IconCircleStar />}>
        Bond & Rewards
      </SidebarItem>
      <SidebarItem href='#' icon={<IconAdjust />}>
        Settings
      </SidebarItem>
    </SidebarGroup>
  </>
)

export const disconnectedSidebarGroups = (
  <SidebarGroup label='My node operator'>
    <SidebarItem href='#' icon={<IconGem />} active>
      Validate with Lido
    </SidebarItem>
  </SidebarGroup>
)

export const sidebarFooterItems = (
  <>
    <SidebarItem href='#' icon={<IconListCheck />}>
      Documentation
    </SidebarItem>
    <SidebarItem href='#' icon={<IconInfo />}>
      Support
    </SidebarItem>
  </>
)

export const SimpleCard = ({ title }: { title: string }) => (
  <Card style={{ padding: 32 }}>
    <Typography variant='h3'>{title}</Typography>
    <Typography variant='body'>Simple page content.</Typography>
  </Card>
)

export const footerLinks = (
  <>
    <TextLink href='https://lido.fi/terms-of-use' external variant='secondary'>
      Terms of Use
    </TextLink>
    <TextLink
      href='https://lido.fi/privacy-notice'
      external
      variant='secondary'
    >
      Privacy Notice
    </TextLink>
  </>
)

export const topNavLinks = [
  'Stake',
  'Earn',
  'Lend',
  'Yieldcoin',
  'Swap',
  'Portfolio',
]

export const SidebarShell = ({
  breadcrumbs = [{ label: 'Dashboard' }],
  actions = connectedActions,
  sidebarContent = connectedSidebarGroups,
  sidebarFooter,
  stickyHeader,
  banner,
  children = <SimpleCard title='Page title' />,
}: {
  breadcrumbs?: { label: string }[]
  actions?: ReactNode
  sidebarContent?: ReactNode
  sidebarFooter?: ReactNode
  stickyHeader?: boolean
  banner?: boolean
  children?: ReactNode
}) => (
  <Layout>
    <SkipLink />
    {banner && <TestEnvBanner />}
    <SidebarLayout>
      <Sidebar
        logo={<Logo product='Operators' href='#' />}
        footer={sidebarFooter}
      >
        {sidebarContent}
      </Sidebar>
      <SidebarInset>
        <Header sticky={stickyHeader} actions={actions}>
          <Stack direction='row' align='center' gap={12} grow>
            <SidebarToggle />
            <Hidden above='ml'>
              <Logo variant='compact' product='Operators' href='#' />
            </Hidden>
            <Hidden below='md'>
              <Stack direction='row' justify={{ ml: 'center' }} grow>
                <Breadcrumbs items={breadcrumbs} />
              </Stack>
            </Hidden>
          </Stack>
        </Header>
        <Main>
          <PageContent>
            <Hidden above='md'>
              <Breadcrumbs items={breadcrumbs} />
            </Hidden>
            {children}
          </PageContent>
        </Main>
        <Footer>{footerLinks}</Footer>
      </SidebarInset>
    </SidebarLayout>
  </Layout>
)

export const sections = Array.from({ length: 6 }, (_, i) => (
  <SimpleCard key={i} title={`Section ${i + 1}`} />
))

export const storyParams = (story: string) => ({
  controls: { disable: true },
  docs: { description: { story } },
})

export const topNavShell = (nav: ReactNode) => (
  <Layout>
    <SkipLink />
    <Header actions={connectedActions}>
      <Logo href='#' />
      <HeaderNav>{nav}</HeaderNav>
    </Header>
    <Main>
      <PageContent>
        <SimpleCard title='Page title' />
      </PageContent>
    </Main>
    <Footer aside={<Logo href='#' />} />
  </Layout>
)

export const topNavItems = topNavLinks.map((label, i) => (
  <NavLink key={label} href='#' active={i === 0}>
    {label}
  </NavLink>
))
