import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type MouseEvent,
} from 'react'

import cn from 'classnames'

import { IconCheck, IconCopy } from '../icons'
import styles from './Copy.module.css'
import { useCopy } from './useCopy'

export type CopyProps = Omit<ComponentPropsWithoutRef<'button'>, 'children'> & {
  text: string
  onCopy?: () => void
}

export const Copy = forwardRef<HTMLButtonElement, CopyProps>(
  ({ text, onCopy, onClick, className, ...rest }, ref) => {
    const { copy, copied } = useCopy(text, { onCopy })

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
      onClick?.(event)
      void copy()
    }

    return (
      <button
        ref={ref}
        type='button'
        aria-label={copied ? 'Copied' : 'Copy'}
        data-copied={copied || undefined}
        className={cn(styles.root, className)}
        onClick={handleClick}
        {...rest}
      >
        <span className={styles.icon} aria-hidden='true'>
          <span className={cn(styles.glyph, styles.idle)}>
            <IconCopy />
          </span>
          <span className={cn(styles.glyph, styles.done)}>
            <IconCheck />
          </span>
        </span>
      </button>
    )
  },
)

Copy.displayName = 'Copy'
