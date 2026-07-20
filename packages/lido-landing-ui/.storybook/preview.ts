import { WithThemeProvider } from './components/WithThemeProvider.js'

import './styles/storybook.css'
import '../styles/global.css'

export default {
  tags: ['autodocs'],

  parameters: {
    controls: { hideNoControlsWarning: true },
    viewport: {
      viewports: {
        px1800: {
          name: '1800px',
          styles: {
            width: '1800px',
            height: '500px',
          },
        },
        px1500: {
          name: '1200px',
          styles: {
            width: '1200px',
            height: '500px',
          },
        },
        px800: {
          name: '800px',
          styles: {
            width: '800px',
            height: '800px',
          },
        },
        px600: {
          name: '600px',
          styles: {
            width: '600px',
            height: '800px',
          },
        },
        px550: {
          name: '550px',
          styles: {
            width: '550px',
            height: '800px',
          },
        },
        px300: {
          name: '300px',
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
