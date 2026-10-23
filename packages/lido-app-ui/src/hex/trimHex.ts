const ELLIPSIS = '...'

export const trimHex = (value: string, symbols: number): string => {
  if (symbols <= 0) return value

  const prefix = value.startsWith('0x') ? '0x' : ''
  const body = value.slice(prefix.length)
  if (body.length - symbols * 2 <= ELLIPSIS.length) return value

  return `${prefix}${body.slice(0, symbols)}${ELLIPSIS}${body.slice(-symbols)}`
}
