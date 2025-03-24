import cn from 'classnames'
import Image from 'next/image'
import {
  ComponentPropsWithoutRef,
  ForwardedRef,
  forwardRef,
  RefObject,
} from 'react'
import { Tag } from '../../tag'
import styles from './RichCard.module.css'

export type RichCardProps = ComponentPropsWithoutRef<'div'> & {
  title: string
  text: string
  titleImgSrc?: string
  tags: string[]
  logosArray?: string[]
  extraLogosAmount?: number
}

export const RichCard = forwardRef(
  (
    {
      title,
      text,
      titleImgSrc,
      tags,
      logosArray,
      extraLogosAmount,
      ...rest
    }: RichCardProps,
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
      </div>
    )
  },
)

RichCard.displayName = 'RichCard'
