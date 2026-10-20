import {
  Children,
  isValidElement,
  useId,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from 'react'

import cn from 'classnames'

import styles from './SidebarGroup.module.css'

export type SidebarGroupProps = Omit<
  ComponentPropsWithoutRef<'div'>,
  'children'
> & {
  label?: ReactNode
  children?: ReactNode
}

export const SidebarGroup = ({
  label,
  className,
  children,
  ...rest
}: SidebarGroupProps) => {
  const labelId = useId()

  return (
    <div className={cn(styles.group, className)} {...rest}>
      {label != null ? (
        <p id={labelId} className={styles.label}>
          {label}
        </p>
      ) : null}
      {/* eslint-disable-next-line jsx-a11y/no-redundant-roles -- list-style: none drops list semantics in Safari */}
      <ul
        role='list'
        aria-labelledby={label != null ? labelId : undefined}
        className={styles.items}
      >
        {Children.toArray(children).map((child, index) => (
          <li key={isValidElement(child) ? child.key : index}>{child}</li>
        ))}
      </ul>
    </div>
  )
}
