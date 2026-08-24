import cn from 'classnames'
import { ForwardedRef, forwardRef } from 'react'
import { TestEnvBannerProps } from './types'

import styles from './TestEnvBanner.module.css'

const DEFAULT_TEXT = 'This is a TEST instance for integrations and testing'

const DEFAULT_SHORT_TEXT = 'This is a TEST instance'

export const TestEnvBanner = forwardRef(
  (
    { text, shortText, className, dataTestId, ...rest }: TestEnvBannerProps,
    ref?: ForwardedRef<HTMLDivElement>,
  ) => {
    const isDefaultText = text === undefined
    const resolvedText = isDefaultText ? DEFAULT_TEXT : text
    const short = shortText ?? (isDefaultText ? DEFAULT_SHORT_TEXT : undefined)
    const hasShort = short !== undefined

    return (
      <div
        ref={ref}
        role='status'
        className={cn(styles.banner, className)}
        data-testid={dataTestId?.root}
        {...rest}
      >
        <span className={styles.label} data-testid={dataTestId?.label}>
          <span className={cn(hasShort && styles.textWithShort)}>
            {resolvedText}
          </span>
          {hasShort && <span className={styles.shortText}>{short}</span>}
        </span>
      </div>
    )
  },
)
TestEnvBanner.displayName = 'TestEnvBanner'
