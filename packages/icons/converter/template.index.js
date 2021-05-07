module.exports = function template(componentsCode) {
  return [
    '// THIS FILE IS AUTO GENERATED\n',
    "import * as React from 'react'\n",
    ...componentsCode,
  ].join('\n')
}
