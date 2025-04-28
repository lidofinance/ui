module.exports = function template(
  { interfaces, componentName, props, jsx },
  { tpl },
) {
  return tpl`
    ${interfaces}
    export const ${componentName} = React.forwardRef(
      function ${componentName}(${props}) {
        return ${jsx};
      }
    )
  `
}
