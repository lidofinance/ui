import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { Toast } from '.'

describe('Toast', () => {
  it('renders title, body and actions', () => {
    render(
      <Toast title='Saved' actions={<button>Undo</button>}>
        Details
      </Toast>,
    )
    expect(screen.getByText('Saved')).toBeInTheDocument()
    expect(screen.getByText('Details')).toBeInTheDocument()
    expect(screen.getByText('Undo')).toBeInTheDocument()
  })

  it('shows a status icon by default and hides it with icon={null}', () => {
    const { container, rerender } = render(<Toast title='Saved' />)
    expect(container.querySelector('svg')).not.toBeNull()
    rerender(<Toast title='Saved' icon={null} />)
    expect(container.querySelector('svg')).toBeNull()
  })

  it('calls onClose from the dismiss button with a custom label', () => {
    const onClose = vi.fn()
    render(
      <Toast title='Saved' onClose={onClose} labels={{ close: 'Закрыть' }} />,
    )
    fireEvent.click(screen.getByRole('button', { name: 'Закрыть' }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('renders the progress bar only with a positive duration', () => {
    const { rerender } = render(
      <Toast title='Saved' duration={3000} dataTestId={{ progress: 'p' }} />,
    )
    const bar = screen.getByTestId('p')
    expect(bar.style.getPropertyValue('--local-duration')).toBe('3000ms')
    expect(bar.style.getPropertyValue('--local-play-state')).toBe('running')
    rerender(
      <Toast
        title='Saved'
        duration={3000}
        paused
        dataTestId={{ progress: 'p' }}
      />,
    )
    expect(
      screen.getByTestId('p').style.getPropertyValue('--local-play-state'),
    ).toBe('paused')
    rerender(
      <Toast title='Saved' duration={0} dataTestId={{ progress: 'p' }} />,
    )
    expect(screen.queryByTestId('p')).toBeNull()
  })

  it('keeps subheader support', () => {
    render(<Toast title='Saved' subheader='New' />)
    expect(screen.getByText('New')).toBeInTheDocument()
  })
})
