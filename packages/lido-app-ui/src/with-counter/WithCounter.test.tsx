import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { WithCounter } from './WithCounter'

describe('WithCounter', () => {
  it('renders only children when count is null', () => {
    const { container } = render(
      <WithCounter count={null}>
        <button type='button'>Bell</button>
      </WithCounter>,
    )
    expect(container.querySelectorAll('[aria-hidden]').length).toBe(0)
  })

  it('renders zero', () => {
    render(
      <WithCounter count={0}>
        <button type='button'>Bell</button>
      </WithCounter>,
    )
    screen.getByText('0')
  })
})
