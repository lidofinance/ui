const space = [4, 8, 16, 24, 32] as const

const spaceMap = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 32,
} as const

export default {
  space,
  spaceMap,
}
