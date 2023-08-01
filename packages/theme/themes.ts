import { ThemeName } from './cookie-theme-provider'

type Breakpoint = {
  width: `${number}px`
  height: `${number}px`
}

const sm: Breakpoint = {
  width: '359px',
  height: '639px',
}

const md: Breakpoint = {
  width: '479px',
  height: '799px',
}

const lg: Breakpoint = {
  width: '767px',
  height: '1023px',
}

const xl: Breakpoint = {
  width: '1023px',
  height: '1365px',
}

const themeBase = {
  borderRadiuses: [4, 6, 8, 10, 12],
  borderRadiusesMap: {
    xs: 4,
    sm: 6,
    md: 8,
    lg: 10,
    xl: 20,
  },
  colors: {
    darkThemeOpacity: '0',
    lightThemeOpacity: '1',

    lightModeVisibility: 'visible',
    darkModeVisibility: 'hidden',

    lightDisplay: 'initial',
    darkDisplay: 'none',

    primary: '#00a3ff',
    primaryHover: '#009bf2',
    primaryContrast: '#fff',
    primaryVisited: '#4bbeff',

    accent: '#27272e',
    accentContrast: '#fff',
    accentContrastSecondary: 'rgba(255, 255, 255, 0.6)',
    accentDarken: 'rgba(0, 0, 0, .2)',
    accentControlBg: 'rgba(0, 0, 0, .1)',
    accentBorder: 'rgba(255, 255, 255, 0.2)',
    accentBorderHover: 'rgba(255, 255, 255, 0.3)',

    error: '#e14d4d',
    errorHover: '#d44c4d',
    errorContrast: '#fff',

    warning: '#EC8600',
    warningHover: '#f0a431',
    warningContrast: '#fff',
    warningBackground: '#FFFAE0',

    textDark: '#273852',

    success: '#53BA95',
    successHover: '#4ba886',
    successContrast: '#fff',
  },
  boxShadows: {
    xs: '0px 4px 8px 0px',
    sm: '0px 4px 12px 0px',
    md: '0px 4px 16px 0px',
    lg: '0px 8px 24px 0px',
    xl: '0px 8px 32px 0px',
    xxl: '0px 8px 44px 0px',
  },
  space: [4, 8, 16, 24, 32],
  spaceMap: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 20,
    xl: 24,
    xxl: 32,
  },
  fontSizes: [10, 12, 14, 16, 18, 20, 26, 32, 40, 50],
  fontSizesMap: {
    xxxs: 10,
    xxs: 12,
    xs: 14,
    sm: 16,
    md: 18,
    lg: 20,
    xl: 26,
    xxl: 32,
    xxxl: 40,
    xxxxl: 50,
  },
  duration: {
    fast: '100ms',
    med: '150ms',
    norm: '200ms',
  },
  ease: {
    inSine: 'cubic-bezier(0.47, 0, 0.745, 0.715)',
    outSine: 'cubic-bezier(0.39, 0.575, 0.565, 1)',
    inOutSine: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',

    inQuad: 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
    outQuad: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    inOutQuad: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',

    inCubic: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    outCubic: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    inOutCubic: 'cubic-bezier(0.645, 0.045, 0.355, 1)',

    inQuart: 'cubic-bezier(0.895, 0.03, 0.685, 0.22)',
    outQuart: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
    inOutQuart: 'cubic-bezier(0.77, 0, 0.175, 1)',

    inQuint: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
    outQuint: 'cubic-bezier(0.23, 1, 0.32, 1)',
    inOutQuint: 'cubic-bezier(0.86, 0, 0.07, 1)',

    inExpo: 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
    outExpo: 'cubic-bezier(0.19, 1, 0.22, 1)',
    inOutExpo: 'cubic-bezier(1, 0, 0, 1)',

    inCirc: 'cubic-bezier(0.6, 0.04, 0.98, 0.335)',
    outCirc: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
    inOutCirc: 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',

    inBack: 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
    outBack: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    inOutBack: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
  mediaQueries: {
    sm: `@media screen and (max-width: ${sm.width})`,
    md: `@media screen and (max-width: ${md.width})`,
    lg: `@media screen and (max-width: ${lg.width})`,
    xl: `@media screen and (max-width: ${xl.width})`,
  },
  breakpointsMap: { sm, md, lg, xl },
  breakpoints: [sm.width, md.width, lg.width, xl.width],
}

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

    secondary: 'rgba(255, 255, 255, .8)',
    secondaryHover: '#fff',
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
} as const

export const reverseThemeMap = new WeakMap([
  [themeLight, ThemeName.light],
  [themeDark, ThemeName.dark],
])

export const themeDefault = themeLight

export type Theme = typeof themeLight

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
