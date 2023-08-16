import { StoryFn } from '@storybook/react'
import { LoaderProps, LoaderColor, LoaderSize } from './types'
import Loader from './Loader'

const getOptions = (enumObject: Record<string, string | number>) =>
  Object.values(enumObject).filter((value) => typeof value === 'string')

export default {
  component: Loader,
  title: 'Loaders/Loader',
  args: {
    color: 'primary',
    size: 'medium',
  },
  argTypes: {
    color: {
      options: getOptions(LoaderColor),
      control: 'inline-radio',
      description: 'Loader color',
    },
    size: {
      options: getOptions(LoaderSize),
      control: 'inline-radio',
      description: 'Loader size',
    },
  },
}

export const Basic: StoryFn<LoaderProps> = (props) => <Loader {...props} />
