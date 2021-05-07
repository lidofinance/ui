import { Story } from '@storybook/react'
import { LoaderProps, LoaderColors } from './types'
import theme from '@lidofinance/theme'
import Loader from './Loader'

export default {
  component: Loader,
  title: 'Lido UI/Loaders/Loader',
}

export const Basic: Story<LoaderProps> = (props) => <Loader {...props} />

Basic.args = {
  color: 'main',
  size: 'medium',
}

Basic.argTypes = {
  color: {
    options: Object.keys(theme.colors) as LoaderColors[],
    control: 'select',
    description: 'Loader color',
  },
  size: {
    options: ['large', 'medium'],
    description: 'Loader size',
    control: 'radio',
  },
}
