import { StoryFn, Meta } from '@storybook/react'
import LidoLogo from './LidoLogo'

export default {
  component: LidoLogo,
  title: 'Layout/LidoLogo',
} as Meta

export const Basic: StoryFn = () => <LidoLogo />
