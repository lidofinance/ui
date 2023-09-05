import { StoryFn } from '@storybook/react'
import styled, { DefaultTheme, StyledComponentProps } from 'styled-components'
import { StyledSystemProps, withStyledSystem } from '.'

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border: 2px solid;
`
const Example = withStyledSystem(StyledDiv)
Example.displayName = 'Example'

type Props = StyledComponentProps<'div', DefaultTheme, StyledSystemProps, never>

export default {
  title: 'Styled System/HOC',
  args: { children: 'Example' },
}

export const Base: StoryFn<Props> = (props) => <Example {...props} />

export const Space: StoryFn<Props> = (props) => (
  <Example {...props} margin={2} padding={2} />
)

export const Color: StoryFn<Props> = (props) => (
  <Example {...props} color='primary' />
)

export const Typography: StoryFn<Props> = (props) => (
  <Example {...props} fontSize={2} fontWeight='bold' />
)

export const Layout: StoryFn<Props> = (props) => (
  <Example {...props} width={1 / 2} />
)

export const Background: StoryFn<Props> = (props) => (
  <Example {...props} bg='text' color='background' />
)

export const Border: StoryFn<Props> = (props) => (
  <Example {...props} borderWidth={10} />
)

export const Position: StoryFn<Props> = (props) => (
  <Example {...props} position='relative' left={50} />
)

export const Shadow: StoryFn<Props> = (props) => (
  <Example {...props} boxShadow='0 0 4px' />
)
