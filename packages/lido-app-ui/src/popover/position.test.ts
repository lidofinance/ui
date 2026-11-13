import { describe, expect, it } from 'vitest'

import { BEAK_INSET, BEAK_SIZE, computePosition } from './position'

const rect = (left: number, width: number, top = 100, height = 40) => ({
  left,
  right: left + width,
  top,
  bottom: top + height,
  width,
})

const base = {
  anchorRect: rect(400, 100),
  alignRect: rect(400, 100),
  viewport: { width: 1000, height: 800 },
  panelSize: { width: 200, height: 100 },
  placement: 'bottom' as const,
  align: 'start' as const,
  offset: 8,
  width: undefined,
  arrow: false,
}

describe('computePosition', () => {
  it('places below the anchor with the offset', () => {
    const { placement, coordinates } = computePosition(base)
    expect(placement).toBe('bottom')
    expect(coordinates.top).toBe(148)
    expect(coordinates.left).toBe(400)
  })

  it('flips when there is no room and the other side is bigger', () => {
    const anchor = rect(400, 100, 400, 40)
    const { placement } = computePosition({
      ...base,
      anchorRect: anchor,
      alignRect: anchor,
      viewport: { width: 1000, height: 1000 },
      panelSize: { width: 200, height: 380 },
      placement: 'top',
      arrow: true,
    })
    expect(placement).toBe('bottom')
  })

  it('adds the beak size to the gap', () => {
    const { coordinates } = computePosition({ ...base, arrow: true })
    expect(coordinates.top).toBe(148 + BEAK_SIZE)
  })

  it('centers the beak on the anchor', () => {
    const { beakX } = computePosition({ ...base, align: 'center', arrow: true })
    expect(beakX).toBe(100)
  })

  it('clamps the beak to the inset from either side', () => {
    const anchor = rect(400, 10)
    const opts = { ...base, anchorRect: anchor, alignRect: anchor, arrow: true }
    expect(computePosition(opts).beakX).toBe(BEAK_INSET)
    expect(computePosition({ ...opts, align: 'end' }).beakX).toBe(
      200 - BEAK_INSET,
    )
  })

  it('centers the beak on a panel narrower than 88px', () => {
    const { beakX } = computePosition({
      ...base,
      panelSize: { width: 60, height: 100 },
      arrow: true,
    })
    expect(beakX).toBe(30)
  })

  it('shifts the panel so a narrow anchor stays under the beak', () => {
    const anchor = rect(400, 20)
    const { coordinates, beakX } = computePosition({
      ...base,
      anchorRect: anchor,
      alignRect: anchor,
      arrow: true,
    })
    expect(coordinates.left).toBe(410 - BEAK_INSET)
    expect(beakX).toBe(BEAK_INSET)
  })
})
