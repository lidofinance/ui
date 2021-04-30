const theme = {
  spacing: {
    extraLarge: '32px',
    large: '24px',
    medium: '16px',
    small: '8px',
    extraSmall: '4px',
  },
  colors: {
    main: '#00A3FF',
    background: '#F4F6F8',
    error: '#E14D4D',
    text: '#0C141D',
    textSecondary: '#7A8AA0',
    success: '#61B75F',
    border: '#d1d8df',
    borderHover: '#b1b7bd',
    controlBg: '#fff',
    inputPlaceholder: 'rgba(39, 56, 82, 0.3)',
  },
  breakpoints: ['360px', '480px', '768px', '1024px'],
  breakpointsObject: {
    sm: '360px',
    md: '480px',
    lg: '768px',
    xl: '1024px',
  },
  dur: {
    fast: '100ms',
    med: '150ms',
    norm: '200ms',
  },
  ease: {
    InSine: 'cubic-bezier(0.47, 0, 0.745, 0.715)',
    OutSine: 'cubic-bezier(0.39, 0.575, 0.565, 1)',
    InOutSine: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',

    InQuad: 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
    OutQuad: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    InOutQuad: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',

    InCubic: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    OutCubic: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    InOutCubic: 'cubic-bezier(0.645, 0.045, 0.355, 1)',

    InQuart: 'cubic-bezier(0.895, 0.03, 0.685, 0.22)',
    OutQuart: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
    InOutQuart: 'cubic-bezier(0.77, 0, 0.175, 1)',

    InQuint: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
    OutQuint: 'cubic-bezier(0.23, 1, 0.32, 1)',
    InOutQuint: 'cubic-bezier(0.86, 0, 0.07, 1)',

    InExpo: 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
    OutExpo: 'cubic-bezier(0.19, 1, 0.22, 1)',
    InOutExpo: 'cubic-bezier(1, 0, 0, 1)',

    InCirc: 'cubic-bezier(0.6, 0.04, 0.98, 0.335)',
    OutCirc: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
    InOutCirc: 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',

    InBack: 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
    OutBack: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    InOutBack: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  }
}

type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export default theme
