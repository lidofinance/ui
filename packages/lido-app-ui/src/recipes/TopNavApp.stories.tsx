import type { Meta, StoryObj } from '@storybook/react'

import { Footer } from '../footer'
import { Header, HeaderNav } from '../header'
import { IconLightning } from '../icons'
import { Logo } from '../logo'
import { NavLink } from '../nav-link'
import { Layout, Main, PageContent } from '../page-layout'
import { SkipLink } from '../skip-link'
import {
  SimpleCard,
  connectedActions,
  storyParams,
  topNavItems,
  topNavLinks,
  topNavShell,
} from './fixtures'

const meta: Meta = {
  title: 'Recipes/Top Nav App',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    storyBackground: 'page',
    docs: {
      story: { inline: false, iframeHeight: 720 },
      source: { type: 'code' },
      description: {
        component:
          'App shell without a Sidebar: `Layout` > `Header` (logo + `HeaderNav`) + `Main` > `PageContent` + `Footer`.',
      },
    },
  },
  globals: { viewport: { value: 'px1440', isRotated: false } },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: storyParams(
    'No Sidebar: logo and `HeaderNav` with `NavLink`s in the Header.',
  ),
  render: () => (
    <Layout>
      <SkipLink />
      <Header actions={connectedActions}>
        <Logo href='#' />
        <HeaderNav>
          {topNavLinks.map((label, i) => (
            <NavLink key={label} href='#' active={i === 0}>
              {label}
            </NavLink>
          ))}
        </HeaderNav>
      </Header>
      <Main>
        <PageContent>
          <SimpleCard title='Page title' />
        </PageContent>
      </Main>
      <Footer aside={<Logo href='#' />} />
    </Layout>
  ),
}

export const ExternalLinks: Story = {
  parameters: storyParams(
    'Product header: the current product is an active link with an icon, the others are external links.',
  ),
  render: () =>
    topNavShell(
      <>
        <NavLink href='#' active icon={<IconLightning />}>
          Lend
        </NavLink>
        {['Stake', 'Earn', 'Swap'].map((label) => (
          <NavLink key={label} href='#' external>
            {label}
          </NavLink>
        ))}
      </>,
    ),
}

export const Narrow: Story = {
  parameters: storyParams(
    'At narrow widths `HeaderNav` scrolls horizontally with an edge fade and keeps the active link in view.',
  ),
  globals: { viewport: { value: 'px599', isRotated: false } },
  render: () => topNavShell(topNavItems),
}
