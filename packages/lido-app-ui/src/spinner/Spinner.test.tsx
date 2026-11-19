import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Spinner } from './Spinner'
import styles from './Spinner.module.css'

describe('Spinner', () => {
  it('is a status with the default label', () => {
    render(<Spinner />)
    expect(screen.getByRole('status')).toHaveTextContent('Loading')
  })

  it('uses a custom label', () => {
    render(<Spinner label='Loading rewards' />)
    expect(screen.getByRole('status')).toHaveTextContent('Loading rewards')
  })

  it('decorative hides it from assistive tech', () => {
    const { container } = render(<Spinner decorative />)
    const root = container.firstChild as HTMLElement
    expect(root).toHaveAttribute('aria-hidden', 'true')
    expect(root).not.toHaveAttribute('role')
    expect(screen.queryByText('Loading')).toBeNull()
  })

  it('applies size class, defaulting to md', () => {
    const { container, rerender } = render(<Spinner />)
    expect(container.firstChild).toHaveClass(styles.md)
    rerender(<Spinner size='lg' />)
    expect(container.firstChild).toHaveClass(styles.lg)
  })

  it('forwards ref and dataTestId', () => {
    let el: HTMLSpanElement | null = null
    render(
      <Spinner ref={(node) => (el = node)} dataTestId={{ root: 'spin' }} />,
    )
    expect(el).toBe(screen.getByTestId('spin'))
  })

  it('numeric size sets --spinner-size in px and no preset class', () => {
    const { container } = render(<Spinner size={20} />)
    const root = container.firstChild as HTMLElement
    expect(root.style.getPropertyValue('--spinner-size')).toBe('20px')
    for (const c of [styles.sm, styles.md, styles.lg]) {
      expect(root).not.toHaveClass(c)
    }
  })

  it('numeric size keeps consumer style', () => {
    const { container } = render(<Spinner size={20} style={{ color: 'red' }} />)
    const root = container.firstChild as HTMLElement
    expect(root.style.getPropertyValue('--spinner-size')).toBe('20px')
    expect(root.style.color).toBe('red')
  })
})
