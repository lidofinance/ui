import type { Meta, StoryObj } from '@storybook/react'

import { ContainerWidths } from '../../.storybook/components'
import { Button } from '../button'
import { IconHourglass, IconKeyRound, IconSearch, IconUser } from '../icons'
import { EmptyState } from '.'

const meta = {
  title: 'Content & Data/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
  args: {
    title: 'No keys uploaded yet',
    description:
      'Upload validator keys and a deposit data file to get started.',
  },
  parameters: {
    docs: {
      description: {
        component:
          'Centered placeholder for empty lists, filtered-out results and zero-state screens. `size="large"` is the page-level variant; `fill` stretches it to a flex parent. `ErrorPage` is built on `size="large"`.',
      },
    },
  },
} satisfies Meta<typeof EmptyState>

export default meta
type Story = StoryObj<typeof meta>

export const NoKeys: Story = {
  render: function Render(args) {
    return (
      <EmptyState
        {...args}
        illustration={<IconKeyRound width={48} height={48} />}
        action={
          <>
            <Button>Upload keys</Button>
            <Button variant='outline'>Read the guide</Button>
          </>
        }
      />
    )
  },
}

export const EmptyRewardsHistory: Story = {
  args: {
    title: 'No rewards yet',
    description:
      'Rewards appear here after your first validator is activated and the next oracle report is published.',
  },
  render: function Render(args) {
    return (
      <EmptyState
        {...args}
        illustration={<IconHourglass width={48} height={48} />}
      />
    )
  },
}

export const NoOperators: Story = {
  args: {
    title: 'No operators found',
    description: 'Try adjusting your filters or search query.',
  },
  render: function Render(args) {
    return (
      <EmptyState
        {...args}
        illustration={<IconSearch width={48} height={48} />}
        action={<Button variant='outline'>Reset filters</Button>}
      />
    )
  },
}

export const Large: Story = {
  args: {
    size: 'large',
    title: 'No node operator for this address',
    description:
      'Connect the wallet you used to create your node operator, or create a new one.',
  },
  render: function Render(args) {
    return (
      <EmptyState
        {...args}
        illustration={<IconUser width={64} height={64} />}
        action={<Button>Create node operator</Button>}
      />
    )
  },
}

export const FillCard: Story = {
  args: {
    fill: true,
    title: 'No bond history',
    description: 'Bond top-ups and claims will be listed here.',
  },
  render: function Render(args) {
    return (
      <div
        style={{
          display: 'flex',
          maxWidth: 480,
          border: '1px solid var(--lido-app-ui-color-border-default)',
          borderRadius: 'var(--lido-app-ui-border-radius-lg)',
        }}
      >
        <EmptyState {...args} action={<Button>Top up bond</Button>} />
      </div>
    )
  },
}

export const NarrowContainers: Story = {
  args: {
    size: 'large',
    title: 'No node operator for this address',
    description:
      'Connect the wallet you used to create your node operator, or create a new one.',
  },
  render: function Render(args) {
    return (
      <ContainerWidths>
        <EmptyState
          {...args}
          illustration={<IconUser width={64} height={64} />}
          action={<Button>Create node operator</Button>}
        />
      </ContainerWidths>
    )
  },
  parameters: { controls: { disable: true } },
}
