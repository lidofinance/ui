import { Story, Meta } from '@storybook/react'
import { ModalProps } from './types'
import { Button } from '@lidofinance/button'
import Modal from './Modal'
import ModalExtra from './ModalExtra'
import { useCallback, useState } from 'react'
import { DEFAULT_DURATION } from './constants'

export default {
  component: Modal,
  title: 'Dialogs/Modal',
  args: {
    title: 'Modal Title',
    children: 'Modal content',
    duration: DEFAULT_DURATION,
    center: false,
  },
  argTypes: {
    duration: {
      control: { type: 'range', min: 0, max: 500, step: 50 },
    },
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
      <Modal {...props} open={state} onClose={handleClose} />
    </>
  )
}

export const ExtraContent: Story<ModalProps> = (props) => {
  const { state, handleOpen, handleClose } = useModal(props)

  return (
    <>
      <Button onClick={handleOpen}>Show modal</Button>
      <Modal
        {...props}
        open={state}
        onClose={handleClose}
        extra={<ModalExtra>Extra content</ModalExtra>}
      />
    </>
  )
}

export const WithScroll: Story<ModalProps> = (props) => {
  const { state, handleOpen, handleClose } = useModal(props)

  return (
    <>
      <Button onClick={handleOpen}>Show modal</Button>
      <Modal {...props} open={state} onClose={handleClose}>
        <div style={{ height: '150vh' }}>{props.children}</div>
      </Modal>
    </>
  )
}
