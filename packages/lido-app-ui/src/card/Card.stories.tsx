import type { Meta, StoryObj } from '@storybook/react'
import { StoryContainer } from '../../.storybook/components'

import { Button } from '../button'
import { Input } from '../input'
import { SectionTitle } from '../section-title'
import { StatsRow } from '../stats-row'
import { Card } from '.'

const meta: Meta<typeof Card> = {
  title: 'Layout/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    storyBackground: 'var(--storybook-background-intence)',
    docs: {
      description: {
        component:
          "A plain surface container — 32px padding, 32px gap between children, white background. It has no size or interactive variants: it fills its parent's width, so the parent decides how wide it renders and what goes inside.",
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Each story below wraps Card in a fixed-width div on purpose — that's the
// point being shown: Card always fills whatever width its parent gives it.

export const Basic: Story = {
  render: (args) => (
    <div style={{ width: 750 }}>
      <Card {...args}>
        <SectionTitle
          title='Choose a token to claim'
          subtitle='Splitter addresses receive stETH. Choose the token for your Rewards Address.'
          tooltip='Splitter addresses receive stETH.'
          action={
            <Button variant='outline' size='small'>
              Learn more
            </Button>
          }
        />
        <Input placeholder='Placeholder' />
        <Button>Button</Button>
      </Card>
    </div>
  ),
}

export const Variants: Story = {
  render: () => (
    <StoryContainer gap={16}>
      <div style={{ width: 420 }}>
        <Card>
          <strong>Card title</strong>
          <Input placeholder='Placeholder' />
          <Button>Button</Button>
        </Card>
      </div>
      <div style={{ width: 800 }}>
        <Card>
          <StatsRow
            items={[
              {
                label: 'TVL',
                value: '24.1B',
                subValue: 'Total value locked in the protocol',
              },
              {
                label: 'APR',
                value: '3.2%',
                subValue: 'Annual percentage rate',
              },
              {
                label: 'Validators',
                value: '12,480',
                subValue: 'Number of active validators',
              },
            ]}
          />
        </Card>
      </div>
    </StoryContainer>
  ),
}
