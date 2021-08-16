import { useState } from 'react'
import styled from 'styled-components'

import { Story, Meta } from '@storybook/react'
import { Eth, Terra } from '@lidofinance/icons'
import { Container } from '@lidofinance/container'
import { Accordion } from '@lidofinance/accordion'

import { ModalButtonProps, ModalButtonSize } from './types'
import ModalButton from './ModalButton'

const getOptions = (enumObject: Record<string, string | number>) =>
  Object.values(enumObject).filter((value) => typeof value === 'string')

export default {
  component: ModalButton,
  title: 'Dialogs/ModalButton',
} as Meta

export const Basic: Story<ModalButtonProps> = (props) => (
  <ModalButton icon={<Eth />} {...props} />
)

Basic.args = {
  size: 'md',
  activate: false,
  disabled: false,
  fullwidth: false,
  children: 'Ethereum',
}

Basic.argTypes = {
  size: {
    options: getOptions(ModalButtonSize),
    control: 'inline-radio',
  },
}

export const ManulIconSize: Story<ModalButtonProps> = (props) => {
  return (
    <>
      <Accordion summary='Manual size'>
        You can set manual width and/or height of ModalButton (size props of
        ModalButton does not affect to the icon): use width and height props.
      </Accordion>
      <ModalButton icon={<Eth width={128} height={128} />} {...props} />
    </>
  )
}

ManulIconSize.args = {
  size: 'md',
  activate: false,
  disabled: false,
  fullwidth: false,
  children: 'Ethereum',
}

ManulIconSize.argTypes = {
  size: {
    options: getOptions(ModalButtonSize),
    control: 'inline-radio',
  },
}

export const ChooseNetwork: Story = () => {
  const ETHEREUM = 'Ethereum'
  const TERRA = 'Terra'
  const [curButtonIndex, setCurButtonIndex] = useState(ETHEREUM)

  const StyledDiv = styled.div`
    background: ${({ theme }) => theme.colors.foreground};
    padding: ${({ theme }) => `${theme.spaceMap.xxl}px`};
  `

  const StyledMarginBottom = styled.div`
    margin-bottom: ${({ theme }) => `${theme.spaceMap.sm}px`};
  `

  return (
    <Container as='header' size='tight'>
      <StyledDiv>
        <StyledMarginBottom>Choose network</StyledMarginBottom>

        <StyledMarginBottom>
          <ModalButton
            icon={<Eth />}
            size='sm'
            activate={curButtonIndex === ETHEREUM}
            fullwidth={true}
            onClick={() => setCurButtonIndex(ETHEREUM)}
          >
            Ethereum
          </ModalButton>
        </StyledMarginBottom>

        <ModalButton
          icon={<Terra />}
          size='sm'
          activate={curButtonIndex === TERRA}
          fullwidth={true}
          onClick={() => setCurButtonIndex(TERRA)}
        >
          Terra
        </ModalButton>
      </StyledDiv>
    </Container>
  )
}
