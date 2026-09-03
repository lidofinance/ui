import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react'

import { IconCheck } from '../icons'
import cn from 'classnames'

import styles from './Checkbox.module.css'

export type CheckboxProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type'
> & {
  label?: ReactNode
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className, ...rest }, ref) => (
    <label className={cn(styles.root, className)}>
      <span className={styles.control}>
        <input ref={ref} type='checkbox' className={styles.input} {...rest} />
        <span className={styles.box}>
          <IconCheck className={styles.tick} />
        </span>
      </span>
      {label ? <span className={styles.label}>{label}</span> : null}
    </label>
  ),
)

Checkbox.displayName = 'Checkbox'
