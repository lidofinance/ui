import { StrictMode } from 'react'
import { act, fireEvent, render } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import {
  back,
  FakeWatcher,
  flushMicrotasks,
  installCloseWatcher,
  liveWatchers as live,
  uninstallCloseWatcher,
} from './closeWatcher.test-utils'
import { useCloseWatcher } from './useCloseWatcher'
import { useEscape } from './useEscape'

const Probe = ({
  onClose,
  enabled = true,
}: {
  onClose: (event: Event) => void
  enabled?: boolean
}) => {
  useCloseWatcher(onClose, { enabled })
  return null
}

const WithEscape = ({ onClose }: { onClose: (event: Event) => void }) => {
  useEscape(() => undefined)
  useCloseWatcher(onClose)
  return null
}

describe('useCloseWatcher', () => {
  beforeEach(() => installCloseWatcher())
  afterEach(uninstallCloseWatcher)

  it('creates no watcher off Android', () => {
    installCloseWatcher('Mozilla/5.0 (Macintosh)')
    render(<Probe onClose={vi.fn()} />)
    expect(FakeWatcher.all).toHaveLength(0)
  })

  it('creates no watcher without CloseWatcher support', () => {
    vi.unstubAllGlobals()
    expect(() => render(<Probe onClose={vi.fn()} />)).not.toThrow()
    expect(FakeWatcher.all).toHaveLength(0)
  })

  it('calls the handler on close and destroys the watcher on disable/unmount', () => {
    const onClose = vi.fn()
    const { rerender, unmount } = render(<Probe onClose={onClose} />)
    back()
    expect(onClose).toHaveBeenCalledTimes(1)
    rerender(<Probe onClose={onClose} enabled={false} />)
    expect(live()).toHaveLength(0)
    rerender(<Probe onClose={onClose} />)
    expect(live()).toHaveLength(1)
    unmount()
    expect(live()).toHaveLength(0)
  })

  it('re-arms a fresh watcher when still enabled after close', () => {
    render(<Probe onClose={vi.fn()} />)
    const [armed] = live()
    const created = FakeWatcher.all.length
    back()
    expect(FakeWatcher.all).toHaveLength(created + 1)
    expect(armed.destroyed).toBe(true)
    expect(live()).toHaveLength(1)
  })

  it('handles only the newest layer when one back request fires every live watcher', () => {
    const lower = vi.fn()
    const upper = vi.fn()
    render(
      <>
        <Probe onClose={lower} />
        <Probe onClose={upper} />
      </>,
    )
    ;[...live()].reverse().forEach((watcher) => {
      act(() => {
        watcher.dispatchEvent(new Event('close'))
      })
      flushMicrotasks()
    })
    expect(upper).toHaveBeenCalledTimes(1)
    expect(lower).not.toHaveBeenCalled()
  })

  it('hands back to the lower layer once the upper one is gone', () => {
    const lower = vi.fn()
    const upper = vi.fn()
    const { rerender } = render(
      <>
        <Probe onClose={lower} />
        <Probe onClose={upper} />
      </>,
    )
    rerender(
      <>
        <Probe onClose={lower} />
        <Probe onClose={upper} enabled={false} />
      </>,
    )
    back()
    expect(lower).toHaveBeenCalledTimes(1)
    expect(upper).not.toHaveBeenCalled()
  })

  it('ignores a close right after a handled Escape', () => {
    const onClose = vi.fn()
    render(<WithEscape onClose={onClose} />)
    fireEvent.keyDown(document, { key: 'Escape' })
    back()
    expect(onClose).not.toHaveBeenCalled()
  })

  it('does not re-create the watcher when the handler identity changes', () => {
    const { rerender } = render(<Probe onClose={() => undefined} />)
    const created = FakeWatcher.all.length
    rerender(<Probe onClose={() => undefined} />)
    expect(FakeWatcher.all).toHaveLength(created)
  })

  it('survives a throwing constructor', () => {
    vi.stubGlobal(
      'CloseWatcher',
      class {
        constructor() {
          throw new Error('not allowed')
        }
      },
    )
    expect(() => render(<Probe onClose={vi.fn()} />)).not.toThrow()
  })

  it('keeps exactly one live watcher under StrictMode', () => {
    render(
      <StrictMode>
        <Probe onClose={vi.fn()} />
      </StrictMode>,
    )
    expect(live()).toHaveLength(1)
  })
})
