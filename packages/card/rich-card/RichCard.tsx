import cn from 'classnames'
import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from 'react'
import { Link } from '../../links'
import { Tag } from '../../tag'
import styles from './RichCard.module.css'

export type RichCardDataTestId = {
  root?: string
  button?: string
  title?: string
  tags?: string
  logos?: string
  description?: string
}

export type RichCardProps = ComponentPropsWithoutRef<'div'> & {
  title: string
  text: string
  href?: string
  titleImgSrc: string
  tags?: string[]
  logosArray?: string[]
  extraLogosAmount?: number
  learnMoreLink?: string
  dataTestId?: RichCardDataTestId
}

export const RichCard = forwardRef(
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
    }: RichCardProps,
    ref?: ForwardedRef<HTMLDivElement>,
  ) => {
    const logosToShow = logosArray?.slice(0, 2)
    return (
      <div
        className={cn(className, styles.card)}
        data-testid={dataTestId?.root}
        {...rest}
        ref={ref}
      >
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
              <Tag key={tag} size={'s'} variant={'filled'}>
                {tag}
              </Tag>
            ))}
          </div>
        )}
      </div>
    )
  },
)

RichCard.displayName = 'RichCard'
