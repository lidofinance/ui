import type { SVGProps } from 'react'

import { useThemeToggle, ThemeName } from '@lidofinance/lido-shared-ui'
import { IconButton } from '../../src/icon-button'

const SunIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} viewBox='0 0 24 24' fill='none' {...props}>
    <path
      fill='currentColor'
      d='M12 3a1 1 0 011 1v1.455a1 1 0 11-2 0V4a1 1 0 011-1zm0 12.636a3.636 3.636 0 100-7.272 3.636 3.636 0 000 7.272zm1 2.91a1 1 0 10-2 0V20a1 1 0 102 0v-1.454zM5.635 5.634a1 1 0 011.414 0l1.033 1.033A1 1 0 116.668 8.08L5.635 7.048a1 1 0 010-1.414zm11.697 10.284a1 1 0 00-1.414 1.414l1.033 1.033a1 1 0 101.414-1.414l-1.033-1.033zM3 12a1 1 0 011-1h1.455a1 1 0 110 2H4a1 1 0 01-1-1zm15.546-1a1 1 0 100 2H20a1 1 0 100-2h-1.454zM8.082 15.918a1 1 0 010 1.414L7.05 18.365a1 1 0 11-1.414-1.414l1.033-1.033a1 1 0 011.414 0zm10.283-8.87a1 1 0 10-1.414-1.414l-1.033 1.033a1 1 0 001.414 1.414l1.033-1.033z'
    />
  </svg>
)

const MoonIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} viewBox='0 0 24 24' fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      fill='currentColor'
      d='M19 12.63A7.015 7.015 0 1111.37 5 5.456 5.456 0 0019 12.63z'
    />
  </svg>
)

// A theme toggle styled with app-ui's own IconButton instead of
// ThemeToggler's `--lido-ui-*` tokens, which app-ui doesn't define — that
// left it rendering with no real styling on our stories.
export const ThemeToggleButton = () => {
  const { themeName, toggleTheme } = useThemeToggle()
  const isLight = themeName === ThemeName.light

  return (
    <IconButton
      aria-label={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
      icon={isLight ? <MoonIcon /> : <SunIcon />}
      variant='outline'
      onClick={toggleTheme}
    />
  )
}
