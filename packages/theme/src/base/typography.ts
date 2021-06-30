const fontSizes = [10, 12, 14, 16, 18, 20, 32, 44, 56] as const

const fontSizesMap = {
  xxxs: 10,
  xxs: 12,
  xs: 14,
  sm: 16,
  md: 18,
  lg: 20,
  xl: 30,
  xxl: 40,
  xxxl: 50,
} as const

export default {
  fontSizes,
  fontSizesMap,
}
