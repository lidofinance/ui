import { ForwardedRef, forwardRef } from 'react'
import { useThemeToggle } from '../use-theme-toggle'
import { Dark, Light } from '../../icons'
import cn from 'classnames'
import styles from './theme-toggler.module.css'
import { Button, ButtonProps } from '../../button'
import { DEFAULT_THEME_NAME } from '../constants'

export type ThemeTogglerProps = ButtonProps

export const ThemeToggler = forwardRef(
  (
    { className, ...rest }: ThemeTogglerProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    const { toggleTheme, themeName } = useThemeToggle()

    const isLightTheme = themeName === DEFAULT_THEME_NAME

    return (
      <Button
        className={cn(styles.themeToggler, className)}
        ref={ref}
        onClick={toggleTheme}
        shape='circle'
        size='s'
        icon={
          isLightTheme ? (
            <Light className={styles.icon} />
          ) : (
            <Dark className={styles.icon} />
          )
        }
        {...rest}
      ></Button>
    )
  },
)
ThemeToggler.displayName = 'ThemeToggler'
