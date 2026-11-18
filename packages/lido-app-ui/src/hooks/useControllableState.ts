import { useCallback, useEffect, useRef, useState } from 'react'

import { capitalize } from '../utils/responsive'
import { warnOnce } from '../utils/warnOnce'

type UseControllableStateOptions<T> = {
  value: T | undefined
  /** Raw prop; pass it before applying any fallback so the both-passed warning stays accurate. */
  defaultValue: T | undefined
  onChange?: (value: T) => void
  /** Component name used in dev warnings. */
  name: string
  /** Controlled prop name used in dev warnings; the default prop is `default${Capitalized}`. */
  prop?: string
}

/** Value/defaultValue/onChange state with dev warnings for misuse; the setter is stable. */
export const useControllableState = <T>({
  value,
  defaultValue,
  onChange,
  name,
  prop = 'value',
}: UseControllableStateOptions<T>): [T | undefined, (next: T) => void] => {
  const [internal, setInternal] = useState(defaultValue)
  const controlled = value !== undefined

  const controlledRef = useRef(controlled)
  controlledRef.current = controlled
  const onChangeRef = useRef(onChange)
  onChangeRef.current = onChange
  const wasControlledRef = useRef(controlled)

  const setValue = useCallback((next: T) => {
    if (!controlledRef.current) setInternal(next)
    onChangeRef.current?.(next)
  }, [])

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') return
    if (controlled && defaultValue !== undefined) {
      warnOnce(
        name,
        `got \`${prop}\` and \`default${capitalize(prop)}\`; pass one.`,
      )
    }
    if (wasControlledRef.current !== controlled) {
      warnOnce(
        name,
        controlled
          ? `switched \`${prop}\` from uncontrolled to controlled.`
          : `switched \`${prop}\` from controlled to uncontrolled; it falls back to internal state.`,
      )
    }
    wasControlledRef.current = controlled
  })

  return [controlled ? value : internal, setValue]
}
