import type { Meta, StoryObj } from '@storybook/react'

import { StorySection } from '../../.storybook/components'
import { Card } from '../card'
import { Skeleton } from './Skeleton'

const meta: Meta<typeof Skeleton> = {
  title: 'Content & Data/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  args: { variant: 'block', style: { width: 160 } },
  parameters: {
    docs: {
      description: {
        component:
          'Loading placeholder shapes with a subtle pulse animation, disabled for users who prefer reduced motion.',
      },
    },
  },
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
