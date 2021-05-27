import { Story, Meta } from '@storybook/react'
import { ModalProps } from './types'
import { Button } from '@lidofinance/button'
import Modal from './Modal'
import ModalExtra from './ModalExtra'
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
} as Meta

const useModal = (props: ModalProps) => {
  const { onClose } = props
  const [state, setState] = useState(false)
  const handleOpen = useCallback(() => setState(true), [])
  const handleClose = useCallback(() => {
    setState(false)
    onClose?.()
  }, [onClose])

  return { state, handleOpen, handleClose }
}

export const Basic: Story<ModalProps> = (props) => {
  const { state, handleOpen, handleClose } = useModal(props)

  return (
    <>
      <Button onClick={handleOpen}>Show modal</Button>
      {state && <Modal {...props} onClose={handleClose} />}
    </>
  )
}

export const ExtraContent: Story<ModalProps> = (props) => {
  const { state, handleOpen, handleClose } = useModal(props)

  return (
    <>
      <Button onClick={handleOpen}>Show modal</Button>
      {state && (
        <Modal
          {...props}
          onClose={handleClose}
          extra={<ModalExtra>Extra content</ModalExtra>}
        />
      )}
    </>
  )
}

export const WithScroll: Story<ModalProps> = (props) => {
  const { state, handleOpen, handleClose } = useModal(props)

  return (
    <>
      <Button onClick={handleOpen}>Show modal</Button>
      {state && (
        <Modal {...props} onClose={handleClose}>
          <div style={{ height: '150vh' }}>{props.children}</div>
        </Modal>
      )}
    </>
  )
}
