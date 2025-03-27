import cn from 'classnames'
import React, {
  ComponentPropsWithoutRef,
  ForwardedRef,
  forwardRef,
  useState,
} from 'react'
import NextImage from 'next/image'
import { Button } from '../../button'
import { Link } from '../../links'
import styles from './SimpleCard.module.css'

export type SimpleCardDataTestId = {
  root?: string
  button?: string
  title?: string
  subtitle?: string
  description?: string
}

export type SimpleCardProps = ComponentPropsWithoutRef<'div'> & {
  title: string
  text: string
  subtitle?: string
  titleImgSrc?: string
  buttonText?: string
  href: string
  largeTitle?: boolean
  onClick?: () => void
  dataTestId?: SimpleCardDataTestId
}

export const SimpleCard = forwardRef(
  (
    {
      title,
      largeTitle,
      text,
      buttonText,
      titleImgSrc,
      href,
      subtitle,
      className,
      onClick,
      dataTestId,
    }: SimpleCardProps,
    ref?: ForwardedRef<HTMLAnchorElement>,
  ) => {
    const [hasHover, setHasHover] = useState(false)

    return (
      <Link
        href={href}
        target={'_blank'}
        className={cn(className, styles.card, largeTitle && styles.largeTitle)}
        onClick={onClick}
        data-testid={dataTestId?.root}
        ref={ref}
      >
        <div
          className={styles.cardContainer}
          onMouseEnter={() => setHasHover(true)}
          onMouseLeave={() => setHasHover(false)}
        >
          <div className={styles.cardContent}>
            <div className={styles.header}>
              {titleImgSrc && (
                <div className={styles.titleImage}>
                  <NextImage
                    src={titleImgSrc}
                    width={56}
                    height={56}
                    alt={''}
                  />
                </div>
              )}
            </div>
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
          <Button
            data-testid={dataTestId?.button}
            imitateHover={hasHover}
            size={'l'}
            textStyle={'normal'}
            color={buttonText ? 'outline' : 'transparent'}
            className={cn(styles.button, !buttonText && styles.empty)}
            withArrow={true}
          >
            {buttonText}
          </Button>
        </div>
      </Link>
    )
  },
)

SimpleCard.displayName = 'SimpleCard'
