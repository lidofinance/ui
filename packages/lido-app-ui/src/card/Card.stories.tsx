import type { Meta, StoryObj } from '@storybook/react'
import { StoryContainer } from '../../.storybook/components'

import { Button } from '../button'
import { Input } from '../input'
import { SectionTitle } from '../section-title'
import { Card } from '.'
import { StatItem } from '../stat-item'

const meta: Meta<typeof Card> = {
  title: 'Cards/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    storyBackground: 'var(--storybook-background-intence)',
    docs: {
      description: {
        component:
          'A typical action card: a `SectionTitle` header (with its own tooltip and action button), an `Input`, and a submit `Button` — the shape you get for a "do a thing" panel like claiming or supplying.',
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
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            <StatItem
              label='TVL'
              value='24.1B'
              subValue='Total value locked in the protocol'
            />
            <StatItem
              label='APR'
              value='3.2%'
              subValue='Annual percentage rate'
            />
            <StatItem
              label='Validators'
              value='12,480'
              subValue='Number of active validators'
            />
          </div>
        </Card>
      </div>
    </StoryContainer>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Any content can go inside — a narrow form-like card on the left, versus a wide card used purely to group a row of `StatItem` metrics on the right. `Card` itself only supplies the surface, padding and gap.',
      },
    },
  },
}
