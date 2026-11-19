import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { axeViolations, renderInDir } from './render.test-utils'

describe('renderInDir', () => {
  it("renderInDir('rtl') makes descendants resolve direction rtl", () => {
    renderInDir(<span data-testid='x' />, 'rtl')
    expect(getComputedStyle(screen.getByTestId('x')).direction).toBe('rtl')
  })

  it("renderInDir('ltr') leaves direction ltr", () => {
    renderInDir(<span data-testid='x' />, 'ltr')
    expect(getComputedStyle(screen.getByTestId('x')).direction).not.toBe('rtl')
  })
})

describe('axeViolations', () => {
  it('reports an unlabeled input', async () => {
    render(<input />)
    expect(await axeViolations()).toContainEqual(
      expect.stringContaining('label'),
    )
  })

  it('is empty for a labeled input', async () => {
    render(
      <label>
        Name
        <input />
      </label>,
    )
    expect(await axeViolations()).toEqual([])
  })
})
