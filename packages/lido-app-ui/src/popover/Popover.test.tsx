import { createRef, useRef, useState } from 'react'
import { act, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { DarkThemeProvider } from '@lidofinance/lido-shared-ui'

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
  vi.spyOn(HTMLElement.prototype, 'offsetWidth', 'get').mockImplementation(
    function (this: HTMLElement) {
      return this.getAttribute('role') === 'dialog' ? (panel.width ?? 0) : 0
    },
  )
  vi.spyOn(HTMLElement.prototype, 'offsetHeight', 'get').mockImplementation(
    function (this: HTMLElement) {
      return this.getAttribute('role') === 'dialog' ? (panel.height ?? 0) : 0
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
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('renders in a portal on body with className on the panel', async () => {
    render(<Demo />)
    openPopover()
    const dialog = await screen.findByRole('dialog', { name: 'Switch' })
    expect(dialog.parentElement).toBe(document.body)
    expect(dialog).toHaveClass('custom')
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
    await userEvent.setup().keyboard('{Escape}')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(anchor).toHaveFocus()
  })

  it('closes on outside pointerdown', async () => {
    const onClose = vi.fn()
    render(<Demo onClose={onClose} />)
    openPopover()
    await screen.findByRole('dialog')
    fireEvent.pointerDown(screen.getByTestId('other'))
    expect(onClose).toHaveBeenCalledTimes(1)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
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

  it('sets a min width at the anchor width with min-anchor', async () => {
    mockLayout(
      { left: 400, right: 500, top: 100, bottom: 140, width: 100, height: 40 },
      { width: 200, height: 100 },
    )
    render(<Single width='min-anchor' />)
    const dialog = await screen.findByRole('dialog')
    expect(dialog.style.minWidth).toBe('100px')
    expect(dialog.style.width).toBe('')
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

  it('caps the panel height to the room on the chosen side', async () => {
    mockLayout(
      { left: 400, right: 500, top: 400, bottom: 440, width: 100, height: 40 },
      { width: 200, height: 600 },
    )
    render(<Single />)
    const dialog = await screen.findByRole('dialog')
    expect(dialog.dataset.placement).toBe('top')
    expect(
      dialog.style.getPropertyValue('--lido-app-ui-popover-available-height'),
    ).toBe('384px')
    expect(dialog.style.maxWidth).toBe('984px')
  })

  it('never floors the panel height above the room on a short viewport', async () => {
    mockLayout(
      { left: 400, right: 500, top: 100, bottom: 140, width: 100, height: 40 },
      { width: 200, height: 100 },
      { width: 1000, height: 240 },
    )
    render(<Single />)
    const dialog = await screen.findByRole('dialog')
    expect(
      dialog.style.getPropertyValue('--lido-app-ui-popover-available-height'),
    ).toBe('84px')
  })

  it('flips on the natural height of a capped panel', async () => {
    mockLayout(
      { left: 400, right: 500, top: 340, bottom: 380, width: 100, height: 40 },
      { width: 200, height: 150 },
    )
    vi.spyOn(HTMLElement.prototype, 'scrollHeight', 'get').mockReturnValue(600)
    render(<Single placement='top' />)
    const dialog = await screen.findByRole('dialog')
    expect(dialog.dataset.placement).toBe('bottom')
    expect(
      dialog.style.getPropertyValue('--lido-app-ui-popover-available-height'),
    ).toBe('404px')
  })

  it('scrolls the initially focused element into view', async () => {
    const scrollIntoView = vi.fn()
    Element.prototype.scrollIntoView = scrollIntoView
    try {
      render(<Single />)
      await screen.findByRole('dialog')
      expect(scrollIntoView).toHaveBeenCalledWith({ block: 'nearest' })
    } finally {
      // @ts-expect-error jsdom has no scrollIntoView to restore
      delete Element.prototype.scrollIntoView
    }
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

  it('repositions when the panel or the align element resizes', async () => {
    const observed: Element[] = []
    const original = globalThis.ResizeObserver
    globalThis.ResizeObserver = class {
      observe(el: Element) {
        observed.push(el)
      }
      unobserve() {}
      disconnect() {}
    } as unknown as typeof ResizeObserver
    try {
      const Aligned = () => {
        const alignRef = useRef<HTMLDivElement>(null)
        return (
          <>
            <div ref={alignRef} data-testid='align' />
            <Single alignRef={alignRef} />
          </>
        )
      }
      render(<Aligned />)
      const dialog = await screen.findByRole('dialog')
      expect(observed).toContain(dialog)
      expect(observed).toContain(screen.getByTestId('align'))
    } finally {
      globalThis.ResizeObserver = original
    }
  })

  it('does not move focus or set aria-modal when modal is false', async () => {
    render(<Single modal={false} />)
    const dialog = await screen.findByRole('dialog')
    expect(dialog).not.toHaveAttribute('aria-modal')
    expect(dialog.contains(document.activeElement)).toBe(false)
  })

  it('leaves focus alone on close when a non-modal panel never had it', async () => {
    const { rerender } = render(<Single modal={false} />)
    await screen.findByRole('dialog')
    rerender(<Single modal={false} open={false} />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(document.body).toHaveFocus()
  })

  it('restores focus to the anchor when a non-modal panel had focus', async () => {
    const { rerender } = render(<Single modal={false} />)
    const inside = await screen.findByRole('button', { name: 'inside' })
    inside.focus()
    rerender(<Single modal={false} open={false} />)
    expect(screen.getByRole('button', { name: 'anchor' })).toHaveFocus()
  })

  it('wires aria-haspopup, aria-expanded and aria-controls on the anchor', async () => {
    render(<Demo />)
    const anchor = screen.getByTestId('anchor')
    expect(anchor).toHaveAttribute('aria-haspopup', 'dialog')
    expect(anchor).toHaveAttribute('aria-expanded', 'false')
    expect(anchor).not.toHaveAttribute('aria-controls')
    openPopover()
    const dialog = await screen.findByRole('dialog')
    expect(anchor).toHaveAttribute('aria-expanded', 'true')
    expect(anchor).toHaveAttribute('aria-controls', dialog.id)
    fireEvent.click(anchor)
    expect(anchor).toHaveAttribute('aria-expanded', 'false')
    expect(anchor).not.toHaveAttribute('aria-controls')
  })

  it('keeps anchor aria attributes the consumer set and an explicit id', async () => {
    const Own = () => {
      const ref = useRef<HTMLButtonElement>(null)
      return (
        <>
          <button ref={ref} type='button' aria-haspopup='menu'>
            anchor
          </button>
          <Popover
            open
            anchorRef={ref}
            onClose={() => undefined}
            id='mine'
            aria-label='x'
          >
            body
          </Popover>
        </>
      )
    }
    render(<Own />)
    const anchor = screen.getByRole('button', { name: 'anchor' })
    expect(anchor).toHaveAttribute('aria-haspopup', 'menu')
    expect(anchor).toHaveAttribute('aria-controls', 'mine')
    expect(await screen.findByRole('dialog')).toHaveAttribute('id', 'mine')
  })

  it('warns in development when the dialog has no accessible name', async () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined)
    render(<Single aria-label={undefined} />)
    await screen.findByRole('dialog')
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('aria-label'))
  })

  it('forwards the ref to the panel and applies dataTestId.root', async () => {
    const ref = createRef<HTMLDivElement>()
    const Forwarded = () => {
      const anchorRef = useRef<HTMLButtonElement>(null)
      return (
        <>
          <button ref={anchorRef} type='button'>
            anchor
          </button>
          <Popover
            ref={ref}
            open
            anchorRef={anchorRef}
            onClose={() => undefined}
            aria-label='Forwarded'
            dataTestId={{ root: 'panel' }}
          >
            body
          </Popover>
        </>
      )
    }
    render(<Forwarded />)
    const dialog = await screen.findByRole('dialog')
    expect(ref.current).toBe(dialog)
    expect(screen.getByTestId('panel')).toBe(dialog)
  })

  it('accepts a px offset off the spacing scale', async () => {
    mockLayout(
      { left: 400, right: 500, top: 100, bottom: 140, width: 100, height: 40 },
      { width: 200, height: 100 },
    )
    render(<Single offset={10} />)
    expect((await screen.findByRole('dialog')).style.top).toBe('150px')
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

  it('keeps the dark theme scope on the portaled panel', () => {
    render(
      <DarkThemeProvider>
        <Single aria-label='Dark' />
      </DarkThemeProvider>,
    )
    expect(
      screen.getByRole('dialog', { name: 'Dark' }).closest('[data-lido-theme]'),
    ).toHaveAttribute('data-lido-theme', 'dark')
  })

  describe('exit animation', () => {
    const stubMotion = (transitionDuration = '0.1s') => {
      const real = window.getComputedStyle.bind(window)
      vi.spyOn(window, 'getComputedStyle').mockImplementation((el, pseudo) => {
        const style = real(el, pseudo)
        return new Proxy(style, {
          get: (target, prop) =>
            prop === 'transitionDuration'
              ? transitionDuration
              : Reflect.get(target, prop),
        })
      })
    }

    afterEach(() => vi.useRealTimers())

    it('stays mounted as closed, then unmounts after the transition', async () => {
      stubMotion()
      const { rerender } = render(<Single />)
      await screen.findByRole('dialog')
      vi.useFakeTimers()
      rerender(<Single open={false} />)
      const dialog = screen.getByRole('dialog', { hidden: true })
      expect(dialog).toHaveAttribute('data-state', 'closed')
      expect(dialog).toHaveAttribute('data-motion', 'exit')
      expect(dialog).toHaveAttribute('inert')
      act(() => {
        vi.advanceTimersByTime(200)
      })
      expect(screen.queryByRole('dialog', { hidden: true })).toBeNull()
    })

    it('keeps the panel open when reopened during the exit', async () => {
      stubMotion()
      vi.useFakeTimers()
      const { rerender } = render(<Single />)
      rerender(<Single open={false} />)
      rerender(<Single />)
      act(() => {
        vi.advanceTimersByTime(500)
      })
      expect(screen.getByRole('dialog')).toHaveAttribute('data-state', 'open')
    })

    it('keeps the same node on reopen during the exit', async () => {
      stubMotion()
      vi.useFakeTimers()
      const { rerender } = render(<Single />)
      const before = screen.getByRole('dialog')
      rerender(<Single open={false} />)
      rerender(<Single />)
      expect(screen.getByRole('dialog')).toBe(before)
    })

    it('unmounts at once when there is no motion', async () => {
      const { rerender } = render(<Single />)
      await screen.findByRole('dialog')
      rerender(<Single open={false} />)
      expect(screen.queryByRole('dialog', { hidden: true })).toBeNull()
    })

    it('moves focus to the anchor as soon as closing starts', async () => {
      stubMotion()
      render(<Demo />)
      const anchor = openPopover()
      const inside = await screen.findByText('inside')
      expect(inside).toHaveFocus()
      await userEvent.setup().keyboard('{Escape}')
      expect(screen.getByRole('dialog', { hidden: true })).toHaveAttribute(
        'data-state',
        'closed',
      )
      expect(anchor).toHaveFocus()
    })

    it('releases Escape to the parent while closing', async () => {
      stubMotion()
      const onClose = vi.fn()
      const { rerender } = render(<Single onClose={onClose} />)
      await screen.findByRole('dialog')
      rerender(<Single open={false} onClose={onClose} />)
      fireEvent.keyDown(document, { key: 'Escape' })
      expect(onClose).not.toHaveBeenCalled()
    })
  })

  describe('arrow', () => {
    const anchorRect = {
      left: 400,
      right: 500,
      top: 100,
      bottom: 140,
      width: 100,
      height: 40,
    }
    const beakX = (dialog: HTMLElement) =>
      dialog.style.getPropertyValue('--lido-app-ui-popover-beak-x')

    it('renders the beak only with arrow', async () => {
      const { unmount } = render(<Single />)
      const dialog = await screen.findByRole('dialog')
      expect(dialog.querySelector('[aria-hidden="true"]')).toBeNull()
      expect(beakX(dialog)).toBe('')
      unmount()
      render(<Single arrow />)
      const withArrow = await screen.findByRole('dialog')
      expect(withArrow.querySelector('span[aria-hidden="true"]')).not.toBeNull()
    })

    it('centers the beak on the anchor with align center', async () => {
      mockLayout(anchorRect, { width: 200, height: 100 })
      render(<Single arrow align='center' />)
      expect(beakX(await screen.findByRole('dialog'))).toBe('100px')
    })

    it('clamps the beak to 44px at the start edge', async () => {
      mockLayout(
        { left: 400, right: 410, top: 100, bottom: 140, width: 10, height: 40 },
        { width: 200, height: 100 },
      )
      render(<Single arrow align='start' />)
      expect(beakX(await screen.findByRole('dialog'))).toBe('44px')
    })

    it('clamps the beak to panelWidth - 44 at the end edge', async () => {
      mockLayout(
        { left: 400, right: 410, top: 100, bottom: 140, width: 10, height: 40 },
        { width: 200, height: 100 },
      )
      render(<Single arrow align='end' />)
      expect(beakX(await screen.findByRole('dialog'))).toBe('156px')
    })

    it('centers the beak on a panel narrower than 88px', async () => {
      mockLayout(anchorRect, { width: 60, height: 100 })
      render(<Single arrow align='start' />)
      expect(beakX(await screen.findByRole('dialog'))).toBe('30px')
    })

    describe('narrow anchor', () => {
      const narrow = {
        left: 400,
        right: 420,
        top: 100,
        bottom: 140,
        width: 20,
        height: 40,
      }
      const panel = { width: 200, height: 100 }

      it('moves the panel so the beak is 44px in (align start)', async () => {
        mockLayout(narrow, panel)
        render(<Single arrow align='start' />)
        const dialog = await screen.findByRole('dialog')
        expect(dialog.style.left).toBe('366px')
        expect(beakX(dialog)).toBe('44px')
      })

      it('mirrors for align end and keeps right', async () => {
        mockLayout(narrow, panel)
        render(<Single arrow align='end' />)
        const dialog = await screen.findByRole('dialog')
        // center 410: left = 410 - 200 + 44 = 254, right = 1000 - 254 - 200
        expect(dialog.style.right).toBe('546px')
        expect(dialog.style.left).toBe('')
        expect(beakX(dialog)).toBe('156px')
      })

      it('clamps to the viewport edge, then the beak clamps to 44px', async () => {
        mockLayout({ ...narrow, left: 10, right: 30 }, panel)
        render(<Single arrow align='start' />)
        const dialog = await screen.findByRole('dialog')
        expect(dialog.style.left).toBe('8px')
        expect(beakX(dialog)).toBe('44px')
      })
    })

    it('adds the 12px beak to the offset', async () => {
      mockLayout(anchorRect, { width: 200, height: 100 })
      render(<Single arrow offset={10} />)
      expect((await screen.findByRole('dialog')).style.top).toBe('162px')
    })

    it('counts the beak in the room when flipping', async () => {
      mockLayout(
        {
          left: 400,
          right: 500,
          top: 400,
          bottom: 440,
          width: 100,
          height: 40,
        },
        { width: 200, height: 380 },
        { width: 1000, height: 1000 },
      )
      render(<Single arrow placement='top' offset={8} />)
      expect((await screen.findByRole('dialog')).dataset.placement).toBe(
        'bottom',
      )
    })
  })

  it('uses aria-describedby instead of dialog wiring for role tooltip', async () => {
    render(<Single role='tooltip' aria-label={undefined} />)
    const anchor = screen.getByRole('button', { name: 'anchor' })
    const tooltip = await screen.findByRole('tooltip')
    expect(anchor).toHaveAttribute('aria-describedby', tooltip.id)
    expect(anchor).not.toHaveAttribute('aria-haspopup')
    expect(anchor).not.toHaveAttribute('aria-expanded')
    expect(anchor).not.toHaveAttribute('aria-controls')
  })

  it('merges the tooltip id into an existing aria-describedby and restores it', async () => {
    const Hinted = ({ open }: { open: boolean }) => {
      const ref = useRef<HTMLButtonElement>(null)
      return (
        <>
          <button ref={ref} type='button' aria-describedby='hint'>
            anchor
          </button>
          <Popover
            open={open}
            anchorRef={ref}
            onClose={() => undefined}
            role='tooltip'
          >
            tip
          </Popover>
        </>
      )
    }
    const { rerender } = render(<Hinted open />)
    const anchor = screen.getByRole('button', { name: 'anchor' })
    const tooltip = await screen.findByRole('tooltip')
    expect(anchor).toHaveAttribute('aria-describedby', `hint ${tooltip.id}`)
    rerender(<Hinted open={false} />)
    expect(anchor).toHaveAttribute('aria-describedby', 'hint')
  })

  it('is never modal for role tooltip', async () => {
    render(<Single role='tooltip' aria-label={undefined} />)
    const tooltip = await screen.findByRole('tooltip')
    expect(tooltip).not.toHaveAttribute('aria-modal')
    expect(tooltip.contains(document.activeElement)).toBe(false)
  })
})
