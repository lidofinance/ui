import { createRef } from 'react'

import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { Notification } from '.'
import styles from './Notification.module.css'

describe('Notification', () => {
  it('forwards ref and rest props', () => {
    const ref = createRef<HTMLDivElement>()
    render(<Notification ref={ref} title='T' data-testid='n' />)
    expect(ref.current).toBe(screen.getByTestId('n'))
  })

  it('follows the ambient theme', () => {
    const ref = createRef<HTMLDivElement>()
    render(<Notification ref={ref} title='T' data-testid='n' />)
    const el = screen.getByTestId('n')
    expect(el.closest('[data-lido-theme]')).toBeNull()
    expect(ref.current).toBe(el)
    expect(el.parentElement).toBe(document.body.firstElementChild)
  })

  it('defaults to role alert', () => {
    render(<Notification title='T' data-testid='n' />)
    expect(screen.getByTestId('n')).toHaveAttribute('role', 'alert')
  })

  it('allows role override', () => {
    render(<Notification title='T' role='status' data-testid='n' />)
    expect(screen.getByTestId('n')).toHaveAttribute('role', 'status')
  })

  it('falls back to role alert when role is undefined', () => {
    render(<Notification title='T' role={undefined} data-testid='n' />)
    expect(screen.getByTestId('n')).toHaveAttribute('role', 'alert')
  })

  it('opts out of the alert role with role none', () => {
    render(<Notification title='T' role='none' data-testid='n' />)
    expect(screen.getByTestId('n')).toHaveAttribute('role', 'none')
  })

  it('renders subheader slot and dismiss button calling onClose', () => {
    const onClose = vi.fn()
    render(
      <Notification title='T' subheader={<span>tag</span>} onClose={onClose} />,
    )
    expect(screen.getByText('tag')).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Dismiss' }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('places the dismiss button in the header row after the subheader and title', () => {
    render(
      <Notification title='T' subheader={<span>tag</span>} onClose={vi.fn()} />,
    )
    const head = screen.getByText('T').closest(`.${styles.head}`)!
    expect(head.firstElementChild).toContainElement(screen.getByText('tag'))
    expect(head.lastElementChild).toBe(
      screen.getByRole('button', { name: 'Dismiss' }),
    )
  })

  it.each([false, '', null])(
    'renders no subheader wrapper for empty subheader %j',
    (subheader) => {
      render(
        <Notification
          title='T'
          subheader={subheader}
          onClose={vi.fn()}
          dataTestId={{ subheader: 'sub' }}
        />,
      )
      expect(screen.queryByTestId('sub')).not.toBeInTheDocument()
    },
  )

  it('plain variant applies the plain class and defaults to role none', () => {
    render(<Notification variant='plain' title='T' data-testid='n' />)
    const root = screen.getByTestId('n')
    expect(root).toHaveClass(styles.plain)
    expect(root).toHaveAttribute('role', 'none')
  })

  it('plain variant allows an explicit role', () => {
    render(
      <Notification
        variant='plain'
        title='T'
        role='listitem'
        data-testid='n'
      />,
    )
    expect(screen.getByTestId('n')).toHaveAttribute('role', 'listitem')
  })

  it('card variant has no plain class', () => {
    render(<Notification title='T' data-testid='n' />)
    expect(screen.getByTestId('n')).not.toHaveClass(styles.plain)
  })

  it('renders no body or actions wrapper for false children and actions', () => {
    render(
      <Notification
        title='T'
        actions={false}
        dataTestId={{ body: 'body', actions: 'actions' }}
      >
        {false}
      </Notification>,
    )
    expect(screen.queryByTestId('body')).not.toBeInTheDocument()
    expect(screen.queryByTestId('actions')).not.toBeInTheDocument()
  })

  it('has no dismiss button without onClose', () => {
    render(<Notification title='T' />)
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('describes the dismiss button by the title', () => {
    render(
      <Notification title='Your key got a strike' onClose={() => undefined} />,
    )
    expect(
      screen.getByRole('button', { name: 'Dismiss' }),
    ).toHaveAccessibleDescription('Your key got a strike')
  })

  it('applies the fluid class only when requested', () => {
    const { rerender } = render(<Notification title='T' data-testid='n' />)
    expect(screen.getByTestId('n')).not.toHaveClass(styles.fluid)
    rerender(<Notification title='T' fluid data-testid='n' />)
    expect(screen.getByTestId('n')).toHaveClass(styles.fluid)
  })
})

describe('Notification labels', () => {
  it('uses a custom close label', () => {
    render(
      <Notification
        title='Saved'
        onClose={() => {}}
        labels={{ close: 'Schließen' }}
      />,
    )
    expect(
      screen.getByRole('button', { name: 'Schließen' }),
    ).toBeInTheDocument()
  })
})
