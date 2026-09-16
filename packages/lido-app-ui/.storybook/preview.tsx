import { WithThemeProvider } from './components/WithThemeProvider'

import '../styles/global.css'
import './styles/storybook.css'

export default {
  tags: ['autodocs'],
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: { type: 'dynamic' },
    },
    viewport: {
      viewports: {
        px1440: {
          name: '1440px — desktop',
          styles: { width: '1440px', height: '900px' },
        },
        px900: {
          name: '900px — md boundary',
          styles: { width: '900px', height: '900px' },
        },
        px899: {
          name: '899px — md-down',
          styles: { width: '899px', height: '900px' },
        },
        px599: {
          name: '599px — sm-down',
          styles: { width: '599px', height: '800px' },
        },
        px375: {
          name: '375px — mobile',
          styles: { width: '375px', height: '800px' },
        },
      },
    },
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
