const sm = {
  width: '360px',
  height: '640px',
}
const md = {
  width: '480px',
  height: '800px',
}
const lg = {
  width: '768px',
  height: '1024px',
}
const xl = {
  width: '1024px',
  height: '1366px',
}

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
