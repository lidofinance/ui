const borderRadiuses = [4, 6, 8, 10, 12] as const

const borderRadiusesMap = {
  xs: 4,
  sm: 6,
  md: 8,
  lg: 10,
  xl: 20,
} as const

export default {
  borderRadiuses,
  borderRadiusesMap,
}
