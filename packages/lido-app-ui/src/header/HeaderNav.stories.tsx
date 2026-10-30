import type { ReactNode } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { expect, waitFor, within } from '@storybook/test'

import { Logo } from '../logo'
import { NavLink } from '../nav-link'
import { Header } from './Header'
import { HeaderNav } from './HeaderNav'

const meta: Meta<typeof HeaderNav> = {
  title: 'Navigation/HeaderNav',
  component: HeaderNav,
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const DemoHeader = ({ children }: { children: ReactNode }) => (
  <Header>
    <Logo href='#' />
    {children}
  </Header>
)

const links = ['Stake', 'Earn', 'Lend', 'Swap', 'Portfolio']
const manyLinks = [
  'Stake',
  'Earn',
  'Lend',
  'Swap',
  'Portfolio',
  'Rewards',
  'Governance',
  'Analytics',
  'Docs',
  'Support',
]

export const Basic: Story = {
  parameters: {
    docs: {
      description: { story: 'Nav links in a `Header` next to the logo.' },
    },
  },
  render: () => (
    <DemoHeader>
      <HeaderNav>
        {links.map((label, i) => (
          <NavLink key={label} href='#' active={i === 0}>
            {label}
          </NavLink>
        ))}
      </HeaderNav>
    </DemoHeader>
  ),
}

export const Overflow: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Links overflow the 480px container: the nav scrolls and fades at the edges. The active item is far right and is scrolled into view on mount.',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const nav = within(canvasElement).getByRole('navigation', { name: 'Main' })
    const active = nav.querySelector('[aria-current="page"]') as HTMLElement
    await waitFor(() => {
      expect(nav.scrollWidth).toBeGreaterThan(nav.clientWidth)
      expect(nav.scrollLeft).toBeGreaterThan(0)
      const n = nav.getBoundingClientRect()
      const a = active.getBoundingClientRect()
      expect(a.left).toBeGreaterThanOrEqual(n.left)
      expect(a.right).toBeLessThanOrEqual(n.right)
    })
  },
  render: () => (
    <div style={{ maxWidth: 480 }}>
      <DemoHeader>
        <HeaderNav>
          {manyLinks.map((label, i) => (
            <NavLink key={label} href='#' active={i === manyLinks.length - 2}>
              {label}
            </NavLink>
          ))}
        </HeaderNav>
      </DemoHeader>
    </div>
  ),
}

export const ExternalLinks: Story = {
  parameters: {
    docs: {
      description: {
        story: '`external` links open in a new tab with a link icon.',
      },
    },
  },
  render: () => (
    <DemoHeader>
      <HeaderNav>
        <NavLink href='#' active>
          Dashboard
        </NavLink>
        <NavLink href='https://docs.lido.fi' external>
          Docs
        </NavLink>
        <NavLink href='https://research.lido.fi' external>
          Research
        </NavLink>
      </HeaderNav>
    </DemoHeader>
  ),
}
