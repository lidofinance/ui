import cn from 'classnames'
import { ComponentPropsWithoutRef, FC, ReactElement } from 'react'
import styles from './content-theme.module.css'

export type ContentThemeProps = ComponentPropsWithoutRef<'div'> & {
  darkContent: ReactElement
  lightContent: ReactElement
}

export const ContentTheme: FC<ContentThemeProps> = ({
  darkContent,
  lightContent,
  className,
  ...rest
}: ContentThemeProps) => {
  return (
    <>
      <div className={cn(styles.dark, className)} {...rest}>
        {darkContent}
      </div>
      <div className={cn(styles.light, className)} {...rest}>
        {lightContent}
      </div>
    </>
  )
}
