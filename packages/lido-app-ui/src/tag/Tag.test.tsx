import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { Tag } from './Tag'
import styles from './Tag.module.css'

describe('Tag', () => {
  it('is a plain span without onClick or href', () => {
    render(<Tag>R</Tag>)
    const tag = screen.getByText('R')
    expect(tag.tagName).toBe('SPAN')
    expect(tag).not.toHaveClass(styles.interactive)
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })

  it('renders a focusable role=button span with onClick', () => {
    render(<Tag onClick={() => undefined}>R</Tag>)
    const tag = screen.getByRole('button', { name: 'R' })
    expect(tag.tagName).toBe('SPAN')
    expect(tag).toHaveAttribute('tabindex', '0')
    expect(tag).toHaveClass(styles.interactive)
  })

  it('calls onClick on click, Enter and Space of the span', async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()
    render(<Tag onClick={onClick}>R</Tag>)
    await user.click(screen.getByRole('button', { name: 'R' }))
    expect(onClick).toHaveBeenCalledTimes(1)
    await user.keyboard('{Enter}')
    expect(onClick).toHaveBeenCalledTimes(2)
    await user.keyboard(' ')
    expect(onClick).toHaveBeenCalledTimes(3)
  })

  it('calls the consumer onKeyDown and respects tabIndex', async () => {
    const user = userEvent.setup()
    const onKeyDown = vi.fn()
    render(
      <Tag onClick={() => undefined} onKeyDown={onKeyDown} tabIndex={-1}>
        R
      </Tag>,
    )
    const tag = screen.getByRole('button', { name: 'R' })
    expect(tag).toHaveAttribute('tabindex', '-1')
    tag.focus()
    await user.keyboard('{Enter}')
    expect(onKeyDown).toHaveBeenCalledTimes(1)
  })

  it('renders a button with as="button" and calls onClick', () => {
    const onClick = vi.fn()
    render(
      <Tag as='button' onClick={onClick}>
        R
      </Tag>,
    )
    const button = screen.getByRole('button', { name: 'R' })
    expect(button.tagName).toBe('BUTTON')
    expect(button).toHaveClass(styles.interactive)
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('keeps dataTestId.root on the clickable element', () => {
    const onClick = vi.fn()
    render(
      <Tag as='button' onClick={onClick} dataTestId={{ root: 'tag' }}>
        R
      </Tag>,
    )
    fireEvent.click(screen.getByTestId('tag'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('renders a link with href', () => {
    render(<Tag href='https://lido.fi'>R</Tag>)
    expect(screen.getByRole('link', { name: 'R' })).toHaveAttribute(
      'href',
      'https://lido.fi',
    )
  })

  it('disables the button and ignores clicks', () => {
    const onClick = vi.fn()
    render(
      <Tag onClick={onClick} disabled>
        R
      </Tag>,
    )
    const button = screen.getByRole('button', { name: 'R' })
    expect(button).toBeDisabled()
    fireEvent.click(button)
    expect(onClick).not.toHaveBeenCalled()
  })

  it('stays a span when removable', () => {
    const onClose = vi.fn()
    const onClick = vi.fn()
    render(
      <Tag onClose={onClose} onClick={onClick}>
        R
      </Tag>,
    )
    expect(screen.getByText('R').tagName).toBe('SPAN')
    expect(screen.getByText('R').parentElement).not.toHaveAttribute('role')
    fireEvent.click(screen.getByRole('button', { name: 'Remove' }))
    expect(onClose).toHaveBeenCalledTimes(1)
    expect(onClick).not.toHaveBeenCalled()
  })

  it('describes the remove button by the tag label', () => {
    render(<Tag onClose={() => undefined}>Lido</Tag>)
    expect(
      screen.getByRole('button', { name: 'Remove' }),
    ).toHaveAccessibleDescription('Lido')
  })
})
