import { createRef, forwardRef, useState, type ReactNode } from 'react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act, fireEvent, render, screen } from '@testing-library/react'

import { Counter } from '../counter'
import { Portal, useEscape, useFocusTrap } from '../hooks'
import { LinkProvider, type LinkComponentProps } from '../link-provider'
import { Sidebar } from './Sidebar'
import { SidebarGroup } from './SidebarGroup'
import { SidebarItem } from './SidebarItem'

const stubMatchMedia = (matches: boolean) => {
  const listeners = new Set<() => void>()
  const mql = {
    matches,
    addEventListener: (_: string, fn: () => void) => listeners.add(fn),
    removeEventListener: (_: string, fn: () => void) => listeners.delete(fn),
  }
  window.matchMedia = vi.fn(() => mql) as unknown as typeof window.matchMedia
  return {
    set: (next: boolean) => {
      mql.matches = next
      act(() => listeners.forEach((fn) => fn()))
    },
  }
}

const originalMatchMedia = window.matchMedia

afterEach(() => {
  window.matchMedia = originalMatchMedia
  vi.restoreAllMocks()
  document.body.style.overflow = ''
})

const RouterLink = forwardRef<HTMLAnchorElement, LinkComponentProps>(
  ({ children, ...props }, ref) => (
    <a ref={ref} data-router='' {...props}>
      {children}
    </a>
  ),
)
RouterLink.displayName = 'RouterLink'

describe('SidebarItem', () => {
  it('renders a link, spreads rest and forwards ref', () => {
    const ref = createRef<HTMLAnchorElement | HTMLButtonElement>()
    render(
      <SidebarItem ref={ref} href='/keys' data-testid='item'>
        Keys
      </SidebarItem>,
    )
    const link = screen.getByRole('link', { name: 'Keys' })
    expect(link.getAttribute('href')).toBe('/keys')
    expect(link.getAttribute('data-testid')).toBe('item')
    expect(ref.current).toBe(link)
  })

  it('renders a button without href', () => {
    const onClick = vi.fn()
    render(<SidebarItem onClick={onClick}>Dashboard</SidebarItem>)
    fireEvent.click(screen.getByRole('button', { name: 'Dashboard' }))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('marks active item with aria-current', () => {
    render(
      <SidebarItem href='/d' active>
        Dashboard
      </SidebarItem>,
    )
    expect(screen.getByRole('link').getAttribute('aria-current')).toBe('page')
  })

  it('blocks click and navigation when disabled', () => {
    const onClick = vi.fn()
    render(
      <SidebarItem href='/keys' disabled onClick={onClick}>
        Keys
      </SidebarItem>,
    )
    const link = screen.getByText('Keys').closest('a') as HTMLAnchorElement
    expect(link.getAttribute('aria-disabled')).toBe('true')
    expect(link.hasAttribute('href')).toBe(false)
    fireEvent.click(link)
    expect(onClick).not.toHaveBeenCalled()
  })

  it('blocks click on a disabled button item', () => {
    const onClick = vi.fn()
    render(
      <SidebarItem disabled onClick={onClick}>
        Keys
      </SidebarItem>,
    )
    fireEvent.click(screen.getByRole('button'))
    expect(onClick).not.toHaveBeenCalled()
  })

  it('routes links through LinkProvider', () => {
    render(
      <LinkProvider component={RouterLink}>
        <SidebarItem href='/keys'>Keys</SidebarItem>
      </LinkProvider>,
    )
    expect(
      screen.getByRole('link', { name: 'Keys' }).hasAttribute('data-router'),
    ).toBe(true)
  })

  it('renders trailing node inside an aria-hidden wrapper', () => {
    render(
      <SidebarItem href='/b' trailing={<Counter>3</Counter>}>
        Bond
      </SidebarItem>,
    )
    expect(
      screen.getByText('3').parentElement?.getAttribute('aria-hidden'),
    ).toBe('true')
  })

  it.each([null, false])('renders no trailing wrapper for %s', (trailing) => {
    render(
      <SidebarItem href='/b' trailing={trailing}>
        Bond
      </SidebarItem>,
    )
    expect(
      screen.getByRole('link', { name: 'Bond' }).querySelector('[aria-hidden]'),
    ).toBeNull()
  })
})

describe('SidebarGroup', () => {
  it('labels the list with the group label', () => {
    render(
      <SidebarGroup label='Operator'>
        <SidebarItem href='/a'>A</SidebarItem>
        <SidebarItem href='/b'>B</SidebarItem>
      </SidebarGroup>,
    )
    expect(screen.getByRole('list', { name: 'Operator' })).toBeDefined()
    expect(screen.getAllByRole('listitem')).toHaveLength(2)
  })
})

describe('Sidebar', () => {
  beforeEach(() => {
    stubMatchMedia(true)
  })

  it('renders a single labelled nav landmark', () => {
    render(
      <Sidebar logo='Logo'>
        <SidebarItem href='/a'>A</SidebarItem>
      </Sidebar>,
    )
    expect(screen.getAllByRole('navigation')).toHaveLength(1)
    expect(screen.getByRole('navigation', { name: 'Primary' })).toBeDefined()
  })

  it.each([
    ['closed', false],
    ['open', true],
  ])('exposes %s state', (_name, open) => {
    const { container } = render(
      <Sidebar logo='Logo' open={open} onClose={vi.fn()} />,
    )
    expect(
      container.querySelector('[data-open]')?.getAttribute('data-open'),
    ).toBe(String(open))
  })

  it('calls onClose on Escape when open', () => {
    const onClose = vi.fn()
    render(<Sidebar logo='Logo' open onClose={onClose} />)
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('ignores Escape when closed', () => {
    const onClose = vi.fn()
    render(<Sidebar logo='Logo' onClose={onClose} />)
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(onClose).not.toHaveBeenCalled()
  })

  it('calls onClose on scrim click', () => {
    const onClose = vi.fn()
    const { container } = render(<Sidebar logo='Logo' open onClose={onClose} />)
    fireEvent.click(container.firstElementChild as HTMLElement)
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose from the close button', () => {
    const onClose = vi.fn()
    render(<Sidebar logo='Logo' open onClose={onClose} />)
    fireEvent.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })
})

describe('Sidebar drawer gating', () => {
  beforeEach(() => {
    stubMatchMedia(true)
  })

  it('does not trap, lock scroll or handle Escape outside the drawer viewport', () => {
    stubMatchMedia(false)
    const onClose = vi.fn()
    render(
      <>
        <button type='button'>outside</button>
        <Sidebar logo='Logo' open onClose={onClose}>
          <SidebarItem href='/a'>A</SidebarItem>
        </Sidebar>
      </>,
    )
    expect(document.body.style.overflow).not.toBe('hidden')
    expect(document.activeElement).toBe(document.body)
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(onClose).not.toHaveBeenCalled()
    expect(screen.queryByRole('dialog')).toBeNull()
    expect(screen.getByRole('navigation', { name: 'Primary' })).toBeDefined()
  })

  it('treats a missing matchMedia as not-drawer', () => {
    // @ts-expect-error jsdom has no matchMedia
    delete window.matchMedia
    render(<Sidebar logo='Logo' open onClose={vi.fn()} />)
    expect(screen.queryByRole('dialog')).toBeNull()
  })

  it('reacts to viewport changes', () => {
    const media = stubMatchMedia(false)
    render(<Sidebar logo='Logo' open onClose={vi.fn()} />)
    expect(screen.queryByRole('dialog')).toBeNull()
    media.set(true)
    expect(screen.getByRole('dialog')).toBeDefined()
    expect(document.body.style.overflow).toBe('hidden')
  })

  it('closes via onClose when the viewport leaves drawer width while open', () => {
    const media = stubMatchMedia(true)
    const onClose = vi.fn()
    render(<Sidebar logo='Logo' open onClose={onClose} />)
    expect(onClose).not.toHaveBeenCalled()
    media.set(false)
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('does not call onClose on viewport change while closed', () => {
    const media = stubMatchMedia(true)
    const onClose = vi.fn()
    render(<Sidebar logo='Logo' onClose={onClose} />)
    media.set(false)
    expect(onClose).not.toHaveBeenCalled()
  })

  it('acts as a modal dialog while the drawer is active', () => {
    render(<Sidebar logo='Logo' open onClose={vi.fn()} />)
    const dialog = screen.getByRole('dialog', { name: 'Main navigation' })
    expect(dialog.getAttribute('aria-modal')).toBe('true')
    expect(document.body.style.overflow).toBe('hidden')
  })

  it('moves focus in on open and back to the opener on close', () => {
    const Demo = () => {
      const [open, setOpen] = useState(false)
      return (
        <>
          <button type='button' onClick={() => setOpen(true)}>
            burger
          </button>
          <Sidebar logo='Logo' open={open} onClose={() => setOpen(false)}>
            <SidebarItem href='/a'>A</SidebarItem>
          </Sidebar>
        </>
      )
    }
    render(<Demo />)
    const burger = screen.getByText('burger')
    burger.focus()
    fireEvent.click(burger)
    expect(screen.getByRole('dialog').contains(document.activeElement)).toBe(
      true,
    )
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(document.activeElement).toBe(burger)
  })
})

// Stand-in for a modal Popover: portalled; traps focus and takes Escape once mounted, above the sidebar.
const NestedOverlay = ({
  onClose,
  children,
}: {
  onClose: () => void
  children: ReactNode
}) => {
  const [panel, setPanel] = useState<HTMLDivElement | null>(null)
  useFocusTrap(panel, { restoreFocus: false })
  useEscape(onClose, { enabled: panel != null })
  return (
    <Portal>
      <div ref={setPanel} role='dialog'>
        {children}
      </div>
    </Portal>
  )
}

describe('Sidebar with a nested overlay', () => {
  const Demo = ({ onSidebarClose }: { onSidebarClose: () => void }) => {
    const [open, setOpen] = useState(true)
    return (
      <Sidebar
        logo='Logo'
        open
        onClose={onSidebarClose}
        footer={
          <>
            <button type='button'>Anchor</button>
            {open ? (
              <NestedOverlay onClose={() => setOpen(false)}>
                <button type='button'>a</button>
                <button type='button'>b</button>
                <button type='button'>c</button>
              </NestedOverlay>
            ) : null}
          </>
        }
      />
    )
  }

  beforeEach(() => {
    stubMatchMedia(true)
  })

  it('Tab inside the overlay is not hijacked by the sidebar trap', async () => {
    render(<Demo onSidebarClose={vi.fn()} />)
    await screen.findByRole('dialog', { name: '' })
    const b = screen.getByText('b')
    b.focus()
    const notPrevented = fireEvent.keyDown(b, { key: 'Tab' })
    expect(notPrevented).toBe(true)
    expect(document.activeElement).toBe(b)
  })

  it('Escape closes only the overlay', async () => {
    const onSidebarClose = vi.fn()
    render(<Demo onSidebarClose={onSidebarClose} />)
    await screen.findByText('b')
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(screen.queryByText('b')).toBeNull()
    expect(onSidebarClose).not.toHaveBeenCalled()
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(onSidebarClose).toHaveBeenCalledTimes(1)
  })
})

describe('Sidebar close on navigate', () => {
  const blockNavigation = (e: Event) => e.preventDefault()
  beforeEach(() => {
    stubMatchMedia(true)
    document.addEventListener('click', blockNavigation)
  })
  afterEach(() => document.removeEventListener('click', blockNavigation))

  const setup = (props: Partial<React.ComponentProps<typeof Sidebar>> = {}) => {
    const onClose = vi.fn()
    render(
      <Sidebar logo='Logo' open onClose={onClose} {...props}>
        <SidebarItem href='/a'>A</SidebarItem>
        <SidebarItem href='/b' target='_blank'>
          B
        </SidebarItem>
        <SidebarItem>Btn</SidebarItem>
      </Sidebar>,
    )
    return onClose
  }

  it('closes on link click', () => {
    const onClose = setup()
    fireEvent.click(screen.getByRole('link', { name: 'A' }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('does not close on modified, non-primary, or new-tab clicks', () => {
    const onClose = setup()
    const link = screen.getByRole('link', { name: 'A' })
    fireEvent.click(link, { metaKey: true })
    fireEvent.click(link, { ctrlKey: true })
    fireEvent.click(link, { shiftKey: true })
    fireEvent.click(link, { altKey: true })
    fireEvent.click(link, { button: 1 })
    fireEvent.click(screen.getByRole('link', { name: 'B' }))
    expect(onClose).not.toHaveBeenCalled()
  })

  it('does not close on button items', () => {
    const onClose = setup()
    fireEvent.click(screen.getByRole('button', { name: 'Btn' }))
    expect(onClose).not.toHaveBeenCalled()
  })

  it('composes onClick', () => {
    const onClick = vi.fn()
    const onClose = setup({ onClick })
    fireEvent.click(screen.getByRole('link', { name: 'A' }))
    expect(onClick).toHaveBeenCalledTimes(1)
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('closes when a router-style link calls preventDefault itself', () => {
    const onClose = vi.fn()
    render(
      <Sidebar logo='Logo' open onClose={onClose}>
        <SidebarItem href='/a' onClick={(e) => e.preventDefault()}>
          A
        </SidebarItem>
      </Sidebar>,
    )
    fireEvent.click(screen.getByRole('link', { name: 'A' }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('does not close when closeOnNavigate is false', () => {
    const onClose = setup({ closeOnNavigate: false })
    fireEvent.click(screen.getByRole('link', { name: 'A' }))
    expect(onClose).not.toHaveBeenCalled()
  })

  it('does not close when the drawer is inactive', () => {
    stubMatchMedia(false)
    const onClose = setup()
    fireEvent.click(screen.getByRole('link', { name: 'A' }))
    expect(onClose).not.toHaveBeenCalled()
  })
})

describe('Sidebar measured offset', () => {
  const offset = (container: HTMLElement) =>
    container
      .querySelector<HTMLElement>('[data-open]')
      ?.style.getPropertyValue('--local-measured-offset')

  const mockTop = (top: number) =>
    vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue({
      top,
    } as DOMRect)

  afterEach(() => {
    window.scrollY = 0
  })

  it('sets --local-measured-offset from the parent top', () => {
    mockTop(64)
    const { container } = render(<Sidebar logo='Logo' />)
    expect(offset(container)).toBe('64px')
  })

  it('compensates for page scroll', () => {
    window.scrollY = 100
    mockTop(-36)
    const { container } = render(<Sidebar logo='Logo' />)
    expect(offset(container)).toBe('64px')
  })

  it('clamps negative offsets to 0', () => {
    mockTop(-50)
    const { container } = render(<Sidebar logo='Logo' />)
    expect(offset(container)).toBe('0px')
  })

  it('re-measures on resize', () => {
    mockTop(64)
    const { container } = render(<Sidebar logo='Logo' />)
    mockTop(80)
    fireEvent(window, new Event('resize'))
    expect(offset(container)).toBe('80px')
  })
})
