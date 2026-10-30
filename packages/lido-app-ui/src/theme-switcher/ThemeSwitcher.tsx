import { forwardRef, type MouseEvent } from 'react'

import { ThemeName, useThemeToggle } from '@lidofinance/lido-shared-ui'

import { IconButton, type IconButtonProps } from '../icon-button'
import { IconDay, IconNight } from '../icons'
import styles from './ThemeSwitcher.module.css'

export type ThemeSwitcherProps = Omit<
  IconButtonProps,
  'icon' | 'variant' | 'aria-label'
> & {
  /** Overrides the default English label, e.g. for localization. */
  'aria-label'?: string
}

/** Round icon button that toggles the light/dark theme; needs `CookieThemeProvider`, without it the click does nothing. The icon follows the theme in CSS, the label follows the provider state, so pass `initialThemeName` from the request cookie in SSR apps. */
export const ThemeSwitcher = forwardRef<HTMLButtonElement, ThemeSwitcherProps>(
  ({ onClick, 'aria-label': ariaLabel, ...rest }, ref) => {
    const { themeName, toggleTheme } = useThemeToggle()
    const isDark = themeName === ThemeName.dark

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
      toggleTheme?.()
      onClick?.(event)
    }

    return (
      <IconButton
        {...rest}
        ref={ref}
        variant='surface'
        aria-label={
          ariaLabel ??
          (isDark ? 'Switch to light theme' : 'Switch to dark theme')
        }
        icon={
          <>
            <IconNight className={styles.toDark} />
            <IconDay className={styles.toLight} />
          </>
        }
        onClick={handleClick}
      />
    )
  },
)

ThemeSwitcher.displayName = 'ThemeSwitcher'
