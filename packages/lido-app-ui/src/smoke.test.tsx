import { useState } from 'react'
import { describe, expect, it } from 'vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'

import { Accordion } from './accordion'
import { Address } from './address'
import { Badge } from './badge'
import { Banner } from './banner'
import { Breadcrumbs } from './breadcrumbs'
import { Button } from './button'
import { Card } from './card'
import { Checkbox } from './checkbox'
import { Copy } from './copy'
import { Counter } from './counter'
import { DataList, DataListRow } from './data-list'
import { Disclaimer } from './disclaimer'
import { Divider } from './divider'
import { ErrorPage } from './error-page'
import { Footer } from './footer'
import { Grid, GridItem } from './grid'
import { Header, HeaderNav } from './header'
import { Hex } from './hex'
import { Hidden } from './hidden'
import { IconButton } from './icon-button'
import { Identicon } from './identicon'
import { Input } from './input'
import { LinkProvider, type LinkComponent } from './link-provider'
import { Logo } from './logo'
import { MessageBox } from './message-box'
import { Modal } from './modal'
import { NavLink } from './nav-link'
import { Notification } from './notification'
import { Popover } from './popover'
import { RadioButton } from './radio-button'
import { RichInput } from './rich-input'
import { SectionTitle } from './section-title'
import {
  Segment,
  SegmentCard,
  SegmentedControl,
  SegmentedControlCard,
} from './segmented-control'
import { Skeleton } from './skeleton'
import { Slider } from './slider'
import { SmallCard } from './small-card'
import { Stack } from './stack'
import { StatItem } from './stat-item'
import { Switch } from './switch'
import { Tabs } from './tabs'
import { Tag } from './tag'
import { TextLink } from './text-link'
import { ThemeSwitcher } from './theme-switcher'
import { TokenAmount } from './token-amount'
import { TokenSelector } from './token-selector'
import { Tooltip } from './tooltip'
import { TxStatus } from './tx-status'
import { Typography } from './typography'

const RouterLink: LinkComponent = ({ children, ...props }) => (
  <a {...props}>{children}</a>
)

// Mounts every exported component once. Catches the class of breakage a
// migration introduces — a missing module, a bad import path, a render-time
// crash — which type-checking alone does not.
const cases: Array<[string, () => JSX.Element]> = [
  ['Accordion', () => <Accordion title='Section'>Content</Accordion>],
  [
    'Address',
    () => (
      <Address
        address='0x56f4a7b2c9d1e8f3a6b5c4d3e2f1a0b9c8d7c12e'
        identicon={16}
        tooltip
        copy
      />
    ),
  ],
  ['Badge', () => <Badge>Badge text</Badge>],
  ['Banner', () => <Banner title='Heads up' />],
  ['Button', () => <Button>Connect</Button>],
  ['Card', () => <Card>Card</Card>],
  ['Checkbox', () => <Checkbox label='Accept' />],
  ['Copy', () => <Copy text='0x56f4a7b2c9d1e8f3a6b5c4d3e2f1a0b9c8d7c12e' />],
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
  ['Disclaimer', () => <Disclaimer>Text</Disclaimer>],
  ['Divider', () => <Divider />],
  ['ErrorPage', () => <ErrorPage code='404' action={<span>A</span>} />],
  ['Footer', () => <Footer aside={<span>A</span>}>Left</Footer>],
  [
    'Grid',
    () => (
      <Grid columns={2}>
        <GridItem span='full'>A</GridItem>
      </Grid>
    ),
  ],
  ['Header', () => <Header actions={<span>A</span>}>Left</Header>],
  [
    'HeaderNav',
    () => (
      <HeaderNav>
        <a href='/a'>A</a>
      </HeaderNav>
    ),
  ],
  ['Hex', () => <Hex value='0x56f4a7b2c9d1e8f3a6b5c4d3e2f1a0b9c8d7c12e' />],
  ['Hidden', () => <Hidden below='sm'>Content</Hidden>],
  [
    'IconButton',
    () => <IconButton aria-label='Close' icon={<span aria-hidden>x</span>} />,
  ],
  [
    'Identicon',
    () => <Identicon address='0x1f9840a85d5af5bf1d1762f925bdaddc' />,
  ],
  ['Input', () => <Input label='Amount' />],
  [
    'LinkProvider',
    () => (
      <LinkProvider component={RouterLink}>
        <NavLink href='/a'>Link</NavLink>
      </LinkProvider>
    ),
  ],
  ['Logo', () => <Logo />],
  ['MessageBox', () => <MessageBox variant='warning'>Careful</MessageBox>],
  ['Modal', () => <Modal title='Supply'>body</Modal>],
  ['NavLink', () => <NavLink href='/a'>Link</NavLink>],
  ['Notification', () => <Notification title='Saved' />],
  [
    'Popover',
    () => (
      <Popover
        open
        onClose={() => undefined}
        anchorRef={{ current: document.body }}
      >
        Content
      </Popover>
    ),
  ],
  ['RadioButton', () => <RadioButton label='Option' />],
  ['RichInput', () => <RichInput label='Amount' error errorText='Too much' />],
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
  ['Skeleton', () => <Skeleton />],
  ['Slider', () => <Slider defaultValue={40} />],
  [
    'SmallCard',
    () => <SmallCard title='CSM Sentinel' href='https://lido.fi' />,
  ],
  ['Stack', () => <Stack>Content</Stack>],
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
  ['ThemeSwitcher', () => <ThemeSwitcher />],
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
  [
    'Breadcrumbs',
    () => <Breadcrumbs items={[{ label: 'A', href: '/a' }, { label: 'B' }]} />,
  ],
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
