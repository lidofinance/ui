module.exports = function template(
  { template },
  opts,
  { interfaces, componentName, props, jsx }
) {
  return template.ast`
    ${interfaces}
    export const ${componentName} = React.forwardRef(
      function ${componentName}(${props}) {
        return ${jsx};
      }
    )
  `
}
