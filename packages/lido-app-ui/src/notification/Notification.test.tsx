import { createRef } from 'react'

import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { Notification } from '.'

describe('Notification', () => {
  it('forwards ref and rest props', () => {
    const ref = createRef<HTMLDivElement>()
    render(<Notification ref={ref} title='T' data-testid='n' />)
    expect(ref.current).toBe(screen.getByTestId('n'))
  })

  it('keeps role alert but allows override', () => {
    render(<Notification title='T' role='status' data-testid='n' />)
    expect(screen.getByTestId('n').getAttribute('role')).toBe('status')
  })

  it('renders subheader slot and dismiss button calling onClose', () => {
    const onClose = vi.fn()
    render(
      <Notification title='T' subheader={<span>tag</span>} onClose={onClose} />,
    )
    expect(screen.getByText('tag')).toBeTruthy()
    fireEvent.click(screen.getByRole('button', { name: 'Dismiss' }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('has no dismiss button without onClose', () => {
    render(<Notification title='T' />)
    expect(screen.queryByRole('button')).toBeNull()
  })
})
