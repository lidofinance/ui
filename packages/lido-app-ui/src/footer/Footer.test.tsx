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
    expect(screen.getByRole('contentinfo')).toBeTruthy()
    expect(screen.getByText('Left')).toBeTruthy()
    expect(screen.getByRole('button', { name: 'Ver' })).toBeTruthy()
  })

  it('omits the aside wrapper when aside is not passed', () => {
    render(<Footer data-testid='f'>Left</Footer>)
    expect(screen.getByTestId('f').children).toHaveLength(1)
  })
})
