import { addons } from '@storybook/manager-api'
import { STORY_PREPARED } from 'storybook/internal/core-events'
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

// Actions are off globally (preview.tsx), so a story that also disables
// controls leaves the addon panel empty — collapse it for those stories and
// bring it back for the next story that has something to show.
addons.register('lido/collapse-empty-panel', (api) => {
  api.on(STORY_PREPARED, ({ parameters }) => {
    api.togglePanel(!parameters?.controls?.disable)
  })
})
