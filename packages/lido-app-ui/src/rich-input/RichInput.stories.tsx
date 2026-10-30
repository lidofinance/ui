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
  title: 'Inputs & Controls/RichInput',
  component: RichInput,
  args: {
    label: 'Amount',
    placeholder: '0',
    secondaryValue: '$0.00',
    balance: 'Balance: 12.4218',
    showMaxButton: true,
    maxTooltip: 'Leaves a small amount of ETH to cover gas.',
    tokenSelector,
  },
  argTypes: {
    showMaxButton: {
      control: { type: 'boolean' },
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
        error
        errorText='Amount exceeds your balance'
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
      <RichInput
        label='Max disabled'
        defaultValue='4.2'
        balance='Balance: 12.4218'
        tokenSelector={tokenSelector}
        maxDisabled
      />
      <RichInput
        label='With label tooltip'
        labelTooltip='The amount you want to deposit.'
        placeholder='0'
        balance='Balance: 12.4218'
        tokenSelector={tokenSelector}
      />
      <RichInput label='No bottom row' placeholder='0' showMaxButton={false} />
      <RichInput
        label='Disabled'
        placeholder='0'
        balance='Balance: 12.4218'
        tokenSelector={tokenSelector}
        disabled
      />
    </StoryContainer>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'The Max tooltip opens bottom-left because the field usually sits inside a Modal, which clips anything above it.',
      },
    },
  },
}
