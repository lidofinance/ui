/// <reference types="vite/client" />

import { cloneElement, createRef } from 'react'
import { describe, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'

import { portaled, renderless, smokeCases } from './smokeCases.test-utils'

const barrels = import.meta.glob(
  ['./*/index.ts', '!./icons/**', '!./utils/**', '!./hooks/**'],
  { eager: true },
) as Record<string, Record<string, unknown>>

const exportedComponents = Object.values(barrels).flatMap((module) =>
  Object.entries(module).filter(
    ([name, value]) =>
      /^[A-Z]/.test(name) &&
      (typeof value === 'function' ||
        (typeof value === 'object' && value !== null && '$$typeof' in value)),
  ),
)

// Components that only mount inside a case above and have no case of their own.
const coveredByParent = [
  'DataListRow',
  'GridItem',
  'SidebarGroup',
  'SidebarInset',
  'SidebarItem',
  'RankCell',
  'TableBody',
  'TableCell',
  'TableHead',
  'TableHeaderCell',
  'TableRow',
]

describe('component smoke render', () => {
  it('has a case for every exported component', () => {
    const coveredNames = new Set([
      ...smokeCases.map(([name]) => name),
      ...coveredByParent,
    ])
    // Deprecated aliases share identity with their replacement.
    const coveredValues = new Set(
      exportedComponents
        .filter(([name]) => coveredNames.has(name))
        .map(([, value]) => value),
    )
    expect(
      exportedComponents
        .filter(([, value]) => !coveredValues.has(value))
        .map(([name]) => name),
    ).toEqual([])
  })

  it.each(smokeCases)('%s mounts', (name, renderCase) => {
    const { container } = render(renderCase())
    if (portaled.has(name)) {
      expect(screen.getByRole('dialog')).toBeInTheDocument()
    } else if (!renderless.has(name)) {
      expect(container.firstChild).toBeInTheDocument()
    }
    cleanup()
  })
})

const isForwardRef = (type: unknown): boolean => {
  const t = type as { $$typeof?: symbol; type?: unknown } | null
  return (
    t?.$$typeof === Symbol.for('react.forward_ref') ||
    (t?.$$typeof === Symbol.for('react.memo') && isForwardRef(t.type))
  )
}

const forwardRefCases = smokeCases.filter(([, renderCase]) =>
  isForwardRef(renderCase().type),
)

describe('ref forwarding', () => {
  it('checks ref forwarding for at least 30 components', () => {
    expect(forwardRefCases.length).toBeGreaterThan(30)
  })

  it.each(forwardRefCases)('%s forwards its ref', (_name, renderCase) => {
    const ref = createRef<Element>()
    render(cloneElement(renderCase(), { ref }))
    expect(ref.current).toBeInstanceOf(Element)
    cleanup()
  })
})

describe('package entry', () => {
  it('exports the overlay hooks and Portal', async () => {
    const entry = await import('./index')
    expect(entry.Portal).toBeTypeOf('function')
    expect(entry.useEscape).toBeTypeOf('function')
    expect(entry.useOutsideClick).toBeTypeOf('function')
    expect(entry.useFocusTrap).toBeTypeOf('function')
    expect(entry.useBodyScrollLock).toBeTypeOf('function')
    expect(entry.usePresence).toBeTypeOf('function')
    expect(entry.ModalCard).toBeTypeOf('object')
    expect(entry.breakpoints).toEqual(Object.keys(entry.breakpointWidths))
    expect(entry.spaces).toContain(6)
  })
})
