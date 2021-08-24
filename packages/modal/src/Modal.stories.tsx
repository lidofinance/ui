import { Story, Meta } from '@storybook/react'
import { ModalProps } from './types'
import { Button } from '@lidofinance/button'
import { Loader } from '@lidofinance/loaders'
import { Text } from '@lidofinance/text'
import { Link } from '@lidofinance/link'
import { Error, Success } from '@lidofinance/icons'
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

export const LoadingStateInModal: Story<ModalProps> = (props) => {
  const { state, handleOpen, handleClose } = useModal(props)

  return (
    <>
      <Button onClick={handleOpen}>Show loading modal</Button>

      <Modal
        {...props}
        titleIcon={<Loader size={'large'} />}
        open={state}
        onClose={handleClose}
      >
        <Text color='secondary' size='xxs'>
          Staking 10 ETH. You will receive 10 stETH
        </Text>
        <br />
        <Text color='secondary' size='xxs'>
          Confirm this transaction in your wallet
        </Text>
      </Modal>
    </>
  )
}

LoadingStateInModal.args = {
  title: 'You are now staking 10 ETH',
  center: true,
}

LoadingStateInModal.argTypes = {
  children: {
    table: {
      disable: true,
    },
  },
}

export const SuccessStateInModal: Story<ModalProps> = (props) => {
  const { state, handleOpen, handleClose } = useModal(props)

  return (
    <>
      <Button onClick={handleOpen}>Show success modal</Button>

      <Modal
        {...props}
        titleIcon={<Success color={'green'} width={64} height={64} />}
        open={state}
        onClose={handleClose}
      >
        <Text color='secondary' size='xxs'>
          Staking operation was successful
        </Text>
        <br />
        <Link href={'https://etherscan.io/'}>View on Etherscan</Link>
      </Modal>
    </>
  )
}

SuccessStateInModal.args = {
  title: 'Your new balance is 10 stETH',
  center: true,
}

SuccessStateInModal.argTypes = {
  children: {
    table: {
      disable: true,
    },
  },
}

export const ErrorStateInModal: Story<ModalProps> = (props) => {
  const { state, handleOpen, handleClose } = useModal(props)

  return (
    <>
      <Button onClick={handleOpen}>Show error modal</Button>

      <Modal
        {...props}
        titleIcon={<Error color={'red'} width={64} height={64} />}
        open={state}
        onClose={handleClose}
      >
        <Text color='secondary' size='xxs'>
          Staking operation was not successful
        </Text>
        <br />
        <Link href={'#'}>Retry</Link>
      </Modal>
    </>
  )
}

ErrorStateInModal.args = {
  title: 'Something went wrong',
  center: true,
}

ErrorStateInModal.argTypes = {
  children: {
    table: {
      disable: true,
    },
  },
}
