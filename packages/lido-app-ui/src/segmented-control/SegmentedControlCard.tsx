import {
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from 'react'

import cn from 'classnames'

import { SegmentCard, type SegmentCardDataTestId } from './SegmentCard'
import { useIsomorphicLayoutEffect } from '../hooks'
import styles from './SegmentedControlCard.module.css'

export type SegmentedControlCardDataTestId = {
  root?: string
}

export type SegmentCardItem = {
  value: string
  title: ReactNode
  description?: ReactNode
  icon?: ReactNode
  tag?: ReactNode
  disabled?: boolean
  dataTestId?: SegmentCardDataTestId
}

export type SegmentedControlCardProps = Omit<
  ComponentPropsWithoutRef<'div'>,
  'onChange'
> & {
  items: SegmentCardItem[]
  value: string
  onChange: (value: string) => void
  dataTestId?: SegmentedControlCardDataTestId
}

/** Card variant of `SegmentedControl`: each option is a card with an icon, title, tag and description instead of a compact pill. */
export const SegmentedControlCard = ({
  items,
  value,
  onChange,
  className,
  dataTestId,
  ...rest
}: SegmentedControlCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const activeButtonRef = useRef<HTMLButtonElement>(null)
  const selectionRef = useRef<HTMLDivElement>(null)
  // Skip the transition on the first measurement so the highlight doesn't fly in from 0,0.
  const [animated, setAnimated] = useState(false)

  useIsomorphicLayoutEffect(() => {
    const updateSelection = () => {
      const button = activeButtonRef.current
      const container = containerRef.current
      const selection = selectionRef.current
      if (!button || !container || !selection) return

      const buttonRect = button.getBoundingClientRect()
      const containerRect = container.getBoundingClientRect()
      const style = getComputedStyle(container)
      const borderLeft = parseFloat(style.borderLeftWidth) || 0
      const borderTop = parseFloat(style.borderTopWidth) || 0
      const x = buttonRect.left - containerRect.left - borderLeft
      const y = buttonRect.top - containerRect.top - borderTop

      selection.style.width = `${buttonRect.width}px`
      selection.style.height = `${buttonRect.height}px`
      selection.style.transform = `translate(${x}px, ${y}px)`
    }

    updateSelection()
    setAnimated(true)

    window.addEventListener('resize', updateSelection)
    return () => {
      window.removeEventListener('resize', updateSelection)
    }
  }, [value, items])

  return (
    <div
      ref={containerRef}
      role='tablist'
      className={cn(styles.segmentedControlCard, className)}
      data-testid={dataTestId?.root}
      {...rest}
    >
      <div
        ref={selectionRef}
        aria-hidden='true'
        className={cn(styles.selection, animated && styles.animated)}
      />
      {items.map((item) => {
        const active = item.value === value
        return (
          <SegmentCard
            key={item.value}
            ref={active ? activeButtonRef : undefined}
            active={active}
            disabled={item.disabled}
            icon={item.icon}
            title={item.title}
            tag={item.tag}
            description={item.description}
            dataTestId={item.dataTestId}
            onClick={() => {
              if (item.value !== value) onChange(item.value)
            }}
          />
        )
      })}
    </div>
  )
}
