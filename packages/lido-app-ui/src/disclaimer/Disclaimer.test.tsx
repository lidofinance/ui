import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Disclaimer } from './Disclaimer'

describe('Disclaimer', () => {
  it('renders default content as a paragraph with Privacy Notice link', () => {
    render(<Disclaimer dataTestId={{ root: 'd' }} />)
    expect(screen.getByTestId('d').tagName).toBe('P')
    const link = screen.getByRole('link', { name: 'Privacy Notice' })
    expect(link).toHaveAttribute('href', 'https://lido.fi/privacy-notice')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders a div root with block children for as="div"', () => {
    render(
      <Disclaimer as='div' dataTestId={{ root: 'd' }}>
        <p>One</p>
        <p>Two</p>
      </Disclaimer>,
    )
    const root = screen.getByTestId('d')
    expect(root.tagName).toBe('DIV')
    expect(root.querySelectorAll('p')).toHaveLength(2)
  })

  it('replaces default content with custom children', () => {
    render(<Disclaimer>Custom note</Disclaimer>)
    expect(screen.getByText('Custom note').tagName).toBe('P')
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })
})
