import { Story } from '@storybook/react'
import { ModalProps } from './types'
import { Button } from '@lidofinance/button'
import Modal from './Modal'
import { useCallback, useState } from 'react'

export default {
  component: Modal,
  title: 'Dialogs/Modal',
  args: {
    title: 'Modal Title',
    children: 'Modal content',
    center: false,
  },
  argTypes: {
    onClose: {
      action: 'close',
      table: { disable: true },
    },
  },
}

export const Basic: Story<ModalProps> = (props) => {
  const { onClose } = props
  const [state, setState] = useState(false)
  const handleOpen = useCallback(() => setState(true), [])
  const handleClose = useCallback(() => {
    setState(false)
    onClose?.()
  }, [onClose])

  return (
    <>
      <Button onClick={handleOpen}>Show modal</Button>
      {state && <Modal {...props} onClose={handleClose} />}
    </>
  )
}
