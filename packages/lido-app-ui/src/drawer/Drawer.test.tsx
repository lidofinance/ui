import { useState } from 'react'
import {
  afterAll,
  afterEach,
  beforeAll,
  describe,
  expect,
  it,
  vi,
} from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'

import { Modal } from '../modal'
import { Drawer } from './Drawer'

describe('Drawer', () => {
  it('renders nothing when closed', () => {
    render(
      <Drawer open={false} onClose={vi.fn()} title='Notifications'>
        Body
      </Drawer>,
    )
    expect(screen.queryByRole('dialog')).toBeNull()
  })

  it('is a labelled modal dialog', () => {
    render(
      <Drawer open onClose={vi.fn()} title='Notifications'>
        Body
      </Drawer>,
    )
    const dialog = screen.getByRole('dialog', { name: 'Notifications' })
    expect(dialog.getAttribute('aria-modal')).toBe('true')
  })

  it('applies side and width', () => {
    render(
      <Drawer open onClose={vi.fn()} side='left' width={320} data-testid='p'>
        Body
      </Drawer>,
    )
    const panel = screen.getByTestId('p')
    expect(panel.className).toContain('left')
    expect(panel.style.getPropertyValue('--local-width')).toBe('320px')
  })

  it('Escape closes only the top overlay when stacked with a Modal', () => {
    const onDrawer = vi.fn()
    const onModal = vi.fn()
    const Stack = () => {
      const [m] = useState(true)
      return (
        <>
          <Drawer open onClose={onDrawer}>
            Body
          </Drawer>
          <Modal withOverlay open={m} onClose={onModal} title='Confirm'>
            Sure?
          </Modal>
        </>
      )
    }
    render(<Stack />)
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(onModal).toHaveBeenCalledTimes(1)
    expect(onDrawer).not.toHaveBeenCalled()
  })

  it('forwards the ref to the panel', () => {
    const ref = { current: null as HTMLDivElement | null }
    render(
      <Drawer open onClose={vi.fn()} ref={ref}>
        Body
      </Drawer>,
    )
    expect(ref.current?.getAttribute('role')).toBe('dialog')
  })

  it('toggles data-scrolled with the body scroll position', () => {
    render(
      <Drawer open onClose={vi.fn()} title='N' dataTestId={{ body: 'b' }}>
        Body
      </Drawer>,
    )
    const dialog = screen.getByRole('dialog')
    const body = screen.getByTestId('b')
    expect(dialog.hasAttribute('data-scrolled')).toBe(false)
    body.scrollTop = 10
    fireEvent.scroll(body)
    expect(dialog.hasAttribute('data-scrolled')).toBe(true)
    body.scrollTop = 0
    fireEvent.scroll(body)
    expect(dialog.hasAttribute('data-scrolled')).toBe(false)
  })
})

describe('Drawer labels', () => {
  it('uses a custom close label and keeps Close by default', () => {
    const { rerender } = render(
      <Drawer open onClose={vi.fn()} title='N'>
        Body
      </Drawer>,
    )
    expect(screen.getByRole('button', { name: 'Close' })).toBeTruthy()
    rerender(
      <Drawer open onClose={vi.fn()} title='N' labels={{ close: 'Schließen' }}>
        Body
      </Drawer>,
    )
    expect(screen.getByRole('button', { name: 'Schließen' })).toBeTruthy()
  })
})

describe('Drawer swipe to close', () => {
  const OriginalPointerEvent = window.PointerEvent
  beforeAll(() => {
    // jsdom's PointerEvent drops clientY/button/pointerId
    class PointerEventPolyfill extends MouseEvent {
      pointerId: number
      constructor(type: string, init: PointerEventInit = {}) {
        super(type, init)
        this.pointerId = init.pointerId ?? 0
      }
    }
    window.PointerEvent = PointerEventPolyfill as unknown as typeof PointerEvent
  })
  afterAll(() => {
    window.PointerEvent = OriginalPointerEvent
  })

  const originalMatchMedia = window.matchMedia
  const mockMobile = (matches: boolean) => {
    window.matchMedia = vi.fn(() => ({
      matches,
    })) as unknown as typeof window.matchMedia
  }

  afterEach(() => {
    window.matchMedia = originalMatchMedia
    vi.restoreAllMocks()
  })

  const setup = (props: Partial<Parameters<typeof Drawer>[0]> = {}) => {
    const onClose = vi.fn()
    render(
      <Drawer open onClose={onClose} title='Menu' {...props}>
        Body
      </Drawer>,
    )
    const header = screen.getByText('Menu').parentElement as HTMLElement
    return { onClose, header, panel: screen.getByRole('dialog') }
  }

  const drag = (el: HTMLElement, to: number, durationMs = 400) => {
    const opts = { button: 0, pointerId: 1 }
    vi.spyOn(performance, 'now').mockReturnValue(0)
    fireEvent.pointerDown(el, { ...opts, clientY: 0 })
    vi.spyOn(performance, 'now').mockReturnValue(durationMs)
    fireEvent.pointerMove(el, { ...opts, clientY: to })
    return () => fireEvent.pointerUp(el, { ...opts, clientY: to })
  }

  it('closes with reason swipe after a long drag', () => {
    mockMobile(true)
    const { onClose, header, panel } = setup()
    const up = drag(header, 200)
    expect(panel.style.transform).toBe('translateY(200px)')
    up()
    expect(onClose).toHaveBeenCalledWith('swipe')
    expect(panel.style.transform).toBe('')
  })

  it('snaps back after a short slow drag', () => {
    mockMobile(true)
    const { onClose, header, panel } = setup()
    drag(header, 30)()
    expect(onClose).not.toHaveBeenCalled()
    expect(panel.style.transform).toBe('')
    expect(panel.style.transition).toBe('')
  })

  it('closes on a fast short flick', () => {
    mockMobile(true)
    const { onClose, header } = setup()
    drag(header, 30, 30)()
    expect(onClose).toHaveBeenCalledWith('swipe')
  })

  it('refuses when not dismissible and reports the attempt', () => {
    mockMobile(true)
    const onDismissAttempt = vi.fn()
    const { onClose, header } = setup({ dismissible: false, onDismissAttempt })
    drag(header, 200)()
    expect(onClose).not.toHaveBeenCalled()
    expect(onDismissAttempt).toHaveBeenCalledWith(
      expect.objectContaining({ reason: 'swipe' }),
    )
  })

  it('does nothing on desktop', () => {
    mockMobile(false)
    const { onClose, header, panel } = setup()
    drag(header, 200)()
    expect(panel.style.transform).toBe('')
    expect(onClose).not.toHaveBeenCalled()
  })

  it('does not start a drag from the close button', () => {
    mockMobile(true)
    const { onClose, panel } = setup()
    drag(screen.getByRole('button', { name: 'Close' }), 200)()
    expect(panel.style.transform).toBe('')
    expect(onClose).not.toHaveBeenCalledWith('swipe')
  })

  it('resets without closing on pointercancel', () => {
    mockMobile(true)
    const { onClose, header, panel } = setup()
    drag(header, 200)
    fireEvent.pointerCancel(header, { pointerId: 1 })
    expect(panel.style.transform).toBe('')
    expect(onClose).not.toHaveBeenCalled()
  })
})
