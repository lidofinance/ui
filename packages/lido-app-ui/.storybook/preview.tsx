import { WithThemeProvider } from './components/WithThemeProvider'
import { iconArgs } from './iconControl'
import { slotControls } from './slotControls'
import { viewports } from './viewports'

import '@lidofinance/lido-shared-ui/index.css'
import '../styles/global.css'
import './styles/storybook.css'

export default {
  tags: ['autodocs'],
  parameters: {
    actions: { disable: true },
    controls: { hideNoControlsWarning: true },
    docs: {
      source: { type: 'dynamic' },
    },
    viewport: { options: viewports },
  },
  argTypesEnhancers: [slotControls],
  argsEnhancers: [iconArgs],
  argTypes: {
    dataTestId: { table: { disable: true } },
  },
  initialGlobals: {
    themeOverride: 'light',
  },
  globalTypes: {
    themeOverride: {
      description: 'Theme',
      toolbar: {
        title: 'Theme',
        items: ['dark', 'light', 'follow cookie and system'],
        dynamicTitle: true,
      },
    },
  },
  decorators: [WithThemeProvider],
}
