import { WithThemeProvider } from './components/WithThemeProvider.js'

import './styles/storybook.css'
import '../styles/global.css'

export default {
  tags: ['autodocs'],

  parameters: {
    controls: { hideNoControlsWarning: true },
    viewport: {
      viewports: {
        px1500: {
          name: '[Desktop] 1500px',
          styles: {
            width: '1500px',
            height: '800px',
          },
        },
        px1300: {
          name: '[Mid] 1300px',
          styles: {
            width: '1300px',
            height: '800px',
          },
        },
        px900: {
          name: '[Mobile] 900px',
          styles: {
            width: '900px',
            height: '800px',
          },
        },
        px1800: {
          name: '[Custom] 1800px',
          styles: {
            width: '1800px',
            height: '800px',
          },
        },
        px1200: {
          name: '[Custom] 1200px',
          styles: {
            width: '1300px',
            height: '800px',
          },
        },
        px800: {
          name: '[Custom] 800px',
          styles: {
            width: '800px',
            height: '800px',
          },
        },
        px600: {
          name: '[Custom] 600px',
          styles: {
            width: '600px',
            height: '800px',
          },
        },
        px550: {
          name: '[Custom] 550px',
          styles: {
            width: '550px',
            height: '800px',
          },
        },
        px375: {
          name: '[Custom] 375px',
          styles: {
            width: '375px',
            height: '800px',
          },
        },
        px300: {
          name: '[Custom] 300px',
          styles: {
            width: '300px',
            height: '800px',
          },
        },
      },
    },
  },

  initialGlobals: {
    themeOverride: 'light',
  },

  argTypes: {
    themeOverride: {
      control: 'inline-radio',
      options: ['dark', 'light', 'follow cookie and system'],
    },
  },

  decorators: [WithThemeProvider],
}
