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
import { WaveLoader, WaveLoaderVariant } from './waveLoader/WaveLoader'

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
  icon?: ReactElement
  withArrow?: boolean
  size?: ButtonSize
  loading?: boolean
  textStyle?: ButtonTextStyle
  loaderVariant?: WaveLoaderVariant
  hideArrowOnMobile?: boolean
  imitateHover?: boolean
}

export type ButtonSize = 's' | 'm' | 'l' | 'xl' | 'xxl' // "s" and "xxl" sizes are only for Circle shape
export type ButtonTextStyle = 'normal' | 'semibold' | 'subhead' | 'description'
export type ButtonColor =
  | 'default'
  | 'secondary'
  | 'outline'
  | 'success'
  | 'transparent'
export type ButtonShape = 'oval' | 'circle'

export const Button = forwardRef(
  (
    {
      color = 'default',
      shape = 'oval',
      icon,
      href,
      withArrow,
      size = 'm',
      className,
      children,
      loading,
      textStyle = 'semibold',
      loaderVariant,
      hideArrowOnMobile,
      imitateHover,
      ...rest
    }: ButtonProps,
    ref?: ForwardedRef<HTMLAnchorElement | HTMLButtonElement>,
  ) => {
    const isCircle = shape === 'circle'

    const content = (
      <>
        <WaveLoader
          isVisible={loading}
          variant={loaderVariant}
          scale={size === 'l' ? 1 : size === 'xl' ? 1.2 : 0.8}
          data-testid='button__wave'
        />
        {icon && (
          <>
            {isCircle ? (
              <>
                {cloneElement(icon, {
                  ...icon.props,
                  className: cn(styles.icon, icon.props.className),
                })}
              </>
            ) : (
              <span className={styles.iconWrapper}>
                {cloneElement(icon, {
                  ...icon.props,
                  className: cn(styles.icon, icon.props.className),
                })}
              </span>
            )}
          </>
        )}

        <>
          {!isCircle ? (
            <>
              <span className={cn(styles.content, styles[textStyle])}>
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
              <span className={styles.spacer} />
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
        },
      ),
      children: content,
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
