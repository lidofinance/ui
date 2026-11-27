import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'

import cn from 'classnames'

import { IconShield } from '../icons'
import styles from './SecurityNote.module.css'

export type SecurityNoteDataTestId = {
  root?: string
  icon?: string
}

export type SecurityNoteProps = HTMLAttributes<HTMLParagraphElement> & {
  /** Leading 16px glyph; defaults to the shield. Pass `null` to hide it. */
  icon?: ReactNode
  dataTestId?: SecurityNoteDataTestId
}

/** Centered muted one-liner with a shield glyph, placed under a widget's main button; defaults to the "Non-custodial. Audited. Open-source." copy. */
export const SecurityNote = forwardRef<HTMLParagraphElement, SecurityNoteProps>(
  (
    {
      icon = <IconShield />,
      children = 'Non-custodial. Audited. Open-source.',
      className,
      dataTestId,
      ...rest
    },
    ref,
  ) => (
    <p
      ref={ref}
      className={cn(styles.root, className)}
      data-testid={dataTestId?.root}
      {...rest}
    >
      {icon != null ? (
        <span
          className={styles.icon}
          aria-hidden='true'
          data-testid={dataTestId?.icon}
        >
          {icon}
        </span>
      ) : null}
      <span>{children}</span>
    </p>
  ),
)

SecurityNote.displayName = 'SecurityNote'
