import { useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import type { Meta, StoryObj } from '@storybook/react'
import { DarkThemeProvider } from '@lidofinance/lido-shared-ui'

import { Button } from '../button'
import { DataList, DataListRow } from '../data-list'
import { Input } from '../input'
import { Popover } from '../popover'
import { Stack } from '../stack'
import { Modal, ModalCard } from '.'

const meta: Meta<typeof Modal> = {
  title: 'Feedback & Overlays/Modal',
  component: Modal,
  args: {
    title: 'Supply stETH',
    bodyFill: false,
    size: 'default',
    lockScroll: true,
    closeOnEscape: true,
    closeOnOverlayClick: true,
    dismissible: true,
    subtitle: 'Review the details before you confirm',
  },
  argTypes: {
    open: {
      control: false,
      table: { defaultValue: { summary: 'true' } },
    },
    withOverlay: {
      control: false,
      table: { defaultValue: { summary: 'false' } },
    },
    lockScroll: {
      control: { type: 'boolean' },
      table: { defaultValue: { summary: 'true' } },
    },
    closeOnEscape: {
      control: { type: 'boolean' },
      table: { defaultValue: { summary: 'true' } },
    },
    closeOnOverlayClick: {
      control: { type: 'boolean' },
      table: { defaultValue: { summary: 'true' } },
    },
    dismissible: {
      control: { type: 'boolean' },
      table: { defaultValue: { summary: 'true' } },
    },
    bodyFill: {
      control: { type: 'boolean' },
    },
    onClose: { control: false, table: { category: 'events' } },
    onDismissAttempt: { control: false, table: { category: 'events' } },
    size: {
      control: { type: 'radio' },
      options: ['default', 'large'],
      table: { defaultValue: { summary: 'default' } },
    },
    scroll: {
      control: { type: 'radio' },
      options: ['body', 'overlay'],
      table: { defaultValue: { summary: 'body' } },
    },
  },
  parameters: {
    layout: 'padded',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/1SFw8VIyvedXmg9s4vCinh/Interface-Design-System?node-id=4008-11334&m=dev',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const body = (
  <DataList>
    <DataListRow label='Exchange rate' value='1 stETH = 1 ETH' />
    <DataListRow label='Max transaction cost' value='$2.41' />
    <DataListRow label='Reward fee' value='10%' />
  </DataList>
)

export const Card: Story = {
  argTypes: {
    lockScroll: { control: false },
    closeOnEscape: { control: false },
    closeOnOverlayClick: { control: false },
    dismissible: { control: false },
  },
  render: ({ title, subtitle, bodyFill, size }) => (
    <ModalCard
      title={title}
      subtitle={subtitle}
      bodyFill={bodyFill}
      size={size}
      onClose={() => undefined}
    >
      {body}
    </ModalCard>
  ),
  parameters: {
    storyBackground: 'page',
    docs: {
      description: {
        story:
          '`ModalCard` renders the bare card with no overlay behavior: you own the portal and the positioning. Shown here on a muted surface so the white card reads.',
      },
    },
  },
}

export const InDarkScope: Story = {
  tags: ['!autodocs'],
  render: function Render() {
    const [open, setOpen] = useState(false)

    return (
      <DarkThemeProvider>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            padding: 24,
            borderRadius: 'var(--lido-app-ui-border-radius-modal)',
            background: 'var(--lido-app-ui-color-background-surface)',
          }}
        >
          <Button onClick={() => setOpen(true)}>Open modal</Button>
          <Modal
            withOverlay
            open={open}
            onClose={() => setOpen(false)}
            title='Dark scope overlay'
          >
            <p style={{ margin: 0 }}>
              The portaled card keeps the dark scope text color and font.
            </p>
          </Modal>
          <ModalCard title='Dark scope' onClose={() => undefined}>
            <p style={{ margin: 0 }}>Plain text keeps the scope text color.</p>
          </ModalCard>
        </div>
      </DarkThemeProvider>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'A nested `DarkThemeProvider` on a light page. The card sets its own text color and font, so unstyled body text stays readable.',
      },
    },
  },
}

export const WithOverlay: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open modal</Button>
        <Modal
          withOverlay
          open={open}
          onClose={() => setOpen(false)}
          title='Supply stETH'
          subtitle='Review the details before you confirm'
        >
          {body}
        </Modal>
      </>
    )
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          '`withOverlay` adds the scrim, centres the card, traps focus, closes on Escape and locks body scroll. The lock is ref-counted, so stacked modals restore scroll on the last one. Click the backdrop to close.',
      },
    },
  },
}

const operatorRow = (name: string, note: string) => (
  <button
    type='button'
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 4,
      padding: '12px 20px 12px 12px',
      minHeight: 84,
      justifyContent: 'center',
      border: '1px solid var(--lido-app-ui-color-border-default)',
      borderRadius: 16,
      background: 'transparent',
      color: 'var(--lido-app-ui-color-text-default)',
      font: 'inherit',
      textAlign: 'start',
      cursor: 'pointer',
    }}
  >
    <strong>{name}</strong>
    <span
      style={{ fontSize: 12, color: 'var(--lido-app-ui-color-text-secondary)' }}
    >
      {note}
    </span>
  </button>
)

export const UnsavedChanges: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState('')
    const [confirming, setConfirming] = useState(false)
    const dirty = value !== ''

    const close = () => {
      setOpen(false)
      setValue('')
      setConfirming(false)
    }

    return (
      <>
        <Button onClick={() => setOpen(true)}>Edit operator name</Button>
        <Modal
          withOverlay
          open={open}
          dismissible={!dirty}
          onDismissAttempt={() => setConfirming(true)}
          onClose={close}
          title='Rename operator'
        >
          <Stack gap={16}>
            <Input
              aria-label='Operator name'
              placeholder='Operator name'
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />
            {confirming ? (
              <Stack gap={8}>
                <span role='alert'>Discard changes?</span>
                <div style={{ display: 'flex', gap: 8 }}>
                  <Button variant='outline' onClick={close}>
                    Discard
                  </Button>
                  <Button onClick={() => setConfirming(false)}>
                    Keep editing
                  </Button>
                </div>
              </Stack>
            ) : null}
          </Stack>
        </Modal>
      </>
    )
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'While the field is dirty the modal is `dismissible={false}`: Escape, scrim click and Android back are blocked and reported to `onDismissAttempt`, which asks to discard. The close button still closes.',
      },
    },
  },
}

export const ChooseNodeOperator: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Choose operator</Button>
        <Modal
          withOverlay
          open={open}
          onClose={() => setOpen(false)}
          title='Choose a Node Operator'
          subtitle='Select the operator you want to manage'
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {operatorRow('Chorus One', 'Available types: PTO, IODC')}
            {operatorRow('Operator #182', 'CSM')}
          </div>
        </Modal>
      </>
    )
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Composition from the operator picker: 500px card, header with close, rows in the body.',
      },
    },
  },
}

export const Large: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Upload keys</Button>
        <Modal
          withOverlay
          size='large'
          open={open}
          onClose={() => setOpen(false)}
          title='Upload keys'
          subtitle='Review the deposit data before you submit'
        >
          <DataList>
            <DataListRow label='Pubkey' value='0x8a1f...c3d2' />
            <DataListRow label='Withdrawal credentials' value='0x0100...9b7e' />
            <DataListRow label='Signature' value='0xa4e2...71f0' />
            <DataListRow label='Bond required' value='2.4 ETH' />
          </DataList>
        </Modal>
      </>
    )
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          '`size="large"` widens the card to 680px for wide content (tables, key lists); still full-screen at `sm` and below.',
      },
    },
  },
}

export const LongContentDesktop: Story = {
  tags: ['!autodocs'],
  render: function Render(args) {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open modal</Button>
        <Modal
          withOverlay
          scroll={args.scroll}
          open={open}
          onClose={() => setOpen(false)}
          title='Select node operator'
          subtitle='Pick one to continue'
        >
          <DataList>
            {Array.from({ length: 20 }, (_, i) => (
              <DataListRow
                key={i}
                label={`Operator ${i + 1}`}
                value={`${(i + 1) * 12} keys`}
              />
            ))}
          </DataList>
        </Modal>
      </>
    )
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'The card caps at the viewport height; the body scrolls inside it and the header with Close stays pinned, with a fade under the header once scrolled.',
      },
    },
  },
}

export const ScrollOverlay: Story = {
  ...LongContentDesktop,
  args: { scroll: 'overlay' },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          '`scroll="overlay"` grows the card with its content and scrolls the whole overlay on desktop; mobile still scrolls the body.',
      },
    },
  },
}

export const LongContentMobile: Story = {
  tags: ['!autodocs'],
  globals: { viewport: { value: 'px375' } },
  render: function Render() {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open modal</Button>
        <Modal
          withOverlay
          open={open}
          onClose={() => setOpen(false)}
          title='Supply stETH'
        >
          <div style={{ height: 1500 }}>{body}</div>
        </Modal>
      </>
    )
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Full-screen on phones: scroll the content and the header with Close stays pinned.',
      },
    },
  },
}

export const PopoverInModal: Story = {
  tags: ['!autodocs'],
  render: function Render() {
    const [open, setOpen] = useState(false)
    const [popoverOpen, setPopoverOpen] = useState(false)
    const anchorRef = useRef<HTMLButtonElement>(null)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open modal</Button>
        <Modal
          withOverlay
          open={open}
          onClose={() => setOpen(false)}
          title='Popover in modal'
        >
          <Button ref={anchorRef} onClick={() => setPopoverOpen((v) => !v)}>
            Toggle popover
          </Button>
          <Popover
            open={popoverOpen}
            anchorRef={anchorRef}
            aria-label='Details'
            onClose={() => setPopoverOpen(false)}
          >
            Escape or an outside press closes only this popover.
          </Popover>
        </Modal>
      </>
    )
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Overlays stack: the newest layer handles Escape and outside presses, then focus returns inside the modal.',
      },
    },
  },
}

export const InertOthers: Story = {
  tags: ['!autodocs'],
  render: function Render() {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open modal</Button>
        <Modal
          withOverlay
          inertOthers
          open={open}
          onClose={() => setOpen(false)}
          title='Inert others'
        >
          Everything outside the modal is inert, except body-level roots marked
          with <code>data-lido-overlay-keep</code>.
        </Modal>
        {createPortal(
          <div
            data-lido-overlay-keep
            role='status'
            style={{ position: 'fixed', bottom: 16, left: 16 }}
          >
            Toast host stays live
          </div>,
          document.body,
        )}
      </>
    )
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          '`inertOthers` makes every other body child inert, including the app root. Mark body-level toast or live-region roots with `data-lido-overlay-keep` so they stay live.',
      },
    },
  },
}

export const NestedModals: Story = {
  tags: ['!autodocs'],
  render: function Render() {
    const [outerOpen, setOuterOpen] = useState(false)
    const [innerOpen, setInnerOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOuterOpen(true)}>Open outer modal</Button>
        <Modal
          withOverlay
          open={outerOpen}
          onClose={() => setOuterOpen(false)}
          title='Outer'
        >
          <Button onClick={() => setInnerOpen(true)}>Open inner modal</Button>
          <Modal
            withOverlay
            open={innerOpen}
            onClose={() => setInnerOpen(false)}
            title='Inner'
          >
            Escape closes only this one; scroll stays locked until the last
            closes.
          </Modal>
        </Modal>
      </>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

export const FocusReturn: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          "Focus returns to the opener; if it's gone, to a tabbable near it, then to the layer it was in (here the menu's button). For dialogs opened without a focused opener, set `returnFocusTo`.",
      },
    },
  },
  render: function Render() {
    const menuRef = useRef<HTMLButtonElement>(null)
    const savedRef = useRef<HTMLButtonElement>(null)
    const [menuOpen, setMenuOpen] = useState(false)
    const [editOpen, setEditOpen] = useState(false)
    const [delayedOpen, setDelayedOpen] = useState(false)

    return (
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        <Button ref={menuRef} onClick={() => setMenuOpen((v) => !v)}>
          Menu
        </Button>
        <Popover
          open={menuOpen}
          anchorRef={menuRef}
          onClose={() => setMenuOpen(false)}
          aria-label='Menu'
        >
          <Button
            onClick={() => {
              setMenuOpen(false)
              setEditOpen(true)
            }}
          >
            Edit…
          </Button>
        </Popover>
        <Modal
          withOverlay
          open={editOpen}
          onClose={() => setEditOpen(false)}
          title='Edit'
        >
          Closing returns focus to the Menu button.
        </Modal>

        <Button
          onClick={(event) => {
            event.currentTarget.blur()
            setTimeout(() => setDelayedOpen(true), 1000)
          }}
        >
          Open after 1s
        </Button>
        <Button ref={savedRef}>Saved items</Button>
        <Modal
          withOverlay
          open={delayedOpen}
          onClose={() => setDelayedOpen(false)}
          title='Opened without a focused opener'
          returnFocusTo={savedRef}
        >
          Closing focuses Saved items.
        </Modal>
      </div>
    )
  },
}
