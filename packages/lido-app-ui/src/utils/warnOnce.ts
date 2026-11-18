const warned = new Set<string>()

/** Dev-only console.warn prefixed with the component name, printed once per message. */
export const warnOnce = (component: string, message: string) => {
  if (process.env.NODE_ENV === 'production') return
  const text = `${component}: ${message}`
  if (warned.has(text)) return
  warned.add(text)
  console.warn(text)
}

export const resetWarnOnce = () => warned.clear()
