import type { CSSProperties } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { StorySection } from '../../.storybook/components'
import { IconLink } from '../icons'
import { TextLink } from '../text-link'
import { Typography } from '../typography'
import { Address } from '.'

const address = '0x56f4a7b2c9d1e8f3a6b5c4d3e2f1a0b9c8d7c12e'
const pubkey =
  '0x917c8a63d7ae7a69e1d4b3c2a5f6e7d8c9b0a1f2e3d4c5b6a7f8e9d0c1b2a3f4e5d6c7b8a9f0e1d2c3b4a5f6bf1bad3c'

const meta = {
  title: 'Content & Data/Address',
  component: Address,
  tags: ['autodocs'],
  args: { address, symbols: 4 },
  argTypes: {
    symbols: {
      description:
        'Characters kept on each side after `0x`. `0` shows the full value.',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Trimmed hex with optional identicon, full-value tooltip, copy button and trailing slot. Font is inherited, so wrap it in the typography you need.',
      },
    },
  },
} satisfies Meta<typeof Address>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: (args) => (
    <Typography variant='body' as='div'>
      <Address {...args} />
    </Typography>
  ),
}

export const Options: Story = {
  render: () => (
    <Typography variant='body' as='div'>
      <StorySection>
        <Address address={address} identicon={28} />
        <Address address={address} tooltip />
        <Address address={address} copy />
        <Address address={address} identicon={28} tooltip copy />
        <Address address={pubkey} symbols={6} tooltip copy />
      </StorySection>
    </Typography>
  ),
  parameters: { controls: { disable: true } },
}

export const Full: Story = {
  render: () => (
    <Typography variant='body' as='div'>
      <div style={{ maxWidth: 320 }}>
        <Address address={pubkey} symbols={0} copy />
      </div>
    </Typography>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          '`symbols={0}` shows the full value, wrapping within the container; the copy button stays beside it.',
      },
    },
  },
}

const explorerIcon: CSSProperties = {
  display: 'inline-flex',
  width: 20,
  height: 20,
  color: 'var(--lido-app-ui-color-icons-tertiary)',
}

export const AdditionalContent: Story = {
  render: () => (
    <Typography variant='body' as='div'>
      <Address address={pubkey} symbols={6} copy>
        {[1, 2, 3].map((n) => (
          <a
            key={n}
            href='https://etherscan.io'
            target='_blank'
            rel='noopener noreferrer'
            aria-label={`Explorer ${n}`}
            style={explorerIcon}
          >
            <IconLink width='100%' height='100%' />
          </a>
        ))}
      </Address>
    </Typography>
  ),
  parameters: { controls: { disable: true } },
}

export const OperatorCardRow: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        fontFamily: 'var(--lido-app-ui-font-family)',
        fontSize: 'var(--lido-app-ui-font-size-label)',
        fontWeight: 'var(--lido-app-ui-font-weight-medium)',
        lineHeight: '20px',
        color: 'var(--lido-app-ui-color-text-secondary)',
      }}
    >
      Rewards:
      <Address address={address} identicon={16} tooltip>
        <TextLink
          external
          href={`https://etherscan.io/address/${address}`}
          icon={<IconLink />}
          aria-label='Open in explorer'
          style={{ color: 'var(--lido-app-ui-color-icons-tertiary)' }}
        />
      </Address>
    </div>
  ),
  parameters: { controls: { disable: true } },
}
