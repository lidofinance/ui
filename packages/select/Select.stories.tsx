import { useRef, useState } from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { Eth, Steth, Solana } from '../icons/index.js'
import { InputGroup, Input, InputColor } from '../input/index.js'
import { Select, SelectIcon, SelectProps, Option } from './index.js'

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

export const WithStyles: StoryFn<SelectProps> = (props) => (
  <Select {...props} popupStyle={{ maxHeight: '350px' }} value={1}>
    <Option value={1}>First</Option>
    <Option value={2}>Second</Option>
    <Option value={3}>Third</Option>
    <Option value={4}>Fourth</Option>
    <Option value={5}>Fifth</Option>
    <Option value={6}>Sixth</Option>
    <Option value={7}>Seventh</Option>
    <Option value={8}>Eighth</Option>
    <Option value={9}>Ninth</Option>
    <Option value={10}>Tenth</Option>
    <Option value={11}>Eleventh</Option>
    <Option value={12}>Twelfth</Option>
    <Option value={13}>Thirteenth</Option>
    <Option value={14}>Fourteenth</Option>
    <Option value={15}>Fifteenth</Option>
    <Option value={16}>Sixteenth</Option>
    <Option value={17}>Seventeenth</Option>
    <Option value={18}>Eighteenth</Option>
    <Option value={19}>Nineteenth</Option>
    <Option value={20}>Twentieth</Option>
  </Select>
)
