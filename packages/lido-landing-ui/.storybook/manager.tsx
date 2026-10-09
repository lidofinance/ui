import { addons } from '@storybook/manager-api'
import { themes } from '@storybook/theming'

import pkg from '../package.json'
import { brandTitle } from '../../../storybook-shared/brandTitle'

addons.setConfig({
  theme: {
    ...themes.normal,
    brandUrl: '',
    brandTitle: brandTitle(
      pkg.name,
      'linear-gradient(90deg, #22d3c5 0%, #0e7d74 100%)',
    ),
  },
})
