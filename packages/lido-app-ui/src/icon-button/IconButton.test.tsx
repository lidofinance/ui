import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { IconButton } from './IconButton'

describe('IconButton counter', () => {
  it('renders the counter as aria-hidden', () => {
    render(<IconButton aria-label='Bell' icon={null} counter={5} />)
    expect(screen.getByText('5').getAttribute('aria-hidden')).toBe('true')
  })

  it('renders zero', () => {
    render(<IconButton aria-label='Bell' icon={null} counter={0} />)
    screen.getByText('0')
  })

  it('renders no counter by default', () => {
    render(
      <IconButton
        aria-label='Bell'
        icon={null}
        dataTestId={{ counter: 'counter' }}
      />,
    )
    expect(screen.queryByTestId('counter')).toBeNull()
  })
})
