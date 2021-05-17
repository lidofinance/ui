import { Story } from '@storybook/react'
import { DividerIndent, DividerProps, DividerType, DividerTypes } from './types'
import Divider from './Divider'
import styled from 'styled-components'

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
}

const Wrapper = styled.div<{ $type?: DividerTypes }>`
  color: ${({ theme }) => theme.colors.text};
  flex-direction: ${({ $type }) => ($type === 'vertical' ? 'row' : 'column')};
  display: flex;
`

export const Base: Story<DividerProps> = (props) => (
  <Wrapper $type={props.type}>
    <span>First</span>
    <Divider type='vertical' {...props} />
    <span>Second</span>
    <Divider type='vertical' {...props} />
    <span>Third</span>
  </Wrapper>
)
