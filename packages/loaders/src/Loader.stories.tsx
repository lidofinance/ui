import { Story } from '@storybook/react'
import { LoaderProps, LoaderColors } from './types'
import { themeDefault } from '@lidofinance/theme'
import Loader from './Loader'

export default {
  component: Loader,
  title: 'Loaders/Loader',
}

export const Basic: Story<LoaderProps> = (props) => <Loader {...props} />

Basic.args = {
  color: 'main',
  size: 'medium',
}

Basic.argTypes = {
  color: {
    options: Object.keys(themeDefault.colors) as LoaderColors[],
    control: 'select',
    description: 'Loader color',
  },
  size: {
    options: ['large', 'medium'],
    description: 'Loader size',
    control: 'radio',
  },
}
