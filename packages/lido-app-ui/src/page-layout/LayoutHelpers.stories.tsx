import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import cn from 'classnames'

import { Breadcrumbs } from '../breadcrumbs'
import { Button } from '../button'
import { Footer } from '../footer'
import { Header } from '../header'
import { Hidden } from '../hidden'
import { Logo } from '../logo'
import {
  SimpleCard,
  connectedActions,
  connectedSidebarGroups,
  footerLinks,
  mobileActions,
  storyParams,
} from '../recipes/fixtures'
import { Sidebar, SidebarInset, SidebarLayout, SidebarToggle } from '../sidebar'
import { SkipLink } from '../skip-link'
import { Stack } from '../stack'
import { breakpointWidths } from '../utils'
import { Layout } from './Layout'
import styles from './LayoutHelpers.stories.module.css'
import { Main } from './Main'
import { PageContent } from './PageContent'

const region = (label: string, kind: 'container' | 'component') => ({
  className: cn(styles.region, styles[kind]),
  'data-label': label,
})

const meta: Meta = {
  title: 'Layout/Helpers',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    storyBackground: 'page',
    docs: {
      story: { inline: false, iframeHeight: 720 },
      description: {
        component: [
          'Shell helpers that nest into the page frame. `Layout` is the root column; `SidebarLayout` is the row that owns the drawer state (`Sidebar` must be its direct child); `SidebarInset` is the column next to the Sidebar; `Main` is the `SkipLink` target and grows to push the Footer down. The left of `Header` is a `Stack` of `SidebarToggle`, a `Logo` (`Hidden above="lg"`) and `Breadcrumbs` (`Hidden below="lg"`); at `lg` and below the breadcrumbs repeat in content inside `Hidden above="lg"`.',
          'Apps without a sidebar use `Layout` > `Header` + `Main` + `Footer`.',
          '```\nLayout\n├─ banner (optional)\n└─ SidebarLayout\n   ├─ Sidebar\n   └─ SidebarInset\n      ├─ Header\n      │  └─ Stack (SidebarToggle, logo, breadcrumbs)\n      ├─ Main\n      │  └─ PageContent\n      │     └─ Breadcrumbs (lg and below)\n      └─ Footer\n```',
        ].join('\n\n'),
      },
    },
  },
  globals: { viewport: { value: 'px1440', isRotated: false } },
}

export default meta
type Story = StoryObj<typeof meta>

export const SidebarAnatomy: Story = {
  parameters: storyParams(
    'Exploded view of the sidebar shell: container helpers are padded to show nesting, the real layout has no padding. Blue dashed outlines are containers (`Layout`, `SidebarLayout`, `SidebarInset`, `Main`); green are components (`Sidebar`, `Header`, `PageContent`, `Footer`).',
  ),
  render: () => (
    <Layout {...region('Layout', 'container')}>
      <SkipLink />
      <SidebarLayout {...region('SidebarLayout', 'container')}>
        <Sidebar
          logo={<Logo product='Operators' href='#' />}
          {...region('Sidebar', 'component')}
        >
          {connectedSidebarGroups}
        </Sidebar>
        <SidebarInset {...region('SidebarInset', 'container')}>
          <Header actions={connectedActions} {...region('Header', 'component')}>
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
          <Main {...region('Main', 'container')}>
            <PageContent {...region('PageContent', 'component')}>
              <Hidden above='lg'>
                <Breadcrumbs items={[{ label: 'Dashboard' }]} />
              </Hidden>
              <SimpleCard title='Page title' />
            </PageContent>
          </Main>
          <Footer {...region('Footer', 'component')}>{footerLinks}</Footer>
        </SidebarInset>
      </SidebarLayout>
    </Layout>
  ),
}

export const TopNavAnatomy: Story = {
  parameters: storyParams(
    'Shell without a sidebar: `Layout` with `Header`, `Main` and `Footer`.',
  ),
  render: () => (
    <Layout {...region('Layout', 'container')}>
      <SkipLink />
      <Header actions={connectedActions} {...region('Header', 'component')}>
        <Logo href='#' />
      </Header>
      <Main {...region('Main', 'container')}>
        <PageContent {...region('PageContent', 'component')}>
          <SimpleCard title='Page title' />
        </PageContent>
      </Main>
      <Footer {...region('Footer', 'component')}>{footerLinks}</Footer>
    </Layout>
  ),
}

export const ControlledDrawer: Story = {
  parameters: storyParams(
    '`open` and `onOpenChange` on `SidebarLayout` drive the drawer from app state, so any control can open it.',
  ),
  globals: { viewport: { value: 'lg-down', isRotated: false } },
  render: function Render() {
    const [open, setOpen] = useState(false)
    return (
      <Layout>
        <SkipLink />
        <SidebarLayout open={open} onOpenChange={setOpen}>
          <Sidebar logo={<Logo product='Operators' href='#' />}>
            {connectedSidebarGroups}
          </Sidebar>
          <SidebarInset>
            <Header actions={connectedActions}>
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
                <SimpleCard title={`Drawer is ${open ? 'open' : 'closed'}`} />
                <Button size='small' onClick={() => setOpen(true)}>
                  Open menu from content
                </Button>
              </PageContent>
            </Main>
            <Footer>{footerLinks}</Footer>
          </SidebarInset>
        </SidebarLayout>
      </Layout>
    )
  },
}

const protocolCrumbs = [{ label: 'Protocol' }, { label: 'Overview' }]

export const SidebarHeader: Story = {
  parameters: storyParams(
    `Compose the left of \`Header\` with \`Stack\`: \`SidebarToggle\`, \`Logo\` in \`Hidden above="lg"\`, then breadcrumbs in \`Hidden below="lg"\`. Shown at ${breakpointWidths.md + 1}px: at \`lg\` (${breakpointWidths.lg}, the sidebar breakpoint) and below the toggle opens the drawer, the logo stands in for the Sidebar logo hidden inside it, and the breadcrumbs move into \`PageContent\`. Above \`lg\` only the breadcrumbs show (see Sidebar Anatomy).`,
  ),
  globals: { viewport: { value: 'md-up', isRotated: false } },
  render: () => (
    <Layout>
      <SkipLink />
      <SidebarLayout>
        <Sidebar logo={<Logo product='Operators' href='#' />}>
          {connectedSidebarGroups}
        </Sidebar>
        <SidebarInset>
          <Header actions={connectedActions}>
            <Stack direction='row' align='center' gap={12} grow>
              <SidebarToggle />
              <Hidden above='lg'>
                <Logo variant='compact' product='Operators' href='#' />
              </Hidden>
              <Hidden below='lg'>
                <Breadcrumbs items={protocolCrumbs} />
              </Hidden>
            </Stack>
          </Header>
          <Main>
            <PageContent>
              <Hidden above='lg'>
                <Breadcrumbs items={protocolCrumbs} />
              </Hidden>
              <SimpleCard title='Page title' />
            </PageContent>
          </Main>
          <Footer>{footerLinks}</Footer>
        </SidebarInset>
      </SidebarLayout>
    </Layout>
  ),
}

export const MobileBreadcrumbs: Story = {
  parameters: storyParams(
    'At `lg` and below the Header hides the breadcrumbs, so repeat them first in `PageContent` inside `Hidden above="lg"`.',
  ),
  globals: { viewport: { value: 'px375', isRotated: false } },
  render: () => (
    <Layout>
      <SkipLink />
      <SidebarLayout>
        <Sidebar logo={<Logo product='Operators' href='#' />}>
          {connectedSidebarGroups}
        </Sidebar>
        <SidebarInset>
          <Header actions={mobileActions}>
            <Stack direction='row' align='center' gap={12} grow>
              <SidebarToggle />
              <Hidden above='lg'>
                <Logo variant='compact' product='Operators' href='#' />
              </Hidden>
              <Hidden below='lg'>
                <Breadcrumbs items={protocolCrumbs} />
              </Hidden>
            </Stack>
          </Header>
          <Main>
            <PageContent>
              <Hidden above='lg'>
                <Breadcrumbs items={protocolCrumbs} />
              </Hidden>
              <SimpleCard title='Page title' />
            </PageContent>
          </Main>
          <Footer>{footerLinks}</Footer>
        </SidebarInset>
      </SidebarLayout>
    </Layout>
  ),
}
