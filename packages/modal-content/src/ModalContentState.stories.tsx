import { useCallback, useState } from 'react'
import { Story, Meta } from '@storybook/react'
import { Modal, ModalProps } from '@lidofinance/modal'
import { Button } from '@lidofinance/button'

import ModalContentState from './ModalContentState'
import { ModalContentStateProps, ModalContentStateEnum } from './types'

const getOptions = (enumObject: Record<string, string | number>) =>
  Object.values(enumObject).filter((value) => typeof value === 'string')

export default {
  component: ModalContentState,
  title: 'Dialogs/ModalContentState',
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

export const Basic: Story<ModalContentStateProps> = (props) => {
  return (
    <ModalContentState {...props}>
      <h2>You are now staking 10 ETH</h2>
      <p>Staking 10 ETH. You will receive 10 stETH</p>
      <br />
      <p>Confirm this transaction in your wallet</p>
    </ModalContentState>
  )
}

Basic.args = {
  state: 'loading',
}

Basic.argTypes = {
  state: {
    options: getOptions(ModalContentStateEnum),
    control: 'inline-radio',
  },
}

export const LoadingStateInModal: Story<ModalProps> = (props) => {
  const { state, handleOpen, handleClose } = useModal(props)

  return (
    <>
      <Button onClick={handleOpen}>Show loading modal</Button>

      <Modal {...props} open={state} onClose={handleClose}>
        <ModalContentState state={'loading'}>
          <h2>You are now staking 10 ETH</h2>
          <p>Staking 10 ETH. You will receive 10 stETH</p>
          <br />
          <p>Confirm this transaction in your wallet</p>
        </ModalContentState>
      </Modal>
    </>
  )
}

export const SuccessStateInModal: Story<ModalProps> = (props) => {
  const { state, handleOpen, handleClose } = useModal(props)

  return (
    <>
      <Button onClick={handleOpen}>Show success modal</Button>

      <Modal {...props} open={state} onClose={handleClose}>
        <ModalContentState state={'success'}>
          <h2>Your new balance is 10 stETH</h2>
          <p>Staking operation was successful</p>
          <br />
          <a
            href={'https://etherscan.io/'}
            target={'_blank'}
            rel={'noopener noreferrer'}
          >
            View on Etherscan
          </a>
        </ModalContentState>
      </Modal>
    </>
  )
}

export const ErrorStateInModal: Story<ModalProps> = (props) => {
  const { state, handleOpen, handleClose } = useModal(props)

  return (
    <>
      <Button onClick={handleOpen}>Show error modal</Button>

      <Modal {...props} open={state} onClose={handleClose}>
        <ModalContentState state={'error'}>
          <h2>Error</h2>
          <p>Please repeat!</p>
        </ModalContentState>
      </Modal>
    </>
  )
}
