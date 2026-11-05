import { useEffect, useRef, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { DarkThemeProvider } from '@lidofinance/lido-shared-ui'

import { Button } from '../button'
import { Card } from '../card'
import { Identicon } from '../identicon'
import { IconPlus } from '../icons'
import { Input } from '../input'
import { Stack } from '../stack'
import { Tag } from '../tag'
import { spaces } from '../utils'
import { Popover } from '.'

const meta: Meta<typeof Popover> = {
  title: 'Feedback & Overlays/Popover',
  component: Popover,
  args: { placement: 'bottom', align: 'start', offset: 8, modal: true },
  argTypes: {
    placement: { options: ['top', 'bottom'], control: { type: 'select' } },
    align: {
      options: ['start', 'center', 'end'],
      control: { type: 'select' },
    },
    offset: {
      options: spaces,
      control: { type: 'select' },
    },
    width: {
      options: ['auto', 240, 320, 'anchor', 'align', 'min-anchor'],
      mapping: { auto: undefined },
      control: { type: 'select' },
    },
    modal: { control: { type: 'boolean' } },
    open: { control: false },
    onClose: { control: false },
    anchorRef: { control: false },
    alignRef: { control: false },
  },
  parameters: {
    layout: 'padded',
    docs: { source: { type: 'code' } },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const stage = {
  minHeight: 300,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
} as const

const operators = [
  { name: 'CSM#182', address: '0x182', tags: ['0x02'] },
  { name: 'CM#411', address: '0x411', tags: ['CC', 'M'] },
]

export const Basic: Story = {
  render: function Render(args) {
    const [open, setOpen] = useState(false)
    const triggerRef = useRef<HTMLButtonElement>(null)

    return (
      <div style={stage}>
        <Button ref={triggerRef} onClick={() => setOpen((value) => !value)}>
          Open popover
        </Button>
        <Popover
          aria-label='Details'
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          anchorRef={triggerRef}
          dataTestId={{ root: 'details-popover' }}
        >
          <Stack gap={4}>
            <strong>Details</strong>
            <p style={{ margin: 0 }}>
              Anchored to the button and rendered in a portal.
            </p>
          </Stack>
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
      <div style={stage}>
        <Button ref={triggerRef} onClick={() => setOpen((value) => !value)}>
          Open popover
        </Button>
        <Popover
          aria-label='Details'
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          anchorRef={triggerRef}
        >
          <Stack gap={4}>
            <strong>Details</strong>
            <p style={{ margin: 0 }}>
              Open on mount; focus moves into the panel.
            </p>
          </Stack>
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

export const Placements: Story = {
  args: { placement: 'top', align: 'end', offset: 4 },
  render: function Render(args) {
    const [open, setOpen] = useState(false)
    const triggerRef = useRef<HTMLButtonElement>(null)

    return (
      <div style={{ ...stage, justifyContent: 'flex-end' }}>
        <Button
          ref={triggerRef}
          variant='outline'
          onClick={() => setOpen((value) => !value)}
        >
          Preferred side
        </Button>
        <Popover
          aria-label='Placement'
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          anchorRef={triggerRef}
        >
          Opens on the chosen side and flips when it does not fit.
        </Popover>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          '`placement` is the preferred side, `align` picks the anchor edge the panel lines up with and `offset` sets the gap. Change them in the controls.',
      },
    },
  },
}

export const OnHover: Story = {
  render: function Render(args) {
    const [open, setOpen] = useState(false)
    const [pinned, setPinned] = useState(false)
    const triggerRef = useRef<HTMLButtonElement>(null)
    const closeTimeout = useRef<ReturnType<typeof setTimeout>>()

    const cancelClose = () => clearTimeout(closeTimeout.current)
    const show = () => {
      cancelClose()
      setOpen(true)
    }
    const scheduleClose = () => {
      if (pinned) return
      cancelClose()
      closeTimeout.current = setTimeout(() => setOpen(false), 150)
    }
    const close = () => {
      triggerRef.current?.focus()
      cancelClose()
      setOpen(false)
      setPinned(false)
    }

    useEffect(() => cancelClose, [])

    return (
      <div style={stage}>
        <Button
          ref={triggerRef}
          variant='outline'
          onMouseEnter={show}
          onMouseLeave={scheduleClose}
          onFocus={show}
          onBlur={scheduleClose}
          onClick={() => {
            show()
            setPinned(true)
          }}
        >
          Hover or focus me
        </Button>
        <Popover
          aria-label='More info'
          {...args}
          open={open}
          onClose={close}
          anchorRef={triggerRef}
          modal={pinned}
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          Hover or focus the trigger to preview. Click or press Enter to pin the
          panel and move focus into it.
        </Popover>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Hover and focus only preview the panel, non-modal. Click or Enter pins it as modal, so keyboard users can reach the content; Escape closes it and returns focus to the trigger. Hover content always needs this click or keyboard path. For plain text hints use `Tooltip`, which opens on focus too.',
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
          <Button ref={triggerRef} onClick={() => setOpen((value) => !value)}>
            Open popover
          </Button>
        </div>
        <Popover
          aria-label='Details'
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          anchorRef={triggerRef}
          alignRef={containerRef}
        >
          Sized by the width control.
        </Popover>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Omitted `width` sizes the panel by content (up to the viewport minus 16px). A number is px, `'anchor'` matches the trigger, `'min-anchor'` is content-sized but never narrower than the trigger, and `'align'` matches the `alignRef` element (the grey container here), falling back to the anchor.",
      },
    },
  },
}

export const TallContent: Story = {
  render: function Render(args) {
    const [open, setOpen] = useState(false)
    const triggerRef = useRef<HTMLButtonElement>(null)

    return (
      <div style={stage}>
        <Button
          ref={triggerRef}
          variant='outline'
          onClick={() => setOpen((value) => !value)}
        >
          Open long list
        </Button>
        <Popover
          aria-label='Long list'
          {...args}
          width={args.width ?? 240}
          open={open}
          onClose={() => setOpen(false)}
          anchorRef={triggerRef}
        >
          {Array.from({ length: 30 }, (_, index) => (
            <Button
              key={index}
              variant='ghost'
              size='small'
              onClick={() => setOpen(false)}
            >
              {`Item ${index + 1}`}
            </Button>
          ))}
        </Popover>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Content taller than the room on either side. The panel is capped to the room on the chosen side and scrolls inside, so nothing ends up off-screen. Try a short viewport.',
      },
    },
  },
}

export const InDarkScope: Story = {
  tags: ['!autodocs'],
  render: function Render(args) {
    const [open, setOpen] = useState(true)
    const triggerRef = useRef<HTMLButtonElement>(null)

    return (
      <DarkThemeProvider>
        <div
          style={{
            padding: 24,
            borderRadius: 'var(--lido-app-ui-border-radius-modal)',
            background: 'var(--lido-app-ui-color-background-surface)',
          }}
        >
          <div style={stage}>
            <Button ref={triggerRef} onClick={() => setOpen((value) => !value)}>
              Open popover
            </Button>
            <Popover
              aria-label='Details'
              {...args}
              open={open}
              onClose={() => setOpen(false)}
              anchorRef={triggerRef}
            >
              Plain text keeps the scope text color and font.
            </Popover>
          </div>
        </div>
      </DarkThemeProvider>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'A nested `DarkThemeProvider` on a light page. The portaled panel mirrors the scope and sets its own text color and font.',
      },
    },
  },
}

export const DarkOverCard: Story = {
  tags: ['!autodocs'],
  render: function Render(args) {
    const [open, setOpen] = useState(true)
    const triggerRef = useRef<HTMLButtonElement>(null)

    return (
      <DarkThemeProvider>
        <div style={{ padding: 24 }}>
          <Card>
            <div style={stage}>
              <Button
                ref={triggerRef}
                onClick={() => setOpen((value) => !value)}
              >
                Open popover
              </Button>
              <Popover
                aria-label='Details'
                {...args}
                open={open}
                onClose={() => setOpen(false)}
                anchorRef={triggerRef}
              >
                Only the shadow separates the panel from the card.
              </Popover>
            </div>
          </Card>
        </div>
      </DarkThemeProvider>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'A dark popover over a dark `Card`. The two-layer shadow is the only separation from the card surface.',
      },
    },
  },
}

export const WithForm: Story = {
  render: function Render(args) {
    const [open, setOpen] = useState(false)
    const triggerRef = useRef<HTMLButtonElement>(null)

    return (
      <div style={stage}>
        <Button ref={triggerRef} onClick={() => setOpen((value) => !value)}>
          Change address
        </Button>
        <Popover
          aria-label='Change reward address'
          {...args}
          width={args.width ?? 320}
          open={open}
          onClose={() => setOpen(false)}
          anchorRef={triggerRef}
        >
          <Stack
            as='form'
            gap={12}
            onSubmit={(event) => {
              event.preventDefault()
              setOpen(false)
            }}
          >
            <Input label='Reward address' placeholder='0x...' />
            <Button type='submit'>Save</Button>
          </Stack>
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
            <Stack direction='row' gap={4}>
              <Tag variant='action'>ICS</Tag>
              <Tag>RM</Tag>
            </Stack>
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
