import { createRef } from 'react'
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { VisuallyHidden } from './VisuallyHidden'

describe('VisuallyHidden', () => {
  it('renders text in the accessibility tree and forwards the ref', () => {
    const ref = createRef<HTMLSpanElement>()
    render(<VisuallyHidden ref={ref}>10 of 15</VisuallyHidden>)
    expect(screen.getByText('10 of 15')).toBe(ref.current)
  })
})
