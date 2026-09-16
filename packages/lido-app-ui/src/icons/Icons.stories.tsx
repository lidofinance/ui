import type { ComponentType, SVGProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import * as base from './components/base'
import * as chains from './components/chains'
import * as protocols from './components/protocols'
import * as token from './components/token'
import * as wallets from './components/wallets'

const meta: Meta = {
  title: 'Foundations/Icons',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Generated from SVG sources under `src/icons/svg/<category>` via `yarn icons:convert` — no sprite, no loader. Each one takes any `SVGProps`, so size them with `width`/`height` and colour them through `currentColor`. The token glyphs and logos (`token`, `protocols`, `chains`, `wallets`) carry their own colours.',
      },
    },
  },
}

export default meta
type Story = StoryObj

const renderIconGrid = (
  icons: Record<string, ComponentType<SVGProps<SVGSVGElement>>>,
  size = 24,
) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: `repeat(auto-fill, minmax(${size + 96}px, 1fr))`,
      gap: 24,
      fontFamily: 'var(--lido-app-ui-font-family)',
    }}
  >
    {Object.entries(icons).map(([name, Icon]) => (
      <div
        key={name}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          textAlign: 'center',
        }}
      >
        <Icon width={size} height={size} />
        <span
          style={{
            fontSize: 12,
            color: 'var(--lido-app-ui-color-text-secondary)',
          }}
        >
          {name}
        </span>
      </div>
    ))}
  </div>
)

export const Base: Story = {
  render: () => renderIconGrid(base),
  parameters: { controls: { disable: true } },
}

export const Token: Story = {
  render: () => renderIconGrid(token),
  parameters: { controls: { disable: true } },
}

export const Protocols: Story = {
  render: () => renderIconGrid(protocols, 40),
  parameters: { controls: { disable: true } },
}

export const Chains: Story = {
  render: () => renderIconGrid(chains, 40),
  parameters: { controls: { disable: true } },
}

export const Wallets: Story = {
  render: () => renderIconGrid(wallets, 40),
  parameters: { controls: { disable: true } },
}
