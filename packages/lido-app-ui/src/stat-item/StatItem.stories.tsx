import type { Meta, StoryObj } from '@storybook/react'

import { Grid } from '../grid'
import { Stack } from '../stack'
import { IconShield, TokenEth, TokenSteth } from '../icons'
import { StatItem } from '.'

const meta: Meta<typeof StatItem> = {
  title: 'Content & Data/StatItem',
  component: StatItem,
  args: {
    label: 'Total supplied',
    value: '1,204,882',
  },
  argTypes: {
    align: { control: { type: 'radio' }, options: ['left', 'center'] },
    size: {
      control: { type: 'radio' },
      options: ['default', 'small', 'xsmall'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const Variants: Story = {
  render: function Render() {
    return (
      <Stack direction='row' gap={52} align='start'>
        <StatItem label='Total supplied' value='1,204,882' />
        <StatItem
          label='Collateral'
          value='12.4218'
          icon={<TokenSteth width={24} height={24} />}
        />
        <StatItem label='Net APY' value='3.24%' subValue='+0.12% last 24h' />
      </Stack>
    )
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Plain, with a token glyph, and with a secondary line.',
      },
    },
  },
}

export const Align: Story = {
  render: function Render() {
    return (
      <Stack direction='row' gap={52} align='start'>
        <StatItem
          align='left'
          titleIcon={<IconShield width={24} height={24} />}
          label='Rewards balance, stETH'
          info='Rewards accrue daily and compound automatically.'
          value='0.0841'
          icon={<TokenEth width={24} height={24} />}
          subValue='$271.88'
          description='Description text'
        />
        <StatItem
          align='center'
          titleIcon={<IconShield width={24} height={24} />}
          label='Available Liquidity'
          info='Funds currently available to borrow.'
          value='20.9K'
          icon={<TokenEth width={24} height={24} />}
          subValue='$271.88'
        />
      </Stack>
    )
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          "`align='left'` keeps `subValue` inline with the number and puts `description` on its own line below. `align='center'` (default) centers everything and drops `subValue` to its own centered line.",
      },
    },
  },
}

export const Sizes: Story = {
  render: function Render() {
    return (
      <Stack direction='row' gap={52} align='start'>
        {(['default', 'small', 'xsmall'] as const).map((size) => (
          <StatItem
            key={size}
            size={size}
            align='left'
            titleIcon={<IconShield width={24} height={24} />}
            label='Active keys'
            info='Keys attesting now.'
            value='1,204'
            subValue='107 keys'
            description='Description text'
          />
        ))}
      </Stack>
    )
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          '`small` and `xsmall` step the label and value type down and mute `subValue`; `xsmall` also shrinks `titleIcon` and `icon` to 20×20.',
      },
    },
  },
}

export const Row: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'A stats row is a `Grid` of `StatItem`s: columns follow the container width via `minItemWidth`.',
      },
    },
  },
  render: function Render() {
    return (
      <Grid minItemWidth={200} gap={24}>
        <StatItem label='Operators' value='312' subValue='+4 this week' />
        <StatItem
          label='Total bond'
          value='4,812.5'
          icon={<TokenSteth width={24} height={24} />}
        />
        <StatItem
          label='Active keys'
          value='18,204'
          info='Keys attesting now.'
        />
        <StatItem label='Avg. APR' value='3.24%' subValue='+0.12% last 24h' />
      </Grid>
    )
  },
}
