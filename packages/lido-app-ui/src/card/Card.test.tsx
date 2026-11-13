import '@testing-library/jest-dom'
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Card } from './Card'

describe('Card', () => {
  it('keeps the CSS default alignment without align', () => {
    render(<Card dataTestId={{ root: 'root' }}>x</Card>)
    expect(screen.getByTestId('root').style.alignItems).toBe('')
  })

  it.each([
    ['start', 'flex-start'],
    ['end', 'flex-end'],
    ['stretch', 'stretch'],
  ] as const)('maps align=%s to align-items', (align, css) => {
    render(
      <Card align={align} dataTestId={{ root: 'root' }}>
        x
      </Card>,
    )
    expect(screen.getByTestId('root').style.alignItems).toBe(css)
  })

  it('merges align with a consumer style', () => {
    render(
      <Card
        align='stretch'
        style={{ color: 'red' }}
        dataTestId={{ root: 'root' }}
      >
        x
      </Card>,
    )
    const root = screen.getByTestId('root')
    expect(root.style.alignItems).toBe('stretch')
    expect(root.style.color).toBe('red')
  })
})
