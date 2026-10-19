import { forwardRef, type ComponentPropsWithoutRef } from 'react'

import cn from 'classnames'

import styles from './Main.module.css'

export const MAIN_CONTENT_ID = 'main-content'

export type MainProps = ComponentPropsWithoutRef<'main'>

/** Page landmark that SkipLink targets; grows to push Footer down. */
export const Main = forwardRef<HTMLElement, MainProps>(
  ({ id = MAIN_CONTENT_ID, className, ...rest }, ref) => (
    <main ref={ref} id={id} className={cn(styles.root, className)} {...rest} />
  ),
)

Main.displayName = 'Main'
