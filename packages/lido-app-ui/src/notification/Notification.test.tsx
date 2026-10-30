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

  it('reserves close button space on the subheader row when present', () => {
    render(
      <Notification title='T' subheader={<span>tag</span>} onClose={vi.fn()} />,
    )
    const subheader = screen.getByText('tag').parentElement!
    const wrapper = subheader.parentElement!
    expect(wrapper).toHaveClass(styles.closable)
    expect(wrapper.firstElementChild).toBe(subheader)
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
      const wrapper = screen.getByText('T').parentElement!
      expect(wrapper).toHaveClass(styles.closable)
      expect(wrapper.firstElementChild).toBe(screen.getByText('T'))
    },
  )

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
})
