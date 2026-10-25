import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Hidden } from './Hidden'
import styles from './Hidden.module.css'

describe('Hidden', () => {
  it('renders children', () => {
    render(<Hidden>Content</Hidden>)
    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it('applies the below class', () => {
    render(<Hidden below='sm'>Content</Hidden>)
    const el = screen.getByText('Content')
    expect(el).toHaveClass(`${styles.root} ${styles.belowSm}`, {
      exact: true,
    })
  })

  it('applies the above class and merges className', () => {
    render(
      <Hidden above='md' className='x'>
        Content
      </Hidden>,
    )
    expect(screen.getByText('Content')).toHaveClass(
      `${styles.root} ${styles.aboveMd} x`,
      { exact: true },
    )
  })

  it('renders a span by default so it is valid inside text', () => {
    render(<Hidden>Content</Hidden>)
    expect(screen.getByText('Content').tagName).toBe('SPAN')
  })

  it('renders a div with as="div"', () => {
    render(<Hidden as='div'>Content</Hidden>)
    expect(screen.getByText('Content').tagName).toBe('DIV')
  })

  it('forwards ref to the wrapper', () => {
    const ref = createRef<HTMLElement>()
    render(<Hidden ref={ref}>Content</Hidden>)
    expect(ref.current).toBe(screen.getByText('Content'))
  })

  it('applies dataTestId root', () => {
    render(<Hidden dataTestId={{ root: 'r' }}>Content</Hidden>)
    expect(screen.getByTestId('r')).toHaveTextContent('Content')
  })
})
