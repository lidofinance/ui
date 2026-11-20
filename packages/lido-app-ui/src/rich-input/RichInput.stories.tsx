import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { StoryContainer } from '../../.storybook/components'
import { TokenStEth } from '../icons'
import { TokenSelector } from '../token-selector'
import { RichInput } from '.'

const stethOptions = [{ value: 'stETH', label: 'stETH', icon: <TokenStEth /> }]

const tokenSelector = (
  <TokenSelector single size='small' value='stETH' options={stethOptions} />
)

const meta: Meta<typeof RichInput> = {
  title: 'Inputs & Controls/RichInput',
  component: RichInput,
  args: {
    label: 'Amount',
    placeholder: '0',
    secondaryValue: '$0.00',
    balance: '14.2142 stETH',
    showMaxButton: true,
    maxTooltip: 'Leaves a small amount of ETH to cover gas.',
    tokenSelector,
  },
  argTypes: {
    showMaxButton: {
      control: { type: 'boolean' },
    },
    locked: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    decimals: {
      control: { type: 'number', min: 0 },
    },
    tokenSelector: {
      control: false,
      table: { defaultValue: { summary: 'TokenSelector' } },
    },
    maxTooltipPosition: {
      control: { type: 'select' },
      options: [
        'top',
        'right',
        'bottom',
        'left',
        'top-left',
        'top-right',
        'bottom-left',
        'bottom-right',
        'top-start',
        'top-end',
        'bottom-start',
        'bottom-end',
      ],
    },
  },
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: function Render(args) {
    const [value, setValue] = useState('')

    return (
      <div style={{ maxWidth: 460 }}>
        <RichInput
          {...args}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onMaxClick={() => setValue('14.2142')}
          secondaryValue={`$${(Number(value || 0) * 3120).toFixed(2)}`}
        />
      </div>
    )
  },
  parameters: {
    docs: {
      source: { type: 'code' },
      description: {
        story:
          'Fully wired: type an amount and the fiat line follows, or hit Max to fill the balance. Letters are stripped out, and a second decimal point is ignored. Pasted amounts are normalised: with both "," and "." the last one is the decimal point, a lone "," is the decimal point unless the value looks like US grouping (1,000 / 1,234,567), and grouping separators are removed.',
      },
    },
  },
}

export const States: Story = {
  render: () => (
    <StoryContainer gap={24} style={{ maxWidth: 460 }}>
      <RichInput
        label='Empty'
        placeholder='0'
        balance='14.2142 stETH'
        tokenSelector={tokenSelector}
      />
      <RichInput
        label='Filled'
        defaultValue='4.2'
        secondaryValue='$13,104.00'
        balance='14.2142 stETH'
        tokenSelector={tokenSelector}
      />
      <RichInput
        label='Error'
        defaultValue='99'
        error='Amount exceeds your balance'
        balance='14.2142 stETH'
        tokenSelector={tokenSelector}
      />
      <RichInput
        label='Description'
        description='Minimum deposit is 0.01 ETH.'
        placeholder='0'
        balance='14.2142 stETH'
        tokenSelector={tokenSelector}
      />
      <RichInput
        label='Max with tooltip'
        defaultValue='12.4218'
        balance='14.2142 stETH'
        maxTooltip='Leaves a small amount of ETH to cover gas.'
        tokenSelector={tokenSelector}
      />
      <RichInput
        label='Max disabled'
        defaultValue='4.2'
        balance='14.2142 stETH'
        tokenSelector={tokenSelector}
        maxDisabled
      />
      <RichInput
        label='With label tooltip'
        tooltip='The amount you want to deposit.'
        placeholder='0'
        balance='14.2142 stETH'
        tokenSelector={tokenSelector}
      />
      <RichInput label='No bottom row' placeholder='0' showMaxButton={false} />
      <RichInput
        label='Disabled'
        placeholder='0'
        balance='14.2142 stETH'
        tokenSelector={tokenSelector}
        disabled
      />
      <RichInput
        label='You receive'
        loading
        secondaryValue='$13,104.00'
        balance='14.2142 stETH'
        tokenSelector={tokenSelector}
      />
      <RichInput
        label='Locked'
        defaultValue='12'
        locked
        tokenSelector={tokenSelector}
      />
      <RichInput
        label='Locked with tooltip'
        defaultValue='12'
        locked
        lockedTooltip='Amount is fixed by the bond curve.'
        tokenSelector={tokenSelector}
      />
      <RichInput
        defaultValue='12'
        locked
        lockedTooltip='Amount is fixed by the bond curve.'
        tokenSelector={tokenSelector}
      />
      <RichInput defaultValue='12' locked tokenSelector={tokenSelector} />
    </StoryContainer>
  ),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/9q8Bp7XHM2XGipfpLI63s1/Operators?node-id=75-89524&m=dev',
    },
    controls: { disable: true },
    docs: {
      description: {
        story:
          'The Max tooltip opens bottom-left because the field usually sits inside a Modal, which clips anything above it.',
      },
    },
  },
}

export const Precision: Story = {
  render: function Render() {
    const [amount, setAmount] = useState('')
    const [validators, setValidators] = useState('')

    return (
      <StoryContainer gap={24} style={{ maxWidth: 460 }}>
        <RichInput
          label='Amount (2 decimals)'
          placeholder='0'
          decimals={2}
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          balance='14.2142 stETH'
          tokenSelector={tokenSelector}
        />
        <RichInput
          label='Validators'
          placeholder='0'
          decimals={0}
          value={validators}
          onChange={(event) => setValidators(event.target.value)}
          showMaxButton={false}
        />
      </StoryContainer>
    )
  },
  parameters: {
    controls: { disable: true },
    docs: {
      source: { type: 'code' },
      description: {
        story:
          'Cap the fraction with `decimals`: extra digits are dropped as you type or paste; `0` accepts whole numbers only and opens a numeric keyboard.',
      },
    },
  },
}
