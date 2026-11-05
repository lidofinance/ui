import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'

import cn from 'classnames'

import { IconCheck } from '../icons'
import styles from './SelectItem.module.css'

export type SelectItemSize = 'default' | 'small'

export type SelectItemLabelWeight = 'regular' | 'semibold'

export type SelectItemDataTestId = {
  root?: string
  icon?: string
  label?: string
  secondaryLabel?: string
  description?: string
}

type SelectItemContentProps = {
  labelWeight: SelectItemLabelWeight
  icon?: ReactNode
  label: ReactNode
  secondaryLabel?: ReactNode
  dataTestId?: SelectItemDataTestId
}

/** Icon + label + secondary label, shared by items and the Select trigger so both look identical. */
export const SelectItemContent = ({
  labelWeight,
  icon,
  label,
  secondaryLabel,
  dataTestId,
}: SelectItemContentProps) => (
  <>
    {icon != null ? (
      <span
        className={styles.icon}
        aria-hidden='true'
        data-testid={dataTestId?.icon}
      >
        {icon}
      </span>
    ) : null}
    <span
      className={cn(
        styles.label,
        labelWeight === 'semibold' && styles.semibold,
      )}
      data-testid={dataTestId?.label}
    >
      {label}
    </span>
    {secondaryLabel != null ? (
      <span
        className={styles.secondaryLabel}
        data-testid={dataTestId?.secondaryLabel}
      >
        {secondaryLabel}
      </span>
    ) : null}
  </>
)

export type SelectItemProps = Omit<HTMLAttributes<HTMLElement>, 'children'> & {
  size?: SelectItemSize
  /** Label font weight; `semibold` is the token-picker look. */
  labelWeight?: SelectItemLabelWeight
  icon?: ReactNode
  label: ReactNode
  /** Muted text next to the label, default size only. */
  secondaryLabel?: ReactNode
  /** Caption below the label row, default size only. */
  description?: ReactNode
  selected?: boolean
  /** Keyboard-highlighted: same look as hover. */
  active?: boolean
  disabled?: boolean
  /** Use `button` for action menus; the parent supplies role, aria and handlers either way. */
  as?: 'div' | 'button'
  dataTestId?: SelectItemDataTestId
}

/** Presentational list item for Select options and custom menus. */
export const SelectItem = forwardRef<HTMLElement, SelectItemProps>(
  (
    {
      size = 'default',
      labelWeight = 'regular',
      icon,
      label,
      secondaryLabel,
      description,
      selected = false,
      active = false,
      disabled = false,
      as: Root = 'div',
      className,
      dataTestId,
      ...rest
    },
    ref,
  ) => {
    const isDefault = size === 'default'

    return (
      <Root
        ref={ref as never}
        {...(Root === 'button' ? { type: 'button', disabled } : null)}
        className={cn(
          styles.root,
          styles[size],
          {
            [styles.selected]: selected,
            [styles.active]: active,
            [styles.disabled]: disabled,
          },
          className,
        )}
        data-testid={dataTestId?.root}
        {...rest}
      >
        <span className={styles.body}>
          <span className={styles.row}>
            <SelectItemContent
              labelWeight={labelWeight}
              icon={icon}
              label={label}
              secondaryLabel={isDefault ? secondaryLabel : undefined}
              dataTestId={dataTestId}
            />
          </span>
          {isDefault && description != null ? (
            <span
              className={styles.description}
              data-testid={dataTestId?.description}
            >
              {description}
            </span>
          ) : null}
        </span>
        {isDefault && selected ? (
          <span className={styles.indicator} aria-hidden='true'>
            <IconCheck className={styles.checkmark} />
          </span>
        ) : null}
      </Root>
    )
  },
)

SelectItem.displayName = 'SelectItem'
