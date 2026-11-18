import { createRef } from 'react'
import { describe, expect, it, vi } from 'vitest'
import { render } from '@testing-library/react'

import { Skeleton } from './Skeleton'
import styles from './Skeleton.module.css'

const renderRoot = (ui: JSX.Element) =>
  render(ui).container.firstChild as HTMLElement

describe('Skeleton', () => {
  it('is hidden from assistive tech', () => {
    const root = renderRoot(<Skeleton />)
    expect(root).toHaveAttribute('aria-hidden', 'true')
  })

  it('applies style to the multi-line text stack', () => {
    const root = renderRoot(
      <Skeleton variant='text' lines={2} style={{ maxWidth: 120 }} />,
    )
    expect(root.style.maxWidth).toBe('120px')
  })

  it('renders one line by default for the text variant', () => {
    const root = renderRoot(<Skeleton variant='text' />)
    expect(root.children.length).toBe(0)
  })

  it('renders the requested number of text lines', () => {
    const root = renderRoot(<Skeleton variant='text' lines={3} />)
    expect(root.children.length).toBe(3)
  })

  it('adds the fill class to a single shape', () => {
    const root = renderRoot(<Skeleton fill />)
    expect(root).toHaveClass(styles.fill)
  })

  it('adds the fill class to the multi-line text stack', () => {
    const root = renderRoot(<Skeleton variant='text' lines={2} fill />)
    expect(root).toHaveClass(styles.fill)
  })

  it('does not add the fill class by default', () => {
    const root = renderRoot(<Skeleton />)
    expect(root).not.toHaveClass(styles.fill)
  })

  it('renders spans so it is valid inside a paragraph', () => {
    const error = vi.spyOn(console, 'error').mockImplementation(() => {})
    const { container } = render(
      <p>
        <Skeleton />
        <Skeleton variant='text' lines={2} />
      </p>,
    )
    expect(container.querySelector('p div')).not.toBeInTheDocument()
    expect(container.querySelectorAll('p > span')).toHaveLength(2)
    expect(error).not.toHaveBeenCalled()
    error.mockRestore()
  })

  it.each([1, 3])('applies dataTestId root with %s text lines', (lines) => {
    const { getByTestId } = render(
      <Skeleton variant='text' lines={lines} dataTestId={{ root: 'r' }} />,
    )
    expect(getByTestId('r')).toBeInTheDocument()
  })

  it('applies numeric width and height as px', () => {
    const root = renderRoot(<Skeleton width={80} height={12} />)
    expect(root.style.width).toBe('80px')
    expect(root.style.height).toBe('12px')
  })

  it('accepts string width', () => {
    const root = renderRoot(<Skeleton width='50%' />)
    expect(root.style.width).toBe('50%')
  })

  it('style overrides width prop', () => {
    const root = renderRoot(<Skeleton width={80} style={{ width: 100 }} />)
    expect(root.style.width).toBe('100px')
  })

  it('multi-line text applies width but not height', () => {
    const root = renderRoot(
      <Skeleton variant='text' lines={2} width={120} height={40} />,
    )
    expect(root.style.width).toBe('120px')
    expect(root.style.height).toBe('')
  })

  it('leaves style untouched without sizing props', () => {
    const root = renderRoot(<Skeleton />)
    expect(root.style.width).toBe('')
  })

  it('forwards the ref to the root span', () => {
    const ref = createRef<HTMLSpanElement>()
    render(<Skeleton ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLSpanElement)
    expect(ref.current?.tagName).toBe('SPAN')
  })
})
