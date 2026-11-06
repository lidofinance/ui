import { useEffect, useState, type CSSProperties, type ReactNode } from 'react'

import { usePresence } from '../hooks/usePresence'
import demo from './MotionDemo.module.css'

export const useTokenValue = (token: string) => {
  const [value, setValue] = useState('')
  useEffect(() => {
    setValue(
      getComputedStyle(document.documentElement).getPropertyValue(token).trim(),
    )
  }, [token])
  return value
}

export const cell: CSSProperties = {
  padding: '8px 12px',
  textAlign: 'left',
  borderBottom: '1px solid var(--lido-app-ui-color-border-default)',
}

export const code: CSSProperties = {
  fontFamily: 'var(--lido-app-ui-font-family-mono)',
  fontSize: 12,
}

export const Table = ({
  head,
  children,
}: {
  head: string[]
  children: ReactNode
}) => (
  <div style={{ overflowX: 'auto' }}>
    <table
      style={{
        borderCollapse: 'collapse',
        fontSize: 14,
        color: 'var(--lido-app-ui-color-text-default)',
      }}
    >
      <thead>
        <tr>
          {head.map((title) => (
            <th key={title} style={cell}>
              {title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  </div>
)

export const Note = ({ children }: { children: ReactNode }) => (
  <p
    style={{
      margin: 0,
      fontSize: 14,
      color: 'var(--lido-app-ui-color-text-secondary)',
    }}
  >
    {children}
  </p>
)

const demoButton: CSSProperties = {
  padding: '4px 12px',
  border: '1px solid var(--lido-app-ui-color-border-default)',
  borderRadius: 'var(--lido-app-ui-border-radius-md)',
  background: 'var(--lido-app-ui-color-background-surface)',
  color: 'var(--lido-app-ui-color-text-default)',
  cursor: 'pointer',
  fontSize: 13,
}

export const MotionDemoButton = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>,
) => <button type='button' style={demoButton} {...props} />

/** Dot that slides 160px when played, using the given transition. */
export const MotionDemoDot = ({
  duration,
  easing,
  playKey,
}: {
  duration: string
  easing: string
  playKey: number
}) => {
  const [moved, setMoved] = useState(false)
  useEffect(() => {
    if (playKey === 0) return
    setMoved(false)
    const id = requestAnimationFrame(() =>
      requestAnimationFrame(() => setMoved(true)),
    )
    return () => cancelAnimationFrame(id)
  }, [playKey])
  return (
    <div className={demo.track}>
      <div
        className={demo.dot}
        style={{
          transform: moved ? 'translateX(160px)' : 'translateX(0)',
          transition: moved
            ? `transform var(${duration}) var(${easing})`
            : 'none',
        }}
      />
    </div>
  )
}

export const MotionDemoPlay = ({
  duration,
  easing,
}: {
  duration: string
  easing: string
}) => {
  const [key, setKey] = useState(0)
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <MotionDemoButton onClick={() => setKey((k) => k + 1)}>
        Play
      </MotionDemoButton>
      <MotionDemoDot duration={duration} easing={easing} playKey={key} />
    </div>
  )
}

/** SVG plot of a cubic-bezier(x1, y1, x2, y2). */
export const MotionDemoCurve = ({ value }: { value: string }) => {
  const match = value.match(/cubic-bezier\(([^)]+)\)/)
  const size = 64
  if (!match) {
    return (
      <span style={{ fontSize: 12 }}>{value === 'ease' ? 'ease' : value}</span>
    )
  }
  const [x1, y1, x2, y2] = match[1].split(',').map((n) => parseFloat(n))
  const px = (n: number) => 8 + n * (size - 16)
  const py = (n: number) => size - 8 - n * (size - 16)
  return (
    <svg width={size} height={size} aria-hidden='true'>
      <rect
        x={8}
        y={8}
        width={size - 16}
        height={size - 16}
        fill='none'
        stroke='var(--lido-app-ui-color-border-default)'
      />
      <path
        d={`M ${px(0)} ${py(0)} C ${px(x1)} ${py(y1)}, ${px(x2)} ${py(y2)}, ${px(1)} ${py(1)}`}
        fill='none'
        stroke='var(--lido-app-ui-color-background-action)'
        strokeWidth={2}
      />
    </svg>
  )
}

type DemoKind = 'fade' | 'pop' | 'slide' | 'collapse'

const DEMO_CONTENT: Record<DemoKind, string> = {
  fade: 'Fades in and out',
  pop: 'Scales from its anchor',
  slide: 'Slides in from the side',
  collapse:
    'Collapses its height. Focus rings and shadows stay visible at rest.',
}

/** Open/close toggle driving one motion mixin through usePresence. */
export const MotionDemoPattern = ({
  kind,
  showState,
}: {
  kind: DemoKind
  showState?: boolean
}) => {
  const [open, setOpen] = useState(false)
  const { mounted, status, ref, motionProps } = usePresence<HTMLDivElement>(
    open,
    { keepMounted: kind === 'collapse' },
  )
  return (
    <div style={{ display: 'grid', gap: 8, justifyItems: 'start' }}>
      <MotionDemoButton onClick={() => setOpen((v) => !v)}>
        {open ? 'Close' : 'Open'}
      </MotionDemoButton>
      <div style={{ minHeight: kind === 'collapse' ? 0 : 56, width: 220 }}>
        {mounted ? (
          <div ref={ref} className={demo[kind]} {...motionProps}>
            {kind === 'collapse' ? (
              <div className={demo.clip}>
                <div className={demo.surface}>{DEMO_CONTENT[kind]}</div>
              </div>
            ) : (
              <div className={demo.surface}>{DEMO_CONTENT[kind]}</div>
            )}
          </div>
        ) : null}
      </div>
      {showState ? (
        <code style={code}>
          {status} / {motionProps['data-state']} /{' '}
          {motionProps['data-motion'] ?? 'none'}
        </code>
      ) : null}
    </div>
  )
}

export const MotionDemoPress = () => (
  <button type='button' className={`${demo.pressButton} ${demo.press}`}>
    Press me
  </button>
)

/** Tick that appears via scale (don't) or clip-path (do). */
export const MotionDemoTick = ({
  mode,
  slow,
}: {
  mode: 'scale' | 'clip'
  slow?: boolean
}) => {
  const [on, setOn] = useState(true)
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <MotionDemoButton onClick={() => setOn((v) => !v)}>
        Toggle
      </MotionDemoButton>
      <span
        className={demo.tickBox}
        style={
          slow
            ? ({ '--lido-app-ui-duration-fast': '750ms' } as CSSProperties)
            : undefined
        }
      >
        <svg
          className={mode === 'scale' ? demo.tickScale : demo.tickClip}
          data-on={on}
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          aria-hidden='true'
        >
          <path d='M4 10.5l4 4 8-9' />
        </svg>
      </span>
    </div>
  )
}

/** Enter/exit pair on one row: dots slide with enter and exit timing. */
export const MotionDemoPair = ({
  enter,
  exit,
}: {
  enter: string
  exit: string
}) => {
  const [key, setKey] = useState(0)
  const [exitKey, setExitKey] = useState(0)
  return (
    <div style={{ display: 'grid', gap: 8 }}>
      <MotionDemoButton
        onClick={() => {
          setKey((k) => k + 1)
          setExitKey((k) => k + 1)
        }}
      >
        Play both
      </MotionDemoButton>
      <MotionDemoDot
        duration={enter}
        easing='--lido-app-ui-easing-out'
        playKey={key}
      />
      <MotionDemoDot
        duration={exit}
        easing='--lido-app-ui-easing-exit'
        playKey={exitKey}
      />
    </div>
  )
}
