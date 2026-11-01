import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { TEXT } from '../colors/colorTokens'
import {
  Caption,
  GroupName,
  Typography,
  typographyColors,
  typographyWeights,
  type TypographyVariant,
} from './Typography'
import styles from './Typography.module.css'

const renderTypography = (ui: React.ReactElement) => {
  render(ui)
  return screen.getByText('T')
}

describe('Typography', () => {
  it.each<[TypographyVariant, string]>([
    ['h1', 'H1'],
    ['h2', 'H2'],
    ['h3', 'H3'],
    ['amount', 'P'],
    ['bodyLarge', 'P'],
    ['body', 'P'],
    ['description', 'P'],
    ['caption', 'P'],
  ])('renders %s as <%s>', (variant, tag) => {
    const el = renderTypography(<Typography variant={variant}>T</Typography>)
    expect(el.tagName).toBe(tag)
    expect(el).toHaveClass(styles[variant])
  })

  it('defaults to body as p', () => {
    const el = renderTypography(<Typography>T</Typography>)
    expect(el.tagName).toBe('P')
    expect(el).toHaveClass(styles.body)
  })

  it('overrides the tag with as and keeps the class', () => {
    const el = renderTypography(
      <Typography variant='h2' as='div'>
        T
      </Typography>,
    )
    expect(el.tagName).toBe('DIV')
    expect(el).toHaveClass(styles.h2)
  })

  it.each(typographyWeights)('applies weight %s', (weight) => {
    const el = renderTypography(
      <Typography variant='h2' weight={weight}>
        T
      </Typography>,
    )
    expect(el).toHaveClass(styles[`weight-${weight}`])
  })

  it('has no weight class without weight', () => {
    const el = renderTypography(<Typography variant='h2'>T</Typography>)
    expect(el.className).not.toMatch(/weight-/)
  })

  it('adds the color class', () => {
    const el = renderTypography(<Typography color='error'>T</Typography>)
    expect(el).toHaveClass(styles['color-error'])
  })

  it('has no color class without color', () => {
    const el = renderTypography(<Typography>T</Typography>)
    expect(el.className).not.toMatch(/color-/)
  })

  it.each([
    ['richInput', 'amount'],
    ['groupName', 'caption'],
  ] as const)('renders deprecated %s like %s', (variant, resolved) => {
    const el = renderTypography(<Typography variant={variant}>T</Typography>)
    expect(el.tagName).toBe('P')
    expect(el).toHaveClass(styles[resolved])
  })

  it('keeps deprecated GroupName identical to Caption', () => {
    expect(GroupName).toBe(Caption)
  })

  it('maps typographyColors to text tokens, except active-hover', () => {
    const tokens = TEXT.filter((token) => token.name !== 'active-hover')
    expect([...typographyColors].sort()).toEqual(
      tokens.map((t) => t.name).sort(),
    )
    for (const token of tokens) {
      expect(token.cssVar).toBe(`--lido-app-ui-color-text-${token.name}`)
    }
  })
})
