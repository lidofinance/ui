import cn from 'classnames'
import { ComponentPropsWithoutRef, FC, ReactNode, useEffect } from 'react'
import { useCollapse } from 'react-collapsed'
import { ShevronBottom } from '../icons'

import styles from './Accordion.module.css'

export type AccordionProps = Omit<ComponentPropsWithoutRef<'div'>, 'title'> & {
  title?: ReactNode
  defaultExpanded?: boolean
  expanded?: boolean
  variant: 'header' | 'subheader'
}

export const Accordion: FC<AccordionProps> = (
  {
    title,
    expanded: _expanded,
    defaultExpanded,
    children,
    className,
    variant,
    ...rest
  } = { variant: 'header' },
) => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { getCollapseProps, getToggleProps, isExpanded, setExpanded } =
    useCollapse({
      defaultExpanded,
    })

  useEffect(() => {
    if (_expanded != null) {
      setExpanded(_expanded)
    }
  }, [_expanded, setExpanded])

  return (
    <div className={cn(className, styles.accordion)} {...rest}>
      <div
        className={cn(
          styles.header,
          variant === 'subheader' && styles.subheader,
        )}
        {...getToggleProps()}
      >
        <span>{title}</span>

        <ShevronBottom
          className={cn(styles.shevronIcon, {
            [styles.opened]: isExpanded,
          })}
          role='button'
        />
      </div>

      <div {...getCollapseProps()}>{children}</div>
    </div>
  )
}

Accordion.displayName = 'Accordion'
