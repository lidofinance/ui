import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Counter } from './Counter'

describe('Counter', () => {
  it('forwards the ref to the root', () => {
    const ref = createRef<HTMLSpanElement>()
    render(<Counter ref={ref}>3</Counter>)
    expect(ref.current).toBe(screen.getByText('3'))
  })
})
