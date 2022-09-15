const fontSizes = [10, 12, 14, 16, 18, 20, 26, 32, 40, 50] as const

const fontSizesMap = {
  xxxs: 10,
  xxs: 12,
  xs: 14,
  sm: 16,
  md: 18,
  lg: 20,
  xl: 26,
  xxl: 32,
  xxxl: 40,
  xxxxl: 50,
} as const

export default {
  fontSizes,
  fontSizesMap,
}
