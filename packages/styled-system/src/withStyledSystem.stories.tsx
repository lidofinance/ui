import { Story } from '@storybook/react'
import { StyledSystemProps } from './types'
import styled, { DefaultTheme, StyledComponentProps } from 'styled-components'
import withStyledSystem from './withStyledSystem'

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border: 2px solid;
  color: ${({ theme }) => theme.colors.text};
`
const Example = withStyledSystem(StyledDiv)
Example.displayName = 'Example'

type Props = StyledComponentProps<'div', DefaultTheme, StyledSystemProps, never>

export default {
  title: 'Styled System/HOC',
  args: { children: 'Example' },
}

export const Base: Story<Props> = (props) => <Example {...props} />

export const Space: Story<Props> = (props) => (
  <Example {...props} margin={2} padding={2} />
)

export const Color: Story<Props> = (props) => (
  <Example {...props} color='primary' />
)

export const Typography: Story<Props> = (props) => (
  <Example {...props} fontSize={2} fontWeight='bold' />
)

export const Layout: Story<Props> = (props) => (
  <Example {...props} width={1 / 2} />
)

export const Background: Story<Props> = (props) => (
  <Example {...props} bg='text' color='background' />
)

export const Border: Story<Props> = (props) => (
  <Example {...props} borderWidth={10} />
)

export const Position: Story<Props> = (props) => (
  <Example {...props} position='relative' left={50} />
)

export const Shadow: Story<Props> = (props) => (
  <Example {...props} boxShadow='0 0 4px' />
)
