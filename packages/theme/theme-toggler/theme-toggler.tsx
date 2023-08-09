import { ForwardedRef, forwardRef } from 'react'
import { useThemeToggle } from '../use-theme-toggle'
import { Button, ButtonProps } from '../../button'
import { Dark, Light } from '../../icons'
import cn from 'classnames'
import styles from './theme-toggler.module.css'

export type ThemeTogglerProps = ButtonProps

export const ThemeToggler = forwardRef(
  (
    { className, ...rest }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    const { toggleTheme } = useThemeToggle()

    return (
      <Button
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
      </Button>
    )
  },
)
ThemeToggler.displayName = 'ThemeToggler'
