import type { ComponentPropsWithoutRef } from 'react'

import cn from 'classnames'

import { TextLink } from '../text-link'
import styles from './Disclaimer.module.css'

export type DisclaimerDataTestId = {
  root?: string
}

export type DisclaimerProps = ComponentPropsWithoutRef<'p'> & {
  dataTestId?: DisclaimerDataTestId
}

const defaultContent = (
  <>
    Your privacy matters. We use cookieless analytics and collect only
    anonymized data for improvements. Cookies are used for functionality only.
    For more info read{' '}
    <TextLink href='https://lido.fi/privacy-notice' external>
      Privacy Notice
    </TextLink>
    .
  </>
)

export const Disclaimer = ({
  className,
  children = defaultContent,
  dataTestId,
  ...rest
}: DisclaimerProps) => (
  <p
    className={cn(styles.root, className)}
    data-testid={dataTestId?.root}
    {...rest}
  >
    {children}
  </p>
)
