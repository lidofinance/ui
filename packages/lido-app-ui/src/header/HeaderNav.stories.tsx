import type { ReactNode } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { NavLink } from '../nav-link'
import { HeaderNav } from './HeaderNav'

const meta: Meta<typeof HeaderNav> = {
  title: 'Navigation/HeaderNav',
  component: HeaderNav,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
    docs: {
      description: {
        component:
          '`<nav>` for top-nav headers: 24px gap, inline-start margin equals the page gutter. At narrow widths it scrolls horizontally with an edge fade and scrolls the active `NavLink` into view.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const DemoHeader = ({ children }: { children: ReactNode }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      height: 64,
      borderBottom: '1px solid var(--lido-app-ui-color-border-default)',
    }}
  >
    {children}
  </div>
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
    docs: { description: { story: 'Nav links next to a brand mark.' } },
  },
  render: () => (
    <DemoHeader>
      <strong>Lido</strong>
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
          'Links overflow at 599px: the nav scrolls and fades at the edges. The active item is far right and is scrolled into view on mount.',
      },
    },
  },
  globals: { viewport: { value: 'sm-down', isRotated: false } },
  render: () => (
    <DemoHeader>
      <strong>Lido</strong>
      <HeaderNav>
        {manyLinks.map((label, i) => (
          <NavLink key={label} href='#' active={i === manyLinks.length - 2}>
            {label}
          </NavLink>
        ))}
      </HeaderNav>
    </DemoHeader>
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
      <strong>Lido</strong>
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
