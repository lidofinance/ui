import { StoryFn, Meta } from '@storybook/react'
import { Eth, Steth, Solana } from '@lidofinance/icons'
import { InputGroup, Input, InputColor } from '@lidofinance/input'
import { SelectProps } from './types'
import Select from './Select'
import SelectIcon from './SelectIcon'
import Option from './Option'
import { useRef, useState } from 'react'

const getOptions = (enumObject: Record<string, string | number>) =>
  Object.values(enumObject).filter((value) => typeof value === 'string')

export default {
  component: Select,
  title: 'Controls/Select',
  args: {
    disabled: false,
    fullwidth: false,
  },
  argTypes: {
    onChange: {
      action: 'change',
      table: { disable: true },
    },
  },
} as Meta

export const Basic: StoryFn<SelectProps> = (props) => (
  <Select {...props} value={1}>
    <Option value={1}>First</Option>
    <Option value={2}>Second</Option>
    <Option value={3}>Third</Option>
  </Select>
)

export const Labeled: StoryFn<SelectProps> = (props) => (
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

export const Icons: StoryFn<SelectProps> = (props) => {
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

export const OnlyIcon: StoryFn<SelectProps> = (props) => {
  const [value, setValue] = useState<keyof typeof iconsMap>('eth')

  return (
    <SelectIcon
      {...props}
      icon={iconsMap[value]}
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
    </SelectIcon>
  )
}

OnlyIcon.argTypes = {
  fullwidth: {
    table: { disable: true },
  },
}

export const WithInput: StoryFn<SelectProps> = ({
  fullwidth,
  disabled,
  color,
  ...rest
}) => {
  const [value, setValue] = useState<keyof typeof iconsMap>('eth')
  const ref = useRef<HTMLSpanElement>(null)

  return (
    <InputGroup fullwidth={fullwidth} ref={ref}>
      <SelectIcon
        {...rest}
        disabled={disabled}
        color={color}
        anchorRef={ref}
        icon={iconsMap[value]}
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
      </SelectIcon>
      <Input
        fullwidth={fullwidth}
        disabled={disabled}
        color={color}
        placeholder='Amount'
      />
    </InputGroup>
  )
}

WithInput.argTypes = {
  color: {
    options: getOptions(InputColor),
    control: 'inline-radio',
  },
}

export const Small: StoryFn<SelectProps> = (props) => (
  <Select {...props} variant='small' arrow='small' value={1}>
    <Option value={1}>First</Option>
    <Option value={2}>Second</Option>
    <Option value={3}>Third</Option>
  </Select>
)
