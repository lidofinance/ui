import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Footer } from './Footer'

describe('Footer', () => {
  it('renders children and aside in a contentinfo', () => {
    render(
      <Footer aside={<button type='button'>Ver</button>}>
        <span>Left</span>
      </Footer>,
    )
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByText('Left')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Ver' })).toBeInTheDocument()
  })

  it('omits the aside wrapper when aside is not passed', () => {
    render(<Footer data-testid='f'>Left</Footer>)
    expect(screen.getByTestId('f').children).toHaveLength(1)
  })

  it('applies dataTestId to each part', () => {
    render(
      <Footer aside='V' dataTestId={{ root: 'r', content: 'c', aside: 'a' }}>
        L
      </Footer>,
    )
    expect(screen.getByTestId('r')).toBe(screen.getByRole('contentinfo'))
    expect(screen.getByTestId('c')).toHaveTextContent('L')
    expect(screen.getByTestId('a')).toHaveTextContent('V')
  })
})
