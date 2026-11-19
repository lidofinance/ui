import type { Meta, StoryObj } from '@storybook/react'

import { ContainerWidths } from '../../.storybook/components'
import { Card } from '../card'
import { DataList, DataListRow } from '../data-list'
import { Divider } from '../divider'
import { Grid } from '../grid'
import { IconArrowRight, IconPriceUp } from '../icons'
import { Stack } from '../stack'
import { StatItem } from '../stat-item'
import { Tag } from '../tag'
import { TextLink } from '../text-link'
import { Typography } from '../typography'
import { storyParams } from './fixtures'

const meta: Meta = {
  title: 'Recipes/Stat Card',
  tags: ['autodocs'],
  parameters: {
    storyBackground: 'page',
    controls: { disable: true },
    docs: {
      description: {
        component:
          'A headline-metric card composed from `Card`, `StatItem`, `TextLink`, `Tag`, `Divider` and `DataList`. `Card` supplies the surface and narrow-container padding; `StatItem align="left"` supplies label, info tooltip, value, inline sub-value and description.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const unit = (text: string) => (
  <Typography variant='bodyLarge' weight='semibold' color='secondary' as='span'>
    {text}
  </Typography>
)

const BasicCard = () => (
  <Card gap={8} align='stretch'>
    <StatItem
      align='left'
      label='Active keys'
      info='Keys currently attesting on the beacon chain.'
      value={<>128 {unit('/150')}</>}
      description='Depositable: 22'
    />
  </Card>
)

export const Basic: Story = {
  parameters: storyParams('Value with a unit node and a description.'),
  render: () => (
    <div style={{ width: 360 }}>
      <BasicCard />
    </div>
  ),
}

export const Dashboard: Story = {
  parameters: storyParams(
    'Cards in a `Grid` with `minItemWidth`: columns follow the container width.',
  ),
  render: () => (
    <Grid minItemWidth={280} gap={24}>
      <BasicCard />
      <Card gap={8} align='stretch'>
        <StatItem
          align='left'
          label='Bond'
          value={<>15.4 {unit('stETH')}</>}
          subValue={<Tag variant='success'>+2.4%</Tag>}
        />
      </Card>
      <Card gap={8} align='stretch'>
        <StatItem
          align='left'
          label='Rewards'
          value={<>6.2 {unit('stETH')}</>}
          subValue='$28,537.38'
        />
      </Card>
    </Grid>
  ),
}

export const WithHeaderLink: Story = {
  parameters: storyParams(
    'A `TextLink` with a trailing `IconArrowRight` beside the `StatItem` in a row `Stack`; without `href` it renders a button.',
  ),
  render: () => (
    <div style={{ width: 360 }}>
      <Card align='stretch'>
        <Stack direction='row' justify='between' align='start' gap={16}>
          <StatItem
            align='left'
            label='Rewards'
            value={<>6.2 {unit('stETH')}</>}
            subValue='$28,537.38'
          />
          <TextLink icon={<IconArrowRight />} onClick={() => undefined}>
            Claim
          </TextLink>
        </Stack>
      </Card>
    </div>
  ),
}

export const WithFooterMeta: Story = {
  parameters: storyParams(
    '`Divider` plus a flush `DataList` replace the old footer slot.',
  ),
  render: () => (
    <div style={{ width: 360 }}>
      <Card gap={16} align='stretch'>
        <StatItem align='left' label='Bond' value={<>15.4 {unit('stETH')}</>} />
        <Divider />
        <DataList flush>
          <DataListRow label='Required bond' value='15 stETH' />
          <DataListRow label='Excess bond' value='0.4 stETH' />
        </DataList>
      </Card>
    </div>
  ),
}

export const NarrowContainers: Story = {
  parameters: storyParams(
    'At 400px and below `Card` drops its padding to 20px.',
  ),
  render: () => (
    <ContainerWidths>
      <Card gap={8} align='stretch'>
        <StatItem
          align='left'
          label='Total rewards earned'
          value={<>42.318 {unit('stETH')}</>}
          subValue={<Tag variant='success'>+0.8%</Tag>}
        />
      </Card>
    </ContainerWidths>
  ),
}

const demoAreaChart = (
  <svg
    viewBox='0 0 100 40'
    preserveAspectRatio='none'
    width='100%'
    height='100%'
    aria-hidden='true'
    style={{ display: 'block' }}
  >
    <path
      d='M0 36 L12 36 L12 30 L28 30 L28 24 L45 24 L45 18 L62 18 L62 12 L80 12 L80 6 L100 6 L100 40 L0 40 Z'
      fill='var(--lido-app-ui-color-text-active)'
      fillOpacity={0.15}
    />
    <path
      d='M0 36 L12 36 L12 30 L28 30 L28 24 L45 24 L45 18 L62 18 L62 12 L80 12 L80 6 L100 6'
      fill='none'
      stroke='var(--lido-app-ui-color-text-active)'
      strokeWidth={2}
      vectorEffect='non-scaling-stroke'
    />
  </svg>
)

const bigValue = (text: string) => (
  <Typography variant='h1' weight='medium' as='span'>
    {text}
  </Typography>
)

export const PerformanceOverview: Story = {
  parameters: storyParams(
    'Network overview from composed cards. The chart is the consumer\'s own element layered behind the content with `Card clip`; 42px values are `Typography variant="h1"` inside `StatItem`. The header-link card is built from two wrapping `Stack` rows so label/source and value/tag wrap instead of truncating.',
  ),
  render: () => (
    <Grid minItemWidth={400} gap={8}>
      <Card
        clip
        padding={20}
        align='stretch'
        style={{ position: 'relative', minHeight: 200 }}
      >
        <StatItem
          align='left'
          label='Module TVL, ETH'
          value={bigValue('2,760,139')}
          style={{ position: 'relative', flex: 'none' }}
        />
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: '50%',
            pointerEvents: 'none',
          }}
        >
          {demoAreaChart}
        </div>
      </Card>
      <Stack gap={8} align='stretch'>
        <Card padding={20} gap={4} align='stretch'>
          <Stack
            direction='row'
            wrap
            justify='between'
            align='center'
            columnGap={16}
            rowGap={0}
          >
            <Typography variant='bodyLarge' color='secondary' as='span'>
              Module performance
            </Typography>
            <Typography color='tertiary' as='span'>
              Source:{' '}
              <TextLink href='https://rated.network' size='inherit'>
                rated.network
              </TextLink>
            </Typography>
          </Stack>
          <Stack direction='row' wrap align='center' gap={8}>
            {bigValue('98.83%')}
            <Tag variant='success' icon={<IconPriceUp />}>
              0.31% higher than network
            </Tag>
          </Stack>
        </Card>
        <Grid minItemWidth={200} gap={8}>
          <Card padding={20} align='stretch'>
            <StatItem
              align='left'
              label='Active unique NOs'
              value='38'
              subValue='GINI: 0.9168'
            />
          </Card>
          <Card padding={20} align='stretch'>
            <StatItem align='left' label='Effective DAO fee' value='6.2%' />
          </Card>
        </Grid>
      </Stack>
    </Grid>
  ),
}
