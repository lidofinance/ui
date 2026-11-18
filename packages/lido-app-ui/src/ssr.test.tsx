// @vitest-environment node
import { describe, expect, it } from 'vitest'

import { smokeCases } from './smokeCases.test-utils'
import { renderSSR } from './utils/render.test-utils'

describe('server rendering', () => {
  it('runs without a DOM', () => {
    expect(typeof document).toBe('undefined')
  })

  it.each(smokeCases)('%s renders on the server', (_name, renderCase) => {
    expect(() => renderSSR(renderCase())).not.toThrow()
  })
})
