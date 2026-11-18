import { render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { useSelectionIndicator } from './useSelectionIndicator'

const Harness = ({ value, empty }: { value: string; empty?: boolean }) => {
  const { containerRef, activeRef, indicatorRef } = useSelectionIndicator(
    'x',
    value,
    [{ inline: true }],
  )
  return (
    <div ref={containerRef}>
      <div ref={indicatorRef} data-testid='indicator' />
      <button role='tab' ref={empty ? undefined : activeRef}>
        {value}
      </button>
    </div>
  )
}

describe('useSelectionIndicator', () => {
  let resizeCallback: () => void = () => {}
  let transitions: string[]
  let observers = 0
  let tabLeft = 0
  let animations: unknown[] = []

  beforeEach(() => {
    vi.stubGlobal(
      'ResizeObserver',
      class {
        constructor(cb: () => void) {
          resizeCallback = cb
          observers++
        }
        observe() {}
        disconnect() {}
      },
    )
    transitions = []
    observers = 0
    tabLeft = 0
    animations = []
    vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockImplementation(
      function (this: HTMLElement) {
        const left = this.getAttribute('role') === 'tab' ? tabLeft : 0
        return { left, top: 0, width: 10, height: 10 } as DOMRect
      },
    )
    Object.defineProperty(HTMLElement.prototype, 'getAnimations', {
      configurable: true,
      value: () => animations,
    })
    const desc = Object.getOwnPropertyDescriptor(
      CSSStyleDeclaration.prototype,
      'transition',
    )
    vi.spyOn(
      CSSStyleDeclaration.prototype,
      'transition',
      'set',
    ).mockImplementation(function (this: CSSStyleDeclaration, v: string) {
      transitions.push(v)
      desc?.set?.call(this, v)
    })
  })

  afterEach(() => {
    vi.restoreAllMocks()
    Reflect.deleteProperty(HTMLElement.prototype, 'getAnimations')
    vi.unstubAllGlobals()
  })

  const mount = () => {
    const view = render(<Harness value='a' />)
    transitions.length = 0
    return view
  }
  const transform = () => screen.getByTestId('indicator').style.transform

  it('snaps on mount', () => {
    render(<Harness value='a' />)
    expect(transitions).toEqual(['none', ''])
    expect(transform()).toBe('translateX(0px)')
  })

  it('snaps when a resize moves the indicator and nothing is animating', () => {
    mount()
    tabLeft = 40
    resizeCallback()
    expect(transitions).toEqual(['none', ''])
  })

  it('retargets a running slide on resize instead of snapping', () => {
    mount()
    tabLeft = 40
    animations = [{}]
    resizeCallback()
    expect(transitions).toEqual([])
    expect(transform()).toBe('translateX(40px)')
  })

  it('does not write styles on a no-op resize', () => {
    mount()
    resizeCallback()
    expect(transitions).toEqual([])
  })

  it('slides on value change even when deps change in the same render', () => {
    const { rerender } = mount()
    const mounted = observers
    tabLeft = 40
    rerender(<Harness value='b' />)
    expect(transitions).toEqual([])
    expect(observers).toBe(mounted + 1)
    expect(transform()).toBe('translateX(40px)')
  })

  it('snaps when an item becomes active again after the indicator was hidden', () => {
    const { rerender } = mount()
    rerender(<Harness value='' empty />)
    expect(screen.getByTestId('indicator').style.visibility).toBe('hidden')
    transitions.length = 0
    tabLeft = 40
    rerender(<Harness value='b' />)
    expect(transitions).toEqual(['none', ''])
    expect(transform()).toBe('translateX(40px)')
  })
})
