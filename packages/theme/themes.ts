import themeBase from './base/index.js'
import { ThemeName } from './constants.js'

export const themeLight = {
  ...themeBase,
  name: ThemeName.light,
  colors: {
    ...themeBase.colors,
    darkThemeOpacity: '0',
    lightThemeOpacity: '1',

    lightModeVisibility: 'visible',
    darkModeVisibility: 'hidden',

    lightDisplay: 'initial',
    darkDisplay: 'none',

    secondary: '#273852',
    secondaryHover: '#212f45',
    secondaryContrast: '#fff',

    background: '#f2f4f6',
    backgroundDarken: '#dae0e5',
    backgroundSecondary: '#EFF2F6',

    foreground: '#fff',

    overlay: 'rgba(0, 0, 0, 0.5)',

    shadowLight: 'rgba(39, 56, 82, 0.08)',
    shadowDark: 'rgba(0, 0, 0, .25)',

    text: '#273852',
    textSecondary: '#7a8aa0',
    accentText: '#273852',

    border: 'rgba(0, 10, 61, 0.12)',
    borderActive: 'rgba(0, 10, 61, 0.48)',
    borderHover: 'rgba(0, 10, 61, 0.24)',
    borderLight: '#dfe5eb',
    accentBorder: 'rgba(0, 10, 61, 0.12)',
    accentBorderHover: 'rgba(0, 10, 61, 0.24)',

    controlBg: '#fff',
    accentControlBg: 'rgba(239, 242, 246, 0.56)',

    popupMenuItemBgActiveHover: '#000a3d',
  },
}

export const themeDark = {
  ...themeBase,
  name: ThemeName.dark,
  colors: {
    ...themeBase.colors,
    darkThemeOpacity: '1',
    lightThemeOpacity: '0',

    lightModeVisibility: 'hidden',
    darkModeVisibility: 'visible',

    lightDisplay: 'none',
    darkDisplay: 'initial',

    secondary: '#fff',
    secondaryHover: '#F5F5F7',
    secondaryContrast: '#273852',

    background: '#1c1c21',
    backgroundDarken: '#131317',
    backgroundSecondary: '#27272E',

    foreground: '#34343d',

    overlay: 'rgba(0, 0, 0, 0.5)',

    shadowLight: 'rgba(0, 0, 0, .25)',
    shadowDark: 'rgba(0, 0, 0, .5)',

    text: '#fff',
    textSecondary: 'rgba(255, 255, 255, .8)',
    accentText: '#fff',

    border: 'rgba(255, 255, 255, 0.12)',
    borderActive: 'rgba(255, 255, 255, 0.48)',
    borderHover: 'rgba(255, 255, 255, 0.24)',
    borderLight: '#484855',
    accentBorder: 'rgba(255, 255, 255, 0.12)',
    accentBorderHover: 'rgba(255, 255, 255, 0.24)',

    controlBg: '#2f2f37',
    accentControlBg: 'rgba(39, 39, 46, 0.56)',

    popupMenuItemBgActiveHover: '#fff',
  },
}

export const themeMap = {
  [ThemeName.light]: themeLight,
  [ThemeName.dark]: themeDark,
}

export const reverseThemeMap = new WeakMap([
  [themeLight, ThemeName.light],
  [themeDark, ThemeName.dark],
])

export const themeDefault = themeLight
