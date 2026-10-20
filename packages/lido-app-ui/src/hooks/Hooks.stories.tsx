import { useRef, useState, type ReactNode } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { DarkThemeProvider } from '@lidofinance/lido-shared-ui'

import { Button } from '../button'
import { Input } from '../input'
import {
  Portal,
  useBodyScrollLock,
  useEscape,
  useFocusTrap,
  useIsomorphicLayoutEffect,
  useOutsideClick,
} from '.'

const meta: Meta<typeof Portal> = {
  title: 'Internal/Overlay hooks',
  component: Portal,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    controls: { disable: true },
    docs: {
      description: {
        component:
          'Internal building blocks for overlays (modal, drawer, popover). Not exported from the package: import from `../hooks` inside `lido-app-ui`. Combine `Portal`, `useFocusTrap`, `useEscape`, `useBodyScrollLock` and `useOutsideClick` as needed.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const panelStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 1000,
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  padding: 24,
  width: 320,
  boxSizing: 'border-box',
  borderRadius: 12,
  border: '1px solid var(--lido-app-ui-color-border-default)',
  background: 'var(--lido-app-ui-color-background-surface)',
  color: 'var(--lido-app-ui-color-text-default)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
} as const

type PanelProps = {
  title: string
  onClose: () => void
  children?: ReactNode
}

const Panel = ({ title, onClose, children }: PanelProps) => {
  const [el, setEl] = useState<HTMLDivElement | null>(null)
  useFocusTrap(el, true)
  useEscape(true, onClose)
  useBodyScrollLock(true)
  useOutsideClick(el, onClose, true)

  return (
    <Portal>
      <div ref={setEl} role='dialog' aria-label={title} style={panelStyle}>
        <strong>{title}</strong>
        <Input label='Sample input' placeholder='Tab stays in here' />
        {children}
        <Button size='small' variant='outline' onClick={onClose}>
          Close
        </Button>
      </div>
    </Portal>
  )
}

export const Basic: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Portal + `useFocusTrap` + `useEscape` + `useBodyScrollLock` + `useOutsideClick` on one panel. Escape, an outside click or the close button dismisses it; focus returns to the opener.',
      },
    },
  },
  render: function Render() {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open panel</Button>
        {open && <Panel title='Panel' onClose={() => setOpen(false)} />}
      </>
    )
  },
}

export const NestedLayers: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '`useEscape(active, handler)`, `useFocusTrap(element, active, { initialFocus?, restoreFocus? })` and `useOutsideClick(element, handler, enabled)` are all layered: with several active overlays only the newest handles Escape, Tab and outside clicks. Open the second panel and press Escape or click outside: only the top one closes.',
      },
    },
  },
  render: function Render() {
    const [first, setFirst] = useState(false)
    const [second, setSecond] = useState(false)
    return (
      <>
        <Button onClick={() => setFirst(true)}>Open first panel</Button>
        {first && (
          <Panel title='First panel' onClose={() => setFirst(false)}>
            <Button size='small' onClick={() => setSecond(true)}>
              Open second panel
            </Button>
          </Panel>
        )}
        {second && (
          <Panel title='Second panel' onClose={() => setSecond(false)} />
        )}
      </>
    )
  },
}

export const PortalThemeScope: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '`<Portal container?>` renders `null` until mounted (SSR-safe). Without `container` it mounts into `document.body`, and inside a `[data-lido-theme]` scope it mirrors that attribute onto its root, so tokens keep resolving to the same theme. Below, the portaled card lives in `body` but stays dark.',
      },
    },
  },
  render: function Render() {
    const [open, setOpen] = useState(false)
    return (
      <DarkThemeProvider>
        <div
          style={{
            padding: 24,
            borderRadius: 12,
            background: 'var(--lido-app-ui-color-background-surface)',
            color: 'var(--lido-app-ui-color-text-default)',
          }}
        >
          <Button onClick={() => setOpen((v) => !v)}>
            {open ? 'Hide' : 'Show'} portaled card
          </Button>
          {open && (
            <Portal>
              <div style={panelStyle}>Rendered in body, still dark</div>
            </Portal>
          )}
        </div>
      </DarkThemeProvider>
    )
  },
}

export const UseIsomorphicLayoutEffect: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '`useLayoutEffect` in the browser, `useEffect` on the server, so SSR does not warn. Use it for measurements that must happen before paint.',
      },
    },
  },
  render: function Render() {
    const ref = useRef<HTMLDivElement>(null)
    const [width, setWidth] = useState(0)
    useIsomorphicLayoutEffect(() => {
      setWidth(ref.current?.offsetWidth ?? 0)
    }, [])
    return <div ref={ref}>Measured width: {width}px</div>
  },
}
