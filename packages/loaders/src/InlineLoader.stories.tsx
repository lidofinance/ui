import { Story } from '@storybook/react'
import { InlineLoaderProps, InlineLoaderColors } from './types'
import { themeLight, themeDark, themeDefault } from '@lidofinance/theme'
import styled from 'styled-components'
import InlineLoader from './InlineLoader'

export default {
  component: InlineLoader,
  title: 'Loaders/InlineLoader',
}

export const Basic: Story<InlineLoaderProps> = (props) => (
  <InlineLoader {...props} />
)

Basic.args = {
  color: 'text',
}

Basic.argTypes = {
  color: {
    options: Object.keys(themeDefault.colors) as InlineLoaderColors[],
    control: 'select',
    description: 'Background color (component has opacity)',
  },
}

const RowStyle = styled.div`
  display: flex;
  max-width: 300px;
  margin: 10px 0;
  color: ${({ theme }) => theme.colors.text};

  & > div {
    flex-grow: 1;
    flex-basis: 50%;
  }
`

export const WithText = () => (
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
