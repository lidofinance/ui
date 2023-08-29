import { StoryFn, Meta } from '@storybook/react'
import { InlineLoaderProps, InlineLoaderColor } from './types'
import styled from 'styled-components'
import InlineLoader from './InlineLoader'

const getOptions = (enumObject: Record<string, string | number>) =>
  Object.values(enumObject).filter((value) => typeof value === 'string')

export default {
  component: InlineLoader,
  title: 'Loaders/InlineLoader',
  args: {
    color: 'text',
  },
  argTypes: {
    color: {
      options: getOptions(InlineLoaderColor),
      control: 'inline-radio',
      description: 'Background color (component has opacity)',
    },
  },
} as Meta

export const Basic: StoryFn<InlineLoaderProps> = (props) => (
  <InlineLoader {...props} />
)

const RowStyle = styled.div`
  display: flex;
  max-width: 300px;
  margin: 10px 0;

  & > div {
    flex-grow: 1;
    flex-basis: 50%;
  }
`

export const WithText: StoryFn = () => (
  <>
    <RowStyle>
      <div>First row</div>
      <InlineLoader />
    </RowStyle>
    <RowStyle>
      <div>Second row</div>
      <InlineLoader />
    </RowStyle>
    <RowStyle>
      <div>Third row</div>
      <InlineLoader />
    </RowStyle>
  </>
)
