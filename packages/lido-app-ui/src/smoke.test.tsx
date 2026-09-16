import { useState } from 'react'
import { describe, expect, it } from 'vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'

import { Accordion } from './accordion'
import { Badge } from './badge'
import { Banner } from './banner'
import { Button } from './button'
import { Card } from './card'
import { Checkbox } from './checkbox'
import { Counter } from './counter'
import { DataList, DataListRow } from './data-list'
import { IconButton } from './icon-button'
import { Identicon } from './identicon'
import { Input } from './input'
import { MessageBox } from './message-box'
import { Modal } from './modal'
import { Notification } from './notification'
import { RadioButton } from './radio-button'
import { RichInput } from './rich-input'
import { SectionTitle } from './section-title'
import {
  Segment,
  SegmentCard,
  SegmentedControl,
  SegmentedControlCard,
} from './segmented-control'
import { Slider } from './slider'
import { SmallCard } from './small-card'
import { StatItem } from './stat-item'
import { Switch } from './switch'
import { Tabs } from './tabs'
import { Tag } from './tag'
import { TextLink } from './text-link'
import { TokenAmount } from './token-amount'
import { TokenSelector } from './token-selector'
import { Tooltip } from './tooltip'
import { TxStatus } from './tx-status'
import { Typography } from './typography'

// Mounts every exported component once. Catches the class of breakage a
// migration introduces — a missing module, a bad import path, a render-time
// crash — which type-checking alone does not.
const cases: Array<[string, () => JSX.Element]> = [
  ['Accordion', () => <Accordion title='Section'>Content</Accordion>],
  ['Badge', () => <Badge>Badge text</Badge>],
  ['Banner', () => <Banner title='Heads up' />],
  ['Button', () => <Button>Connect</Button>],
  ['Card', () => <Card>Card</Card>],
  ['Checkbox', () => <Checkbox label='Accept' />],
  ['Counter', () => <Counter>1</Counter>],
  [
    'DataList',
    () => (
      <DataList>
        <DataListRow label='Rate' value='1:1' info='tooltip' />
        <DataListRow label='Change' value={{ from: '1%', to: '2%' }} />
      </DataList>
    ),
  ],
  [
    'IconButton',
    () => <IconButton aria-label='Close' icon={<span aria-hidden>x</span>} />,
  ],
  [
    'Identicon',
    () => <Identicon address='0x1f9840a85d5af5bf1d1762f925bdaddc' />,
  ],
  ['Input', () => <Input label='Amount' />],
  ['MessageBox', () => <MessageBox variant='warning'>Careful</MessageBox>],
  ['Modal', () => <Modal title='Supply'>body</Modal>],
  ['Notification', () => <Notification title='Saved' />],
  ['RadioButton', () => <RadioButton label='Option' />],
  ['RichInput', () => <RichInput label='Amount' error='Too much' />],
  ['SectionTitle', () => <SectionTitle title='Choose a token' />],
  ['Segment', () => <Segment active>Tab</Segment>],
  [
    'SegmentedControl',
    () => (
      <SegmentedControl
        items={[{ value: 'a', label: 'A' }]}
        value='a'
        onChange={() => undefined}
      />
    ),
  ],
  ['SegmentCard', () => <SegmentCard title='Eject' active />],
  [
    'SegmentedControlCard',
    () => (
      <SegmentedControlCard
        items={[{ value: 'a', title: 'A' }]}
        value='a'
        onChange={() => undefined}
      />
    ),
  ],
  ['Slider', () => <Slider defaultValue={40} />],
  [
    'SmallCard',
    () => <SmallCard title='CSM Sentinel' href='https://lido.fi' />,
  ],
  ['StatItem', () => <StatItem label='TVL' value='1M' />],
  ['Switch', () => <Switch label='Enable' />],
  [
    'Tabs',
    () => (
      <Tabs
        items={[{ value: 'a', label: 'A' }]}
        value='a'
        onChange={() => undefined}
      />
    ),
  ],
  ['Tag', () => <Tag variant='success'>Active</Tag>],
  ['TextLink', () => <TextLink href='https://lido.fi'>Link</TextLink>],
  ['TokenAmount', () => <TokenAmount symbol='stETH' amount='1.0' />],
  [
    'TokenSelector',
    () => (
      <TokenSelector options={[{ value: 'ETH', label: 'ETH' }]} value='ETH' />
    ),
  ],
  ['Tooltip', () => <Tooltip content='Hint'>trigger</Tooltip>],
  ['TxStatus', () => <TxStatus status='loading' title='Pending' />],
  ['Typography', () => <Typography variant='h1'>Heading</Typography>],
]

describe('component smoke render', () => {
  it.each(cases)('%s mounts', (_name, renderCase) => {
    const { container } = render(renderCase())
    expect(container.firstChild).not.toBeNull()
    cleanup()
  })
})

describe('behaviour that survived the migration', () => {
  it('RichInput strips non-decimal characters', () => {
    render(<RichInput label='Amount' />)
    const input = screen.getByLabelText('Amount') as HTMLInputElement

    fireEvent.change(input, { target: { value: '1a.2.3' } })

    expect(input.value).toBe('1.23')
  })

  it('SegmentedControl still switches between enabled items when one item is disabled', () => {
    const items = [
      { value: 'a', label: 'A' },
      { value: 'b', label: 'B' },
      { value: 'c', label: 'C', disabled: true },
    ]
    const Controlled = () => {
      const [value, setValue] = useState('a')
      return (
        <SegmentedControl items={items} value={value} onChange={setValue} />
      )
    }
    render(<Controlled />)

    fireEvent.click(screen.getByText('B'))

    expect(
      screen.getByText('B').closest('button')?.getAttribute('aria-selected'),
    ).toBe('true')
  })

  it('TokenSelector renders the selected option in single mode', () => {
    render(
      <TokenSelector
        single
        value='stETH'
        options={[
          { value: 'ETH', label: 'ETH' },
          { value: 'stETH', label: 'stETH' },
        ]}
      />,
    )

    expect(screen.getByText('stETH')).toBeDefined()
    expect(screen.queryByText('ETH')).toBeNull()
  })
})
