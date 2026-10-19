import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { PageContent } from './PageContent'

describe('PageContent', () => {
  it('renders children and spreads rest', () => {
    render(
      <PageContent data-testid='pc' className='x'>
        <span>hi</span>
      </PageContent>,
    )
    const el = screen.getByTestId('pc')
    expect(el.textContent).toBe('hi')
    expect(el.className).toMatch(/x$/)
  })

  it('applies narrow variant class', () => {
    render(<PageContent data-testid='pc' variant='narrow' />)
    expect(screen.getByTestId('pc').className).toMatch(/narrow/)
  })
})
