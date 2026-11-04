import {
  forwardRef,
  type ButtonHTMLAttributes,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from 'react'

import cn from 'classnames'

import styles from './FilterChip.module.css'

export type FilterChipTone =
  | 'default'
  | 'neutral'
  | 'success'
  | 'warning'
  | 'error'

export type FilterChipDataTestId = {
  root?: string
}

export type FilterChipProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'children'
> & {
  label: ReactNode
  count?: number
  tone?: FilterChipTone
  /** Selected state, exposed as `aria-pressed`. */
  active?: boolean
  /** Disables the chip and mutes its tone when `count` is 0. */
  disableWhenEmpty?: boolean
  dataTestId?: FilterChipDataTestId
}

/** Toggle-button pill filter with an optional result count. */
export const FilterChip = forwardRef<HTMLButtonElement, FilterChipProps>(
  (
    {
      label,
      count,
      tone = 'default',
      active = false,
      disableWhenEmpty = true,
      disabled,
      className,
      type = 'button',
      dataTestId,
      ...rest
    },
    ref,
  ) => {
    const muted = disabled || (disableWhenEmpty && count === 0)

    return (
      <button
        ref={ref}
        type={type}
        aria-pressed={active}
        disabled={muted}
        className={cn(
          styles.chip,
          styles[muted ? 'neutral' : tone],
          active && styles.active,
          className,
        )}
        data-testid={dataTestId?.root}
        {...rest}
      >
        {label}
        {count != null ? ` ${count}` : null}
      </button>
    )
  },
)

FilterChip.displayName = 'FilterChip'

export type FilterChipGroupProps = ComponentPropsWithoutRef<'div'>

/** `role="group"` wrapper for a set of `FilterChip`s; give it an `aria-label`. */
export const FilterChipGroup = forwardRef<HTMLDivElement, FilterChipGroupProps>(
  ({ className, children, ...rest }, ref) => (
    <div
      ref={ref}
      role='group'
      className={cn(styles.group, className)}
      {...rest}
    >
      {children}
    </div>
  ),
)

FilterChipGroup.displayName = 'FilterChipGroup'
