import {
  ComponentPropsWithoutRef,
  ForwardedRef,
  ReactNode,
  forwardRef,
} from 'react'
import { H1 } from '../heading'
import { Text } from '../text'
import cn from 'classnames'
import styles from './ServicePage.module.css'

export type ServicePageProps = ComponentPropsWithoutRef<'div'> & {
  title: ReactNode
}

export const ServicePage = forwardRef(
  (
    { title, className, children, ...rest }: ServicePageProps,
    ref?: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <div className={cn(styles.servicePage, className)} ref={ref} {...rest}>
        <div className={styles.servicePageInside}>
          <H1>{title}</H1>
          <Text color='secondary'>{children}</Text>
        </div>
      </div>
    )
  },
)
ServicePage.displayName = 'ServicePage'
