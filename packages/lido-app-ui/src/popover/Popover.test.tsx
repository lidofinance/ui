import { useRef, useState } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { Popover, type PopoverProps } from '.'

const Demo = ({ onClose = () => undefined }: { onClose?: () => void }) => {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLButtonElement>(null)
  return (
    <div>
      <button
        ref={ref}
        type='button'
        data-testid='anchor'
        onClick={() => setOpen((v) => !v)}
      >
        toggle
      </button>
      <button type='button' data-testid='other'>
        other
      </button>
      <Popover
        open={open}
        anchorRef={ref}
        onClose={() => {
          onClose()
          setOpen(false)
        }}
        className='custom'
        aria-label='Switch'
      >
        <button type='button'>inside</button>
      </Popover>
    </div>
  )
}

const openPopover = () => {
  const anchor = screen.getByTestId('anchor')
  anchor.focus()
  fireEvent.click(anchor)
  return anchor
}

const rect = (r: Partial<DOMRect>) =>
  ({
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: 0,
    height: 0,
    ...r,
  }) as DOMRect

const mockLayout = (
  anchor: Partial<DOMRect>,
  panel: Partial<DOMRect>,
  viewport = { width: 1000, height: 800 },
) => {
  vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockImplementation(
    function (this: HTMLElement) {
      return this.getAttribute('role') === 'dialog' ? rect(panel) : rect(anchor)
    },
  )
  vi.spyOn(document.documentElement, 'clientWidth', 'get').mockReturnValue(
    viewport.width,
  )
  vi.spyOn(document.documentElement, 'clientHeight', 'get').mockReturnValue(
    viewport.height,
  )
}

const Single = (props: Partial<PopoverProps>) => {
  const ref = useRef<HTMLButtonElement>(null)
  return (
    <>
      <button ref={ref} type='button'>
        anchor
      </button>
      <Popover
        open
        anchorRef={ref}
        onClose={() => undefined}
        aria-label='Single'
        {...props}
      >
        <button type='button'>inside</button>
      </Popover>
    </>
  )
}

describe('Popover', () => {
  afterEach(() => vi.restoreAllMocks())

  it('renders nothing when closed', () => {
    render(<Demo />)
    expect(screen.queryByRole('dialog')).toBeNull()
  })

  it('renders in a portal on body with className on the panel', async () => {
    render(<Demo />)
    openPopover()
    const dialog = await screen.findByRole('dialog', { name: 'Switch' })
    expect(dialog.parentElement).toBe(document.body)
    expect(dialog.className).toContain('custom')
  })

  it('moves focus inside on open', async () => {
    render(<Demo />)
    openPopover()
    const inside = await screen.findByText('inside')
    expect(document.activeElement).toBe(inside)
  })

  it('closes on Escape and restores focus to the anchor', async () => {
    render(<Demo />)
    const anchor = openPopover()
    await screen.findByRole('dialog')
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(screen.queryByRole('dialog')).toBeNull()
    expect(document.activeElement).toBe(anchor)
  })

  it('closes on outside pointerdown', async () => {
    const onClose = vi.fn()
    render(<Demo onClose={onClose} />)
    openPopover()
    await screen.findByRole('dialog')
    fireEvent.pointerDown(screen.getByTestId('other'))
    expect(onClose).toHaveBeenCalledTimes(1)
    expect(screen.queryByRole('dialog')).toBeNull()
  })

  it('ignores pointerdown on the anchor and inside the panel', async () => {
    const onClose = vi.fn()
    render(<Demo onClose={onClose} />)
    openPopover()
    await screen.findByRole('dialog')
    fireEvent.pointerDown(screen.getByTestId('anchor'))
    fireEvent.pointerDown(screen.getByText('inside'))
    expect(onClose).not.toHaveBeenCalled()
  })

  it('centers the panel on the anchor with align center', async () => {
    mockLayout(
      { left: 400, right: 500, top: 100, bottom: 140, width: 100, height: 40 },
      { width: 200, height: 100 },
    )
    render(<Single align='center' />)
    const dialog = await screen.findByRole('dialog')
    expect(dialog.style.left).toBe('350px')
  })

  it('flips to top when there is no room below', async () => {
    mockLayout(
      { left: 400, right: 500, top: 700, bottom: 740, width: 100, height: 40 },
      { width: 200, height: 200 },
    )
    render(<Single />)
    const dialog = await screen.findByRole('dialog')
    expect(dialog.dataset.placement).toBe('top')
    expect(dialog.style.bottom).toBe('108px')
  })

  it('keeps the requested side when it has room', async () => {
    mockLayout(
      { left: 400, right: 500, top: 100, bottom: 140, width: 100, height: 40 },
      { width: 200, height: 200 },
    )
    render(<Single />)
    const dialog = await screen.findByRole('dialog')
    expect(dialog.dataset.placement).toBe('bottom')
  })

  it('does not move focus or set aria-modal when modal is false', async () => {
    render(<Single modal={false} />)
    const dialog = await screen.findByRole('dialog')
    expect(dialog.hasAttribute('aria-modal')).toBe(false)
    expect(dialog.contains(document.activeElement)).toBe(false)
  })

  it('does not close the outer popover on pointerdown inside a nested one', async () => {
    const onOuterClose = vi.fn()
    const Nested = () => {
      const outerRef = useRef<HTMLButtonElement>(null)
      const innerRef = useRef<HTMLButtonElement>(null)
      return (
        <>
          <button ref={outerRef} type='button'>
            outer anchor
          </button>
          <Popover
            open
            anchorRef={outerRef}
            onClose={onOuterClose}
            aria-label='Outer'
          >
            <button ref={innerRef} type='button'>
              inner anchor
            </button>
            <Popover
              open
              anchorRef={innerRef}
              onClose={() => undefined}
              aria-label='Inner'
            >
              <button type='button'>nested</button>
            </Popover>
          </Popover>
        </>
      )
    }
    render(<Nested />)
    await screen.findByRole('dialog', { name: 'Inner' })
    fireEvent.pointerDown(screen.getByText('nested'))
    expect(onOuterClose).not.toHaveBeenCalled()
  })
})
