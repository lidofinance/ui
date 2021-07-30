import { Story, Meta } from '@storybook/react'
import { ToastProps, ToastPosition } from './types'
import { Button } from '@lidofinance/button'
import { Accordion } from '@lidofinance/accordion'
import { ToastContainer } from './ToastContainer'
import {
  ToastError,
  ToastDefault,
  ToastSuccess,
  ToastInfo,
  ToastPending,
  ToastEthereumError,
} from './Toast'

const getOptions = (enumObject: Record<string, string | number>) =>
  Object.values(enumObject).filter((value) => typeof value === 'string')

export default {
  component: ToastContainer,
  title: 'Notify/Toast',
  args: {
    text: '🚀🚀🚀 Wow so easy!',
    position: ToastPosition.BOTTOM_LEFT,
  },
  argTypes: {
    position: {
      options: getOptions(ToastPosition),
      control: 'inline-radio',
    },
  },
} as Meta

export const Basic: Story<ToastProps> = (props) => {
  const notifyDefault = () => ToastDefault(props)

  return (
    <>
      <Accordion summary='IMPORTANT'>
        Remember to render the ToastContainer once in your application tree. If
        you can not figure out where to put it, rendering it in the application
        root would be the best bet.
      </Accordion>

      <Button onClick={notifyDefault} size='xs'>
        Show default notify!
      </Button>
      <ToastContainer />
    </>
  )
}

export const Error: Story<ToastProps> = (props) => {
  const notifyError = () => ToastError(props)

  return (
    <>
      <Button onClick={notifyError} size='xs'>
        Show error notify!
      </Button>
      <ToastContainer />
    </>
  )
}

export const Success: Story<ToastProps> = (props) => {
  const notifySuccess = () => ToastSuccess(props)

  return (
    <>
      <Button onClick={notifySuccess} size='xs'>
        Show success notify!
      </Button>
      <ToastContainer />
    </>
  )
}

export const Info: Story<ToastProps> = (props) => {
  const notifyInfo = () => ToastInfo(props)

  return (
    <>
      <Button onClick={notifyInfo} size='xs'>
        Show info notify!
      </Button>
      <ToastContainer />
    </>
  )
}

export const Pending: Story<ToastProps> = (props) => {
  const notifyPending = () => ToastPending(props)

  return (
    <>
      <Button onClick={notifyPending} size='xs'>
        Show pending notify!
      </Button>
      <ToastContainer />
    </>
  )
}

export const EthereumError: Story<ToastProps> = (props) => {
  const notifyEthereumError = () => ToastEthereumError(props)

  return (
    <>
      <Accordion summary='IMPORTANT'>You do not use text control!</Accordion>

      <Button onClick={notifyEthereumError} size='xs'>
        Show ethereum error notify!
      </Button>
      <ToastContainer />
    </>
  )
}
