import { ButtonHTMLAttributes, ForwardedRef, forwardRef } from 'react'
import { useThemeToggle } from '../use-theme-toggle'
import { Dark, Light } from '../../icons'
import cn from 'classnames'
import styles from './theme-toggler.module.css'

export interface ThemeTogglerProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

export const ThemeToggler = forwardRef(
  (
    { className, ...rest }: ThemeTogglerProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    const { toggleTheme, themeName } = useThemeToggle()

    return (
      <button
        className={cn(styles.themeToggler, className)}
        ref={ref}
        {...rest}
        onClick={toggleTheme}
      >
        <>
          <Light className={styles.light} />
          {themeName}
          <Dark className={styles.dark} />
        </>
      </button>
    )
  },
)
ThemeToggler.displayName = 'ThemeToggler'
