import { describe, expect, it } from 'vitest'

import { addDescribedBy } from './dom'

describe('addDescribedBy', () => {
  it('sets the attribute and removes it on cleanup', () => {
    const el = document.createElement('div')
    const cleanup = addDescribedBy(el, 'a')
    expect(el.getAttribute('aria-describedby')).toBe('a')
    cleanup?.()
    expect(el.hasAttribute('aria-describedby')).toBe(false)
  })

  it('appends to existing ids and cleanup keeps them', () => {
    const el = document.createElement('div')
    el.setAttribute('aria-describedby', 'x')
    const cleanup = addDescribedBy(el, 'a')
    expect(el.getAttribute('aria-describedby')).toBe('x a')
    cleanup?.()
    expect(el.getAttribute('aria-describedby')).toBe('x')
  })

  it('is a no-op without cleanup when the id is already present', () => {
    const el = document.createElement('div')
    el.setAttribute('aria-describedby', 'a x')
    expect(addDescribedBy(el, 'a')).toBeUndefined()
    expect(el.getAttribute('aria-describedby')).toBe('a x')
  })
})
