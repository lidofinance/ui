import { beforeEach, expect } from 'vitest'
import {
  buildToHaveStyleRule,
  resetStyleSheet,
  type ToHaveStyleRuleMatchers,
} from 'vitest-styled-components'

beforeEach(resetStyleSheet)
expect.extend({ toHaveStyleRule: buildToHaveStyleRule(expect) })

declare module 'vitest' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Assertion<T = any> extends ToHaveStyleRuleMatchers {}
  interface AsymmetricMatchersContaining extends ToHaveStyleRuleMatchers {}
}
