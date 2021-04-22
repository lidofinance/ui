import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    spacing: {
      extraLarge: string
      large: string
      medium: string
      small: string
      extraSmall: string
    }
    colors: {
      main: string
      mainDark: string
      secondary: string
      secondaryDark: string
      background: string
      error: string
      text: string
      textSecondary: string
      success: string
      border: string
      borderHover: string
    }
    breakpoints: string[]
    breakpointsObject: {
      sm: string
      md: string
      lg: string
      xl: string
    }
    dur: {
      fast: string
      med: string
      norm: string
    }
  }
}

const theme: DefaultTheme = {
  spacing: {
    extraLarge: '32px',
    large: '24px',
    medium: '16px',
    small: '8px',
    extraSmall: '4px',
  },
  colors: {
    main: '#00A3FF',
    mainDark: '#009BF2',
    secondary: '#273852',
    secondaryDark: '#212F45',
    background: '#F4F6F8',
    error: '#FF564F',
    text: '#0C141D',
    textSecondary: '#5D6B7B',
    success: '#61B75F',
    border: '#d1d8df',
    borderHover: '#b1b7bd',
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
}

export default theme
