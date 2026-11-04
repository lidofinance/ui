import { createRef } from 'react'

import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { Disclosure } from '.'

describe('Disclosure', () => {
  afterEach(() => {
    vi.useRealTimers()
    vi.unstubAllGlobals()
  })

  it('keeps content mounted through the exit, then unmounts', () => {
    vi.useFakeTimers()
    render(
      <Disclosure label='Toggle' defaultOpen>
        <p>Content</p>
      </Disclosure>,
    )
    fireEvent.click(screen.getByRole('button'))
    expect(screen.getByText('Content')).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(300)
    })
    expect(screen.queryByText('Content')).not.toBeInTheDocument()
  })

  it('keeps content when reopened during the exit', () => {
    vi.useFakeTimers()
    render(
      <Disclosure label='Toggle' defaultOpen>
        <p>Content</p>
      </Disclosure>,
    )
    const button = screen.getByRole('button')
    fireEvent.click(button)
    act(() => {
      vi.advanceTimersByTime(100)
    })
    fireEvent.click(button)
    act(() => {
      vi.advanceTimersByTime(500)
    })
    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it('unmounts immediately under reduced motion', () => {
    vi.stubGlobal('matchMedia', () => ({ matches: true }))
    render(
      <Disclosure label='Toggle' defaultOpen>
        <p>Content</p>
      </Disclosure>,
    )
    fireEvent.click(screen.getByRole('button'))
    expect(screen.queryByText('Content')).not.toBeInTheDocument()
  })

  it('is closed by default and opens on click', () => {
    render(
      <Disclosure label='Specify custom addresses'>
        <p>Hidden content</p>
      </Disclosure>,
    )
    const button = screen.getByRole('button', {
      name: 'Specify custom addresses',
    })
    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(button).not.toHaveAttribute('aria-controls')
    expect(screen.queryByText('Hidden content')).not.toBeInTheDocument()

    fireEvent.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText('Hidden content').parentElement?.id).toBe(
      button.getAttribute('aria-controls'),
    )
  })

  it('supports defaultOpen', () => {
    render(
      <Disclosure label='Toggle' defaultOpen>
        <p>Content</p>
      </Disclosure>,
    )
    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it('stays put when controlled and reports changes', () => {
    const onOpenChange = vi.fn()
    render(
      <Disclosure label='Toggle' open={false} onOpenChange={onOpenChange}>
        <p>Content</p>
      </Disclosure>,
    )
    fireEvent.click(screen.getByRole('button'))
    expect(onOpenChange).toHaveBeenCalledWith(true)
    expect(screen.queryByText('Content')).not.toBeInTheDocument()
  })

  it('reports changes when uncontrolled', () => {
    const onOpenChange = vi.fn()
    render(
      <Disclosure label='Toggle' onOpenChange={onOpenChange}>
        <p>Content</p>
      </Disclosure>,
    )
    fireEvent.click(screen.getByRole('button'))
    expect(onOpenChange).toHaveBeenCalledWith(true)
    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it('forwards ref and dataTestId', () => {
    const ref = createRef<HTMLDivElement>()
    render(
      <Disclosure
        ref={ref}
        label='Toggle'
        defaultOpen
        dataTestId={{ root: 'r', header: 'h', content: 'c' }}
      />,
    )
    expect(ref.current).toBe(screen.getByTestId('r'))
    expect(screen.getByTestId('h')).toBeInTheDocument()
    expect(screen.getByTestId('c')).toBeInTheDocument()
  })
})
