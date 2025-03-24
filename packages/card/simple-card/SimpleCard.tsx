import cn from 'classnames'
import Image from 'next/image'
import {
  ComponentPropsWithoutRef,
  ForwardedRef,
  forwardRef,
  RefObject,
  useState,
} from 'react'
import { Button } from '../../button'
import styles from './SimpleCard.module.css'

export type SimpleCardProps = ComponentPropsWithoutRef<'div'> & {
  title: string
  text: string
  titleImgSrc?: string
  buttonText?: string
  href?: string
  largeTitle?: boolean
}

export const SimpleCard = forwardRef(
  (
    {
      title,
      largeTitle,
      text,
      buttonText,
      titleImgSrc,

      ...rest
    }: SimpleCardProps,
    ref?: ForwardedRef<HTMLAnchorElement | HTMLButtonElement>,
  ) => {
    const [hasHover, setHasHover] = useState(false)

    return (
      <div
        className={styles.card}
        {...rest}
        onMouseEnter={() => setHasHover(true)}
        onMouseLeave={() => setHasHover(false)}
        ref={ref as RefObject<HTMLAnchorElement>}
      >
        <div className={styles.header}>
          {titleImgSrc && (
            <div className={styles.titleImage}>
              <Image src={titleImgSrc} width={56} height={56} alt={''} />
            </div>
          )}
        </div>
        <div
          className={cn(styles.titleItem, largeTitle && styles.largeTitle)}
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
          imitateHover={hasHover}
          size={'s'}
          textStyle={'normal'}
          color={buttonText ? 'outline' : 'transparent'}
          className={cn(styles.button, !buttonText && styles.empty)}
          withArrow={true}
        >
          {buttonText}
        </Button>
      </div>
    )
  },
)

SimpleCard.displayName = 'SimpleCard'
