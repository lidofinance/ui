import { breakpointWidths } from '../src/utils/breakpoints'

const viewport = (name: string, width: number, height = 900) => ({
  name,
  styles: { width: `${width}px`, height: `${height}px` },
})

/** One preset on each side of every breakpoint: `<bp>-down` is its last px, `<bp>-up` its first. */
export const viewports = {
  ...Object.fromEntries(
    Object.entries(breakpointWidths).flatMap(([key, width]) => [
      [`${key}-down`, viewport(`${width - 1}px — ${key} and below`, width - 1)],
      [`${key}-up`, viewport(`${width}px — above ${key}`, width)],
    ]),
  ),
  px375: viewport('375px — mobile', 375, 800),
}
