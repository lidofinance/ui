import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { Accordion } from '.'

const stubMotion = () => {
  vi.useFakeTimers()
  vi.spyOn(window, 'getComputedStyle').mockReturnValue({
    transitionDuration: '0.14s',
    transitionDelay: '0s',
    animationDuration: '0s',
    animationDelay: '0s',
  } as unknown as CSSStyleDeclaration)
}

const getWrapper = () => screen.getByText('Content').closest('[data-state]')

describe('Accordion keepMounted motion', () => {
  afterEach(() => {
    vi.useRealTimers()
    vi.restoreAllMocks()
  })

  it('collapsed at rest is closed without motion attribute', () => {
    render(
      <Accordion title='Title'>
        <p>Content</p>
      </Accordion>,
    )
    const wrapper = getWrapper()
    expect(wrapper).toHaveAttribute('data-state', 'closed')
    expect(wrapper).not.toHaveAttribute('data-motion')
    expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'false')
  })

  it('stays mounted after the exit and drops the motion attribute', () => {
    stubMotion()
    render(
      <Accordion title='Title' defaultExpanded>
        <p>Content</p>
      </Accordion>,
    )
    const wrapper = getWrapper()
    expect(wrapper).toHaveAttribute('data-state', 'open')
    expect(wrapper).not.toHaveAttribute('data-motion')

    fireEvent.click(screen.getByRole('button'))
    expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'false')
    expect(wrapper).toHaveAttribute('data-state', 'closed')
    expect(wrapper).toHaveAttribute('data-motion', 'exit')

    act(() => {
      vi.advanceTimersByTime(300)
    })
    expect(wrapper).toBeInTheDocument()
    expect(wrapper).toHaveAttribute('data-state', 'closed')
    expect(wrapper).not.toHaveAttribute('data-motion')
  })

  it('keeps the same node when reopened during the exit', () => {
    stubMotion()
    render(
      <Accordion title='Title' defaultExpanded>
        <p>Content</p>
      </Accordion>,
    )
    const wrapper = getWrapper()
    const button = screen.getByRole('button')
    fireEvent.click(button)
    act(() => {
      vi.advanceTimersByTime(60)
    })
    fireEvent.click(button)
    act(() => {
      vi.advanceTimersByTime(500)
    })
    expect(getWrapper()).toBe(wrapper)
    expect(wrapper).toHaveAttribute('data-state', 'open')
    expect(button).toHaveAttribute('aria-expanded', 'true')
  })
})
