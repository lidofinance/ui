import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { TextLink } from './TextLink'
import styles from './TextLink.module.css'

describe('TextLink', () => {
  it('adds the secondary class when variant is secondary', () => {
    render(
      <TextLink href='/a' variant='secondary'>
        A
      </TextLink>,
    )
    expect(screen.getByText('A').classList.contains(styles.secondary)).toBe(
      true,
    )
  })

  it('does not add the secondary class by default', () => {
    render(<TextLink href='/a'>A</TextLink>)
    expect(screen.getByText('A').classList.contains(styles.secondary)).toBe(
      false,
    )
  })

  it('sets target and rel when external', () => {
    render(
      <TextLink href='/a' external>
        A
      </TextLink>,
    )
    const el = screen.getByText('A')
    expect(el.getAttribute('target')).toBe('_blank')
    expect(el.getAttribute('rel')).toBe('noopener noreferrer')
  })
})
