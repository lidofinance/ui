import type { Meta, StoryObj } from '@storybook/react'
import { ContainerWidths, StoryContainer } from '../../.storybook/components'

import { Button } from '../button'
import { Input } from '../input'
import { SectionTitle } from '../section-title'
import { Table } from '../table'
import { spaces } from '../utils'
import { Card } from '.'
import { StatItem } from '../stat-item'

const meta: Meta<typeof Card> = {
  title: 'Cards/Card',
  component: Card,
  argTypes: {
    padding: { control: 'select', options: spaces },
    gap: { control: 'select', options: spaces },
    clip: { control: 'boolean' },
  },
  parameters: {
    storyBackground: 'page',
  },
}

const keyRows = [
  { id: '1', key: '0x8f3a...1c19', bond: '1.30 ETH' },
  { id: '2', key: '0x1c02...47ab', bond: '1.30 ETH' },
]

const keyColumns = [
  {
    key: 'key',
    header: 'Key',
    render: (row: (typeof keyRows)[number]) => row.key,
  },
  {
    key: 'bond',
    header: 'Bond',
    render: (row: (typeof keyRows)[number]) => row.bond,
  },
]

export default meta
type Story = StoryObj<typeof meta>

// Each story below wraps Card in a fixed-width div on purpose — that's the
// point being shown: Card always fills whatever width its parent gives it.

export const Basic: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'A typical action card: a `SectionTitle` header (with its own tooltip and action button), an `Input`, and a submit `Button`, the shape of a "do a thing" panel like claiming or supplying.',
      },
    },
  },
  render: (args) => (
    <div style={{ width: '100%', maxWidth: 750 }}>
      <Card {...args}>
        <SectionTitle
          size='large'
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
      <div style={{ width: '100%', maxWidth: 420 }}>
        <Card>
          <strong>Card title</strong>
          <Input placeholder='Placeholder' />
          <Button>Button</Button>
        </Card>
      </div>
      <div style={{ width: '100%', maxWidth: 800 }}>
        <Card>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: 24,
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

export const Stretch: Story = {
  render: () => (
    <div style={{ width: '100%', maxWidth: 560 }}>
      <Card align='stretch'>
        <SectionTitle title='Your keys' subtitle='Uploaded validator keys.' />
        <Table rows={keyRows} rowKey={(row) => row.id} columns={keyColumns} />
        <Button fullWidth>Upload keys</Button>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'By default children hug their content (`align="start"`). `align="stretch"` makes tables and full-width buttons fill the card.',
      },
    },
  },
}

export const Flush: Story = {
  render: () => (
    <div style={{ width: '100%', maxWidth: 560 }}>
      <Card padding={0} gap={0} clip align='stretch'>
        <Table rows={keyRows} rowKey={(row) => row.id} columns={keyColumns} />
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '`padding={0} gap={0} clip`: the table runs edge to edge and is clipped to the card corners. `clip` also clips focus rings and inline popovers, and tables needing horizontal scroll must scroll inside their own wrapper.',
      },
    },
  },
}

export const Spacing: Story = {
  render: () => (
    <StoryContainer gap={16}>
      {([{ padding: 16, gap: 8 }, {}] as const).map((props, i) => (
        <div key={i} style={{ width: '100%', maxWidth: 360 }}>
          <Card {...props}>
            <SectionTitle title={i === 0 ? 'Compact card' : 'Default card'} />
            <Input placeholder='Placeholder' />
            <Button>Button</Button>
          </Card>
        </div>
      ))}
    </StoryContainer>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '`padding` and `gap` take values from the spacing scale; the default is 32 for both.',
      },
    },
  },
}

export const NarrowContainers: Story = {
  render: () => (
    <ContainerWidths widths={[240, 320, 400, 600]}>
      <Card gap={8}>
        <SectionTitle title='Your keys' subtitle='Uploaded validator keys.' />
        <Button>Upload keys</Button>
      </Card>
    </ContainerWidths>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'At 400px and below the default padding drops from 32px to 20px. An explicit `padding` prop always wins.',
      },
    },
  },
}
