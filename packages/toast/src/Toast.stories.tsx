import { Story, Meta } from '@storybook/react'
import { ToastProps } from './types'
import { Button } from '@lidofinance/button'
import { ToastError, ToastDefault } from './Toast'
import { ToastContainer } from './ToastContainer'

import 'react-toastify/dist/ReactToastify.css'

export default {
  // component: ToastError,
  title: 'Notify/Toast',
  args: {
    text: 'Notify text 🦄💩',
  },
} as Meta

export const Basic: Story<ToastProps> = (props) => {
  const notifyDefault = () => ToastDefault(props)

  return (
    <>
      <Button onClick={notifyDefault}>Show notify!</Button>
      <ToastContainer />
    </>
  )
}

export const Error: Story<ToastProps> = (props) => {
  const notifyError = () => ToastError(props)

  return (
    <>
      <Button onClick={notifyError}>Show notify!</Button>
      <ToastContainer />
    </>
  )
}
