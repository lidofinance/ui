import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Sidebar } from './Sidebar'
import { SidebarInset } from './SidebarInset'
import { SidebarLayout } from './SidebarLayout'
import { SidebarToggle } from './SidebarToggle'
import { LOGO, TopBar, narrow } from './storyFixtures'

const meta: Meta<typeof SidebarToggle> = {
  title: 'Navigation/SidebarToggle',
  component: SidebarToggle,
  tags: ['autodocs'],
  parameters: {
    docs: {
      story: { inline: false, iframeHeight: 240 },
      description: {
        component:
          'Burger button that opens the Sidebar drawer. Hidden above `ml-down`, so these stories use a narrow viewport. Inside `SidebarLayout` it wires itself; your `onClick` runs first and `preventDefault()` skips the toggle.',
      },
    },
  },
  globals: narrow,
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => (
    <SidebarLayout>
      <Sidebar logo={LOGO} />
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
        story: 'Inside `SidebarLayout` the button opens the drawer.',
      },
    },
  },
}

export const Standalone: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false)
    return (
      <div style={{ padding: 12 }}>
        <TopBar>
          <SidebarToggle
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          />
        </TopBar>
        <p>State: {open ? 'open' : 'closed'}</p>
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Outside a layout, own the state and pass `onClick` and `aria-expanded` yourself.',
      },
    },
  },
}
