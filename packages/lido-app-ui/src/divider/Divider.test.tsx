import { createRef } from 'react'
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Divider } from './Divider'
import styles from './Divider.module.css'

describe('Divider', () => {
  it('is a plain horizontal line by default', () => {
    const { container } = render(<Divider />)
    const el = container.firstChild as HTMLElement
    expect(el).not.toHaveAttribute('role')
    expect(el).not.toHaveAttribute('aria-orientation')
    expect(el).toHaveClass(styles.horizontal)
  })

  it('supports vertical orientation', () => {
    const { container } = render(<Divider orientation='vertical' />)
    const el = container.firstChild as HTMLElement
    expect(el).toHaveClass(styles.vertical)
  })

  it('derives aria-orientation for a vertical separator', () => {
    render(<Divider role='separator' orientation='vertical' />)
    expect(screen.getByRole('separator')).toHaveAttribute(
      'aria-orientation',
      'vertical',
    )
  })

  it('leaves aria-orientation off a horizontal separator', () => {
    render(<Divider role='separator' />)
    expect(screen.getByRole('separator')).not.toHaveAttribute(
      'aria-orientation',
    )
  })

  it('lets an explicit aria-orientation win', () => {
    render(
      <Divider
        role='separator'
        orientation='vertical'
        aria-orientation='horizontal'
      />,
    )
    expect(screen.getByRole('separator')).toHaveAttribute(
      'aria-orientation',
      'horizontal',
    )
  })

  it('merges className last and forwards ref', () => {
    const ref = createRef<HTMLDivElement>()
    const { container } = render(
      <Divider ref={ref} className='custom' id='x' />,
    )
    const el = container.firstChild as HTMLElement
    expect(ref.current).toBe(el)
    expect(el).toHaveClass('custom')
    expect(el.id).toBe('x')
  })

  it('applies dataTestId root', () => {
    render(<Divider dataTestId={{ root: 'r' }} />)
    expect(screen.getByTestId('r')).toBeInTheDocument()
  })
})
