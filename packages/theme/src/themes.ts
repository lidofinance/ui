import themeBase from './base'

export const themeLight = {
  ...themeBase,
  colors: {
    ...themeBase.colors,

    secondary: '#273852',
    secondaryHover: '#212f45',
    secondaryContrast: '#fff',

    background: '#f2f4f6',
    backgroundDarken: '#dae0e5',

    foreground: '#fff',

    overlay: 'rgba(0, 0, 0, 0.5)',

    shadowLight: 'rgba(39, 56, 82, 0.08)',
    shadowDark: 'rgba(0, 0, 0, .25)',

    text: '#273852',
    textSecondary: '#7a8aa0',

    border: 'rgba(0, 10, 61, 0.12)',
    borderActive: 'rgba(0, 10, 61, 0.48)',
    borderHover: 'rgba(0, 10, 61, 0.24)',
    borderLight: '#dfe5eb',

    controlBg: '#fff',
  },
}

export const themeDark = {
  ...themeBase,
  colors: {
    ...themeBase.colors,

    secondary: 'rgba(255, 255, 255, .8)',
    secondaryHover: '#fff',
    secondaryContrast: '#273852',

    background: '#1c1c21',
    backgroundDarken: '#131317',

    foreground: '#34343d',

    overlay: 'rgba(0, 0, 0, 0.5)',

    shadowLight: 'rgba(0, 0, 0, .25)',
    shadowDark: 'rgba(0, 0, 0, .5)',

    text: '#fff',
    textSecondary: 'rgba(255, 255, 255, .8)',

    border: 'rgba(255, 255, 255, 0.12)',
    borderActive: 'rgba(255, 255, 255, 0.48)',
    borderHover: 'rgba(255, 255, 255, 0.24)',
    borderLight: '#484855',

    controlBg: '#2f2f37',
  },
}

export const themeDefault = themeLight
