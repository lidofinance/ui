import { createRef } from 'react'
import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'

import { CloseButton } from './CloseButton'

describe('CloseButton', () => {
  it('defaults aria-label to Close and forwards ref', () => {
    const ref = createRef<HTMLButtonElement>()
    render(<CloseButton ref={ref} />)
    expect(ref.current).toBe(screen.getByRole('button', { name: 'Close' }))
  })

  it('lets a custom aria-label win', () => {
    render(<CloseButton aria-label='Close menu' />)
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeTruthy()
  })

  it('fires onClick', () => {
    const onClick = vi.fn()
    render(<CloseButton onClick={onClick} />)
    fireEvent.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('applies the ghost variant class', () => {
    render(<CloseButton />)
    expect(screen.getByRole('button').className).toContain('ghost')
  })
})
