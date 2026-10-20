import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Tag } from './Tag'
import styles from './Tag.module.css'

describe('Tag', () => {
  it('is static without onClick', () => {
    render(<Tag>R</Tag>)
    expect(screen.getByText('R').classList.contains(styles.interactive)).toBe(
      false,
    )
  })

  it('is interactive with onClick', () => {
    render(<Tag onClick={() => undefined}>R</Tag>)
    expect(screen.getByText('R').classList.contains(styles.interactive)).toBe(
      true,
    )
  })
})
