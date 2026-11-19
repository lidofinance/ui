import type { Meta, StoryObj } from '@storybook/react'
import cn from 'classnames'

import { Breadcrumbs } from '../breadcrumbs'
import { Footer } from '../footer'
import { Header } from '../header'
import { Hidden } from '../hidden'
import { Logo } from '../logo'
import {
  SimpleCard,
  connectedActions,
  connectedSidebarGroups,
  footerLinks,
  storyParams,
} from '../recipes/fixtures'
import { Sidebar, SidebarInset, SidebarLayout, SidebarToggle } from '../sidebar'
import { SkipLink } from '../skip-link'
import { Stack } from '../stack'
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
