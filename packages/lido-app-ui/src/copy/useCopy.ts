import { useCallback, useEffect, useRef, useState } from 'react'

export type UseCopyOptions = {
  onCopy?: () => void
  timeout?: number
}

export const useCopy = (
  text: string,
  { onCopy, timeout = 1000 }: UseCopyOptions = {},
) => {
  const [copied, setCopied] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => () => clearTimeout(timerRef.current), [])

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      return
    }

    clearTimeout(timerRef.current)
    setCopied(true)
    onCopy?.()
    timerRef.current = setTimeout(() => setCopied(false), timeout)
  }, [text, onCopy, timeout])

  return { copy, copied }
}
