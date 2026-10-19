import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Disclaimer } from './Disclaimer'

describe('Disclaimer', () => {
  it('renders default content as a paragraph with Privacy Notice link', () => {
    render(<Disclaimer dataTestId={{ root: 'd' }} />)
    expect(screen.getByTestId('d').tagName).toBe('P')
    const link = screen.getByRole('link', { name: 'Privacy Notice' })
    expect(link.getAttribute('href')).toBe('https://lido.fi/privacy-notice')
    expect(link.getAttribute('target')).toBe('_blank')
  })

  it('replaces default content with custom children', () => {
    render(<Disclaimer>Custom note</Disclaimer>)
    expect(screen.getByText('Custom note').tagName).toBe('P')
    expect(screen.queryByRole('link')).toBeNull()
  })
})
