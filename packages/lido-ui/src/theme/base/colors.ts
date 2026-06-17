const colors = {
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
} as const

export default { colors }
