import type { Meta, StoryObj } from '@storybook/react'

import { Grid } from '../grid'
import { Tag } from '../tag'
import { StatCard, StatCardMeta } from '.'

const sparkline = (
  <svg
    viewBox='0 0 100 40'
    preserveAspectRatio='none'
    width='100%'
    height='100%'
    aria-hidden='true'
  >
    <path
      d='M0 32 L15 26 L30 29 L45 18 L60 22 L75 10 L100 14 L100 40 L0 40 Z'
      fill='var(--lido-app-ui-color-text-active)'
      fillOpacity='0.12'
    />
    <path
      d='M0 32 L15 26 L30 29 L45 18 L60 22 L75 10 L100 14'
      fill='none'
      stroke='var(--lido-app-ui-color-text-active)'
      strokeWidth='1.5'
      vectorEffect='non-scaling-stroke'
    />
  </svg>
)

const meta: Meta<typeof StatCard> = {
  title: 'Cards/StatCard',
  component: StatCard,
  tags: ['autodocs'],
  parameters: { storyBackground: 'page' },
  args: {
    title: 'Active keys',
    value: '128',
    valueSuffix: '/150',
    description: 'Depositable: 22',
  },
  argTypes: {
    size: { control: { type: 'radio' }, options: ['default', 'hero'] },
    link: { control: false },
    tag: {
      options: ['none', 'delta'],
      mapping: { none: undefined, delta: <Tag variant='success'>+2.4%</Tag> },
      control: { type: 'select' },
    },
    sparkline: {
      options: ['none', 'sparkline'],
      mapping: { none: undefined, sparkline },
      control: { type: 'select' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const Dashboard: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Cards in a `Grid` with `minItemWidth`: columns follow the container width. A `link` with `href` renders an anchor; with only `onClick` it renders a button.',
      },
    },
  },
  render: function Render() {
    return (
      <Grid minItemWidth={280} gap={24}>
        <StatCard
          title='Active keys'
          info='Keys currently attesting on the beacon chain.'
          value='128'
          valueSuffix='/150'
          description='Depositable: 22'
        />
        <StatCard
          title='Bond'
          value='15.4'
          valueSuffix='stETH'
          footer={
            <StatCardMeta
              items={[
                { label: 'Required bond', value: '15 stETH' },
                { label: 'Excess bond', value: '0.4 stETH' },
              ]}
            />
          }
        />
        <StatCard
          title='Rewards'
          value='6.2'
          valueSuffix='stETH'
          secondary='$28,537.38'
          link={{ label: 'Claim', onClick: () => undefined }}
        />
      </Grid>
    )
  },
}

export const Hero: Story = {
  args: {
    title: 'Total rewards earned',
    value: '42.318',
    valueSuffix: 'stETH',
    secondary: '$194,740.12',
    size: 'hero',
    description: undefined,
  },
}

export const HeroWithBond: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Hero card next to a default card; both stretch to equal height.',
      },
    },
  },
  render: function Render() {
    return (
      <Grid columns={{ base: '2fr 1fr', mdDown: 1 }} gap={24}>
        <StatCard
          size='hero'
          title='Total rewards earned'
          value='42.318'
          valueSuffix='stETH'
          secondary='$194,740.12'
          tag={<Tag variant='success'>+0.8%</Tag>}
        />
        <StatCard
          title='Bond'
          value='15.4'
          valueSuffix='stETH'
          link={{ label: 'Manage', href: '#' }}
          footer={
            <StatCardMeta
              items={[
                { label: 'Required', value: '15 stETH' },
                { label: 'Excess', value: '0.4 stETH' },
              ]}
            />
          }
        />
      </Grid>
    )
  },
}

export const WithSparkline: Story = {
  args: {
    title: 'Rewards, 30 days',
    value: '6.2',
    valueSuffix: 'stETH',
    tag: 'delta',
    description: 'Last 30 days',
    sparkline: 'sparkline',
  },
  parameters: {
    docs: {
      description: {
        story:
          'The `sparkline` slot fills the bottom 40% of the card behind the content.',
      },
    },
  },
}

export const FooterMeta: Story = {
  args: {
    title: 'Bond',
    value: '15.4',
    valueSuffix: 'stETH',
    description: undefined,
    footer: (
      <StatCardMeta
        items={[
          { label: 'Required bond', value: '15 stETH' },
          { label: 'Excess bond', value: '0.4 stETH' },
        ]}
      />
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          '`StatCardMeta` renders wrapping `label: value` pairs in the `footer` slot.',
      },
    },
  },
}
