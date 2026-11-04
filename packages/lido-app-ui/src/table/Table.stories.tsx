import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Address } from '../address'
import { Drawer } from '../drawer'
import { EmptyState } from '../empty-state'
import { IconButton } from '../icon-button'
import { IconLink } from '../icons'
import { Pagination } from '../pagination'
import { Tag } from '../tag'
import {
  RankCell,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
  type TableSort,
} from './Table'

const meta: Meta<typeof Table> = {
  title: 'Content & Data/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Data-driven table built on the composable parts (`TableRoot`, `TableRow`, ...). Wide content scrolls inside the table wrapper, never the page; below 600px of container width the edge gutters shrink. Rows with `onClick` are focusable and activate with Enter/Space.',
      },
    },
  },
  argTypes: {
    variant: { control: 'inline-radio', options: ['default', 'dense'] },
    minWidth: { control: 'number' },
    maxHeight: { control: 'number' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

type KeyRow = {
  id: string
  pubkey: string
  status: 'active' | 'pending' | 'exited'
  bond: string
  uploaded: string
}

const keyRows: KeyRow[] = [
  {
    id: '1',
    pubkey: '0x8f3a5b1c9d2e4f60718293a4b5c6d7e8f9011c19d',
    status: 'active',
    bond: '1.30 ETH',
    uploaded: 'Oct 28, 2026',
  },
  {
    id: '2',
    pubkey: '0x1c02a7be94d3c5f6a1b2c3d4e5f60718293a47ab1',
    status: 'active',
    bond: '1.30 ETH',
    uploaded: 'Oct 28, 2026',
  },
  {
    id: '3',
    pubkey: '0xa41f0c2d3e4b5a69788796a5b4c3d2e1f0a9b00e2',
    status: 'pending',
    bond: '1.30 ETH',
    uploaded: 'Nov 02, 2026',
  },
  {
    id: '4',
    pubkey: '0x77d9e1f2a3b4c5d6e7f8091a2b3c4d5e6f708192a',
    status: 'active',
    bond: '1.30 ETH',
    uploaded: 'Sep 14, 2026',
  },
  {
    id: '5',
    pubkey: '0x3be5c6d7e8f90a1b2c3d4e5f60718293a4b5c6d71',
    status: 'exited',
    bond: '0.00 ETH',
    uploaded: 'Jun 03, 2026',
  },
  {
    id: '6',
    pubkey: '0xc0ffee1234567890abcdef1234567890abcdef5d2',
    status: 'pending',
    bond: '1.30 ETH',
    uploaded: 'Nov 03, 2026',
  },
  {
    id: '7',
    pubkey: '0x5e6f708192a3b4c5d6e7f8091a2b3c4d5e6f70819',
    status: 'active',
    bond: '1.30 ETH',
    uploaded: 'Aug 19, 2026',
  },
  {
    id: '8',
    pubkey: '0x9a8b7c6d5e4f30211203f4e5d6c7b8a99a8b7c6d5',
    status: 'exited',
    bond: '0.00 ETH',
    uploaded: 'May 21, 2026',
  },
]

const statusVariant = {
  active: 'success',
  pending: 'warning',
  exited: 'neutral',
} as const

const PAGE_SIZE = 4

export const Keys: Story = {
  parameters: { docs: { source: { type: 'code' } } },
  render: function Render(args) {
    const [sort, setSort] = useState<TableSort>({
      key: 'uploaded',
      direction: 'desc',
    })
    const [page, setPage] = useState(1)
    const [selected, setSelected] = useState<KeyRow>()

    const sorted = [...keyRows].sort((a, b) => {
      const left = String(a[sort.key as keyof KeyRow])
      const right = String(b[sort.key as keyof KeyRow])
      return sort.direction === 'asc'
        ? left.localeCompare(right)
        : right.localeCompare(left)
    })
    const pageRows = sorted.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

    return (
      <>
        <Table<KeyRow>
          {...(args as object)}
          sort={sort}
          onSortChange={setSort}
          rowKey={(row) => row.id}
          rows={pageRows}
          columns={[
            {
              key: 'pubkey',
              header: 'Public key',
              render: (row) => (
                <Address address={row.pubkey} symbols={6} copy />
              ),
            },
            {
              key: 'status',
              header: 'Status',
              sortable: true,
              render: (row) => (
                <Tag variant={statusVariant[row.status]}>{row.status}</Tag>
              ),
            },
            {
              key: 'bond',
              header: 'Bond',
              align: 'right',
              info: 'Bond locked for this key',
            },
            {
              key: 'uploaded',
              header: 'Uploaded',
              align: 'right',
              sortable: true,
            },
            {
              key: 'explorer',
              header: '',
              'aria-label': 'Explorer',
              align: 'right',
              width: 64,
              render: (row) => (
                <IconButton
                  aria-label='Open in beaconcha.in'
                  variant='ghost'
                  icon={<IconLink />}
                  onClick={() =>
                    window.open(`https://beaconcha.in/validator/${row.pubkey}`)
                  }
                />
              ),
            },
          ]}
          getRowProps={(row) => ({ onClick: () => setSelected(row) })}
          footer={
            <Pagination
              page={page}
              pageCount={Math.ceil(keyRows.length / PAGE_SIZE)}
              onPageChange={setPage}
            />
          }
        />
        <Drawer
          open={selected != null}
          onClose={() => setSelected(undefined)}
          title='Key details'
        >
          {selected ? <Address address={selected.pubkey} copy /> : null}
        </Drawer>
      </>
    )
  },
}

type RewardRow = {
  id: string
  date: string
  amount: string
  status: 'claimed' | 'available'
}

const rewardRows: RewardRow[] = [
  { id: '1', date: 'Oct 28, 2026', amount: '0.0412 ETH', status: 'available' },
  { id: '2', date: 'Sep 28, 2026', amount: '0.0398 ETH', status: 'claimed' },
  { id: '3', date: 'Aug 28, 2026', amount: '0.0377 ETH', status: 'claimed' },
]

export const RewardsHistoryClickableRows: Story = {
  parameters: { docs: { source: { type: 'code' } } },
  render: function Render(args) {
    const [selected, setSelected] = useState<string>()
    return (
      <Table<RewardRow>
        {...(args as object)}
        rowKey={(row) => row.id}
        rows={rewardRows}
        columns={[
          { key: 'date', header: 'Date' },
          { key: 'amount', header: 'Reward', align: 'right' },
          {
            key: 'status',
            header: 'Status',
            align: 'right',
            render: (row) => (
              <Tag variant={row.status === 'claimed' ? 'neutral' : 'success'}>
                {row.status}
              </Tag>
            ),
          },
        ]}
        getRowProps={(row) => ({
          highlighted: row.id === selected,
          onClick: () => setSelected(row.id),
        })}
        footer={<span>Click or press Enter on a row to select it</span>}
      />
    )
  },
}

type RankRow = {
  id: string
  rank: number
  change: 'up' | 'down' | 'none'
  name: string
  apr: string
}

const rankRows: RankRow[] = [
  { id: '1', rank: 1, change: 'up', name: 'Lido Node Operator', apr: '3.8%' },
  { id: '2', rank: 2, change: 'none', name: 'You', apr: '3.6%' },
  { id: '3', rank: 3, change: 'down', name: 'Everstake', apr: '3.4%' },
  { id: '4', rank: 4, change: 'none', name: 'Chorus One', apr: '3.3%' },
  { id: '5', rank: 5, change: 'up', name: 'Stakefish', apr: '3.2%' },
  { id: '6', rank: 6, change: 'down', name: 'P2P.org', apr: '3.1%' },
]

export const ValmartRankings: Story = {
  args: { variant: 'dense', stickyHeader: true, maxHeight: 220 },
  render: (args) => (
    <Table<RankRow>
      {...(args as object)}
      rowKey={(row) => row.id}
      rows={rankRows}
      columns={[
        {
          key: 'rank',
          header: 'Rank',
          width: 96,
          render: (row) => <RankCell rank={row.rank} change={row.change} />,
        },
        { key: 'name', header: 'Operator' },
        { key: 'apr', header: 'APR', align: 'right', info: 'Net 28d APR' },
      ]}
      getRowProps={(row) => ({ highlighted: row.name === 'You' })}
    />
  ),
}

type WideRow = {
  id: string
  pubkey: string
  status: string
  bond: string
  rewards: string
  uploaded: string
  exitEpoch: string
}

const wideRows: WideRow[] = [
  {
    id: '1',
    pubkey: '0x8f3a…c19d',
    status: 'active',
    bond: '1.30 ETH',
    rewards: '0.0412 ETH',
    uploaded: 'Oct 28, 2026',
    exitEpoch: '-',
  },
  {
    id: '2',
    pubkey: '0x1c02…7ab1',
    status: 'active',
    bond: '1.30 ETH',
    rewards: '0.0398 ETH',
    uploaded: 'Sep 14, 2026',
    exitEpoch: '-',
  },
  {
    id: '3',
    pubkey: '0xa41f…00e2',
    status: 'exited',
    bond: '0.00 ETH',
    rewards: '0.0377 ETH',
    uploaded: 'Jun 03, 2026',
    exitEpoch: '312450',
  },
]

export const HorizontalScroll: Story = {
  args: { minWidth: 760 },
  render: (args) => (
    <div style={{ width: 420, maxWidth: '100%' }}>
      <Table<WideRow>
        {...(args as object)}
        rowKey={(row) => row.id}
        rows={wideRows}
        columns={[
          { key: 'pubkey', header: 'Public key' },
          { key: 'status', header: 'Status' },
          { key: 'bond', header: 'Bond', align: 'right' },
          { key: 'rewards', header: 'Rewards', align: 'right' },
          { key: 'uploaded', header: 'Uploaded', align: 'right' },
          { key: 'exitEpoch', header: 'Exit epoch', align: 'right' },
        ]}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'The container is 420px wide and the table needs 760px: it scrolls inside the table wrapper while the page stays put.',
      },
    },
  },
}

export const Empty: Story = {
  render: (args) => (
    <Table<KeyRow>
      {...(args as object)}
      rowKey={(row) => row.id}
      rows={[]}
      columns={[
        { key: 'pubkey', header: 'Public key' },
        { key: 'status', header: 'Status' },
        { key: 'bond', header: 'Bond', align: 'right' },
      ]}
      emptyState={
        <EmptyState
          title='No keys yet'
          description='Upload validator keys to start earning rewards.'
        />
      }
    />
  ),
}

export const Composed: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      source: { type: 'code' },
      description: {
        story:
          'Building blocks for custom layouts. The parts carry no surface or scroller: wrap them in your own container. Pass `variant="dense"` to `TableRoot` for dense spacing.',
      },
    },
  },
  render: function Render() {
    const [sort, setSort] = useState<TableSort>({
      key: 'rank',
      direction: 'asc',
    })
    const [selected, setSelected] = useState<string>()
    const rows = [...rankRows.slice(0, 4)].sort((a, b) =>
      sort.direction === 'asc' ? a.rank - b.rank : b.rank - a.rank,
    )

    return (
      <div style={{ overflowX: 'auto' }}>
        <TableRoot>
          <TableHead>
            <tr>
              <TableHeaderCell
                sortable
                sortDirection={sort.direction}
                onSort={() =>
                  setSort({
                    key: 'rank',
                    direction: sort.direction === 'asc' ? 'desc' : 'asc',
                  })
                }
              >
                Rank
              </TableHeaderCell>
              <TableHeaderCell>Operator</TableHeaderCell>
              <TableHeaderCell align='right' info='Net 28d APR'>
                APR
              </TableHeaderCell>
            </tr>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                highlighted={row.id === selected}
                onClick={() => setSelected(row.id)}
              >
                <TableCell>
                  <RankCell rank={row.rank} change={row.change} />
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell align='right'>{row.apr}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableRoot>
      </div>
    )
  },
}
