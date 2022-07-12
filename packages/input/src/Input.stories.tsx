import { Story, Meta } from '@storybook/react'
import { Eth } from '@lidofinance/icons'
import { Block } from '@lidofinance/block'
import { Button } from '@lidofinance/button'
import { Identicon } from '@lidofinance/identicon'
import Input from './Input'
import styled from 'styled-components'
import { InputProps, InputType, InputVariant, InputColor } from './types'
import { useState } from 'react'

const getOptions = (enumObject: Record<string, string | number>) =>
  Object.values(enumObject).filter((value) => typeof value === 'string')

export default {
  component: Input,
  title: 'Controls/Input',
  args: {
    disabled: false,
    fullwidth: false,
    active: false,
  },
  argTypes: {
    onChange: {
      action: 'change',
      table: { disable: true },
    },
  },
} as Meta

export const Basic: Story<InputProps> = (props) => <Input {...props} />

Basic.args = {
  placeholder: 'Amount',
  label: '',
  type: 'text',
}

Basic.argTypes = {
  type: {
    options: getOptions(InputType),
    control: 'inline-radio',
  },
  color: {
    options: getOptions(InputColor),
    control: 'inline-radio',
  },
}

export const Small: Story<InputProps> = (props) => <Input {...props} />

Small.args = {
  variant: 'small',
  placeholder: 'Amount',
}

Small.argTypes = {
  variant: {
    options: getOptions(InputVariant),
    control: 'inline-radio',
  },
}

export const Label: Story<InputProps> = (props) => <Input {...props} />

Label.args = {
  label: 'Email address',
}
Label.argTypes = {
  color: {
    options: getOptions(InputColor),
    control: 'inline-radio',
  },
}

const EthIcon = styled(Eth)`
  fill: ${({ theme }) => theme.colors.text};
`

const MaxButton = () => (
  <Button
    variant='translucent'
    size='xxs'
    css={`
      margin-right: -4px;
    `}
  >
    MAX
  </Button>
)

export const WithDecorators: Story<InputProps> = (props) => (
  <Input
    leftDecorator={<EthIcon />}
    rightDecorator={<MaxButton />}
    {...props}
  />
)

WithDecorators.args = {
  placeholder: 'Amount',
}
WithDecorators.argTypes = {
  color: {
    options: getOptions(InputColor),
    control: 'inline-radio',
  },
}

export const WithIdenticon: Story<InputProps> = (props) => {
  const [value, setValue] = useState('')

  return (
    <Input
      {...props}
      value={value}
      onChange={(event) => {
        setValue(event.currentTarget.value)
        props.onChange?.(event)
      }}
      rightDecorator={<Identicon address={String(value ?? '')} />}
    />
  )
}

WithIdenticon.args = {
  placeholder: 'Ethereum address',
}

export const WithButton: Story<InputProps> = (props) => (
  <Input
    rightDecorator={
      <Button
        size='sm'
        css={`
          margin-right: -10px;
        `}
        disabled={props.disabled}
      >
        Subscribe
      </Button>
    }
    {...props}
  />
)

WithButton.args = {
  fullwidth: true,
  label: 'Email address',
}
WithButton.argTypes = {
  color: {
    options: getOptions(InputColor),
    control: 'inline-radio',
  },
}

export const WithError: Story<InputProps> = (props) => <Input {...props} />

WithError.args = {
  fullwidth: true,
  defaultValue: 'info@lido.',
  label: 'Email address',
  error: 'Email is invalid',
}
WithError.argTypes = {
  color: {
    options: getOptions(InputColor),
    control: 'inline-radio',
  },
}

export const WithWarning: Story<InputProps> = (props) => <Input {...props} />

WithWarning.args = {
  fullwidth: true,
  defaultValue: '10',
  label: 'Token amount',
  warning: 'Amount may be insufficient.',
}

const Success = styled.span`
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizesMap.xs}px;
  color: ${({ theme }) => theme.colors.success};
`

export const WithSuccess: Story<InputProps> = (props) => (
  <Input rightDecorator={<Success>Subscribed</Success>} {...props} />
)

WithSuccess.args = {
  fullwidth: true,
  disabled: true,
  defaultValue: 'info@lido.fi',
  success:
    'Thank you for subscribing! We will notify you once we kick off our platform.',
}

export const AccentColor: Story<InputProps> = (props) => {
  const [value, setValue] = useState('')

  return (
    <Block
      color='accent'
      css={`
        display: flex;
        background: linear-gradient(60deg, #413e58 20%, #30363f 100%);
      `}
    >
      <Input
        {...props}
        value={value}
        onChange={(event) => {
          setValue(event.currentTarget.value)
          props.onChange?.(event)
        }}
        rightDecorator={<Identicon address={String(value ?? '')} />}
        color='accent'
      />
      <Button
        css={`
          margin-left: 12px;
          flex-shrink: 0;
        `}
      >
        Calculate
      </Button>
    </Block>
  )
}

AccentColor.args = {
  fullwidth: true,
  label: '',
  placeholder: 'Ethereum address',
}
