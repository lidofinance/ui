import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'

import { Skeleton } from './Skeleton'

const renderRoot = (ui: JSX.Element) =>
  render(ui).container.firstChild as HTMLElement

describe('Skeleton', () => {
  it('is hidden from assistive tech', () => {
    const root = renderRoot(<Skeleton />)
    expect(root.getAttribute('aria-hidden')).toBe('true')
  })

  it('makes a circle square when width is omitted', () => {
    const root = renderRoot(<Skeleton variant='circle' height={16} />)
    expect(root.style.width).toBe('16px')
    expect(root.style.height).toBe('16px')
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

  it('applies width to the text stack, not per line', () => {
    const root = renderRoot(<Skeleton variant='text' lines={2} width={240} />)
    expect(root.style.width).toBe('240px')
    expect((root.children[0] as HTMLElement).style.width).toBe('')
  })
})
