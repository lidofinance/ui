const sm = {
  width: '359px',
  height: '639px',
} as const

const md = {
  width: '479px',
  height: '799px',
} as const

const lg = {
  width: '767px',
  height: '1023px',
} as const

const xl = {
  width: '1023px',
  height: '1365px',
} as const

const mediaQueries = {
  sm: `@media screen and (max-width: ${sm.width})`,
  md: `@media screen and (max-width: ${md.width})`,
  lg: `@media screen and (max-width: ${lg.width})`,
  xl: `@media screen and (max-width: ${xl.width})`,
}

const breakpoints = [sm.width, md.width, lg.width, xl.width]
const breakpointsMap = { sm, md, lg, xl }

export default {
  breakpoints,
  breakpointsMap,
  mediaQueries,
}
