import { afterEach, describe, expect, it, vi } from 'vitest'

import { resetWarnOnce, warnOnce } from './warnOnce'

describe('warnOnce', () => {
  afterEach(() => {
    vi.restoreAllMocks()
    vi.unstubAllEnvs()
  })

  it('prefixes the message with the component name', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined)
    warnOnce('Foo', 'bar')
    expect(warn).toHaveBeenCalledWith('Foo: bar')
  })

  it('prints an identical message only once', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined)
    warnOnce('Foo', 'bar')
    warnOnce('Foo', 'bar')
    expect(warn).toHaveBeenCalledTimes(1)
    warnOnce('Foo', 'baz')
    warnOnce('Qux', 'bar')
    expect(warn).toHaveBeenCalledTimes(3)
  })

  it('prints again after resetWarnOnce', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined)
    warnOnce('Foo', 'bar')
    resetWarnOnce()
    warnOnce('Foo', 'bar')
    expect(warn).toHaveBeenCalledTimes(2)
  })

  it('is silent in production', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined)
    vi.stubEnv('NODE_ENV', 'production')
    warnOnce('Foo', 'bar')
    expect(warn).not.toHaveBeenCalled()
  })
})
