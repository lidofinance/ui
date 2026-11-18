import '@testing-library/jest-dom'
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Card } from './Card'
import styles from './Card.module.css'

const content = () =>
  screen.getByTestId('root').firstElementChild as HTMLElement

describe('Card', () => {
  it('keeps the CSS default alignment without align', () => {
    render(<Card dataTestId={{ root: 'root' }}>x</Card>)
    expect(content().style.alignItems).toBe('')
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
    expect(content().style.alignItems).toBe(css)
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
    expect(content().style.alignItems).toBe('stretch')
    expect(screen.getByTestId('root').style.color).toBe('red')
  })

  it('sets no inline padding, gap or clip by default', () => {
    render(<Card dataTestId={{ root: 'root' }}>x</Card>)
    expect(content().style.padding).toBe('')
    expect(content().style.gap).toBe('')
    expect(screen.getByTestId('root')).not.toHaveClass(styles.clip)
  })

  it('maps padding={0} to padding 0', () => {
    render(
      <Card padding={0} dataTestId={{ root: 'root' }}>
        x
      </Card>,
    )
    expect(content().style.getPropertyValue('padding')).toMatch(/^0(px)?$/)
  })

  it('maps padding and gap to space tokens', () => {
    render(
      <Card padding={16} gap={8} dataTestId={{ root: 'root' }}>
        x
      </Card>,
    )
    const { style } = content()
    expect(style.getPropertyValue('padding')).toBe(
      'var(--lido-app-ui-space-16, 16px)',
    )
    expect(style.getPropertyValue('gap')).toBe(
      'var(--lido-app-ui-space-8, 8px)',
    )
  })

  it('adds clip class when clip', () => {
    render(
      <Card clip dataTestId={{ root: 'root' }}>
        x
      </Card>,
    )
    expect(screen.getByTestId('root')).toHaveClass(styles.clip)
  })

  it('puts children in the inner content element and style on the root', () => {
    render(
      <Card style={{ color: 'red' }} dataTestId={{ root: 'root' }}>
        <span>child</span>
      </Card>,
    )
    expect(content()).toHaveClass(styles.content)
    expect(content()).toContainElement(screen.getByText('child'))
    expect(screen.getByTestId('root').style.color).toBe('red')
  })
})
