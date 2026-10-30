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
})
