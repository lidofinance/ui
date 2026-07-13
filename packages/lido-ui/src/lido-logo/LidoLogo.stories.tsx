import { StoryFn, Meta } from '@storybook/react'
import { LidoLogo } from './index.js'

export default {
  component: LidoLogo,
  title: 'Layout/LidoLogo',
} as Meta

export const Basic: StoryFn = () => <LidoLogo />
