import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Layout } from './Layout'

describe('Layout', () => {
  it('renders children and forwards ref, className and rest props', () => {
    const ref = createRef<HTMLDivElement>()
    render(
      <Layout ref={ref} className='x' data-testid='root'>
        Content
      </Layout>,
    )
    const root = screen.getByTestId('root')
    expect(root.textContent).toBe('Content')
    expect(root.className).toContain('x')
    expect(ref.current).toBe(root)
  })
})
