import styled from 'styled-components'
import { Story, Meta } from '@storybook/react'
import { ModalProps } from './types'
import { Button, ButtonProps, ButtonSize } from '@lidofinance/button'
import { Loader } from '@lidofinance/loaders'
import { Text } from '@lidofinance/text'
import { Link } from '@lidofinance/link'
import { Error, Success, Eth, Terra } from '@lidofinance/icons'
import Modal from './Modal'
import ModalExtra from './ModalExtra'
import ModalButton from './ModalButton'
import { useCallback, useState } from 'react'

const getOptions = (enumObject: Record<string, string | number>) =>
  Object.values(enumObject).filter((value) => typeof value === 'string')

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

export const BasicModalButtonInModal: Story<ButtonProps> = (props) => {
  const modalProps = {
    title: 'Basic modal button in modal',
    center: false,
  }
  const { state, handleOpen, handleClose } = useModal(modalProps)

  return (
    <>
      <Button onClick={handleOpen}>Show modal</Button>

      <Modal {...modalProps} open={state} onClose={handleClose}>
        <ModalButton icon={<Eth />} {...props} />
      </Modal>
    </>
  )
}

BasicModalButtonInModal.args = {
  size: 'md',
  active: false,
  disabled: false,
  fullwidth: true,
  loading: false,
  children: 'Ethereum',
}

BasicModalButtonInModal.argTypes = {
  title: {
    table: {
      disable: true,
    },
  },
  center: {
    table: {
      disable: true,
    },
  },
  size: {
    options: getOptions(ButtonSize),
    control: 'inline-radio',
  },
}

export const ManulIconSizeInModalButtonInModal: Story<ButtonProps> = (
  props
) => {
  const modalProps = {
    title: 'Basic modal button in modal',
    center: false,
  }
  const { state, handleOpen, handleClose } = useModal(modalProps)

  return (
    <>
      <Button onClick={handleOpen}>Show modal</Button>

      <Modal {...modalProps} open={state} onClose={handleClose}>
        You can set manual width and/or height of ModalButton (size props of
        ModalButton does not affect to the icon): use width and height props.
        For example set width and height to 128px.
        <br />
        <br />
        <ModalButton icon={<Eth width={128} height={128} />} {...props} />
      </Modal>
    </>
  )
}

ManulIconSizeInModalButtonInModal.args = {
  size: 'md',
  active: false,
  disabled: false,
  fullwidth: true,
  loading: false,
  children: 'Ethereum',
}

ManulIconSizeInModalButtonInModal.argTypes = {
  title: {
    table: {
      disable: true,
    },
  },
  center: {
    table: {
      disable: true,
    },
  },
  active: {
    table: {
      disable: true,
    },
  },
}

export const ChooseNetworkInModal: Story = () => {
  const modalProps = {
    title: 'ChooseNetwork',
    center: false,
  }
  const { state, handleOpen, handleClose } = useModal(modalProps)

  const ETHEREUM = 'Ethereum'
  const TERRA = 'Terra'
  const [curButtonIndex, setCurButtonIndex] = useState(ETHEREUM)

  const StyledMarginBottom = styled.div`
    margin-bottom: ${({ theme }) => `${theme.spaceMap.sm}px`};
  `

  return (
    <>
      <Button onClick={handleOpen}>Show modal</Button>

      <Modal {...modalProps} open={state} onClose={handleClose}>
        <StyledMarginBottom>
          <ModalButton
            icon={<Eth />}
            size='sm'
            active={curButtonIndex === ETHEREUM}
            fullwidth={true}
            onClick={() => setCurButtonIndex(ETHEREUM)}
          >
            Ethereum
          </ModalButton>
        </StyledMarginBottom>

        <StyledMarginBottom>
          <ModalButton
            icon={<Terra />}
            size='sm'
            active={curButtonIndex === TERRA}
            fullwidth={true}
            onClick={() => setCurButtonIndex(TERRA)}
          >
            Terra
          </ModalButton>
        </StyledMarginBottom>
      </Modal>
    </>
  )
}
