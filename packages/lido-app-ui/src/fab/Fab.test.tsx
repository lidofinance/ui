import { createRef } from 'react'
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Fab } from './Fab'

describe('Fab', () => {
  it('renders a button with an accessible name', () => {
    render(<Fab icon='?' aria-label='Help' />)
    const button = screen.getByRole('button', { name: 'Help' })
    expect(button).toHaveAttribute('type', 'button')
  })

  it('renders a link with href', () => {
    render(<Fab href='/faq' icon='?' aria-label='Help' />)
    expect(screen.getByRole('link', { name: 'Help' })).toHaveAttribute(
      'href',
      '/faq',
    )
  })

  it('applies dataTestId to root and icon', () => {
    render(
      <Fab
        icon='?'
        aria-label='Help'
        dataTestId={{ root: 'fab', icon: 'fab-icon' }}
      />,
    )
    expect(screen.getByTestId('fab')).toBe(screen.getByRole('button'))
    expect(screen.getByTestId('fab-icon')).toBeInTheDocument()
  })

  it('forwards ref', () => {
    const ref = createRef<HTMLButtonElement>()
    render(<Fab ref={ref} icon='?' aria-label='Help' />)
    expect(ref.current).toBe(screen.getByRole('button'))
  })
})
