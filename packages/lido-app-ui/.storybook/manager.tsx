import { addons } from '@storybook/manager-api'
import { themes } from 'storybook/internal/theming'

import pkg from '../package.json'

addons.setConfig({
  theme: {
    ...themes.normal,
    brandTitle: `<span style="display:inline-block;padding:4px 10px;border-radius:6px;background:linear-gradient(90deg, #7c6fee 0%, #4b2fc9 100%);color:#fff;font-weight:700;font-size:13px;white-space:nowrap">${pkg.name}</span>`,
  },
})
