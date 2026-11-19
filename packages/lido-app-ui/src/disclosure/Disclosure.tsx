import {
  forwardRef,
  useId,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from 'react'

import cn from 'classnames'

import { useControllableState, usePresence } from '../hooks'
import { IconCross, IconPlus } from '../icons'
import styles from './Disclosure.module.css'

export type DisclosureDataTestId = {
  root?: string
  header?: string
  content?: string
}

export type DisclosureProps = ComponentPropsWithoutRef<'div'> & {
  label: ReactNode
  defaultOpen?: boolean
  /** Makes the component controlled; pair with `onOpenChange`. */
  open?: boolean
  onOpenChange?: (open: boolean) => void
  dataTestId?: DisclosureDataTestId
}

/** Bordered toggle with a plus/cross icon that reveals optional form sections. */
export const Disclosure = forwardRef<HTMLDivElement, DisclosureProps>(
  (
    {
      label,
      defaultOpen,
      open,
      onOpenChange,
      children,
      className,
      dataTestId,
      ...rest
    },
    ref,
  ) => {
    const [openState, setOpen] = useControllableState({
      value: open,
      defaultValue: defaultOpen,
      onChange: onOpenChange,
      name: 'Disclosure',
      prop: 'open',
    })
    const isOpen = openState ?? false
    const contentId = useId()
    const {
      mounted,
      ref: presenceRef,
      motionProps,
    } = usePresence<HTMLDivElement>(isOpen)

    const handleToggle = () => setOpen(!isOpen)

    return (
      <div
        ref={ref}
        className={cn(
          styles.disclosure,
          isOpen && styles.disclosureOpen,
          className,
        )}
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
          {isOpen ? (
            <IconCross className={styles.icon} aria-hidden='true' />
          ) : (
            <IconPlus className={styles.icon} aria-hidden='true' />
          )}
        </button>
        {mounted ? (
          <div
            ref={presenceRef}
            className={styles.contentWrapper}
            {...motionProps}
          >
            <div>
              <div
                id={contentId}
                className={styles.content}
                data-testid={dataTestId?.content}
              >
                {children}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    )
  },
)

Disclosure.displayName = 'Disclosure'
