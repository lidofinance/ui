import { addons } from '@storybook/manager-api'
import { themes } from '@storybook/theming'

import pkg from '../package.json'

addons.setConfig({
  theme: {
    ...themes.normal,
    brandTitle: `<span style="display:inline-block;padding:4px 10px;border-radius:6px;background:linear-gradient(90deg, #22d3c5 0%, #0e7d74 100%);color:#fff;font-weight:700;font-size:13px;white-space:nowrap">${pkg.name}</span>`,
  },
})
