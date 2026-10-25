import { createRef } from 'react'
import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'

import { Grid, GridItem } from '.'

const renderGrid = (props = {}) => {
  const { container } = render(<Grid {...props} />)
  return container.firstChild as HTMLElement
}

const renderItem = (props = {}) => {
  const { container } = render(<GridItem {...props} />)
  return container.firstChild as HTMLElement
}

describe('Grid', () => {
  it('sets no columns var by default', () => {
    const el = renderGrid()
    expect(el.tagName).toBe('DIV')
    expect(el.style.getPropertyValue('--local-columns')).toBe('')
  })

  it('turns a number into equal columns', () => {
    expect(
      renderGrid({ columns: 3 }).style.getPropertyValue('--local-columns'),
    ).toBe('repeat(3, minmax(0, 1fr))')
  })

  it('uses a string as raw template', () => {
    expect(
      renderGrid({ columns: '200px 1fr' }).style.getPropertyValue(
        '--local-columns',
      ),
    ).toBe('200px 1fr')
  })

  it('minItemWidth takes precedence over columns', () => {
    const el = renderGrid({ columns: 3, minItemWidth: 160 })
    expect(el.style.getPropertyValue('--local-columns')).toBe(
      'repeat(auto-fit, minmax(min(160px, 100%), 1fr))',
    )
  })

  it('accepts string minItemWidth', () => {
    expect(
      renderGrid({ minItemWidth: '10rem' }).style.getPropertyValue(
        '--local-columns',
      ),
    ).toBe('repeat(auto-fit, minmax(min(10rem, 100%), 1fr))')
  })

  it('applies responsive vars', () => {
    const el = renderGrid({
      columns: { base: 4, md: 2, sm: 1 },
      columnGap: { md: 12 },
    })
    expect(el.style.getPropertyValue('--local-columns-md')).toBe(
      'repeat(2, minmax(0, 1fr))',
    )
    expect(el.style.getPropertyValue('--local-column-gap-md')).toBe(
      'var(--lido-app-ui-space-12, 12px)',
    )
  })

  it('merges rowGap into gap per breakpoint key', () => {
    const el = renderGrid({ gap: { base: 8, sm: 4 }, rowGap: 16 })
    const get = (name: string) => el.style.getPropertyValue(name)
    expect(get('--local-row-gap')).toBe('var(--lido-app-ui-space-16, 16px)')
    expect(get('--local-row-gap-sm')).toBe('var(--lido-app-ui-space-4, 4px)')
    expect(get('--local-column-gap')).toBe('var(--lido-app-ui-space-8, 8px)')
    expect(get('--local-column-gap-sm')).toBe('var(--lido-app-ui-space-4, 4px)')
  })

  it('merges columnGap keys over gap keys', () => {
    const el = renderGrid({ gap: { base: 8, md: 4 }, columnGap: { sm: 12 } })
    const get = (name: string) => el.style.getPropertyValue(name)
    expect(get('--local-column-gap')).toBe('var(--lido-app-ui-space-8, 8px)')
    expect(get('--local-column-gap-md')).toBe('var(--lido-app-ui-space-4, 4px)')
    expect(get('--local-column-gap-sm')).toBe(
      'var(--lido-app-ui-space-12, 12px)',
    )
  })

  it('maps align to a var and supports responsive values', () => {
    const el = renderGrid({ align: { base: 'center', sm: 'start' } })
    expect(el.style.getPropertyValue('--local-align')).toBe('center')
    expect(el.style.getPropertyValue('--local-align-sm')).toBe('flex-start')
  })

  it('accepts *Down keys as aliases', () => {
    const el = renderGrid({ columns: { base: 4, mdDown: 2 } })
    expect(el.style.getPropertyValue('--local-columns-md')).toBe(
      'repeat(2, minmax(0, 1fr))',
    )
  })

  it('renders the given element, forwards ref, merges className', () => {
    const ref = createRef<HTMLElement>()
    const { container } = render(
      <Grid ref={ref} as='ul' className='custom' id='x' />,
    )
    const el = container.firstChild as HTMLElement
    expect(el.tagName).toBe('UL')
    expect(ref.current).toBe(el)
    expect(el).toHaveClass('custom')
    expect(el.id).toBe('x')
  })
})

describe('GridItem', () => {
  it('spans n columns', () => {
    const el = renderItem({ span: 2 })
    expect(el.style.getPropertyValue('--local-span')).toBe('span 2 / span 2')
  })

  it('spans full row', () => {
    expect(
      renderItem({ span: 'full' }).style.getPropertyValue('--local-span'),
    ).toBe('1 / -1')
  })

  it('supports responsive span', () => {
    const el = renderItem({ span: { base: 2, sm: 'full' } })
    expect(el.style.getPropertyValue('--local-span-sm')).toBe('1 / -1')
  })

  it('sets grid-area', () => {
    expect(renderItem({ area: 'header' }).style.gridArea).toBe('header')
  })

  it('renders the given element and forwards ref', () => {
    const ref = createRef<HTMLElement>()
    const { container } = render(<GridItem ref={ref} as='li' />)
    expect((container.firstChild as HTMLElement).tagName).toBe('LI')
    expect(ref.current).toBe(container.firstChild)
  })

  it('applies dataTestId root to Grid and GridItem', () => {
    const { getByTestId } = render(
      <Grid dataTestId={{ root: 'g' }}>
        <GridItem dataTestId={{ root: 'i' }} />
      </Grid>,
    )
    expect(getByTestId('g')).toContainElement(getByTestId('i'))
  })
})
