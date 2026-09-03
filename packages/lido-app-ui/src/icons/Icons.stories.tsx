import type { Meta, StoryObj } from '@storybook/react'

import {
  IconArrowRight,
  IconCheck,
  IconChevronDown,
  IconChevronUp,
  IconCross,
  IconInfo,
  IconShield,
  IconSpinner,
  IconWarning,
  TokenEth,
  TokenSteth,
  TokenWsteth,
} from '.'

const icons = {
  IconArrowRight,
  IconCheck,
  IconChevronDown,
  IconChevronUp,
  IconCross,
  IconInfo,
  IconShield,
  IconSpinner,
  IconWarning,
  TokenEth,
  TokenSteth,
  TokenWsteth,
}

const meta: Meta = {
  title: 'Foundations/Icons',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Hand-written inline SVG components — no sprite, no loader. Each one takes any `SVGProps`, so size them with `width`/`height` and colour them through `currentColor`. The token glyphs and `IconSpinner` carry their own colours.',
      },
    },
  },
}

export default meta
type Story = StoryObj

export const All: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
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
          <Icon width={24} height={24} />
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
  ),
  parameters: { controls: { disable: true } },
}
