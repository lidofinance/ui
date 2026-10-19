import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'

import { Skeleton } from './Skeleton'
import styles from './Skeleton.module.css'

const renderRoot = (ui: JSX.Element) =>
  render(ui).container.firstChild as HTMLElement

describe('Skeleton', () => {
  it('is hidden from assistive tech', () => {
    const root = renderRoot(<Skeleton />)
    expect(root.getAttribute('aria-hidden')).toBe('true')
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
    expect(root.classList.contains(styles.fill)).toBe(true)
  })

  it('adds the fill class to the multi-line text stack', () => {
    const root = renderRoot(<Skeleton variant='text' lines={2} fill />)
    expect(root.classList.contains(styles.fill)).toBe(true)
  })

  it('does not add the fill class by default', () => {
    const root = renderRoot(<Skeleton />)
    expect(root.classList.contains(styles.fill)).toBe(false)
  })
})
