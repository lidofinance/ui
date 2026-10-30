import { act, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import { Tooltip } from './Tooltip'

describe('Tooltip', () => {
  it('shows on focus and links the trigger through aria-describedby', async () => {
    render(
      <Tooltip content='Hint'>
        <button type='button'>trigger</button>
      </Tooltip>,
    )
    fireEvent.focus(screen.getByRole('button', { name: 'trigger' }))
    const tooltip = await screen.findByRole('tooltip')
    expect(tooltip).toHaveTextContent('Hint')
    expect(
      screen.getByRole('button', { name: 'trigger' }).parentElement,
    ).toHaveAttribute('aria-describedby', tooltip.id)
    expect(tooltip.dataset.placed).toBe('true')
  })

  it('renders inside the nearest theme scope', async () => {
    render(
      <div data-lido-theme='dark'>
        <Tooltip content='Hint'>
          <button type='button'>trigger</button>
        </Tooltip>
      </div>,
    )
    fireEvent.mouseEnter(
      screen.getByRole('button', { name: 'trigger' }).parentElement!,
    )
    const tooltip = await screen.findByRole('tooltip')
    expect(tooltip.closest('[data-lido-theme]')).toHaveAttribute(
      'data-lido-theme',
      'dark',
    )
  })

  it('renders the bubble in the dark theme under a light scope', async () => {
    render(
      <div data-lido-theme='light'>
        <Tooltip content='Hint'>
          <button type='button'>trigger</button>
        </Tooltip>
      </div>,
    )
    fireEvent.focus(screen.getByRole('button', { name: 'trigger' }))
    const tooltip = await screen.findByRole('tooltip')
    expect(tooltip.closest('[data-lido-theme]')).toHaveAttribute(
      'data-lido-theme',
      'dark',
    )
  })

  it('hides on mouse leave', async () => {
    render(<Tooltip content='Hint'>trigger</Tooltip>)
    const anchor = screen.getByText('trigger')
    fireEvent.mouseEnter(anchor)
    await screen.findByRole('tooltip')
    fireEvent.mouseLeave(anchor)
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
  })

  it('describes the focused child by the tooltip', async () => {
    render(
      <Tooltip content='Hint'>
        <button type='button'>trigger</button>
      </Tooltip>,
    )
    await userEvent.tab()
    await screen.findByRole('tooltip')
    expect(
      screen.getByRole('button', { name: 'trigger' }),
    ).toHaveAccessibleDescription('Hint')
  })

  it('keeps the child own aria-describedby and restores it on blur and Escape', async () => {
    render(
      <>
        <span id='own'>Own</span>
        <Tooltip content='Hint'>
          <button type='button' aria-describedby='own'>
            trigger
          </button>
        </Tooltip>
      </>,
    )
    const button = screen.getByRole('button', { name: 'trigger' })
    await userEvent.tab()
    const tooltip = await screen.findByRole('tooltip')
    expect(button).toHaveAttribute('aria-describedby', `own ${tooltip.id}`)
    act(() => button.blur())
    expect(button).toHaveAttribute('aria-describedby', 'own')
    await userEvent.tab()
    await screen.findByRole('tooltip')
    await userEvent.keyboard('{Escape}')
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
    expect(button).toHaveAttribute('aria-describedby', 'own')
  })
})
