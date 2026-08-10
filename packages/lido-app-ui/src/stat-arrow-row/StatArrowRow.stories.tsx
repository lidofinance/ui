import type { Meta, StoryObj } from '@storybook/react'

import { DarkSurface } from '../../.storybook/components'
import { Button } from '../button'
import { TokenSteth } from '../icons'
import { StatArrowRow, type StatArrowRowStat } from '.'

const stats: StatArrowRowStat[] = [
  { label: 'Total supplied', value: '1,204,882' },
  { label: 'Net APY', value: '3.24%' },
  {
    label: 'Collateral',
    value: '12.4218',
    icon: <TokenSteth width={24} height={24} />,
  },
]

const meta: Meta<typeof StatArrowRow> = {
  title: 'Data display/StatArrowRow',
  component: StatArrowRow,
  tags: ['autodocs'],
  args: { stats, variant: 'onDark', arrowLabel: 'View product' },
  argTypes: {
    stats: { description: 'Label, value and an optional glyph per cell' },
    variant: {
      description: 'Picks the text colours for the navy band or a light card',
      options: ['onDark', 'onLight'],
      control: { type: 'inline-radio' },
    },
    arrowLabel: { description: 'Accessible name for the circular arrow' },
    mobileButton: {
      description: 'Replaces the arrow below 900px — usually a full-width CTA',
    },
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A clickable stats strip that leads somewhere — the product teaser row. The circular arrow is desktop-only: below 900px it disappears and `mobileButton` takes over, so always pass one.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const OnDark: Story = {
  render: () => (
    <DarkSurface>
      <StatArrowRow
        stats={stats}
        variant='onDark'
        mobileButton={<Button variant='white'>View product</Button>}
      />
    </DarkSurface>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Switch to the 375px viewport to watch the arrow swap for the button.',
      },
    },
  },
}

export const OnLight: Story = {
  render: () => (
    <StatArrowRow
      stats={stats}
      variant='onLight'
      mobileButton={<Button variant='black'>View product</Button>}
    />
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'The light variant, with a black mobile CTA to match.',
      },
    },
  },
}
