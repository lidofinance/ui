import cn from 'classnames'
import {
  ComponentPropsWithoutRef,
  ForwardedRef,
  forwardRef,
  ReactNode,
} from 'react'
import { Cross } from '../icons'
import styles from './Tag.module.css'

export type TagDataTestId = {
  root?: string
  icon?: string
  content?: string
  closeButton?: string
}

export type TagProps = Omit<ComponentPropsWithoutRef<'div'>, 'color'> & {
  variant?: TagVariant
  color?: TagColor
  shape?: TagShape
  icon?: ReactNode
  onClose?: () => void
  dataTestId?: TagDataTestId
}

export type TagVariant = 'primary' | 'secondary'
export type TagColor =
  | 'default'
  | 'highlighted'
  | 'error'
  | 'warning'
  | 'success'
export type TagShape = 'rounded' | 'squared'

export const Tag = forwardRef(
  (
    {
      variant = 'secondary',
      color = 'default',
      shape = 'rounded',
      icon,
      className,
      children,
      onClose,
      dataTestId,
      ...rest
    }: TagProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const hoverable = Boolean(onClose)

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        onClose?.()
      }
    }

    return (
      <div
        className={cn(
          styles.tag,
          className,
          styles[`variant--${variant}`],
          styles[`color--${color}`],
          styles[`shape--${shape}`],
          {
            [styles.withIcon]: Boolean(icon),
            [styles.hoverable]: Boolean(hoverable),
            [styles.withOnClose]: Boolean(onClose),
          },
        )}
        data-testid={dataTestId?.root}
        {...rest}
        ref={ref}
      >
        {icon && (
          <span className={styles.iconWrapper} data-testid={dataTestId?.icon}>
            <span className={styles.icon}>{icon}</span>
          </span>
        )}
        <span className={styles.content} data-testid={dataTestId?.content}>
          {children}
        </span>
        {Boolean(onClose) && (
          <span
            className={styles.closeButton}
            onClick={onClose}
            onKeyDown={handleKeyDown}
            role='button'
            tabIndex={0}
            data-testid={dataTestId?.closeButton}
          >
            <Cross width='16px' height='16px' />
          </span>
        )}
      </div>
    )
  },
)
Tag.displayName = 'Tag'
