module.exports = function template(
  { interfaces, componentName, props, jsx },
  { tpl },
) {
  return tpl`
    ${interfaces}
    export const ${componentName} = (${props}) =>{
        return ${jsx};
      }
  `
}
