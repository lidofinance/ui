import { StoryFn, Meta } from '@storybook/react'
import { LidoLogo } from '.'

export default {
  component: LidoLogo,
  title: 'Layout/LidoLogo',
} satisfies Meta

export const Basic: StoryFn = () => <LidoLogo />
