import { act, cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import type { ReactElement } from 'react'

import { Accordion } from './accordion'
import { Button } from './button'
import { Checkbox } from './checkbox'
import { Input } from './input'
import { Modal } from './modal'
import { RichInput } from './rich-input'
import { SegmentedControl, SegmentedControlCard } from './segmented-control'
import { Select } from './select'
import { Slider } from './slider'
import { Switch } from './switch'
import { Tabs } from './tabs'
import { Toaster, toast } from './toast'
import { axeViolations } from './utils/render.test-utils'

const noop = () => undefined
const four = [
  { value: 'a', label: 'A' },
  { value: 'b', label: 'B', disabled: true },
  { value: 'c', label: 'C' },
  { value: 'd', label: 'D' },
]

type Case = {
  ui: () => ReactElement
  // Portaled components live outside the render container.
  target?: () => Element
  disabledRules?: string[]
  prepare?: () => void
}

const cases: Array<[string, Case]> = [
  ['Tabs', { ui: () => <Tabs items={four} value='a' onChange={noop} /> }],
  [
    'SegmentedControl',
    { ui: () => <SegmentedControl items={four} value='a' onChange={noop} /> },
  ],
  [
    'SegmentedControlCard',
    {
      ui: () => (
        <SegmentedControlCard
          items={four.map(({ label, ...item }) => ({ ...item, title: label }))}
          value='a'
          onChange={noop}
        />
      ),
    },
  ],
  ['Input', { ui: () => <Input label='Name' /> }],
  ['Checkbox', { ui: () => <Checkbox label='Accept' /> }],
  ['Switch', { ui: () => <Switch label='On' /> }],
  ['Slider', { ui: () => <Slider label='Amount' defaultValue={40} /> }],
  ['RichInput', { ui: () => <RichInput label='Amount' /> }],
  [
    'Select',
    {
      ui: () => (
        <Select
          label='Network'
          options={[
            { value: 'a', label: 'A' },
            { value: 'b', label: 'B' },
          ]}
        />
      ),
    },
  ],
  ['Accordion', { ui: () => <Accordion title='Section'>Content</Accordion> }],
  [
    'Modal',
    {
      ui: () => (
        <Modal open title='Supply' onClose={noop}>
          Body
        </Modal>
      ),
      target: () => document.body,
    },
  ],
  [
    'Toaster',
    {
      ui: () => <Toaster />,
      target: () => document.body,
      prepare: () => {
        act(() => void toast('Saved'))
        expect(screen.getByText('Saved')).toBeInTheDocument()
      },
    },
  ],
  [
    'Toaster with actions',
    {
      ui: () => <Toaster />,
      target: () => document.body,
      prepare: () => {
        act(
          () =>
            void toast({
              title: 'Failed',
              children: 'Something went wrong.',
              status: 'error',
              actions: <Button size='small'>Retry</Button>,
            }),
        )
        expect(screen.getByText('Failed')).toBeInTheDocument()
      },
    },
  ],
]

describe('accessibility', () => {
  afterEach(() => {
    act(() => toast.dismiss())
    cleanup()
  })

  it.each(cases)('%s has no axe violations', async (_name, c) => {
    const { container } = render(c.ui())
    c.prepare?.()
    const target = c.target ? c.target() : container
    expect(await axeViolations(target, c.disabledRules)).toEqual([])
  })
})
