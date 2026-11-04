import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { AddressButton } from '../address-button'
import { Breadcrumbs } from '../breadcrumbs'
import { Button } from '../button'
import { Counter } from '../counter'
import { Drawer } from '../drawer'
import { EmptyState } from '../empty-state'
import { Footer } from '../footer'
import { Header } from '../header'
import { Hidden } from '../hidden'
import { IconButton } from '../icon-button'
import { IconBell } from '../icons'
import { Logo } from '../logo'
import { Notification } from '../notification'
import { Layout, Main, PageContent } from '../page-layout'
import { Sidebar, SidebarInset, SidebarLayout, SidebarToggle } from '../sidebar'
import { SkipLink } from '../skip-link'
import { Stack } from '../stack'
import { ThemeSwitcher } from '../theme-switcher'
import {
  ADDRESS,
  SimpleCard,
  connectedSidebarGroups,
  footerLinks,
  storyParams,
} from './fixtures'

const meta: Meta = {
  title: 'Recipes/Notifications Drawer',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    storyBackground: 'page',
    docs: {
      story: { inline: false, iframeHeight: 720 },
      source: { type: 'code' },
      description: {
        component:
          'Sidebar app shell where the bell `IconButton` in the `Header` actions opens a right-side `Drawer` with a list of `Notification`s. Keep the open state next to the button; `Drawer` portals itself, so it can be rendered anywhere in the tree.',
      },
    },
  },
  globals: { viewport: { value: 'px1440', isRotated: false } },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: storyParams(
    'Click the bell to open the drawer; dismiss a notification with its close button. Escape, the scrim and the close button close the drawer.',
  ),
  render: function Render() {
    const [open, setOpen] = useState(false)
    const [items, setItems] = useState([
      {
        id: 1,
        title: 'Your key got a strike',
        body: 'Key 0xa1b2…c3d4 missed attestations in the latest frame.',
      },
      {
        id: 2,
        title: 'Bond claimable',
        body: 'You can claim 0.42 stETH of rewards.',
      },
      {
        id: 3,
        title: 'Withdrawal requested',
        body: 'Your request for 1.2 stETH is in the queue.',
      },
    ])
    const dismiss = (id: number) =>
      setItems((list) => list.filter((item) => item.id !== id))

    return (
      <Layout>
        <SkipLink />
        <SidebarLayout>
          <Sidebar logo={<Logo product='Operators' href='#' />}>
            {connectedSidebarGroups}
          </Sidebar>
          <SidebarInset>
            <Header
              actions={
                <>
                  <ThemeSwitcher />
                  <IconButton
                    variant='surface'
                    icon={<IconBell />}
                    counter={
                      items.length > 0 && <Counter>{items.length}</Counter>
                    }
                    aria-label={`Notifications, ${items.length} unread`}
                    aria-haspopup='dialog'
                    aria-expanded={open}
                    onClick={() => setOpen(true)}
                  />
                  <AddressButton address={ADDRESS} />
                </>
              }
            >
              <Stack direction='row' align='center' gap={12} grow>
                <SidebarToggle />
                <Hidden above='lg'>
                  <Logo variant='compact' product='Operators' href='#' />
                </Hidden>
                <Hidden below='lg'>
                  <Breadcrumbs items={[{ label: 'Dashboard' }]} />
                </Hidden>
              </Stack>
            </Header>
            <Main>
              <PageContent>
                <SimpleCard title='Dashboard' />
              </PageContent>
            </Main>
            <Footer>{footerLinks}</Footer>
          </SidebarInset>
        </SidebarLayout>
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          title='Notifications'
        >
          {items.length > 0 ? (
            <Stack as='ul' role='list' gap={12}>
              {items.map(({ id, title, body }) => (
                <Notification
                  key={id}
                  role='listitem'
                  fluid
                  title={title}
                  onClose={() => dismiss(id)}
                  actions={<Button size='small'>View</Button>}
                >
                  {body}
                </Notification>
              ))}
            </Stack>
          ) : (
            <EmptyState
              title='No notifications'
              description='Strikes, claimable rewards and withdrawals will show up here.'
            />
          )}
        </Drawer>
      </Layout>
    )
  },
}
