import type { Meta, StoryObj } from '@storybook/react'
import { useRef, useState } from 'react'
import { TokenChainSelector } from '.'

import { Button } from '../button'
import { IconChevronDown, TokenEth } from '../icons'
import { Popover } from '../popover'
import styles from './stories.module.css'
import { demoChains, demoManyChains, demoTokens } from './storyFixtures'

const meta: Meta<typeof TokenChainSelector> = {
  title: 'Inputs & Controls/TokenChainSelector',
  component: TokenChainSelector,
  args: {
    tokens: demoTokens.map((token, index) =>
      index === 1 ? { ...token, disabled: true } : token,
    ),
    chains: demoManyChains,
    defaultValue: 'ETH:ethereum',
  },
  decorators: [
    (Story) => (
      <div style={{ width: 365, height: 480, display: 'flex' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    controls: { disable: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/1SFw8VIyvedXmg9s4vCinh/Interface-Design-System?node-id=6234-18469',
    },
    docs: {
      description: {
        component:
          'Token picker panel: a row of chain filters ("All" first), a caption and a listbox of tokens with a chain badge and balance. Badges and chain captions come from `chains` by each token\'s `chain`. The panel has its own surface, so put it in a bare `Popover` or a `Modal`; give it a height and the list scrolls. Token `value`s must be unique across chains (`ETH:arbitrum`).',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const NoChains: Story = {
  args: { chains: undefined },
  parameters: {
    docs: {
      description: {
        story:
          'Without `chains` the filter row is hidden; pass `chainLabel` and `chainIcon` per token to keep the captions and badges.',
      },
    },
  },
  render: (args) => (
    <TokenChainSelector
      {...args}
      tokens={demoTokens.map((token) => ({
        ...token,
        chainLabel: demoChains.find((c) => c.value === token.chain)?.label,
        chainIcon: demoChains.find((c) => c.value === token.chain)?.icon,
      }))}
    />
  ),
}

export const PrefilteredByChain: Story = {
  args: { defaultChain: 'arbitrum', defaultValue: 'ETH:arbitrum' },
}

const PopoverDemo = () => {
  const anchorRef = useRef<HTMLButtonElement>(null)
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('ETH:ethereum')
  const selected = demoTokens.find((token) => token.value === value)
  const selectedChain = demoChains.find(
    (chain) => chain.value === selected?.chain,
  )
  return (
    <>
      <Button
        ref={anchorRef}
        variant='outline'
        iconLeft={<TokenEth />}
        iconRight={<IconChevronDown />}
        onClick={() => setOpen((v) => !v)}
      >
        {selected?.label} on {selectedChain?.label}
      </Button>
      <Popover
        aria-label='Select token'
        open={open}
        onClose={() => setOpen(false)}
        anchorRef={anchorRef}
        width={365}
        className={styles.bare}
      >
        <TokenChainSelector
          tokens={demoTokens}
          chains={demoChains}
          value={value}
          onChange={(next) => {
            setValue(next)
            setOpen(false)
          }}
          style={{ height: 480 }}
        />
      </Popover>
    </>
  )
}

const inPopoverSource = `

// Chain filters; "All" is added in front automatically.
const chains: TokenChainSelectorChain[] = [
  { value: 'ethereum', label: 'Ethereum', icon: <Ethereum /> },
  { value: 'arbitrum', label: 'Arbitrum', icon: <Arbitrum /> },
]

// \`value\` must be unique across chains; \`chain\` points at a chain \`value\`.
const tokens: TokenChainSelectorToken[] = [
  {
    value: 'ETH:ethereum',
    label: 'ETH',
    icon: <TokenEth />,
    chain: 'ethereum',
    amount: '2.4288',
    secondaryAmount: '$6,035.52',
  },
  {
    value: 'ETH:arbitrum',
    label: 'ETH',
    icon: <TokenEth />,
    chain: 'arbitrum',
    amount: '0.5',
    secondaryAmount: '$1,242.10',
  },
]

export const TokenPicker = () => {
  const anchorRef = useRef<HTMLButtonElement>(null)
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('ETH:ethereum')

  const selected = tokens.find((token) => token.value === value)
  const chain = chains.find((item) => item.value === selected?.chain)

  return (
    <>
      <Button
        ref={anchorRef}
        variant='outline'
        iconLeft={selected?.icon}
        iconRight={<IconChevronDown />}
        onClick={() => setOpen((isOpen) => !isOpen)}
      >
        {selected?.label} on {chain?.label}
      </Button>

      <Popover
        aria-label='Select token'
        open={open}
        onClose={() => setOpen(false)}
        anchorRef={anchorRef}
        width={365}
        className={styles.bare}
      >
        <TokenChainSelector
          tokens={tokens}
          chains={chains}
          value={value}
          onChange={(next) => {
            setValue(next)
            setOpen(false)
          }}
          style={{ height: 480 }}
        />
      </Popover>
    </>
  )
}

/* TokenPicker.module.css: the selector has its own surface,
   so strip the popover's padding, border and shadow. */
/*
.bare {
  padding: 0;
  overflow: visible;
  border: 0;
  background: none;
  box-shadow: none;
}
*/`

export const InPopover: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: 560 }}>
        <Story />
      </div>
    ),
  ],
  render: () => <PopoverDemo />,
  parameters: {
    docs: {
      source: { code: inPopoverSource, language: 'tsx' },
      description: {
        story:
          'Opened from a trigger in a bare `Popover`; picking a token closes it. Keep `value` in state, close the popover in `onChange`, give the selector a height so the list scrolls, and strip the popover chrome (see the CSS at the end of the code).',
      },
    },
  },
}
