type Breakpoint = {
  width: `${number}px`
  height: `${number}px`
}

const sm: Breakpoint = {
  width: '359px',
  height: '639px',
}

const md: Breakpoint = {
  width: '479px',
  height: '799px',
}

const lg: Breakpoint = {
  width: '767px',
  height: '1023px',
}

const xl: Breakpoint = {
  width: '1023px',
  height: '1365px',
}

const mediaQueries = {
  sm: `@media screen and (max-width: ${sm.width})`,
  md: `@media screen and (max-width: ${md.width})`,
  lg: `@media screen and (max-width: ${lg.width})`,
  xl: `@media screen and (max-width: ${xl.width})`,
}

const breakpointsMap = { sm, md, lg, xl }
const breakpoints = [sm.width, md.width, lg.width, xl.width]

export default {
  breakpoints,
  breakpointsMap,
  mediaQueries,
}
