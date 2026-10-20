import { forwardRef, type MouseEvent } from 'react'

import { ThemeName, useThemeToggle } from '@lidofinance/lido-shared-ui'

import { IconButton, type IconButtonProps } from '../icon-button'
import { IconDay, IconNight } from '../icons'

export type ThemeSwitcherProps = Omit<
  IconButtonProps,
  'icon' | 'variant' | 'aria-label'
>

/** Round icon button that toggles the light/dark theme from the theme context. */
export const ThemeSwitcher = forwardRef<HTMLButtonElement, ThemeSwitcherProps>(
  ({ onClick, ...rest }, ref) => {
    const { themeName, toggleTheme } = useThemeToggle()
    const isLight = themeName === ThemeName.light

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
      toggleTheme()
      onClick?.(event)
    }

    return (
      <IconButton
        {...rest}
        ref={ref}
        variant='surface'
        aria-label={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
        icon={isLight ? <IconNight /> : <IconDay />}
        onClick={handleClick}
      />
    )
  },
)

ThemeSwitcher.displayName = 'ThemeSwitcher'
