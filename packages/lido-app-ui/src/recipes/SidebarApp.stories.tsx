import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from '@storybook/test'

import { TestEnvBanner } from '@lidofinance/lido-shared-ui'

import { Breadcrumbs } from '../breadcrumbs'
import { Counter } from '../counter'
import { Disclaimer } from '../disclaimer'
import { Footer } from '../footer'
import { Header } from '../header'
import { Hidden } from '../hidden'
import {
  IconCircleStar,
  IconDashboard,
  IconGem,
  IconKeyRound,
  IconListCheck,
} from '../icons'
import { Logo } from '../logo'
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
import {
  SidebarShell,
  SimpleCard,
  connectedActions,
  connectedSidebarGroups,
  disconnectedActions,
  disconnectedSidebarGroups,
  footerLinks,
  mobileActions,
  sections,
  sidebarFooterItems,
  storyParams,
} from './fixtures'

type PlaygroundArgs = {
  stickyHeader: boolean
  banner: boolean
  sidebarFooter: boolean
  connected: boolean
  tall: boolean
  disclaimer: boolean
}

const meta: Meta<PlaygroundArgs> = {
  title: 'Recipes/Sidebar App',
  tags: ['autodocs'],
  argTypes: {
    stickyHeader: { control: 'boolean' },
    banner: { control: 'boolean' },
    sidebarFooter: { control: 'boolean' },
    connected: { control: 'boolean' },
    tall: { control: 'boolean' },
    disclaimer: { control: 'boolean' },
  },
  args: {
    stickyHeader: false,
    banner: false,
    sidebarFooter: false,
    connected: true,
    tall: false,
    disclaimer: false,
  },
  parameters: {
    layout: 'fullscreen',
    storyBackground: 'page',
    docs: {
      story: { inline: false, iframeHeight: 720 },
      source: { type: 'code' },
      description: {
        component:
          'App shell with a grouped Sidebar, Header and Footer: `Layout` > `SidebarLayout` > `Sidebar` + `SidebarInset` (`Header` > `Stack` + `Main` > `PageContent` > `Breadcrumbs` + `Footer`); see "Show code" and the anatomy in `Layout/Helpers`. Below `lg` (1280, the sidebar breakpoint) the Sidebar becomes a drawer opened from the Header. There Breadcrumbs center between the logo and the actions; below md they move from the Header into `PageContent` (`Hidden` around each copy). `Sidebar` must be a direct child of `SidebarLayout`: it measures the content above it (e.g. a banner) on its own. Render `SkipLink` first: it targets `Main` (`id=\'main-content\'`) by default. Use `useSidebar()` to close the drawer on programmatic navigation, or `useSidebarDrawer` to wire the parts by hand.',
      },
    },
  },
  globals: { viewport: { value: 'px1440', isRotated: false } },
}

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Toggle the layout options: sticky header, banner above the layout, sidebar footer, wallet state, long content and disclaimer.',
      },
    },
  },
  render: ({
    stickyHeader,
    banner,
    sidebarFooter,
    connected,
    tall,
    disclaimer,
  }) => {
    const breadcrumbs = [
      { label: connected ? 'Dashboard' : 'Validate with Lido' },
    ]
    return (
      <Layout>
        <SkipLink />
        {banner && <TestEnvBanner />}
        <SidebarLayout>
          <Sidebar
            logo={<Logo product='Operators' href='#' />}
            footer={sidebarFooter ? sidebarFooterItems : undefined}
          >
            {connected ? connectedSidebarGroups : disconnectedSidebarGroups}
          </Sidebar>
          <SidebarInset>
            <Header
              sticky={stickyHeader}
              actions={connected ? connectedActions : disconnectedActions}
            >
              <Stack direction='row' align='center' gap={12} grow>
                <SidebarToggle />
                <Hidden above='lg'>
                  <Logo variant='compact' product='Operators' href='#' />
                </Hidden>
                <Hidden below='md'>
                  <Stack direction='row' justify={{ lg: 'center' }} grow>
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
                {tall ? sections : <SimpleCard title='Page title' />}
                {disclaimer && <Disclaimer />}
              </PageContent>
            </Main>
            <Footer>{footerLinks}</Footer>
          </SidebarInset>
        </SidebarLayout>
      </Layout>
    )
  },
}

export const Default: Story = {
  parameters: storyParams(
    'Default shell: grouped Sidebar, Header with breadcrumbs and controls, Footer.',
  ),
  render: () => <SidebarShell />,
}

export const Drawer: Story = {
  parameters: storyParams(
    'Below `lg` (1280, the sidebar breakpoint) the Sidebar is a drawer: the burger in the Header opens it with a scrim; it closes via the close button, scrim, Escape or a link click.',
  ),
  globals: { viewport: { value: 'sidebar-down', isRotated: false } },
  render: () => <SidebarShell />,
  play: async ({ canvasElement }) => {
    // Toggle is display:none until the viewport addon resizes the frame.
    await userEvent.click(
      await within(canvasElement).findByRole(
        'button',
        { name: 'Open menu' },
        { timeout: 3000 },
      ),
    )
    await expect(await within(document.body).findByRole('dialog')).toBeVisible()
  },
}

export const Mobile: Story = {
  parameters: storyParams(
    'At 375px `Hidden below="sm"` drops the theme switcher and notifications, so only the address button stays next to the burger and the actions do not overflow. Breadcrumbs move from the Header into content.',
  ),
  globals: { viewport: { value: 'px375', isRotated: false } },
  render: () => <SidebarShell actions={mobileActions} />,
}

export const WithTestEnvBanner: Story = {
  parameters: storyParams(
    'Banner above the body row with a sticky Header and Sidebar footer; the Sidebar fits the viewport below the banner without a manual offset.',
  ),
  render: () => (
    <SidebarShell banner stickyHeader sidebarFooter={sidebarFooterItems}>
      {sections}
    </SidebarShell>
  ),
}

export const Tablet: Story = {
  parameters: storyParams(
    'Below `lg` (1280, the sidebar breakpoint) Breadcrumbs sit centered between the logo and the actions; below md they move from the Header into `PageContent`.',
  ),
  globals: { viewport: { value: 'md-up', isRotated: false } },
  render: () => (
    <SidebarShell
      breadcrumbs={[{ label: 'Protocol' }, { label: 'Overview' }]}
    />
  ),
}

export const LongBreadcrumbs: Story = {
  parameters: storyParams(
    'At drawer widths a deep trail fills the space between the logo and the actions and fades at the edge instead of pushing the actions out.',
  ),
  globals: { viewport: { value: 'md-up', isRotated: false } },
  render: () => (
    <SidebarShell
      breadcrumbs={[
        'Operators',
        'Curated module',
        'Node operator 1234',
        'Keys',
        'Upload keys',
        'Confirmation',
      ].map((label) => ({ label }))}
    />
  ),
}

export const SidebarStates: Story = {
  parameters: storyParams(
    'Sidebar items with counters, a default-variant counter and disabled entries.',
  ),
  render: () => (
    <SidebarShell
      sidebarContent={
        <SidebarGroup label='My node operator'>
          <SidebarItem href='#' icon={<IconDashboard />} active>
            Dashboard
          </SidebarItem>
          <SidebarItem
            href='#'
            icon={<IconCircleStar />}
            trailing={<Counter variant='action'>3</Counter>}
          >
            Bond & Rewards
          </SidebarItem>
          <SidebarItem
            href='#'
            icon={<IconKeyRound />}
            trailing={<Counter>12</Counter>}
          >
            Keys
          </SidebarItem>
          <SidebarItem href='#' icon={<IconListCheck />} disabled>
            Surveys
          </SidebarItem>
          <SidebarItem href='#' icon={<IconGem />} disabled>
            Validate with Lido
          </SidebarItem>
        </SidebarGroup>
      }
    />
  ),
}
