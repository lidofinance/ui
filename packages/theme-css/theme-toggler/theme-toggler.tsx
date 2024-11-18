import { ForwardedRef, forwardRef } from 'react'
import { useThemeToggle } from '../use-theme-toggle'
import { Dark, Light } from '../../icons'
import cn from 'classnames'
import styles from './theme-toggler.module.css'

export type ThemeTogglerProps = any

export const ThemeToggler = forwardRef(
  (
    { className, ...rest }: any,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    const { toggleTheme, themeName } = useThemeToggle()

    return (
      <button
        variant='text'
        size='xs'
        color='secondary'
        className={cn(styles.themeToggler, className)}
        ref={ref}
        {...rest}
        onClick={toggleTheme}
      >
        <Light className={styles.light} />
        <Dark className={styles.dark} />
      </button>
    )
  },
)
ThemeToggler.displayName = 'ThemeToggler'