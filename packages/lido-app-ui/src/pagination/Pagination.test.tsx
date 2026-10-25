import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Pagination } from './Pagination'

describe('Pagination', () => {
  it('navigates with previous/next and disables them at the edges', () => {
    const onPageChange = vi.fn()
    const { rerender } = render(
      <Pagination page={1} pageCount={5} onPageChange={onPageChange} />,
    )
    const prev = screen.getByRole('button', { name: 'Previous page' })
    const next = screen.getByRole('button', { name: 'Next page' })
    expect(prev).toBeDisabled()
    expect(next).toBeEnabled()

    fireEvent.click(next)
    expect(onPageChange).toHaveBeenCalledWith(2)

    rerender(<Pagination page={5} pageCount={5} onPageChange={onPageChange} />)
    expect(screen.getByRole('button', { name: 'Next page' })).toBeDisabled()
    fireEvent.click(screen.getByRole('button', { name: 'Previous page' }))
    expect(onPageChange).toHaveBeenLastCalledWith(4)
  })

  it('commits a typed page on Enter and clamps it to the range', async () => {
    const onPageChange = vi.fn()
    render(<Pagination page={5} pageCount={10} onPageChange={onPageChange} />)
    const input = screen.getByLabelText('Page number') as HTMLInputElement

    await userEvent.click(input)
    fireEvent.change(input, { target: { value: '7' } })
    await userEvent.keyboard('{Enter}')
    expect(onPageChange).toHaveBeenCalledTimes(1)
    expect(onPageChange).toHaveBeenLastCalledWith(7)

    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: '42' } })
    fireEvent.blur(input)
    expect(onPageChange).toHaveBeenLastCalledWith(10)

    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: '0' } })
    fireEvent.blur(input)
    expect(onPageChange).toHaveBeenLastCalledWith(1)
  })

  it('strips non-digits and reverts an empty or escaped draft', async () => {
    const onPageChange = vi.fn()
    render(<Pagination page={3} pageCount={10} onPageChange={onPageChange} />)
    const input = screen.getByLabelText('Page number') as HTMLInputElement

    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: '1a2' } })
    expect(input.value).toBe('12')

    fireEvent.change(input, { target: { value: '' } })
    fireEvent.blur(input)
    expect(onPageChange).not.toHaveBeenCalled()
    expect(input.value).toBe('3')

    await userEvent.click(input)
    fireEvent.change(input, { target: { value: '9' } })
    await userEvent.keyboard('{Escape}')
    expect(onPageChange).not.toHaveBeenCalled()
    expect(input.value).toBe('3')
  })

  it('does not call onPageChange when the typed page equals the current one', () => {
    const onPageChange = vi.fn()
    render(<Pagination page={3} pageCount={10} onPageChange={onPageChange} />)
    const input = screen.getByLabelText('Page number')
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: '3' } })
    fireEvent.blur(input)
    expect(onPageChange).not.toHaveBeenCalled()
  })

  it('renders the page-size block only when pageSize is set', () => {
    const { rerender } = render(
      <Pagination page={1} pageCount={10} onPageChange={() => undefined} />,
    )
    expect(screen.queryByText('Show')).not.toBeInTheDocument()
    expect(screen.getByText('of 10')).toBeInTheDocument()

    rerender(
      <Pagination
        page={1}
        pageCount={10}
        pageSize={25}
        onPageChange={() => undefined}
      />,
    )
    expect(screen.getByText('Show')).toBeInTheDocument()
    expect(screen.getByText('Records')).toBeInTheDocument()
    expect(screen.getByText('25')).toBeInTheDocument()
  })

  it('emits a numeric page size from the selector', () => {
    const onPageSizeChange = vi.fn()
    render(
      <Pagination
        page={1}
        pageCount={10}
        pageSize={10}
        pageSizeOptions={[10, 50]}
        onPageChange={() => undefined}
        onPageSizeChange={onPageSizeChange}
      />,
    )
    fireEvent.click(screen.getByRole('button', { expanded: false }))
    fireEvent.click(screen.getByRole('option', { name: '50' }))
    expect(onPageSizeChange).toHaveBeenCalledWith(50)
  })

  it('applies custom labels', () => {
    render(
      <Pagination
        page={2}
        pageCount={4}
        pageSize={10}
        onPageChange={() => undefined}
        labels={{ show: 'Per page', records: 'keys', of: '/', next: 'Next' }}
      />,
    )
    expect(screen.getByText('Per page')).toBeInTheDocument()
    expect(screen.getByText('keys')).toBeInTheDocument()
    expect(screen.getByText('/ 4')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next' })).toBeInTheDocument()
  })

  it('names the page-size dialog and honours a custom label', () => {
    const { unmount } = render(
      <Pagination
        page={1}
        pageCount={4}
        pageSize={10}
        onPageChange={() => undefined}
      />,
    )
    fireEvent.click(screen.getByRole('button', { expanded: false }))
    expect(
      screen.getByRole('dialog', { name: 'Records per page' }),
    ).toBeInTheDocument()
    unmount()
    render(
      <Pagination
        page={1}
        pageCount={4}
        pageSize={10}
        onPageChange={() => undefined}
        labels={{ pageSize: 'Zeilen pro Seite' }}
      />,
    )
    fireEvent.click(screen.getByRole('button', { expanded: false }))
    expect(
      screen.getByRole('dialog', { name: 'Zeilen pro Seite' }),
    ).toBeInTheDocument()
  })
})
