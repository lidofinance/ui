import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act, fireEvent, render, screen } from '@testing-library/react'

import { Copy } from './Copy'

const writeText = vi.fn()

describe('Copy', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    writeText.mockReset().mockResolvedValue(undefined)
    Object.assign(navigator, { clipboard: { writeText } })
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  const click = async (el: HTMLElement) => {
    await act(async () => {
      fireEvent.click(el)
    })
  }

  it('has a default aria-label', () => {
    render(<Copy text='abc' />)
    expect(screen.getByRole('button').getAttribute('aria-label')).toBe('Copy')
  })

  it('writes the text to the clipboard and calls onCopy', async () => {
    const onCopy = vi.fn()
    render(<Copy text='abc' onCopy={onCopy} />)
    await click(screen.getByRole('button'))
    expect(writeText).toHaveBeenCalledWith('abc')
    expect(onCopy).toHaveBeenCalledTimes(1)
  })

  it('flags the copied state and reverts after the timeout', async () => {
    render(<Copy text='abc' />)
    const button = screen.getByRole('button')
    expect(button.hasAttribute('data-copied')).toBe(false)

    await click(button)
    expect(button.hasAttribute('data-copied')).toBe(true)
    expect(button.getAttribute('aria-label')).toBe('Copied')

    act(() => {
      vi.advanceTimersByTime(1000)
    })
    expect(button.hasAttribute('data-copied')).toBe(false)
    expect(button.getAttribute('aria-label')).toBe('Copy')
  })

  it('stays idle when the clipboard rejects', async () => {
    writeText.mockRejectedValue(new Error('denied'))
    const onCopy = vi.fn()
    render(<Copy text='abc' onCopy={onCopy} />)
    const button = screen.getByRole('button')
    await click(button)
    expect(button.hasAttribute('data-copied')).toBe(false)
    expect(onCopy).not.toHaveBeenCalled()
  })
})
