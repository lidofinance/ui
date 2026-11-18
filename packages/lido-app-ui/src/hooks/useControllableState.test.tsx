import { StrictMode } from 'react'
import { act, renderHook } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { useControllableState } from './useControllableState'

type Props = {
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  prop?: string
}

const setup = (initialProps: Props, options?: { strict?: boolean }) =>
  renderHook(
    (props: Props) =>
      useControllableState({
        name: 'Foo',
        value: props.value,
        defaultValue: props.defaultValue,
        ...(props.onChange && { onChange: props.onChange }),
        ...(props.prop && { prop: props.prop }),
      }),
    { initialProps, wrapper: options?.strict ? StrictMode : undefined },
  )

const spyWarn = () =>
  vi.spyOn(console, 'warn').mockImplementation(() => undefined)

describe('useControllableState', () => {
  afterEach(() => vi.restoreAllMocks())

  it('starts from defaultValue and updates internally when uncontrolled', () => {
    const onChange = vi.fn()
    const { result } = setup({ defaultValue: 'a', onChange })
    expect(result.current[0]).toBe('a')
    act(() => result.current[1]('b'))
    expect(result.current[0]).toBe('b')
    expect(onChange).toHaveBeenCalledWith('b')
  })

  it('returns the controlled value and ignores internal updates', () => {
    const onChange = vi.fn()
    const { result, rerender } = setup({ value: 'a', onChange })
    act(() => result.current[1]('b'))
    expect(onChange).toHaveBeenCalledWith('b')
    expect(result.current[0]).toBe('a')
    rerender({ value: 'b', onChange })
    expect(result.current[0]).toBe('b')
  })

  it('keeps the setter identity across renders and onChange changes', () => {
    const first = vi.fn()
    const second = vi.fn()
    const { result, rerender } = setup({ defaultValue: 'a', onChange: first })
    const setter = result.current[1]
    rerender({ defaultValue: 'a', onChange: second })
    expect(result.current[1]).toBe(setter)
    act(() => setter('b'))
    expect(second).toHaveBeenCalledWith('b')
    expect(first).not.toHaveBeenCalled()
  })

  it('calls onChange even when the value does not change', () => {
    const onChange = vi.fn()
    const { result } = setup({ defaultValue: 'a', onChange })
    act(() => result.current[1]('a'))
    expect(onChange).toHaveBeenCalledWith('a')
  })

  it('warns once when value and defaultValue are both passed', () => {
    const warn = spyWarn()
    const props = { value: 'a', defaultValue: 'b', prop: 'open' }
    const { rerender } = setup(props)
    rerender(props)
    rerender(props)
    expect(warn).toHaveBeenCalledTimes(1)
    const message = String(warn.mock.calls[0][0])
    expect(message).toContain('Foo')
    expect(message).toContain('`open`')
    expect(message).toContain('`defaultOpen`')
  })

  it('warns when switching from uncontrolled to controlled', () => {
    const warn = spyWarn()
    const { rerender } = setup({})
    rerender({ value: 'x' })
    expect(warn).toHaveBeenCalledWith(
      expect.stringContaining('uncontrolled to controlled'),
    )
  })

  it('warns when switching from controlled to uncontrolled and falls back to internal state', () => {
    const warn = spyWarn()
    const { result, rerender } = setup({ value: 'x', defaultValue: 'd' })
    rerender({ defaultValue: 'd' })
    expect(warn).toHaveBeenCalledWith(
      expect.stringContaining('controlled to uncontrolled'),
    )
    expect(result.current[0]).toBe('d')
  })

  it('does not warn for steady uncontrolled or steady controlled use', () => {
    const warn = spyWarn()
    const uncontrolled = setup({ defaultValue: 'a' }, { strict: true })
    uncontrolled.rerender({ defaultValue: 'a' })
    const controlled = setup({ value: 'a' }, { strict: true })
    controlled.rerender({ value: 'b' })
    expect(warn).not.toHaveBeenCalled()
  })
})
