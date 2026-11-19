const findDecimalIndex = (raw: string): number => {
  const seps = raw.replace(/[^\d.,]/g, '')
  const lastDot = raw.lastIndexOf('.')
  const lastComma = raw.lastIndexOf(',')

  if (lastDot !== -1 && lastComma !== -1) {
    const last = Math.max(lastDot, lastComma)
    if (/\d/.test(raw.slice(last + 1))) return last
    // `1,234.` pasted: commas group (US), so the trailing dot is the decimal point. A typed `1.234,` keeps the dot.
    if (raw[last] === '.' && /^[1-9]\d{0,2}(,\d{3})+$/.test(seps.slice(0, -1)))
      return last
    return Math.min(raw.indexOf('.'), raw.indexOf(','))
  }
  if (lastComma !== -1) {
    return /^[1-9]\d{0,2}(,\d{3})+$/.test(seps) ? -1 : raw.indexOf(',')
  }
  if (lastDot !== -1) {
    const grouped =
      raw.indexOf('.') !== lastDot && /^[1-9]\d{0,2}(\.\d{3})+$/.test(seps)
    return grouped ? -1 : raw.indexOf('.')
  }
  return -1
}

/** Keeps digits and one decimal point (last of mixed ','/'.', else first; a lone ',' is decimal unless the value looks like US grouping such as 1,000 or 1,234,567), optionally capped to `decimals` fraction digits. A separator just typed into an already-full fraction is dropped rather than truncating digits. Returns the caret mapped onto the cleaned value. */
export const sanitizeDecimal = (
  raw: string,
  caret: number | null,
  decimals?: number,
): { value: string; caret: number | null } => {
  let decimalIndex = findDecimalIndex(raw)
  let skipIndex = -1
  if (decimals != null && caret != null && decimalIndex === caret - 1) {
    const fraction = raw.slice(decimalIndex + 1).replace(/\D/g, '')
    if (fraction.length > decimals) {
      skipIndex = decimalIndex
      const rest = findDecimalIndex(
        raw.slice(0, skipIndex) + raw.slice(skipIndex + 1),
      )
      decimalIndex = rest >= skipIndex ? rest + 1 : rest
    }
  }
  let value = ''
  let nextCaret = 0
  let seenDecimal = false
  let fractionDigits = 0

  for (let i = 0; i < raw.length; i++) {
    if (i === skipIndex) continue
    const char = i === decimalIndex ? '.' : raw[i]
    if (i !== decimalIndex && !/\d/.test(char)) continue
    if (i === decimalIndex) {
      seenDecimal = true
      if (decimals === 0) continue
    } else if (seenDecimal) {
      if (decimals != null && fractionDigits >= decimals) continue
      fractionDigits++
    }
    value += char
    if (caret != null && i < caret) nextCaret++
  }

  return { value, caret: caret == null ? null : nextCaret }
}
