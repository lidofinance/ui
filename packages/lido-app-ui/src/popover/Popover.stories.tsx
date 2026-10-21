import { useEffect, useRef, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../button'
import { Identicon } from '../identicon'
import { IconPlus } from '../icons'
import { Input } from '../input'
import { Tag } from '../tag'
import { Popover } from '.'

const meta: Meta<typeof Popover> = {
  title: 'Feedback & Overlays/Popover',
  component: Popover,
  tags: ['autodocs'],
  args: { placement: 'bottom', align: 'start', offset: 8, modal: true },
  argTypes: {
    placement: { options: ['top', 'bottom'], control: { type: 'select' } },
    align: {
      options: ['start', 'center', 'end'],
      control: { type: 'select' },
    },
    offset: {
      options: [0, 2, 4, 8, 12, 16, 20, 24, 32, 40, 52],
      control: { type: 'select' },
    },
    width: {
      options: ['auto', 240, 320, 'anchor', 'align'],
      mapping: { auto: undefined },
      control: { type: 'select' },
    },
    modal: { control: { type: 'boolean' } },
    open: { table: { disable: true } },
    onClose: { table: { disable: true } },
    anchorRef: { table: { disable: true } },
    alignRef: { table: { disable: true } },
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A floating panel rendered in a portal and positioned against `anchorRef`. `alignRef` pins its edge to a different element, `placement` picks the side and flips when the panel does not fit, `align` takes `start`, `center` or `end`. Modal by default: focus moves in and is trapped; set `modal={false}` to leave focus alone. Escape and outside clicks call `onClose`; clicks on the anchor are ignored so it can toggle.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Popover>

export const Default: Story = {
  render: function Render(args) {
    const [open, setOpen] = useState(false)
    const triggerRef = useRef<HTMLButtonElement>(null)

    return (
      <div
        style={{
          minHeight: 300,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Button
          ref={triggerRef}
          aria-haspopup='dialog'
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          Open popover
        </Button>
        <Popover
          open={open}
          onClose={() => setOpen(false)}
          anchorRef={triggerRef}
          placement={args.placement}
          align={args.align}
          offset={args.offset}
          width={args.width}
          modal={args.modal}
          aria-label='Details'
        >
          <div>
            <strong>Details</strong>
            <p style={{ margin: '4px 0 0' }}>
              Anchored to the button and rendered in a portal.
            </p>
          </div>
        </Popover>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Click the trigger to toggle. Escape or a click outside closes the popover.',
      },
    },
  },
}

export const OpenByDefault: Story = {
  tags: ['!autodocs'],
  render: function Render(args) {
    const [open, setOpen] = useState(true)
    const triggerRef = useRef<HTMLButtonElement>(null)

    return (
      <div
        style={{
          minHeight: 300,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Button
          ref={triggerRef}
          aria-haspopup='dialog'
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          Open popover
        </Button>
        <Popover
          open={open}
          onClose={() => setOpen(false)}
          anchorRef={triggerRef}
          placement={args.placement}
          align={args.align}
          offset={args.offset}
          width={args.width}
          modal={args.modal}
          aria-label='Details'
        >
          <div>
            <strong>Details</strong>
            <p style={{ margin: '4px 0 0' }}>
              Open on mount; focus moves into the panel.
            </p>
          </div>
        </Popover>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Rendered open on mount. Focus moves into the panel as soon as it appears.',
      },
    },
  },
}

export const OnHover: Story = {
  render: function Render(args) {
    const [open, setOpen] = useState(false)
    const triggerRef = useRef<HTMLButtonElement>(null)
    const closeTimeout = useRef<ReturnType<typeof setTimeout>>()

    const cancelClose = () => clearTimeout(closeTimeout.current)
    const show = () => {
      cancelClose()
      setOpen(true)
    }
    const scheduleClose = () => {
      cancelClose()
      closeTimeout.current = setTimeout(() => setOpen(false), 150)
    }

    useEffect(() => cancelClose, [])

    return (
      <div
        style={{
          minHeight: 300,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Button
          ref={triggerRef}
          variant='outline'
          onMouseEnter={show}
          onMouseLeave={scheduleClose}
        >
          Hover me
        </Button>
        <Popover
          open={open}
          onClose={() => setOpen(false)}
          anchorRef={triggerRef}
          placement={args.placement}
          align={args.align}
          offset={args.offset}
          width={args.width}
          modal={false}
          aria-label='More info'
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          Hover the trigger or the panel to keep it open.
        </Popover>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Opens on trigger hover and closes after a short delay so the pointer can reach the panel. The popover is non-modal, so focus stays on the trigger. For plain hover hints prefer `Tooltip`.',
      },
    },
  },
}

export const Width: Story = {
  args: { width: 'align' },
  render: function Render(args) {
    const [open, setOpen] = useState(false)
    const triggerRef = useRef<HTMLButtonElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    return (
      <div style={{ minHeight: 300 }}>
        <div
          ref={containerRef}
          style={{
            width: 480,
            boxSizing: 'border-box',
            padding: 24,
            background: 'var(--lido-app-ui-color-background-secondary)',
          }}
        >
          <Button
            ref={triggerRef}
            aria-haspopup='dialog'
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            Open popover
          </Button>
        </div>
        <Popover
          open={open}
          onClose={() => setOpen(false)}
          anchorRef={triggerRef}
          alignRef={containerRef}
          placement={args.placement}
          align={args.align}
          offset={args.offset}
          width={args.width}
          modal={args.modal}
          aria-label='Details'
        >
          Sized by the `width` control.
        </Popover>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Omitted `width` sizes the panel by content (up to the viewport minus 16px). A number is px, `'anchor'` matches the trigger and `'align'` matches the `alignRef` element (the grey container here), falling back to the anchor.",
      },
    },
  },
}

export const WithMenu: Story = {
  render: function Render(args) {
    const [open, setOpen] = useState(false)
    const triggerRef = useRef<HTMLButtonElement>(null)
    const close = () => setOpen(false)

    return (
      <div
        style={{
          minHeight: 300,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Button
          ref={triggerRef}
          variant='outline'
          aria-haspopup='dialog'
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          Account
        </Button>
        <Popover
          open={open}
          onClose={close}
          anchorRef={triggerRef}
          placement={args.placement}
          align={args.align}
          offset={args.offset}
          modal={args.modal}
          width={args.width ?? 240}
          aria-label='Account actions'
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {['Copy address', 'View on Etherscan', 'Disconnect'].map(
              (label) => (
                <Button
                  key={label}
                  variant='ghost'
                  size='small'
                  style={{ width: '100%', justifyContent: 'flex-start' }}
                  onClick={close}
                >
                  {label}
                </Button>
              ),
            )}
          </div>
        </Popover>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'A list of actions in a fixed-width panel. Selecting an item closes the popover.',
      },
    },
  },
}

export const WithForm: Story = {
  render: function Render(args) {
    const [open, setOpen] = useState(false)
    const triggerRef = useRef<HTMLButtonElement>(null)

    return (
      <div
        style={{
          minHeight: 300,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Button
          ref={triggerRef}
          aria-haspopup='dialog'
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          Change address
        </Button>
        <Popover
          open={open}
          onClose={() => setOpen(false)}
          anchorRef={triggerRef}
          placement={args.placement}
          align={args.align}
          offset={args.offset}
          modal={args.modal}
          width={args.width ?? 320}
          aria-label='Change reward address'
        >
          <form
            onSubmit={(event) => {
              event.preventDefault()
              setOpen(false)
            }}
            style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
          >
            <Input label='Reward address' placeholder='0x...' />
            <Button type='submit'>Save</Button>
          </form>
        </Popover>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Focus lands in the first field on open. Submitting the form closes the popover.',
      },
    },
  },
}

const operators = [
  { name: 'CSM#182', address: '0x182', tags: ['0x02'] },
  { name: 'CM#411', address: '0x411', tags: ['CC', 'M'] },
]

const OperatorSwitcherContent = () => (
  <>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        alignItems: 'center',
        paddingTop: 20,
      }}
    >
      <Identicon address='0x419' size={64} />
      <div
        style={{
          fontSize: 20,
          lineHeight: '32px',
          fontWeight: 600,
          letterSpacing: '-0.14px',
        }}
      >
        CSM#419
      </div>
      <div style={{ display: 'flex', gap: 4 }}>
        <Tag variant='action'>ICS</Tag>
        <Tag>RM</Tag>
      </div>
    </div>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        paddingTop: 16,
        borderTop: '1px solid var(--lido-app-ui-color-border-default)',
      }}
    >
      <div
        style={{
          padding: '8px 12px',
          color: 'var(--lido-app-ui-color-text-tertiary)',
        }}
      >
        Other operators
      </div>
      {operators.map(({ name, address, tags }) => (
        <div
          key={name}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '8px 12px',
          }}
        >
          <Identicon address={address} size={24} />
          <span style={{ flex: 1 }}>{name}</span>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      ))}
      <Button
        variant='ghost'
        size='small'
        iconLeft={<IconPlus />}
        style={{ width: '100%' }}
      >
        Create a 0x02 operator
      </Button>
    </div>
  </>
)

export const OperatorSwitcher: Story = {
  tags: ['!autodocs'],
  render: function Render() {
    const [open, setOpen] = useState(true)
    const triggerRef = useRef<HTMLButtonElement>(null)
    const sidebarRef = useRef<HTMLDivElement>(null)

    return (
      <div style={{ display: 'flex', minHeight: 640 }}>
        <div
          ref={sidebarRef}
          style={{
            width: 296,
            boxSizing: 'border-box',
            padding: '24px 16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}
        >
          <Button
            ref={triggerRef}
            variant='outline'
            iconLeft={<Identicon address='0x419' size={24} />}
            aria-haspopup='dialog'
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            style={{ width: '100%' }}
          >
            CSM#419
          </Button>
        </div>
        <Popover
          open={open}
          onClose={() => setOpen(false)}
          anchorRef={triggerRef}
          alignRef={sidebarRef}
          placement='top'
          align='start'
          offset={0}
          width={296}
          aria-label='Switch node operator'
        >
          <OperatorSwitcherContent />
        </Popover>
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Anchored above a sidebar footer trigger, 296px wide and aligned to the sidebar edge through `alignRef`.',
      },
    },
  },
}
