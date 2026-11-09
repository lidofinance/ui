import { breakpoints, breakpointWidths } from '../src/utils/breakpoints'

export const breakpointNames = {
  xl: 'Desktop',
  lg: 'Tablet',
  md: 'Tablet sm',
  sm: 'Mobile',
  xs: 'Mobile sm',
} as const

const viewport = (name: string, width: number, height = 900) => ({
  name,
  styles: { width: `${width}px`, height: `${height}px` },
})

/** One preset on each side of every breakpoint: `<bp>-down` is its last px (width <= N), `<bp>-up` its first (N + 1). */
export const viewports = {
  ...Object.fromEntries(
    breakpoints.flatMap((key) => {
      const width = breakpointWidths[key]
      return [
        [
          `${key}-down`,
          viewport(
            `${width}px — ${key} (${breakpointNames[key]}) and below`,
            width,
          ),
        ],
        [`${key}-up`, viewport(`${width + 1}px — above ${key}`, width + 1)],
      ]
    }),
  ),
  px1440: viewport('1440px — desktop wide', 1440),
  px375: viewport('375px — mobile', 375, 800),
  px300: viewport('300px — design minimum', 300, 800),
}
