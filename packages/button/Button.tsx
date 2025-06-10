import {
  cloneElement,
  ForwardedRef,
  forwardRef,
  ComponentPropsWithoutRef,
  ReactElement,
  RefObject,
} from 'react'
import cn from 'classnames'
import styles from './Button.module.css'
import { DynamicLink } from '../links'
import { ArrowRight } from '../icons'

export type ButtonDataTestId = {
  root?: string
  wave?: string
  icon?: string
  content?: string
}

export type ButtonProps = (
  | (ComponentPropsWithoutRef<'a'> & {
      href: string
    })
  | (ComponentPropsWithoutRef<'button'> & {
      href?: never
    })
) & {
  color?: ButtonColor
  shape?: ButtonShape
  icon?: ButtonIconProp
  withArrow?: boolean
  size?: ButtonSize
  loading?: boolean
  hideArrowOnMobile?: boolean
  imitateHover?: boolean
  imitateActive?: boolean
  noBorder?: boolean
  dataTestId?: ButtonDataTestId
}

export type ButtonSize = 's' | 'm' | 'l'
export type ButtonColor = 'primary' | 'secondary' | 'tertiary'
export type ButtonShape = 'oval' | 'circle'
export type ButtonIcon = {
  icon: ReactElement
  isColored?: boolean
}

export type ButtonIconProp = ButtonIcon | ReactElement

export const Button = forwardRef(
  (
    {
      color = 'primary',
      shape = 'oval',
      icon,
      href,
      withArrow,
      size = 'm',
      className,
      children,
      loading,
      hideArrowOnMobile,
      imitateHover,
      imitateActive,
      noBorder,
      dataTestId,
      ...rest
    }: ButtonProps,
    ref?: ForwardedRef<HTMLAnchorElement | HTMLButtonElement>,
  ) => {
    const isCircle = shape === 'circle'

    // Helper to determine if icon is an object or ReactElement
    const isIconObject = (iconProp: ButtonIconProp): iconProp is ButtonIcon => {
      return iconProp && typeof iconProp === 'object' && 'icon' in iconProp
    }

    const getIconElement = () => {
      if (!icon) return null

      const iconElement = isIconObject(icon) ? icon.icon : icon
      const isColored = isIconObject(icon) ? icon.isColored : false

      return cloneElement(iconElement, {
        ...iconElement.props,
        className: cn(
          styles.icon,
          isColored && styles.colored,
          iconElement.props.className,
        ),
        'data-testid': dataTestId?.icon,
      })
    }

    const content = (
      <>
        {icon && (
          <>
            {isCircle ? (
              getIconElement()
            ) : (
              <span className={styles.iconWrapper}>{getIconElement()}</span>
            )}
          </>
        )}

        <>
          {!isCircle ? (
            <>
              <span
                className={styles.content}
                data-testid={dataTestId?.content}
              >
                {children}
                {withArrow && (
                  <ArrowRight
                    className={cn(
                      styles.arrow,
                      hideArrowOnMobile && styles.hideArrowOnMobile,
                    )}
                  />
                )}
              </span>
            </>
          ) : (
            <>{withArrow && <ArrowRight className={styles.arrow} />}</>
          )}
        </>
      </>
    )

    const props = {
      className: cn(
        styles.button,
        className,
        styles[`size--${size}`],
        styles[color],
        styles[shape],
        {
          [styles.withIcon]: Boolean(icon),
          [styles[`${shape}-${size}`]]: shape === 'circle',
          [styles[shape]]: shape === 'circle',
          [styles.imitateHover]: imitateHover,
          [styles.imitateActive]: imitateActive,
          [styles.noBorder]: shape === 'circle' && noBorder,
        },
      ),
      children: content,
      'data-testid': dataTestId?.root,
      ...(rest as object),
    }

    if (href) {
      return (
        <DynamicLink
          ref={ref as RefObject<HTMLAnchorElement>}
          href={href}
          {...props}
        />
      )
    }

    return <button ref={ref as RefObject<HTMLButtonElement>} {...props} />
  },
)

Button.displayName = 'Button'
