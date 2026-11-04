import { createRef } from 'react'

import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { Disclosure } from '.'

describe('Disclosure', () => {
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
