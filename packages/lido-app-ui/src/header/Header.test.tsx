import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Header } from './Header'

describe('Header', () => {
  it('renders children and actions in a banner', () => {
    render(
      <Header actions={<button type='button'>Act</button>}>
        <span>Left</span>
      </Header>,
    )
    expect(screen.getByRole('banner')).toBeTruthy()
    expect(screen.getByText('Left')).toBeTruthy()
    expect(screen.getByRole('button', { name: 'Act' })).toBeTruthy()
  })

  it('omits the actions wrapper when actions are not passed', () => {
    render(<Header data-testid='h'>Left</Header>)
    expect(screen.getByTestId('h').children).toHaveLength(1)
  })

  it('spreads className and rest props', () => {
    render(<Header data-testid='h' className='x' />)
    const el = screen.getByTestId('h')
    expect(el.className).toMatch(/x$/)
  })

  it('applies the sticky class only with sticky and does not forward it to the DOM', () => {
    const { rerender } = render(<Header data-testid='h' />)
    expect(screen.getByTestId('h').className).not.toMatch(/sticky/)
    rerender(<Header data-testid='h' sticky />)
    const el = screen.getByTestId('h')
    expect(el.className).toMatch(/sticky/)
    expect(el.hasAttribute('sticky')).toBe(false)
  })
})
