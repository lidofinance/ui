import { useCallback, useState } from 'react'
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
  usePresence,
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
  boxShadow: 'var(--lido-app-ui-shadow-default)',
} as const

const panelHeader = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
} as const

const presenceStyle = (state: 'open' | 'closed') => ({
  opacity: state === 'open' ? 1 : 0,
  transition:
    state === 'open'
      ? 'opacity var(--lido-app-ui-duration-base) var(--lido-app-ui-easing-out)'
      : 'opacity var(--lido-app-ui-duration-base-exit) var(--lido-app-ui-easing-exit)',
})

export const Basic: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Portal + `useFocusTrap` + `useEscape` + `useBodyScrollLock` + `useOutsideClick` + `usePresence` on one panel. Escape, an outside click or the close button dismisses it with an exit fade; focus returns to the opener.',
      },
    },
  },
  render: function Render() {
    const [open, setOpen] = useState(false)
    const [panel, setPanel] = useState<HTMLDivElement | null>(null)
    const presence = usePresence<HTMLDivElement>(open)
    const close = () => setOpen(false)
    const { ref: presenceRef } = presence
    const panelRef = useCallback(
      (node: HTMLDivElement | null) => {
        setPanel(node)
        presenceRef(node)
      },
      [presenceRef],
    )

    useFocusTrap(panel, { enabled: open })
    useEscape(close, { enabled: open })
    useBodyScrollLock({ enabled: open })
    useOutsideClick(panel, close, { enabled: open })

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open panel</Button>
        {presence.mounted && (
          <Portal>
            <div
              ref={panelRef}
              {...presence.motionProps}
              role='dialog'
              aria-label='Panel'
              style={{
                ...panelStyle,
                ...presenceStyle(presence.motionProps['data-state']),
              }}
            >
              <div style={panelHeader}>
                <strong>Panel</strong>
                <CloseButton onClick={close} />
              </div>
              <Input label='Sample input' placeholder='Tab stays in here' />
            </div>
          </Portal>
        )}
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
    const [firstPanel, setFirstPanel] = useState<HTMLDivElement | null>(null)
    const [secondPanel, setSecondPanel] = useState<HTMLDivElement | null>(null)
    const closeFirst = () => setFirst(false)
    const closeSecond = () => setSecond(false)

    useFocusTrap(firstPanel, { enabled: first })
    useEscape(closeFirst, { enabled: first })
    useOutsideClick(firstPanel, closeFirst, { enabled: first })

    useFocusTrap(secondPanel, { enabled: second })
    useEscape(closeSecond, { enabled: second })
    useOutsideClick(secondPanel, closeSecond, { enabled: second })

    useBodyScrollLock({ enabled: first || second })

    return (
      <>
        <Button onClick={() => setFirst(true)}>Open first panel</Button>
        {first && (
          <Portal>
            <div
              ref={setFirstPanel}
              role='dialog'
              aria-label='First panel'
              style={panelStyle}
            >
              <div style={panelHeader}>
                <strong>First panel</strong>
                <CloseButton onClick={closeFirst} />
              </div>
              <Input label='Sample input' placeholder='Tab stays in here' />
              <Button size='small' onClick={() => setSecond(true)}>
                Open second panel
              </Button>
            </div>
          </Portal>
        )}
        {second && (
          <Portal>
            <div
              ref={setSecondPanel}
              role='dialog'
              aria-label='Second panel'
              style={panelStyle}
            >
              <div style={panelHeader}>
                <strong>Second panel</strong>
                <CloseButton onClick={closeSecond} />
              </div>
              <Input label='Sample input' placeholder='Tab stays in here' />
            </div>
          </Portal>
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

const presenceDocs = (story: string) => ({
  docs: { description: { story } },
})

const presenceBoxStyle = {
  padding: 16,
  border: '1px solid var(--lido-app-ui-color-border-default)',
  borderRadius: 'var(--lido-app-ui-border-radius-md)',
  color: 'var(--lido-app-ui-color-text-default)',
} as const

export const UsePresenceBasic: Story = {
  name: 'usePresence: Basic',
  parameters: presenceDocs(
    '`usePresence(open)` keeps the node mounted until its exit motion finishes. Spread `motionProps` (`data-state`, `data-motion`) and merge `ref`; CSS keys on the attributes (see Foundations/Motion).',
  ),
  render: function Render() {
    const [open, setOpen] = useState(false)
    const { mounted, status, ref, motionProps } =
      usePresence<HTMLDivElement>(open)
    return (
      <div style={{ display: 'grid', gap: 8 }}>
        <Button onClick={() => setOpen((v) => !v)}>Toggle</Button>
        <code>
          status: {status}, mounted: {String(mounted)}
        </code>
        {mounted && (
          <div
            ref={ref}
            {...motionProps}
            style={{
              ...presenceBoxStyle,
              ...presenceStyle(motionProps['data-state']),
            }}
          >
            Content
          </div>
        )}
      </div>
    )
  },
}

export const UsePresenceAppear: Story = {
  name: 'usePresence: Appear',
  parameters: presenceDocs(
    '`appear` animates the first mount when initially open (toasts). Default is to render settled.',
  ),
  render: function Render() {
    const { mounted, status, ref, motionProps } = usePresence<HTMLDivElement>(
      true,
      { appear: true },
    )
    return (
      <div style={{ display: 'grid', gap: 8 }}>
        <code>
          status: {status}, mounted: {String(mounted)}
        </code>
        {mounted && (
          <div
            ref={ref}
            {...motionProps}
            style={{
              ...presenceBoxStyle,
              ...presenceStyle(motionProps['data-state']),
            }}
          >
            Content
          </div>
        )}
      </div>
    )
  },
}

export const UsePresenceKeepMounted: Story = {
  name: 'usePresence: KeepMounted',
  parameters: presenceDocs(
    '`keepMounted` leaves the node in the DOM while closed (Accordion); only the attributes and status change.',
  ),
  render: function Render() {
    const [open, setOpen] = useState(true)
    const { mounted, status, ref, motionProps } = usePresence<HTMLDivElement>(
      open,
      { keepMounted: true },
    )
    return (
      <div style={{ display: 'grid', gap: 8 }}>
        <Button onClick={() => setOpen((v) => !v)}>Toggle</Button>
        <code>
          status: {status}, mounted: {String(mounted)}
        </code>
        {mounted && (
          <div
            ref={ref}
            {...motionProps}
            style={{
              ...presenceBoxStyle,
              ...presenceStyle(motionProps['data-state']),
            }}
          >
            Content
          </div>
        )}
      </div>
    )
  },
}
