import { toast } from './index'
import { Story, Meta } from '@storybook/react'
import { ToastPosition } from './types'
import { Button } from '@lidofinance/button'
import { Accordion } from '@lidofinance/accordion'
import { ToastContainer } from './ToastContainer'
import { ToastDefault } from './ToastDefault'
import { ToastError } from './ToastError'
import { ToastInfo } from './ToastInfo'
import { ToastPending } from './ToastPending'
import { ToastSuccess } from './ToastSuccess'

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

export const Basic: Story = (props) => {
  const { text, ...options } = props
  const notifyDefault = () => ToastDefault(text, options)

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

export const Error: Story = (props) => {
  const { text, ...options } = props
  const notifyError = () => ToastError(text, options)

  return (
    <>
      <Button onClick={notifyError} size='xs'>
        Show error notify!
      </Button>
      <ToastContainer />
    </>
  )
}

export const Success: Story = (props) => {
  const { text, ...options } = props
  const notifySuccess = () => ToastSuccess(text, options)

  return (
    <>
      <Button onClick={notifySuccess} size='xs'>
        Show success notify!
      </Button>
      <ToastContainer />
    </>
  )
}

export const Info: Story = (props) => {
  const { text, ...options } = props
  const notifyInfo = () => ToastInfo(text, options)

  return (
    <>
      <Button onClick={notifyInfo} size='xs'>
        Show info notify!
      </Button>
      <ToastContainer />
    </>
  )
}

export const Pending: Story = (props) => {
  const { text, ...options } = props
  const notifyPending = () => ToastPending(text, options)
  const dismissAll = () => toast.dismiss()

  return (
    <>
      <Button onClick={notifyPending} size='xs'>
        Show pending notify!
      </Button>
      <br />
      <br />
      <Button onClick={dismissAll} size='xs' variant='translucent'>
        Dismiss all
      </Button>
      <ToastContainer />
    </>
  )
}
