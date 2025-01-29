import { StoryFn, Meta } from '@storybook/react'
import { WaveLoader, WaveLoaderProps } from './WaveLoader'

export default {
  component: WaveLoader,
  title: 'Buttons/WaveLoader',
  args: {
    isVisible: true,
    scale: 1,
    variant: 'opaque',
  },
  argTypes: {
    variant: {
      options: ['transparent', 'opaque'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta

export const Basic: StoryFn<WaveLoaderProps> = (props) => (
  <WaveLoader {...props} />
)
