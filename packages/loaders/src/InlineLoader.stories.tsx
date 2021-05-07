import { Story } from '@storybook/react'
import { InlineLoaderProps, InlineLoaderColors } from './types'
import theme from '@lidofinance/theme'
import styled from 'styled-components'
import InlineLoader from './InlineLoader'

export default {
  component: InlineLoader,
  title: 'Lido UI/Loaders/InlineLoader',
}

const WrapperStyle = styled.div<{ $color: string }>`
  padding: 30px 40px;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  box-sizing: border-box;
  background: ${(props) => props.$color};
`

export const Basic: Story<InlineLoaderProps> = (props) => (
  <WrapperStyle $color={theme.colors.controlBg}>
    <InlineLoader {...props} />
  </WrapperStyle>
)

Basic.parameters = {
  layout: 'fullscreen',
}

Basic.args = {
  color: 'text',
}

Basic.argTypes = {
  color: {
    options: Object.keys(theme.colors) as InlineLoaderColors[],
    control: 'select',
    description: 'Background color (component has opacity)',
  },
}

export const DarkBg: Story = () => (
  <WrapperStyle $color={theme.colors.text}>
    <InlineLoader color='controlBg' />
  </WrapperStyle>
)

DarkBg.parameters = {
  layout: 'fullscreen',
}

const RowStyle = styled.div`
  display: flex;
  max-width: 300px;
  margin: 10px 0;

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
