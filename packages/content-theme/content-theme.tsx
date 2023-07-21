import { ComponentPropsWithoutRef, FC, ReactElement } from 'react'
import styles from './content-theme.module.css'

export type ContentThemeProps = ComponentPropsWithoutRef<'div'> & {
  darkContent: ReactElement
  lightContent: ReactElement
}

export const ContentTheme: FC<ContentThemeProps> = (
  props: ContentThemeProps,
) => {
  return (
    <>
      <div className={styles.dark}>{props.darkContent}</div>
      <div className={styles.light}>{props.lightContent}</div>
    </>
  )
}
