import { Story, Meta } from '@storybook/react'
import { Eth, Steth, Solana } from '@lidofinance/icons'
import { SelectProps } from './types'
import Select from './Select'
import Option from './Option'
import { useState } from 'react'

export default {
  component: Select,
  title: 'Controls/Select',
  args: {
    disabled: false,
  },
  argTypes: {
    onChange: {
      action: 'change',
      table: { disable: true },
    },
  },
} as Meta

export const Basic: Story<SelectProps> = (props) => (
  <Select {...props} value={1}>
    <Option value={1}>First</Option>
    <Option value={2}>Second</Option>
    <Option value={3}>Third</Option>
  </Select>
)

export const Labeled: Story<SelectProps> = (props) => (
  <Select {...props} label='Labeled select' value={1}>
    <Option value={1}>First</Option>
    <Option value={2}>Second</Option>
    <Option value={3}>Third</Option>
  </Select>
)

const iconsMap = {
  eth: <Eth />,
  steth: <Steth />,
  sol: <Solana />,
}

export const Icons: Story<SelectProps> = (props) => {
  const [value, setValue] = useState<keyof typeof iconsMap>('eth')

  return (
    <Select
      {...props}
      leftDecorator={iconsMap[value]}
      value={value}
      onChange={(value) => setValue(value as keyof typeof iconsMap)}
    >
      <Option leftDecorator={iconsMap.eth} value='eth'>
        Ethereum (ETH)
      </Option>
      <Option leftDecorator={iconsMap.steth} value='steth'>
        Lido (STETH)
      </Option>
      <Option leftDecorator={iconsMap.sol} value='sol'>
        Solana (SOL)
      </Option>
    </Select>
  )
}
