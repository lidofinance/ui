import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { StoryContainer } from '../../.storybook/components'
import { TokenSteth } from '../icons'
import { TokenSelector } from '../token-selector'
import { RichInput } from '.'

const tokenSelector = (
  <TokenSelector
    single
    value='stETH'
    options={[{ value: 'stETH', label: 'stETH', icon: <TokenSteth /> }]}
  />
)

const meta: Meta<typeof RichInput> = {
  title: 'Controls/RichInput',
  component: RichInput,
  tags: ['autodocs'],
  args: {
    label: 'Amount',
    placeholder: '0',
    secondaryValue: '$0.00',
    balance: 'Balance: 12.4218',
    showMaxButton: true,
    tokenSelector,
  },
  argTypes: {
    label: { description: 'Caption above the field' },
    secondaryValue: { description: 'Fiat equivalent, bottom left' },
    balance: { description: 'Wallet balance, bottom right' },
    showMaxButton: {
      description: 'Toggles the Max pill',
      control: { type: 'boolean' },
    },
    tokenSelector: { description: 'Slot for a `TokenSelector`' },
    error: {
      description: 'Message under the field; also recolours the values',
    },
    maxTooltip: { description: 'Explains what Max actually fills in' },
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'The amount field for supply and borrow forms: token picker, fiat equivalent, balance and a Max shortcut in one card. Input is filtered to decimals as you type. Note the design has no disabled visual — `disabled` blocks typing but looks the same.',
      },
    },
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
          onMaxClick={() => setValue('12.4218')}
          secondaryValue={`$${(Number(value || 0) * 3120).toFixed(2)}`}
        />
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Fully wired: type an amount and the fiat line follows, or hit Max to fill the balance. Letters are stripped out, and a second decimal point is ignored.',
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
        balance='Balance: 12.4218'
        tokenSelector={tokenSelector}
      />
      <RichInput
        label='Filled'
        defaultValue='4.2'
        secondaryValue='$13,104.00'
        balance='Balance: 12.4218'
        tokenSelector={tokenSelector}
      />
      <RichInput
        label='Error'
        defaultValue='99'
        error='Amount exceeds your balance'
        balance='Balance: 12.4218'
        tokenSelector={tokenSelector}
      />
      <RichInput
        label='Max with tooltip'
        defaultValue='12.4218'
        balance='Balance: 12.4218'
        maxTooltip='Leaves a small amount of ETH to cover gas.'
        tokenSelector={tokenSelector}
      />
      <RichInput label='No bottom row' placeholder='0' showMaxButton={false} />
    </StoryContainer>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'The error state keeps the blue focus border and only turns the numbers red — that is the design, not a bug. The Max tooltip opens bottom-left because the field usually sits inside a Modal, which clips anything above it.',
      },
    },
  },
}
