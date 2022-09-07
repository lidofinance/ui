const toRgb = (color: string) => {
  switch (true) {
    case /^#[\da-fA-F]{3}$/.test(color):
      return [
        color.slice(1, 2) + color.slice(1, 2),
        color.slice(2, 3) + color.slice(2, 3),
        color.slice(3, 4) + color.slice(3, 4),
      ].map((val) => parseInt(val, 16))
    case /^#[\da-fA-F]{6}$/.test(color):
      return [color.slice(1, 3), color.slice(3, 5), color.slice(5, 7)].map(
        (val) => parseInt(val, 16)
      )
    case /^rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)$/.test(color):
      return color
        .replace(/^.*\((.*)\).*$/, '$1')
        .split(',')
        .map((n) => parseInt(n))
        .slice(0, 3)
    default:
      return null
  }
}

export const generateCssColorVariables = (
  colors: Record<string, string>
): string => {
  return [...Object.keys(colors)]
    .map((key: string): string => {
      const color = colors[key as keyof typeof colors]
      const rgb = toRgb(color)
      return rgb
        ? `--lido-color-${key}: ${color};\n--lido-rgb-${key}: ${rgb[0]},${rgb[1]},${rgb[2]};\n`
        : `--lido-color-${key}: ${color};\n`
    })
    .join('')
}
