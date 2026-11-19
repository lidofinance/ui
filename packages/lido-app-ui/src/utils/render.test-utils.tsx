import axe from 'axe-core'
import { render, type RenderOptions } from '@testing-library/react'
import { renderToString } from 'react-dom/server'
import { vi } from 'vitest'
import type { ReactElement } from 'react'

const RTL_SHIM_ID = 'test-rtl-shim'

// jsdom doesn't inherit `direction`; a sheet rule is the only way getComputedStyle sees it on descendants
const ensureRtlShim = () => {
  if (document.getElementById(RTL_SHIM_ID)) return
  const style = document.createElement('style')
  style.id = RTL_SHIM_ID
  style.textContent = '[dir="rtl"], [dir="rtl"] * { direction: rtl }'
  document.head.appendChild(style)
}

/** Renders `ui` inside a `dir` wrapper that getComputedStyle(...).direction honours in jsdom. */
export const renderInDir = (
  ui: ReactElement,
  dir: 'ltr' | 'rtl',
  options?: RenderOptions,
) => {
  ensureRtlShim()
  return render(<div dir={dir}>{ui}</div>, options)
}

/** axe violations as `rule: selector` strings; layout-dependent and page-level rules are off. */
export const axeViolations = async (
  node: Element = document.body,
  disabledRules: string[] = [],
) => {
  const rules = Object.fromEntries(
    ['color-contrast', 'region', ...disabledRules].map((id) => [
      id,
      { enabled: false },
    ]),
  )
  const { violations } = await axe.run(node, { rules })
  return violations.flatMap((v) =>
    v.nodes.map((n) => `${v.id}: ${n.target.join(' ')}`),
  )
}

/** renderToString that fails on any console.error (hydration/useLayoutEffect warnings). Use from a `@vitest-environment node` file. */
export const renderSSR = (ui: ReactElement) => {
  const spy = vi.spyOn(console, 'error').mockImplementation(() => undefined)
  try {
    const html = renderToString(ui)
    if (spy.mock.calls.length) {
      throw new Error(spy.mock.calls.map((c) => c.join(' ')).join('\n'))
    }
    return html
  } finally {
    spy.mockRestore()
  }
}

/** Fakes `getAnimations` with one running animation of `ms`; exits then complete on the safety timer. Undo with `unstubMotion`. */
export const stubMotion = (ms = 100) => {
  const animation = {
    playState: 'running',
    currentTime: 0,
    effect: { getComputedTiming: () => ({ endTime: ms }) },
    finished: new Promise<void>(() => undefined),
  }
  Object.defineProperty(HTMLElement.prototype, 'getAnimations', {
    configurable: true,
    value: () => [animation],
  })
}

export const unstubMotion = () => {
  Reflect.deleteProperty(HTMLElement.prototype, 'getAnimations')
}
