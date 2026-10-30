import type { Meta, StoryObj } from '@storybook/react'

import { useState, type CSSProperties } from 'react'

import { StorySection } from '../../.storybook/components'
import { Button } from '../button'
import { Card } from '../card'
import { Typography } from '../typography'
import { Skeleton } from './Skeleton'

const meta: Meta<typeof Skeleton> = {
  title: 'Content & Data/Skeleton',
  component: Skeleton,
  args: { variant: 'block', style: { width: 160 } },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const Variants: Story = {
  render: () => (
    <StorySection>
      <Skeleton variant='text' style={{ width: 120 }} />
      <Skeleton variant='block' style={{ width: 160 }} />
      <Skeleton variant='circle' />
    </StorySection>
  ),
  parameters: { controls: { disable: true } },
}

export const TextLines: Story = {
  render: () => <Skeleton variant='text' lines={3} style={{ width: 240 }} />,
  parameters: { controls: { disable: true } },
}

export const Fill: Story = {
  render: () => (
    <div style={{ width: 240, height: 120 }}>
      <Skeleton fill />
    </div>
  ),
  parameters: { controls: { disable: true } },
}

export const InCard: Story = {
  render: () => (
    <Card style={{ width: 340 }}>
      <Skeleton variant='circle' style={{ width: 48 }} />
      <Skeleton variant='text' lines={2} />
      <Skeleton variant='block' style={{ height: 120 }} />
    </Card>
  ),
  parameters: {
    storyBackground: 'page',
    controls: { disable: true },
  },
}

export const MatchesTypography: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {(['description', 'body', 'bodyLarge'] as const).map((variant) => (
        <div
          key={variant}
          style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}
        >
          <Typography variant={variant} style={{ width: 'min(200px, 45%)' }}>
            First line
            <br />
            Second line
            <br />
            Third line
          </Typography>
          <Typography variant={variant} style={{ width: 'min(200px, 45%)' }}>
            <Skeleton variant='text' lines={3} />
          </Typography>
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
}

const srOnly: CSSProperties = {
  position: 'absolute',
  width: 1,
  height: 1,
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  whiteSpace: 'nowrap',
}

export const InRegion: Story = {
  render: function Render() {
    const [loading, setLoading] = useState(true)
    return (
      <section style={{ width: 240 }}>
        <span role='status' style={srOnly}>
          {loading ? 'Loading rewards…' : ''}
        </span>
        <div aria-busy={loading}>
          {loading ? (
            <Skeleton variant='text' lines={3} />
          ) : (
            <Typography variant='body'>Rewards loaded.</Typography>
          )}
        </div>
        <Button onClick={() => setLoading((v) => !v)}>Toggle loading</Button>
      </section>
    )
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          '`aria-busy` alone is not announced. Keep a `role="status"` element mounted outside the busy subtree and change only its text; a region inserted already filled is not reliably announced, and announcements inside a busy subtree may be deferred.',
      },
    },
  },
}
