import cn from 'classnames'
import {
  ComponentPropsWithoutRef,
  ForwardedRef,
  forwardRef,
  MouseEventHandler,
  ReactNode,
  useState,
} from 'react'
import { Button } from '../../button'
import { Link, LinkProps } from '../../links'
import styles from './SliderCard.module.css'

export type SliderCardDataTestId = {
  root?: string
  button?: string
  title?: string
  subtitle?: string
  description?: string
  footer?: string
  icon?: string
  image?: string
}

export type SliderCardProps = ComponentPropsWithoutRef<'div'> & {
  title: string
  subtitle?: string
  text: string
  icon?: ReactNode
  image?: ReactNode
  buttonText?: string
  footer?: ReactNode
  href: string
  target?: LinkProps['target']
  useNextLink?: LinkProps['useNextLink']
  nextLinkComponent?: LinkProps['nextLinkComponent']
  variant?: SliderCardVariant
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLDivElement>
  dataTestId?: SliderCardDataTestId
}

export type SliderCardVariant = 'default' | 'last-child'

export const SliderCard = forwardRef(
  (
    {
      title,
      text,
      buttonText,
      footer,
      icon,
      image,
      href,
      target = '_blank',
      useNextLink,
      nextLinkComponent,
      subtitle,
      variant = 'default',
      className,
      style,
      onClick,
      dataTestId,
    }: SliderCardProps,
    ref?: ForwardedRef<HTMLAnchorElement>,
  ) => {
    const [hasHover, setHasHover] = useState(false)

    const type = image ? 'image' : 'icon'

    const largeTitle = variant === 'last-child'

    return (
      <Link
        href={href}
        target={target}
        useNextLink={useNextLink}
        nextLinkComponent={nextLinkComponent}
        style={style}
        className={cn(
          className,
          styles.card,
          largeTitle && styles.largeTitle,
          styles[`variant--${variant}`],
          styles[`type--${type}`],
        )}
        onClick={onClick}
        data-testid={dataTestId?.root}
        ref={ref}
      >
        <div
          className={cn(styles.cardContainer, footer && styles.hasFooter)}
          onMouseEnter={() => setHasHover(true)}
          onMouseLeave={() => setHasHover(false)}
        >
          <div className={styles.cardContent}>
            {(icon || image) && (
              <div className={styles.header}>
                {icon && (
                  <div
                    className={styles.iconContainer}
                    data-testid={dataTestId?.icon}
                  >
                    {icon}
                  </div>
                )}
                {image && (
                  <div
                    className={styles.imageContainer}
                    data-testid={dataTestId?.image}
                  >
                    {image}
                  </div>
                )}
              </div>
            )}
            <div className={styles.titleItem} data-testid={dataTestId?.title}>
              {title}
            </div>
            {subtitle && (
              <div
                className={styles.subtitleItem}
                data-testid={dataTestId?.subtitle}
              >
                {subtitle}
              </div>
            )}
            <div
              className={styles.descriptionItem}
              data-testid={dataTestId?.description}
            >
              {text}
            </div>
          </div>
          {footer && (
            <div className={styles.footer} data-testid={dataTestId?.footer}>
              {footer}
            </div>
          )}
          {buttonText && (
            <Button
              data-testid={dataTestId?.button}
              imitateHover={hasHover}
              size={'m'}
              color={'tertiary'}
              className={cn(styles.button)}
            >
              {buttonText}
            </Button>
          )}
        </div>
      </Link>
    )
  },
)

SliderCard.displayName = 'SliderCard'

export type SliderCardIconProps = Omit<SliderCardProps, 'image'> & {
  icon?: ReactNode
}

export const SliderCardIcon = forwardRef(
  (
    { icon, ...props }: SliderCardIconProps,
    ref?: ForwardedRef<HTMLAnchorElement>,
  ) => {
    return <SliderCard {...props} icon={icon} ref={ref} />
  },
)

SliderCardIcon.displayName = 'SliderCardIcon'

export type SliderCardImageProps = Omit<SliderCardProps, 'icon'> & {
  image: ReactNode
}

export const SliderCardImage = forwardRef(
  (
    { image, ...props }: SliderCardImageProps,
    ref?: ForwardedRef<HTMLAnchorElement>,
  ) => {
    return <SliderCard {...props} image={image} ref={ref} />
  },
)

SliderCardImage.displayName = 'SliderCardImage'
