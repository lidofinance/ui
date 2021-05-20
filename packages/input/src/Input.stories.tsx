import { Story, Meta } from '@storybook/react'
import { Eth, Solana } from '@lidofinance/icons'
import { Button } from '@lidofinance/button'
import { Identicon } from '@lidofinance/identicon'
import Input from './Input'
import styled from 'styled-components'
import { InputProps, InputType } from './types'
import { useState } from 'react'

const getOptions = (enumObject: Record<string, string | number>) =>
  Object.values(enumObject).filter((value) => typeof value === 'string')

export default {
  component: Input,
  title: 'Controls/Input',
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

export const Basic: Story<InputProps> = (props) => <Input {...props} />

Basic.args = {
  placeholder: 'Amount',
  type: 'text',
}

Basic.argTypes = {
  type: {
    options: getOptions(InputType),
    control: 'inline-radio',
  },
}

export const Label: Story<InputProps> = (props) => <Input {...props} />

Label.args = {
  label: 'Email address',
}

const EthIcon = styled(Eth)`
  fill: ${({ theme }) => theme.colors.text};
`

const MaxButton = () => (
  <Button
    variant='translucent'
    size='xs'
    css={`
      margin-right: -4px;
    `}
  >
    MAX
  </Button>
)

export const WithDecorators: Story<InputProps> = (props) => (
  <>
    <Input
      leftDecorator={<EthIcon />}
      rightDecorator={<MaxButton />}
      {...props}
    />
    <Input
      leftDecorator={<Solana />}
      rightDecorator={<MaxButton />}
      {...props}
    />
  </>
)

WithDecorators.args = {
  placeholder: 'Amount',
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
      >
        Subscribe
      </Button>
    }
    {...props}
  />
)

WithButton.args = {
  label: 'Email address',
}

export const WithError: Story<InputProps> = (props) => <Input {...props} />

WithError.args = {
  defaultValue: 'info@lido.',
  label: 'Email address',
  error: 'Email is invalid',
}

const Success = styled.span`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.success};
`

export const WithSuccess: Story<InputProps> = (props) => (
  <Input rightDecorator={<Success>Subscribed</Success>} {...props} />
)

WithSuccess.args = {
  disabled: true,
  defaultValue: 'info@lido.fi',
  success:
    'Thank you for subscribing! We will notify you once we kick off our platform.',
}
