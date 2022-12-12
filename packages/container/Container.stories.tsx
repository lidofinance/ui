import { Story, Meta } from '@storybook/react'
import { ContainerProps, ContainerSize } from './types'
import Container from './Container'
import styled from 'styled-components'

const getOptions = (enumObject: Record<string, string | number>) =>
  Object.values(enumObject).filter((value) => typeof value === 'string')

export default {
  component: Container,
  title: 'Layout/Container',
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

const StyledDiv = styled.div`
  height: 100px;
  background: var(--lido-color-foreground);
  color: var(--lido-color-textSecondary);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Base: Story<ContainerProps> = (props) => (
  <Container {...props}>
    <StyledDiv />
  </Container>
)

Base.args = {
  size: 'full',
}

Base.argTypes = {
  size: {
    options: getOptions(ContainerSize),
    control: 'inline-radio',
  },
}

export const PageLayout: Story = () => (
  <>
    <Container as='header' size='full'>
      <StyledDiv>Header</StyledDiv>
    </Container>
    <Container as='main' size='content'>
      <StyledDiv
        style={{
          margin: '20px 0',
          height: 'calc(100vh - 240px)',
        }}
      >
        Content
      </StyledDiv>
    </Container>
    <Container as='footer' size='full'>
      <StyledDiv>Footer</StyledDiv>
    </Container>
  </>
)
