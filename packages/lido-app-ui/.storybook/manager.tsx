import { addons } from '@storybook/manager-api'
import { themes } from 'storybook/internal/theming'

import pkg from '../package.json'
import { brandTitle } from '../../../storybook-shared/brandTitle'

addons.setConfig({
  theme: {
    ...themes.normal,
    brandUrl: '',
    brandTitle: brandTitle(
      pkg.name,
      'linear-gradient(90deg, #7c6fee 0%, #4b2fc9 100%)',
    ),
  },
})
