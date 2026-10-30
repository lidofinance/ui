import { forwardRef, type ComponentPropsWithoutRef, type Ref } from 'react'

import cn from 'classnames'

import { TextLink } from '../text-link'
import styles from './Disclaimer.module.css'

export type DisclaimerDataTestId = {
  root?: string
}

export type DisclaimerProps = ComponentPropsWithoutRef<'p'> & {
  /** Root element; use `div` when `children` contain block content. */
  as?: 'p' | 'div'
  dataTestId?: DisclaimerDataTestId
}

const defaultContent = (
  <>
    Your privacy matters. We use cookieless analytics and collect only
    anonymized data for improvements. Cookies are used for functionality only.
    For more info read{' '}
    <TextLink href='https://lido.fi/privacy-notice' external size='inherit'>
      Privacy Notice
    </TextLink>
    .
  </>
)

/** Page-level note that defaults to the privacy text and pins to the bottom (`margin-top: auto`) as the last child of a flex column. */
export const Disclaimer = forwardRef<HTMLElement, DisclaimerProps>(
  (
    {
      as: Component = 'p',
      className,
      children = defaultContent,
      dataTestId,
      ...rest
    },
    ref,
  ) => (
    <Component
      ref={ref as Ref<HTMLDivElement & HTMLParagraphElement>}
      className={cn(styles.root, className)}
      data-testid={dataTestId?.root}
      {...rest}
    >
      {children}
    </Component>
  ),
)

Disclaimer.displayName = 'Disclaimer'
