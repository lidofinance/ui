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
  sm: `@media screen and (min-width: ${sm.width})`,
  md: `@media screen and (min-width: ${md.width})`,
  lg: `@media screen and (min-width: ${lg.width})`,
  xl: `@media screen and (min-width: ${xl.width})`,
}
const breakpoints = { sm, md, lg, xl }

export default {
  breakpoints,
  mediaQueries,
}
