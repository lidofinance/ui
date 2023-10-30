import styled from 'styled-components'
import { StoryFn, Meta } from '@storybook/react'
import { Eth } from '../icons/index.js'
import { Block } from '../block/index.js'
import { Button } from '../button/index.js'
import { Identicon } from '../identicon/index.js'
import { useCallback, useState } from 'react'
import { ModalProps } from '../modal/types.js'
import { Modal } from '../modal/Modal.js'
import {
  Input,
  InputProps,
  InputType,
  InputVariant,
  InputColor,
} from './index.js'

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

export const Basic: StoryFn<InputProps> = (props) => <Input {...props} />

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

export const Small: StoryFn<InputProps> = (props) => <Input {...props} />

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

export const Label: StoryFn<InputProps> = (props) => <Input {...props} />

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
  fill: var(--lido-color-text);
`

const MaxButton = () => (
  <Button
    variant='translucent'
    size='xxs'
    style={{
      marginRight: '-4px',
    }}
  >
    MAX
  </Button>
)

export const WithDecorators: StoryFn<InputProps> = (props) => (
  <Input
    leftDecorator={<EthIcon />}
    rightDecorator={<MaxButton />}
    {...props}
  />
)

WithDecorators.args = {
  label: 'Amount',
}
WithDecorators.argTypes = {
  color: {
    options: getOptions(InputColor),
    control: 'inline-radio',
  },
}

export const WithIdenticon: StoryFn<InputProps> = (props) => {
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

export const WithButton: StoryFn<InputProps> = (props) => (
  <Input
    rightDecorator={
      <Button
        size='sm'
        style={{
          marginRight: '-10px',
        }}
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

export const WithError: StoryFn<InputProps> = (props) => <Input {...props} />

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

export const WithWarning: StoryFn<InputProps> = (props) => <Input {...props} />

WithWarning.args = {
  fullwidth: true,
  defaultValue: '10',
  label: 'Token amount',
  warning: 'Amount may be insufficient.',
}

const Success = styled.span`
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizesMap.xs}px;
  color: var(--lido-color-success);
`

export const WithSuccess: StoryFn<InputProps> = (props) => (
  <Input rightDecorator={<Success>Subscribed</Success>} {...props} />
)

WithSuccess.args = {
  fullwidth: true,
  disabled: true,
  defaultValue: 'info@lido.fi',
  success:
    'Thank you for subscribing! We will notify you once we kick off our platform.',
}

export const AccentColor: StoryFn<InputProps> = (props) => {
  const [value, setValue] = useState('')

  return (
    <Block
      color='accent'
      style={{
        display: 'flex',
        background: 'linear-gradient(60deg, #413e58 20%, #30363f 100%)',
      }}
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
        style={{
          marginLeft: 12,
          flexShrink: 0,
        }}
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

const useModal = ({ onClose, onBack }: ModalProps) => {
  const [state, setState] = useState(false)
  const handleOpen = useCallback(() => setState(true), [])
  const handleClose = useCallback(() => {
    setState(false)
    onClose?.()
  }, [onClose])
  const handleBack = useCallback(() => {
    onBack?.()
  }, [onBack])

  return { state, handleOpen, handleClose, handleBack }
}

export const ErrorsOverlapCase: StoryFn<InputProps> = (props) => {
  const { state, handleOpen, handleClose } = useModal(props)

  return (
    <>
      <Input {...props} />
      <br />
      <br />
      <Input {...props} />
      <br />
      <br />
      <Button onClick={handleOpen}>Show modal</Button>
      <Modal
        open={state}
        onClose={handleClose}
        title='Modal Title'
        subtitle=''
        center={false}
      >
        <Input {...props} />
        <br />
        <br />
        <Input {...props} />
        <br />
        <br />
        <br />
      </Modal>
    </>
  )
}

ErrorsOverlapCase.args = {
  fullwidth: true,
  label: 'Email address',
  error: 'Email is invalid',
}
ErrorsOverlapCase.argTypes = {
  color: {
    options: getOptions(InputColor),
    control: 'inline-radio',
  },
}
