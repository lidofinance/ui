import cn from 'classnames'
import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from 'react'
import { Link } from '../../links'
import { Tag } from '../../tag'
import styles from './SimpleCard.module.css'

export type SimpleCardDataTestId = {
  root?: string
  button?: string
  title?: string
  tags?: string
  logos?: string
  description?: string
}

export type SimpleCardProps = ComponentPropsWithoutRef<'div'> & {
  title: string
  text: string
  href?: string
  titleImgSrc: string
  tags?: string[]
  logosArray?: string[]
  extraLogosAmount?: number
  learnMoreLink?: string
  dataTestId?: SimpleCardDataTestId
}

export const SimpleCard = forwardRef(
  (
    {
      title,
      text,
      titleImgSrc,
      tags,
      logosArray,
      href,
      dataTestId,
      learnMoreLink,
      extraLogosAmount,
      className,
      ...rest
    }: SimpleCardProps,
    ref?: ForwardedRef<HTMLDivElement> | ForwardedRef<HTMLAnchorElement>,
  ) => {
    const logosToShow = logosArray?.slice(0, 2)
    const cardContents = (
      <>
        <div className={styles.header}>
          {titleImgSrc && (
            <div className={styles.titleImage}>
              <img src={titleImgSrc} width={56} height={56} alt={''} />
            </div>
          )}
          <div className={styles.headerLogos} data-testid={dataTestId?.logos}>
            {logosToShow?.map((logo, index) => (
              <div key={index} className={styles.headerLogo}>
                <img src={logo} width={38} height={38} alt={''} />
              </div>
            ))}
            {extraLogosAmount ? (
              <div className={cn(styles.headerLogo, styles.empty)}>
                <span>+{extraLogosAmount}</span>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className={styles.titleItem} data-testid={dataTestId?.title}>
          {title}
        </div>
        <div
          className={styles.descriptionItem}
          data-testid={dataTestId?.description}
        >
          {text}
          {learnMoreLink && (
            <Link target='_blank' href={learnMoreLink}>
              &nbsp;Learn more
            </Link>
          )}
        </div>
        {tags?.length && (
          <div className={styles.tags} data-testid={dataTestId?.tags}>
            {tags?.map((tag) => (
              <Tag key={tag} variant={'primary'}>
                {tag}
              </Tag>
            ))}
          </div>
        )}
      </>
    )
    return href ? (
      <Link
        href={href}
        target={'_blank'}
        className={cn(className, styles.card)}
        data-testid={dataTestId?.root}
        ref={ref as ForwardedRef<HTMLAnchorElement>}
      >
        {cardContents}
      </Link>
    ) : (
      <div
        className={cn(className, styles.card)}
        data-testid={dataTestId?.root}
        {...rest}
        ref={ref as ForwardedRef<HTMLDivElement>}
      >
        {cardContents}
      </div>
    )
  },
)

SimpleCard.displayName = 'SimpleCard'
