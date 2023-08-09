import { toast } from './index'
import { StoryFn, Meta } from '@storybook/react'
import { Button } from '../button'
import { Accordion } from '../accordion'
import {
  ToastContainer,
  ToastDefault,
  ToastError,
  ToastInfo,
  ToastPending,
  ToastSuccess,
} from '.'

export const ToastPosition = toast.POSITION

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
} satisfies Meta

export const Basic: StoryFn = ({ text, ...options }) => {
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

export const Error: StoryFn = ({ text, ...options }) => {
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

export const Success: StoryFn = ({ text, ...options }) => {
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

export const Info: StoryFn = ({ text, ...options }) => {
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

export const Pending: StoryFn = ({ text, ...options }) => {
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
