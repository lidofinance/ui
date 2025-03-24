import cn from 'classnames'
import Image from 'next/image'
import {
  ComponentPropsWithoutRef,
  ForwardedRef,
  forwardRef,
  RefObject,
} from 'react'
import { Button } from '../../button'
import styles from './SimpleCard.module.css'

export type CardProps = ComponentPropsWithoutRef<'div'> & {
  title: string
  text: string
  titleImgSrc?: string
  buttonText?: string
  hasArrow?: boolean
  href?: string
}

export const SimpleCard = forwardRef(
  (
    {
      title,
      text,
      buttonText,
      titleImgSrc,
      hasArrow,

      ...rest
    }: CardProps,
    ref?: ForwardedRef<HTMLAnchorElement | HTMLButtonElement>,
  ) => {
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

        <Button
          size={'s'}
          textStyle={'normal'}
          color={buttonText ? 'outline' : 'transparent'}
          withArrow={hasArrow}
          className={cn(styles.button, !buttonText && styles.empty)}
        >
          {buttonText}
        </Button>
      </div>
    )
  },
)

SimpleCard.displayName = 'SimpleCard'
