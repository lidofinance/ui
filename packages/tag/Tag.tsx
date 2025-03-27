import {
  ComponentPropsWithoutRef,
  ForwardedRef,
  ReactNode,
  forwardRef,
} from 'react'
import styles from './Tag.module.css'
import cn from 'classnames'
import { Close } from '../icons'

export type TagDataTestId = {
  root?: string
  icon?: string
  content?: string
  closeButton?: string
}

export type TagProps = Omit<ComponentPropsWithoutRef<'div'>, 'color'> & {
  variant?: TagVariant
  color?: TagColor
  size?: TagSize
  icon?: ReactNode
  onClose?: () => void
  dataTestId?: TagDataTestId
}

export type TagVariant = 'outline' | 'filled'
export type TagColor =
  | 'default'
  | 'accent'
  | 'disabled'
  | 'negative'
  | 'warning'
  | 'positive'
export type TagSize = 's' | 'm' | 'l'

export const Tag = forwardRef(
  (
    {
      variant = 'outline',
      color = 'default',
      size = 's',
      icon,
      className,
      children,
      onClose,
      dataTestId,
      ...rest
    }: TagProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
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
        )}
        data-testid={dataTestId?.root}
        {...rest}
        ref={ref}
      >
        <span className={styles.icon} data-testid={dataTestId?.icon}>
          {icon}
        </span>
        <span
          className={cn(styles[`size--${size}`], {
            [styles.withIcon]: icon != null,
            [styles.withOnClose]: Boolean(onClose),
          })}
          data-testid={dataTestId?.content}
        >
          {children}
        </span>
        {Boolean(onClose) && (
          <span
            className={cn(styles.icon, styles.closeButton)}
            onClick={onClose}
            onKeyDown={handleKeyDown}
            role='button'
            tabIndex={0}
            data-testid={dataTestId?.closeButton}
          >
            <Close width='20px' height='20px' style={{ marginRight: '10px' }} />
          </span>
        )}
      </div>
    )
  },
)
Tag.displayName = 'Tag'
