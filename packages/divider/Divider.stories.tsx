import { StoryFn, Meta } from '@storybook/react'
import styled from 'styled-components'
import {
  Divider,
  DividerIndent,
  DividerProps,
  DividerType,
  DividerTypes,
} from './index.js'

const getOptions = (enumObject: Record<string, string | number>) =>
  Object.values(enumObject).filter((value) => typeof value === 'string')

export default {
  component: Divider,
  title: 'Layout/Divider',
  args: {
    type: 'horizontal',
    indents: 'md',
  },
  argTypes: {
    type: {
      options: getOptions(DividerType),
      control: 'inline-radio',
    },
    indents: {
      options: getOptions(DividerIndent),
      control: 'inline-radio',
    },
  },
} as Meta

const Wrapper = styled.div<{ $type?: DividerTypes }>`
  flex-direction: ${({ $type }) => ($type === 'vertical' ? 'row' : 'column')};
  display: flex;
`

export const Base: StoryFn<DividerProps> = (props) => (
  <Wrapper $type={props.type}>
    <span>First</span>
    <Divider type='vertical' {...props} />
    <span>Second</span>
    <Divider type='vertical' {...props} />
    <span>Third</span>
  </Wrapper>
)
