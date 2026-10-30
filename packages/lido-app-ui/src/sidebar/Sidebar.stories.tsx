import { useState } from 'react'

import { useArgs } from '@storybook/preview-api'
import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from '@storybook/test'

import { Banner } from '../banner'
import { Button } from '../button'
import { Counter } from '../counter'
import {
  IconBolt,
  IconCircleStar,
  IconComponent,
  IconDashboard,
  IconGem,
  IconKeyRound,
  IconListCheck,
} from '../icons'
import { Stack } from '../stack'
import { DRAWER_QUERY, Sidebar } from './Sidebar'
import { SidebarGroup } from './SidebarGroup'
import { SidebarInset } from './SidebarInset'
import { SidebarItem } from './SidebarItem'
import { SidebarLayout } from './SidebarLayout'
import { SidebarToggle } from './SidebarToggle'
import { useSidebar } from './SidebarContext'
import { useSidebarDrawer } from './useSidebarDrawer'
import { LOGO, TopBar, narrow } from './storyFixtures'

const menu = (
  <>
    <SidebarGroup label='Operator'>
      <SidebarItem href='#dashboard' icon={<IconDashboard />} active>
        Dashboard
      </SidebarItem>
      <SidebarItem href='#keys' icon={<IconKeyRound />}>
        Keys
      </SidebarItem>
      <SidebarItem
        href='#bond'
        icon={<IconCircleStar />}
        trailing={<Counter variant='error'>1</Counter>}
      >
        Bond &amp; Rewards
      </SidebarItem>
      <SidebarItem
        href='#settings'
        icon={<IconBolt />}
        trailing={<Counter variant='default'>1</Counter>}
      >
        Settings
      </SidebarItem>
    </SidebarGroup>
    <SidebarGroup label='Protocol'>
      <SidebarItem href='#operators' icon={<IconComponent />}>
        My Operators
      </SidebarItem>
      <SidebarItem href='#surveys' icon={<IconListCheck />} disabled>
        Surveys
      </SidebarItem>
      <SidebarItem href='#validate' icon={<IconGem />} disabled>
        Validate with Lido
      </SidebarItem>
    </SidebarGroup>
  </>
)

const footer = (
  <Button variant='outline' size='small'>
    Contact support
  </Button>
)

const meta: Meta<typeof Sidebar> = {
  title: 'Navigation/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: { inline: false, iframeHeight: 720 },
      description: {
        component:
          '296px navigation column with `logo`, grouped items and a `footer` slot. At `sidebar-down` widths it becomes an off-canvas drawer controlled by `open` / `onClose`. The height of content above the Sidebar (e.g. a banner) is measured automatically so the sticky Sidebar fits the viewport; an explicit `--lido-app-ui-sidebar-offset` on an ancestor still overrides it. In drawer mode, clicking a link closes the drawer unless `closeOnNavigate={false}`.',
      },
    },
  },
  args: {
    logo: LOGO,
    children: menu,
    footer,
    open: true,
    closeOnNavigate: true,
    navLabel: 'Primary',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  // `open` only matters below the sidebar breakpoint (e.g. ~1000px docs iframes); `onClose` lets the `open` control reopen it.
  render: function Render(args) {
    const [, updateArgs] = useArgs()
    return (
      <div style={{ display: 'flex', minHeight: '100dvh' }}>
        <Sidebar {...args} onClose={() => updateArgs({ open: false })} />
      </div>
    )
  },
  parameters: {
    docs: { description: { story: 'Desktop composition.' } },
  },
}

export const AtSidebarUp: Story = {
  ...Basic,
  tags: ['!autodocs'],
  globals: { viewport: { value: 'sidebar-up', isRotated: false } },
  parameters: {
    docs: { description: { story: 'At 1280px the sidebar is persistent.' } },
  },
}

export const AtSidebarDown: Story = {
  ...Basic,
  tags: ['!autodocs'],
  globals: { viewport: { value: 'sidebar-down', isRotated: false } },
  parameters: {
    docs: { description: { story: 'At 1279px it becomes a drawer.' } },
  },
}

export const MobileDrawer: Story = {
  render: () => (
    <SidebarLayout style={{ minHeight: '100dvh' }}>
      <Sidebar logo={LOGO}>{menu}</Sidebar>
      <SidebarInset style={{ padding: 12 }}>
        <TopBar>
          <SidebarToggle />
        </TopBar>
      </SidebarInset>
    </SidebarLayout>
  ),
  play: async ({ canvasElement }) => {
    if (!window.matchMedia(DRAWER_QUERY).matches) return
    const canvas = within(canvasElement)
    // Toggle is display:none until the viewport addon resizes the frame.
    await userEvent.click(
      await canvas.findByRole(
        'button',
        { name: 'Open menu' },
        { timeout: 3000 },
      ),
    )
    await expect(await canvas.findByRole('dialog')).toBeVisible()
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          '`SidebarLayout` wires `Sidebar` and `SidebarToggle` through context (`useSidebarDrawer` does the same by spreading props explicitly). Below `sidebar-down` the sidebar slides in over a scrim; Escape, scrim click, the close button or following a link dismiss it. The play function opens it.',
      },
    },
  },
  globals: narrow,
}

const Paragraphs = ({ count = 30 }: { count?: number }) => (
  <>
    {Array.from({ length: count }, (_, index) => (
      <p key={index}>
        Paragraph {index + 1}. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore.
      </p>
    ))}
  </>
)

export const AppShell: Story = {
  render: () => (
    <SidebarLayout>
      <Sidebar logo={LOGO} footer={footer}>
        {menu}
      </Sidebar>
      <SidebarInset>
        <header
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: 12,
          }}
        >
          <TopBar>
            <SidebarToggle />
          </TopBar>
          <h1 style={{ margin: 0, fontSize: 20 }}>Dashboard</h1>
        </header>
        <main style={{ padding: 24 }}>
          <Paragraphs />
        </main>
      </SidebarInset>
    </SidebarLayout>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Full composition: sticky sidebar on desktop, drawer with a header toggle on narrow viewports.',
      },
    },
  },
}

export const WithBanner: Story = {
  render: () => (
    <>
      <Banner
        title='Scheduled maintenance'
        description='Some actions may be unavailable on Friday.'
      />
      <SidebarLayout>
        <Sidebar logo={LOGO} footer={footer}>
          {menu}
        </Sidebar>
        <SidebarInset style={{ padding: 24 }}>
          <Paragraphs />
        </SidebarInset>
      </SidebarLayout>
    </>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'The height of the banner above is measured automatically. The sidebar grows to full height as the banner scrolls away.',
      },
    },
  },
}

export const LongMenu: Story = {
  render: () => (
    <SidebarLayout defaultOpen style={{ minHeight: '100dvh' }}>
      <Sidebar logo={LOGO} footer={footer}>
        {Array.from({ length: 4 }, (_, group) => (
          <SidebarGroup key={group} label={`Group ${group + 1}`}>
            {Array.from({ length: 8 }, (_, item) => (
              <SidebarItem
                key={item}
                href={`#${group}-${item}`}
                icon={<IconDashboard />}
              >
                Item {group + 1}.{item + 1}
              </SidebarItem>
            ))}
          </SidebarGroup>
        ))}
      </Sidebar>
    </SidebarLayout>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'The menu scrolls while the logo row and footer stay pinned.',
      },
    },
  },
}

export const GroupWithoutLabel: Story = {
  render: () => (
    <SidebarLayout defaultOpen style={{ minHeight: '100dvh' }}>
      <Sidebar logo={LOGO}>
        <SidebarGroup>
          <SidebarItem href='#dashboard' icon={<IconDashboard />} active>
            Dashboard
          </SidebarItem>
          <SidebarItem href='#keys' icon={<IconKeyRound />}>
            Keys
          </SidebarItem>
        </SidebarGroup>
      </Sidebar>
    </SidebarLayout>
  ),
  parameters: {
    controls: { disable: true },
    docs: { description: { story: '`label` on `SidebarGroup` is optional.' } },
  },
}

const SidebarStatus = () => {
  const sidebar = useSidebar()
  return (
    <Stack direction='row' align='center' gap={12}>
      <span>Drawer: {sidebar?.open ? 'open' : 'closed'}</span>
      <Button size='small' onClick={() => sidebar?.setOpen(true)}>
        Open drawer
      </Button>
    </Stack>
  )
}

export const ControlledLayout: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false)
    return (
      <SidebarLayout
        open={open}
        onOpenChange={setOpen}
        style={{ minHeight: '100dvh' }}
      >
        <Sidebar logo={LOGO}>{menu}</Sidebar>
        <SidebarInset style={{ padding: 12, gap: 12 }}>
          <TopBar>
            <SidebarToggle />
          </TopBar>
          <SidebarStatus />
          <span>Controlled state: {String(open)}</span>
        </SidebarInset>
      </SidebarLayout>
    )
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          '`SidebarLayout` with `open` / `onOpenChange`. Descendants read the same state through `useSidebar()`.',
      },
    },
  },
  globals: narrow,
}

export const WithDrawerHook: Story = {
  render: function Render() {
    const { sidebarProps, toggleProps } = useSidebarDrawer()
    return (
      <div style={{ display: 'flex', minHeight: '100dvh' }}>
        <Sidebar logo={LOGO} {...sidebarProps}>
          {menu}
        </Sidebar>
        <SidebarInset style={{ padding: 12 }}>
          <TopBar>
            <SidebarToggle {...toggleProps} />
          </TopBar>
        </SidebarInset>
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Without `SidebarLayout`: `useSidebarDrawer()` returns props to spread onto `Sidebar` and `SidebarToggle`.',
      },
    },
  },
  globals: narrow,
}

export const KeepOpenOnNavigate: Story = {
  render: () => (
    <SidebarLayout style={{ minHeight: '100dvh' }}>
      <Sidebar logo={LOGO} closeOnNavigate={false}>
        {menu}
      </Sidebar>
      <SidebarInset style={{ padding: 12 }}>
        <TopBar>
          <SidebarToggle />
        </TopBar>
      </SidebarInset>
    </SidebarLayout>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'With `closeOnNavigate={false}` the drawer stays open after following a link.',
      },
    },
  },
  globals: narrow,
}
