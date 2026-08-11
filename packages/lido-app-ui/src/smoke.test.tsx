import { describe, expect, it } from 'vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'

import { Badge } from './badge'
import { Button } from './button'
import { Checkbox } from './checkbox'
import { DataList, DetailRow } from './data-list'
import { Identicon } from './identicon'
import { MessageBox } from './message-box'
import { MiniButton } from './mini-button'
import { Modal } from './modal'
import { RichInput } from './rich-input'
import { SmallButton } from './small-button'
import { StatItem } from './stat-item'
import { StatsRow } from './stats-row'
import { Stepper } from './stepper'
import { TabBar, TabButton } from './tabs'
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
  ['Badge', () => <Badge variant='success'>Active</Badge>],
  ['Button', () => <Button variant='black'>Connect</Button>],
  ['Checkbox', () => <Checkbox label='Accept' />],
  [
    'DataList',
    () => (
      <DataList>
        <DetailRow label='Rate' value='1:1' info='tooltip' />
        <DetailRow label='Change' value={{ from: '1%', to: '2%' }} />
      </DataList>
    ),
  ],
  [
    'Identicon',
    () => <Identicon address='0x1f9840a85d5af5bf1d1762f925bdaddc' />,
  ],
  ['MessageBox', () => <MessageBox variant='warning'>Careful</MessageBox>],
  ['MiniButton', () => <MiniButton>Max</MiniButton>],
  ['Modal', () => <Modal title='Supply'>body</Modal>],
  ['RichInput', () => <RichInput label='Amount' error='Too much' />],
  ['SmallButton', () => <SmallButton variant='back'>Back</SmallButton>],
  ['StatItem', () => <StatItem label='TVL' value='1M' />],
  ['StatsRow', () => <StatsRow items={[{ label: 'TVL', value: '1M' }]} />],
  ['Stepper', () => <Stepper steps={[{ title: 'One' }, { title: 'Two' }]} />],
  [
    'TabBar',
    () => (
      <TabBar
        items={[{ value: 'a', label: 'A' }]}
        value='a'
        onChange={() => undefined}
      />
    ),
  ],
  ['TabButton', () => <TabButton active>Tab</TabButton>],
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
