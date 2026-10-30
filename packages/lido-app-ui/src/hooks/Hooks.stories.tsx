import { useState, type ReactNode } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { DarkThemeProvider } from '@lidofinance/lido-shared-ui'

import { Button } from '../button'
import { CloseButton } from '../icon-button'
import { Input } from '../input'
import {
  Portal,
  useBodyScrollLock,
  useEscape,
  useFocusTrap,
  useOutsideClick,
} from '.'

const meta: Meta<typeof Portal> = {
  title: 'Feedback & Overlays/Overlay hooks',
  component: Portal,
  parameters: {
    layout: 'padded',
    controls: { disable: true },
    docs: {
      description: {
        component:
          'Building blocks for custom overlays (drawer, sheet, dropdown). Exported from the package, so overlays you build join the same Escape, outside-click, focus and scroll-lock stacks as Modal and Popover. Combine `Portal`, `useFocusTrap`, `useEscape`, `useBodyScrollLock` and `useOutsideClick` as needed.',
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
  zIndex: 'var(--lido-app-ui-z-index-modal)',
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  padding: 24,
  width: 320,
  boxSizing: 'border-box',
  borderRadius: 'var(--lido-app-ui-border-radius-card)',
  border: '1px solid var(--lido-app-ui-color-border-default)',
  background: 'var(--lido-app-ui-color-background-surface)',
  color: 'var(--lido-app-ui-color-text-default)',
  boxShadow: 'var(--lido-app-ui-shadow-popover)',
} as const

type PanelProps = {
  title: string
  onClose: () => void
  children?: ReactNode
}

const Panel = ({ title, onClose, children }: PanelProps) => {
  const [el, setEl] = useState<HTMLDivElement | null>(null)
  useFocusTrap(el)
  useEscape(onClose)
  useBodyScrollLock()
  useOutsideClick(el, onClose)

  return (
    <Portal>
      <div ref={setEl} role='dialog' aria-label={title} style={panelStyle}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <strong>{title}</strong>
          <CloseButton onClick={onClose} />
        </div>
        <Input label='Sample input' placeholder='Tab stays in here' />
        {children}
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
          '`useEscape(handler, { enabled? })`, `useFocusTrap(element, { enabled?, initialFocus?, returnFocus?, restoreFocus? })` and `useOutsideClick(element, handler, { enabled? })` are all layered: with several active overlays only the newest handles Escape, Tab and outside clicks. Open the second panel and press Escape or click outside: only the top one closes.',
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
          '`<Portal container?>` renders `null` until mounted with `container`; without it a hidden marker `<span>` renders until the theme scope resolves (SSR-safe, but mind table and paragraph contexts). It mounts into `document.body`, and inside a `[data-lido-theme]` scope it mirrors that attribute onto its root, so tokens keep resolving to the same theme. Below, the portaled card lives in `body` but stays dark.',
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
            borderRadius: 'var(--lido-app-ui-border-radius-dropdown-item)',
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
