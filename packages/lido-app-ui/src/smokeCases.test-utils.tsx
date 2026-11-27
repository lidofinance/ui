import { Accordion } from './accordion'
import { Address } from './address'
import { AddressButton } from './address-button'
import { Badge } from './badge'
import { Banner } from './banner'
import { Breadcrumbs } from './breadcrumbs'
import { Button, LinkButton } from './button'
import { Card } from './card'
import { Checkbox } from './checkbox'
import { Copy } from './copy'
import { Counter } from './counter'
import { DataList, DataListRow } from './data-list'
import { Disclaimer } from './disclaimer'
import { Divider } from './divider'
import { ErrorPage } from './error-page'
import { Fab } from './fab'
import { Footer } from './footer'
import { Grid, GridItem } from './grid'
import { Header, HeaderNav } from './header'
import { Hex } from './hex'
import { Hidden } from './hidden'
import { CloseButton, IconButton } from './icon-button'
import { Identicon } from './identicon'
import { InfoTooltip } from './info-tooltip'
import { Field, FieldError } from './field'
import { Input } from './input'
import { LinkProvider, type LinkComponent } from './link-provider'
import { ActionList, ActionRow } from './action-list'
import { Logo } from './logo'
import { MessageBox } from './message-box'
import { Modal, ModalCard } from './modal'
import { NavLink } from './nav-link'
import { Notification } from './notification'
import { FormLayout, Layout, Main, PageContent } from './page-layout'
import { Pagination } from './pagination'
import { Popover } from './popover'
import { PositionCard, PositionCardStatus } from './position-card'
import { RadioButton } from './radio-button'
import { RichInput } from './rich-input'
import { SectionTitle } from './section-title'
import { SecurityNote } from './security-note'
import {
  Segment,
  SegmentCard,
  SegmentedControl,
  SegmentedControlCard,
} from './segmented-control'
import {
  Sidebar,
  SidebarGroup,
  SidebarInset,
  SidebarItem,
  SidebarLayout,
  SidebarToggle,
} from './sidebar'
import { Skeleton } from './skeleton'
import { Spinner } from './spinner'
import { SkipLink } from './skip-link'
import { Slider } from './slider'
import { SmallCard } from './small-card'
import { Stack } from './stack'
import { StatItem } from './stat-item'
import { Switch } from './switch'
import { Tab, Tabs } from './tabs'
import { Tag } from './tag'
import { TextLink } from './text-link'
import { ThemeSwitcher } from './theme-switcher'
import { TokenAmount } from './token-amount'
import { TokenChainSelector } from './token-chain-selector'
import { TokenSelector } from './token-selector'
import { Tooltip } from './tooltip'
import { TxStatus } from './tx-status'
import { CheckboxList, CheckboxRow } from './checkbox-row'
import { Disclosure } from './disclosure'
import { Drawer } from './drawer'
import { EmptyState } from './empty-state'
import { ProgressBar, ProgressBarLegendMark } from './progress-bar'
import { VisuallyHidden } from './visually-hidden'
import { Select, SelectItem } from './select'
import { Steps } from './steps'
import {
  RankCell,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from './table'
import { Textarea } from './textarea'
import { Toast, Toaster } from './toast'
import {
  Body,
  BodyLarge,
  Description,
  Caption,
  H1,
  H2,
  H3,
  Typography,
} from './typography'

const RouterLink: LinkComponent = ({ children, ...props }) => (
  <a {...props}>{children}</a>
)

// Mounts every exported component once. Catches the class of breakage a
// migration introduces — a missing module, a bad import path, a render-time
// crash — which type-checking alone does not.
export const smokeCases: Array<[string, () => JSX.Element]> = [
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
  [
    'AddressButton',
    () => (
      <AddressButton address='0x56f4a7c1d2e3b4a5968778695a4b3c2d1e0fc12e' />
    ),
  ],
  ['Badge', () => <Badge>Badge text</Badge>],
  ['Banner', () => <Banner title='Heads up' />],
  ['Button', () => <Button>Connect</Button>],
  ['Button with href', () => <Button href='/keys'>Keys</Button>],
  ['LinkButton', () => <LinkButton href='/keys'>Keys</LinkButton>],
  ['Card', () => <Card>Card</Card>],
  ['Checkbox', () => <Checkbox label='Accept' />],
  ['CloseButton', () => <CloseButton />],
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
  ['Fab', () => <Fab aria-label='Help' icon={<span aria-hidden>?</span>} />],
  [
    'Fab with href',
    () => (
      <Fab href='/faq' aria-label='Help' icon={<span aria-hidden>?</span>} />
    ),
  ],
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
    'IconButton with href',
    () => (
      <IconButton
        href='/notifications'
        aria-label='Notifications'
        icon={<span aria-hidden>x</span>}
      />
    ),
  ],
  [
    'Identicon',
    () => <Identicon address='0x1f9840a85d5af5bf1d1762f925bdaddc' />,
  ],
  ['InfoTooltip', () => <InfoTooltip content='Help' />],
  ['Input', () => <Input label='Amount' trailing={<Tag>Verified</Tag>} />],
  [
    'ActionList',
    () => (
      <ActionList overline='Roles'>
        <ActionRow end='0x81e5' href='/roles/manager'>
          Manager
        </ActionRow>
        <ActionRow end='Not set'>Claimer</ActionRow>
      </ActionList>
    ),
  ],
  [
    'LinkProvider',
    () => (
      <LinkProvider component={RouterLink}>
        <NavLink href='/a'>Link</NavLink>
      </LinkProvider>
    ),
  ],
  [
    'ActionRow',
    () => (
      <ul>
        <ActionRow end='0x81e5'>Manager</ActionRow>
      </ul>
    ),
  ],
  ['Logo', () => <Logo />],
  ['Main', () => <Main>Content</Main>],
  ['MessageBox', () => <MessageBox variant='warning'>Careful</MessageBox>],
  ['Modal', () => <Modal title='Supply'>body</Modal>],
  ['ModalCard', () => <ModalCard title='Supply'>body</ModalCard>],
  ['NavLink', () => <NavLink href='/a'>Link</NavLink>],
  ['Notification', () => <Notification title='Saved' />],
  [
    'Pagination',
    () => (
      <Pagination
        page={1}
        pageCount={10}
        pageSize={10}
        onPageChange={() => undefined}
      />
    ),
  ],
  [
    'Popover',
    () => (
      <Popover
        open
        aria-label='Panel'
        onClose={() => undefined}
        anchorRef={{
          current: typeof document === 'undefined' ? null : document.body,
        }}
      >
        Content
      </Popover>
    ),
  ],
  [
    'PositionCard',
    () => (
      <PositionCard
        label='Staked position'
        value='1 ETH'
        aside='2.3% APR'
        onClick={() => {}}
        footer={
          <PositionCardStatus action='Claim' onClick={() => {}}>
            1 ETH withdrawal ready.
          </PositionCardStatus>
        }
      />
    ),
  ],
  [
    'PositionCardStatus',
    () => (
      <PositionCardStatus action='Claim' href='/claim'>
        1 ETH withdrawal ready.
      </PositionCardStatus>
    ),
  ],
  ['RadioButton', () => <RadioButton label='Option' />],
  ['RichInput', () => <RichInput label='Amount' error='Too much' />],
  ['SectionTitle', () => <SectionTitle title='Choose a token' />],
  ['SecurityNote', () => <SecurityNote />],
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
  [
    'Sidebar',
    () => (
      <Sidebar>
        <SidebarGroup label='Group'>
          <SidebarItem href='/a'>A</SidebarItem>
        </SidebarGroup>
      </Sidebar>
    ),
  ],
  [
    'SidebarLayout',
    () => (
      <SidebarLayout>
        <Sidebar />
        <SidebarInset>Content</SidebarInset>
      </SidebarLayout>
    ),
  ],
  ['SidebarToggle', () => <SidebarToggle />],
  ['Skeleton', () => <Skeleton />],
  ['Spinner', () => <Spinner />],
  ['SkipLink', () => <SkipLink />],
  ['Slider', () => <Slider defaultValue={40} />],
  [
    'SmallCard as button',
    () => <SmallCard title='CSM Sentinel' onClick={() => {}} />,
  ],
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
  [
    'TextLink as button',
    () => <TextLink onClick={() => {}}>Show more</TextLink>,
  ],
  ['TextLink', () => <TextLink href='https://lido.fi'>Link</TextLink>],
  ['ThemeSwitcher', () => <ThemeSwitcher />],
  ['TokenAmount', () => <TokenAmount symbol='stETH' amount='1.0' />],
  [
    'TokenChainSelector',
    () => (
      <TokenChainSelector
        tokens={[
          {
            value: 'ETH:ethereum',
            label: 'ETH',
            icon: null,
            chain: 'ethereum',
          },
        ]}
        chains={[{ value: 'ethereum', label: 'Ethereum', icon: null }]}
      />
    ),
  ],
  [
    'TokenSelector',
    () => (
      <TokenSelector options={[{ value: 'ETH', label: 'ETH' }]} value='ETH' />
    ),
  ],
  ['Tooltip', () => <Tooltip content='Hint'>trigger</Tooltip>],
  ['TxStatus', () => <TxStatus status='loading' title='Pending' />],
  ['Typography', () => <Typography variant='h1'>Heading</Typography>],
  ['H1', () => <H1>Heading</H1>],
  ['H2', () => <H2>Heading</H2>],
  ['H3', () => <H3>Heading</H3>],
  ['BodyLarge', () => <BodyLarge>Text</BodyLarge>],
  ['Body', () => <Body>Text</Body>],
  ['Description', () => <Description>Text</Description>],
  ['Caption', () => <Caption>Group</Caption>],
  ['Tab', () => <Tab>Tab</Tab>],
  [
    'Breadcrumbs',
    () => <Breadcrumbs items={[{ label: 'A', href: '/a' }, { label: 'B' }]} />,
  ],
  ['CheckboxRow', () => <CheckboxRow label='Key' />],
  [
    'CheckboxList',
    () => (
      <CheckboxList>
        <CheckboxRow label='Key' />
      </CheckboxList>
    ),
  ],
  ['Disclosure', () => <Disclosure label='More'>Content</Disclosure>],
  [
    'Drawer',
    () => (
      <Drawer open onClose={() => undefined} title='Details'>
        body
      </Drawer>
    ),
  ],
  ['EmptyState', () => <EmptyState title='Nothing here' />],
  [
    'FormLayout',
    () => <FormLayout aside={<span>Aside</span>}>Form</FormLayout>,
  ],
  ['ProgressBar', () => <ProgressBar value={40} aria-label='Progress' />],
  ['ProgressBarLegendMark', () => <ProgressBarLegendMark />],
  ['VisuallyHidden', () => <VisuallyHidden>Hidden</VisuallyHidden>],
  [
    'Select',
    () => <Select label='Network' options={[{ value: 'a', label: 'A' }]} />,
  ],
  ['SelectItem', () => <SelectItem label='Option' />],
  [
    'Steps',
    () => <Steps steps={[{ label: 'One' }, { label: 'Two' }]} current={0} />,
  ],
  [
    'Table',
    () => (
      <Table
        columns={[
          { key: 'a', header: 'A', render: (r: { id: string }) => r.id },
        ]}
        rows={[{ id: '1' }]}
        rowKey={(r) => r.id}
      />
    ),
  ],
  [
    'TableRoot',
    () => (
      <TableRoot>
        <TableHead>
          <TableRow>
            <TableHeaderCell>A</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <RankCell rank={1} change='up' />
            </TableCell>
          </TableRow>
        </TableBody>
      </TableRoot>
    ),
  ],
  [
    'Field',
    () => (
      <Field id='f' label='Label'>
        <input id='f' />
      </Field>
    ),
  ],
  ['FieldError', () => <FieldError id='f'>Required</FieldError>],
  ['Textarea', () => <Textarea label='Notes' />],
  ['Toast', () => <Toast title='Saved' status='success' duration={5000} />],
  ['Toaster', () => <Toaster />],
  ['Layout', () => <Layout>Content</Layout>],
  ['PageContent', () => <PageContent>Content</PageContent>],
]

export const portaled = new Set(['Popover', 'Drawer'])

// Portals after mount and renders nothing into the container.
export const renderless = new Set(['Toaster'])
