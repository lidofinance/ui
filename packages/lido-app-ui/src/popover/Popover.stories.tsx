import {
  useEffect,
  useRef,
  useState,
  type ComponentProps,
  type ReactNode,
} from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { DarkThemeProvider } from '@lidofinance/lido-shared-ui'

import { Button } from '../button'
import { Card } from '../card'
import { Identicon } from '../identicon'
import { IconPlus } from '../icons'
import { Input } from '../input'
import { Tag } from '../tag'
import { spaces } from '../utils'
import { Popover, type PopoverProps } from '.'

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
      options: ['auto', 240, 320, 'anchor', 'align'],
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
  },
}

export default meta
type Story = StoryObj<typeof meta>

type PopoverArgs = Omit<
  PopoverProps,
  'open' | 'onClose' | 'anchorRef' | 'alignRef' | 'children'
>

type DemoProps = PopoverArgs & {
  label?: string
  variant?: ComponentProps<typeof Button>['variant']
  defaultOpen?: boolean
  children: (close: () => void) => ReactNode
}

const stage = {
  minHeight: 300,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
} as const

const Demo = ({
  label = 'Open popover',
  variant,
  defaultOpen = false,
  children,
  ...args
}: DemoProps) => {
  const [open, setOpen] = useState(defaultOpen)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const close = () => setOpen(false)

  return (
    <div style={stage}>
      <Button
        ref={triggerRef}
        variant={variant}
        onClick={() => setOpen((value) => !value)}
      >
        {label}
      </Button>
      <Popover
        aria-label='Details'
        {...args}
        open={open}
        onClose={close}
        anchorRef={triggerRef}
      >
        {children(close)}
      </Popover>
    </div>
  )
}

export const Basic: Story = {
  render: (args) => (
    <Demo {...args}>
      {() => (
        <div>
          <strong>Details</strong>
          <p style={{ margin: '4px 0 0' }}>
            Anchored to the button and rendered in a portal.
          </p>
        </div>
      )}
    </Demo>
  ),
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
  render: (args) => (
    <Demo {...args} defaultOpen>
      {() => (
        <div>
          <strong>Details</strong>
          <p style={{ margin: '4px 0 0' }}>
            Open on mount; focus moves into the panel.
          </p>
        </div>
      )}
    </Demo>
  ),
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
          "Omitted `width` sizes the panel by content (up to the viewport minus 16px). A number is px, `'anchor'` matches the trigger and `'align'` matches the `alignRef` element (the grey container here), falling back to the anchor.",
      },
    },
  },
}

export const WithMenu: Story = {
  render: (args) => (
    <Demo {...args} width={args.width ?? 240} label='Account' variant='outline'>
      {(close) => (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {['Copy address', 'View on Etherscan', 'Disconnect'].map((label) => (
            <Button
              key={label}
              variant='ghost'
              size='small'
              style={{ width: '100%', justifyContent: 'flex-start' }}
              onClick={close}
            >
              {label}
            </Button>
          ))}
        </div>
      )}
    </Demo>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'A list of actions in a fixed-width panel. Selecting an item closes the popover.',
      },
    },
  },
}

export const TallContent: Story = {
  render: (args) => (
    <Demo
      {...args}
      width={args.width ?? 240}
      label='Open long list'
      variant='outline'
      aria-label='Long list'
    >
      {(close) =>
        Array.from({ length: 30 }, (_, index) => (
          <Button key={index} variant='ghost' size='small' onClick={close}>
            {`Item ${index + 1}`}
          </Button>
        ))
      }
    </Demo>
  ),
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
  render: (args) => (
    <DarkThemeProvider>
      <div
        style={{
          padding: 24,
          borderRadius: 'var(--lido-app-ui-border-radius-modal)',
          background: 'var(--lido-app-ui-color-background-surface)',
        }}
      >
        <Demo {...args} defaultOpen>
          {() => 'Plain text keeps the scope text color and font.'}
        </Demo>
      </div>
    </DarkThemeProvider>
  ),
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
  render: (args) => (
    <DarkThemeProvider>
      <div style={{ padding: 24 }}>
        <Card>
          <Demo {...args} defaultOpen>
            {() => 'Only the shadow separates the panel from the card.'}
          </Demo>
        </Card>
      </div>
    </DarkThemeProvider>
  ),
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
  render: (args) => (
    <Demo
      {...args}
      width={args.width ?? 320}
      label='Change address'
      aria-label='Change reward address'
    >
      {(close) => (
        <form
          onSubmit={(event) => {
            event.preventDefault()
            close()
          }}
          style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
        >
          <Input label='Reward address' placeholder='0x...' />
          <Button type='submit'>Save</Button>
        </form>
      )}
    </Demo>
  ),
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
