import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'

import { Logo } from './Logo'
import styles from './Logo.module.css'

describe('Logo', () => {
  it('renders a link with href', () => {
    render(<Logo href='/' product='Operators' data-testid='logo' />)
    const link = screen.getByRole('link', { name: 'Lido Operators' })
    expect(link).toHaveAttribute('href', '/')
    expect(link).toHaveAttribute('data-testid', 'logo')
  })

  it('opens in a new tab when external', () => {
    render(<Logo href='https://lido.fi' external />)
    const link = screen.getByRole('link', { name: 'Lido' })
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('passes target and download to the link', () => {
    render(<Logo href='/lido.svg' target='_blank' download />)
    const link = screen.getByRole('link', { name: 'Lido' })
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('download')
  })

  it('renders a button with onClick', () => {
    const onClick = vi.fn()
    render(<Logo onClick={onClick} product='Operators' />)
    fireEvent.click(screen.getByRole('button', { name: 'Lido Operators' }))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('renders a static element otherwise', () => {
    render(<Logo product='Staking' />)
    expect(
      screen.getByRole('img', { name: 'Lido Staking' }),
    ).toBeInTheDocument()
  })

  it('omits divider, product and name suffix without product', () => {
    const { container } = render(<Logo />)
    expect(screen.getByRole('img', { name: 'Lido' })).toBeInTheDocument()
    expect(container.textContent).toBe('')
    expect(
      container.querySelector(`.${styles.divider}`),
    ).not.toBeInTheDocument()
  })

  it.each([
    ['full', true],
    ['auto', true],
    ['compact', false],
  ] as const)('%s variant renders wordmark: %s', (variant, shown) => {
    const { container } = render(<Logo variant={variant} />)
    const wordmark = container.querySelector(`.${styles.wordmark}`)
    if (shown) expect(wordmark).toBeInTheDocument()
    else expect(wordmark).not.toBeInTheDocument()
  })

  it.each([
    ['plain', {}],
    ['link', { href: '/' }],
  ])('applies dataTestId to root and product on a %s logo', (_, props) => {
    render(
      <Logo
        {...props}
        product='Operators'
        dataTestId={{ root: 'r', product: 'p' }}
      />,
    )
    expect(screen.getByTestId('r')).toHaveAttribute(
      'aria-label',
      'Lido Operators',
    )
    expect(screen.getByTestId('p')).toHaveTextContent('Operators')
  })
})
