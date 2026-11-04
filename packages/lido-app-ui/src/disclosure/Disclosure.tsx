import {
  forwardRef,
  useId,
  useState,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from 'react'

import cn from 'classnames'

import { IconPlus } from '../icons'
import styles from './Disclosure.module.css'

export type DisclosureDataTestId = {
  root?: string
  header?: string
  content?: string
}

export type DisclosureProps = Omit<ComponentPropsWithoutRef<'div'>, 'title'> & {
  label: ReactNode
  defaultOpen?: boolean
  /** Makes the component controlled; pair with `onOpenChange`. */
  open?: boolean
  onOpenChange?: (open: boolean) => void
  dataTestId?: DisclosureDataTestId
}

/** Text toggle with a rotating plus icon that reveals optional form sections. */
export const Disclosure = forwardRef<HTMLDivElement, DisclosureProps>(
  (
    {
      label,
      defaultOpen = false,
      open,
      onOpenChange,
      children,
      className,
      dataTestId,
      ...rest
    },
    ref,
  ) => {
    const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen)
    const isOpen = open ?? uncontrolledOpen
    const contentId = useId()

    const handleToggle = () => {
      const next = !isOpen
      if (open === undefined) setUncontrolledOpen(next)
      onOpenChange?.(next)
    }

    return (
      <div
        ref={ref}
        className={cn(styles.disclosure, className)}
        data-testid={dataTestId?.root}
        {...rest}
      >
        <button
          type='button'
          className={styles.header}
          aria-expanded={isOpen}
          aria-controls={isOpen ? contentId : undefined}
          data-testid={dataTestId?.header}
          onClick={handleToggle}
        >
          <span>{label}</span>
          <IconPlus
            className={cn(styles.icon, isOpen && styles.iconOpen)}
            aria-hidden='true'
          />
        </button>
        {isOpen ? (
          <div
            id={contentId}
            className={styles.content}
            data-testid={dataTestId?.content}
          >
            {children}
          </div>
        ) : null}
      </div>
    )
  },
)

Disclosure.displayName = 'Disclosure'
