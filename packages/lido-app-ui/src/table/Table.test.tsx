import { createRef } from 'react'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { InfoTooltip } from '../info-tooltip'
import { RankCell, Table, type TableColumn } from './Table'

type Row = { id: string; name: string; value: number }

const rows: Row[] = [
  { id: '1', name: 'Operator A', value: 10 },
  { id: '2', name: 'Operator B', value: 20 },
]

const columns: TableColumn<Row>[] = [
  { key: 'name', header: 'Name', sortable: true, info: 'Operator name' },
  { key: 'value', header: 'Value', align: 'right' },
]

describe('Table', () => {
  it('renders header and rows', () => {
    render(<Table columns={columns} rows={rows} rowKey={(row) => row.id} />)
    expect(screen.getByText('Operator A')).toBeDefined()
    expect(screen.getByText('Operator B')).toBeDefined()
  })

  it('forwards ref to the root and scrolls inside a wrapper', () => {
    const ref = createRef<HTMLDivElement>()
    render(
      <Table
        ref={ref}
        columns={columns}
        rows={rows}
        rowKey={(row) => row.id}
        dataTestId={{ root: 'root', scroller: 'scroller' }}
      />,
    )
    expect(ref.current).toBe(screen.getByTestId('root'))
    expect(screen.getByTestId('scroller').querySelector('table')).not.toBeNull()
  })

  it('calls onSortChange and reflects aria-sort on the sortable header', async () => {
    const onSortChange = vi.fn()
    render(
      <Table
        columns={columns}
        rows={rows}
        rowKey={(row) => row.id}
        sort={{ key: 'name', direction: 'asc' }}
        onSortChange={onSortChange}
      />,
    )
    const header = screen.getByRole('columnheader', { name: /Name/ })
    expect(header.getAttribute('aria-sort')).toBe('ascending')
    await userEvent.click(screen.getByRole('button', { name: 'Name' }))
    expect(onSortChange).toHaveBeenCalledWith({
      key: 'name',
      direction: 'desc',
    })
  })

  it('renders the column info tooltip trigger', () => {
    render(<Table columns={columns} rows={rows} rowKey={(row) => row.id} />)
    expect(screen.getByRole('img', { name: 'More info' })).toBeDefined()
  })

  it('applies the highlighted class from getRowProps', () => {
    render(
      <Table
        columns={columns}
        rows={rows}
        rowKey={(row) => row.id}
        getRowProps={(row) => ({ highlighted: row.id === '2' })}
      />,
    )
    expect(screen.getByText('Operator B').closest('tr')?.className).toMatch(
      /rowHighlighted/,
    )
    expect(screen.getByText('Operator A').closest('tr')?.className).not.toMatch(
      /rowHighlighted/,
    )
  })

  it('clickable rows are focusable and activate with Enter and Space', async () => {
    const onClick = vi.fn()
    const user = userEvent.setup()
    render(
      <Table
        columns={[{ key: 'name', header: 'Name' }]}
        rows={rows}
        rowKey={(row) => row.id}
        getRowProps={() => ({ onClick })}
      />,
    )
    const row = screen.getByText('Operator A').closest('tr') as HTMLElement
    expect(row.tabIndex).toBe(0)
    row.focus()
    await user.keyboard('{Enter}')
    await user.keyboard(' ')
    expect(onClick).toHaveBeenCalledTimes(2)
    await user.click(row)
    expect(onClick).toHaveBeenCalledTimes(3)
  })

  it('nested controls do not activate the row', async () => {
    const onClick = vi.fn()
    const onRemove = vi.fn()
    const user = userEvent.setup()
    render(
      <Table
        columns={[
          {
            key: 'name',
            header: 'Name',
            render: () => (
              <button type='button' onClick={onRemove}>
                Remove
              </button>
            ),
          },
        ]}
        rows={rows}
        rowKey={(row) => row.id}
        getRowProps={() => ({ onClick })}
      />,
    )
    const [button] = screen.getAllByRole('button', { name: 'Remove' })
    await user.click(button)
    button.focus()
    await user.keyboard('{Enter}')
    expect(onRemove).toHaveBeenCalledTimes(2)
    expect(onClick).not.toHaveBeenCalled()
  })

  it('info tooltip inside a cell does not activate the row', async () => {
    const onClick = vi.fn()
    render(
      <Table
        columns={[
          {
            key: 'name',
            header: 'Name',
            render: () => <InfoTooltip content='Details' />,
          },
        ]}
        rows={rows.slice(0, 1)}
        rowKey={(row) => row.id}
        getRowProps={() => ({ onClick })}
      />,
    )
    await userEvent.click(screen.getByRole('img', { name: 'More info' }))
    expect(onClick).not.toHaveBeenCalled()
  })

  it('non-clickable rows are not focusable', () => {
    render(<Table columns={columns} rows={rows} rowKey={(row) => row.id} />)
    expect(screen.getByText('Operator A').closest('tr')?.tabIndex).toBe(-1)
  })

  it('renders emptyState inside the table under the header', () => {
    render(
      <Table
        columns={columns}
        rows={[]}
        rowKey={(row) => row.id}
        emptyState={<span>No operators found</span>}
      />,
    )
    expect(screen.getByText('No operators found')).toBeDefined()
    expect(screen.getAllByRole('columnheader').length).toBe(2)
  })

  it('uses fixed layout when a column has a width', () => {
    const { container } = render(
      <Table
        columns={[{ key: 'name', header: 'Name', width: 100 }]}
        rows={rows}
        rowKey={(row) => row.id}
      />,
    )
    expect(container.querySelector('table')?.className).toMatch(/fixed/)
  })
})

describe('RankCell', () => {
  it('announces rank change', () => {
    render(<RankCell rank={3} change='up' />)
    expect(screen.getByText('3')).toBeDefined()
    expect(screen.getByRole('img', { name: 'Rank up' })).toBeDefined()
  })
})
