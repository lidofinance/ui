import cn from 'classnames'
import Image from 'next/image'
import {
  ComponentPropsWithoutRef,
  ForwardedRef,
  forwardRef,
  RefObject,
} from 'react'
import { Button } from '../button'
import { Tag } from '../tag'
import styles from './Card.module.css'

export type CardProps = ComponentPropsWithoutRef<'div'> & {
  title: string
  text: string
  titleImgSrc?: string
  withButton?: boolean
  buttonText?: string
  hasArrow?: boolean
  href?: string
  tags: string[]
  logosArray?: string[]
  extraLogosAmount?: number
}

export const Card = forwardRef(
  (
    {
      title,
      text,
      buttonText,
      titleImgSrc,
      hasArrow,
      tags,
      withButton,
      logosArray,
      extraLogosAmount,
      ...rest
    }: CardProps,
    ref?: ForwardedRef<HTMLAnchorElement | HTMLButtonElement>,
  ) => {
    const logosToShow = logosArray?.slice(0, 2)
    return (
      <div
        className={styles.card}
        {...rest}
        ref={ref as RefObject<HTMLAnchorElement>}
      >
        <div className={styles.header}>
          <div className={styles.titleImage}>
            {titleImgSrc && (
              <Image src={titleImgSrc} width={56} height={56} alt={''} />
            )}
          </div>
          <div className={styles.headerLogos}>
            {logosToShow?.map((logo, index) => (
              <div key={index} className={styles.headerLogo}>
                <Image src={logo} width={38} height={38} alt={''} />
              </div>
            ))}
            {extraLogosAmount && (
              <div className={cn(styles.headerLogo, styles.empty)}>
                <span>+{extraLogosAmount}</span>
              </div>
            )}
          </div>
        </div>
        <div
          className={styles.titleItem}
          data-testid='steth-section__blockThreeTitle'
        >
          {title}
        </div>
        <div
          className={styles.descriptionItem}
          data-testid='steth-section__blockThreeDescription'
        >
          {text}
        </div>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <Tag key={tag} size={'s'} variant={'filled'}>
              {tag}
            </Tag>
          ))}
        </div>
        {withButton && (
          <Button
            size={'s'}
            textStyle={'normal'}
            color={buttonText ? 'outline' : 'transparent'}
            withArrow={hasArrow}
            className={cn(styles.button, !buttonText && styles.empty)}
          >
            {buttonText}
          </Button>
        )}
      </div>
    )
  },
)

Card.displayName = 'Card'
