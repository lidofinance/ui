module.exports = function template(componentsCode) {
  return [
    '// THIS FILE IS AUTO GENERATED\n',
    "import React, { SVGProps, Ref } from 'react'\n",
    ...componentsCode,
  ].join('\n')
}
