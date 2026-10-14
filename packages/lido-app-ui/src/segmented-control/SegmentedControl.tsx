import {
  useLayoutEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from 'react'

import cn from 'classnames'

import { Segment, type SegmentDataTestId } from './Segment'
import styles from './SegmentedControl.module.css'

export type SegmentedControlDataTestId = {
  root?: string
}

export type SegmentItem = {
  value: string
  label: ReactNode
  disabled?: boolean
  dataTestId?: SegmentDataTestId
}

export type SegmentedControlProps = Omit<
  ComponentPropsWithoutRef<'div'>,
  'onChange'
> & {
  items: SegmentItem[]
  value: string
  onChange: (value: string) => void
  dataTestId?: SegmentedControlDataTestId
}

export const SegmentedControl = ({
  items,
  value,
  onChange,
  className,
  dataTestId,
  ...rest
}: SegmentedControlProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const activeButtonRef = useRef<HTMLButtonElement>(null)
  const selectionRef = useRef<HTMLDivElement>(null)
  // Skip the transition on the first measurement so the pill doesn't fly in from 0,0.
  const [animated, setAnimated] = useState(false)

  useLayoutEffect(() => {
    const updateSelection = () => {
      const button = activeButtonRef.current
      const container = containerRef.current
      const selection = selectionRef.current
      if (!button || !container || !selection) return

      const buttonRect = button.getBoundingClientRect()
      const containerRect = container.getBoundingClientRect()
      // The pill is absolutely positioned, so top/left 0 is the container's
      // padding box (inside the border). getBoundingClientRect measures from
      // the border box, so subtract the border to keep the pill from drifting
      // down-right by the border width.
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
      className={cn(styles.segmentedControl, className)}
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
          <Segment
            key={item.value}
            ref={active ? activeButtonRef : undefined}
            active={active}
            disabled={item.disabled}
            dataTestId={item.dataTestId}
            onClick={() => {
              if (item.value !== value) onChange(item.value)
            }}
          >
            {item.label}
          </Segment>
        )
      })}
    </div>
  )
}
