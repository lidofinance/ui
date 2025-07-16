import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import * as BaseIconsComponents from '../components/base'
import * as DefiProjectIconsComponents from '../components/defi/defiprojects'
import * as NetworkIconsComponents from '../components/defi/networks'
import * as WalletIconsComponents from '../components/defi/wallets'
import * as GeneralIconsComponents from '../components/general'
import * as LidoProjectIconsComponents from '../components/lido/projects'
import * as LidoTeamsIconsComponents from '../components/lido/teams'
import * as LogotypesIconsComponents from '../components/logo'
import * as StrategyIconsComponents from '../components/strategies'
import * as TokenIconsComponents from '../components/token'
import { GenericIcon, GenericIconProps } from './IconStoryUtils'

const components = {
  ...BaseIconsComponents,
  ...DefiProjectIconsComponents,
  ...NetworkIconsComponents,
  ...WalletIconsComponents,
  ...GeneralIconsComponents,
  ...LogotypesIconsComponents,
  ...LidoProjectIconsComponents,
  ...LidoTeamsIconsComponents,
  ...StrategyIconsComponents,
  ...TokenIconsComponents,
}

export type IconVariants = keyof typeof components
const iconKeys = Object.keys(components).sort() as IconVariants[]

export default {
  title: 'Icons/Generic Icon',
  component: GenericIcon,
  argTypes: {
    type: {
      control: 'select',
      options: iconKeys,
      description: 'Select an icon',
    },
    color: { control: 'color', description: 'Icon color' },
    size: {
      control: { type: 'number', min: 10, max: 100, step: 1 },
      description: 'Size of an icon in px',
    },
  },
} as Meta

export const Icon: StoryFn<GenericIconProps> = (args) => (
  <>
    <h3 style={{ marginBottom: '20px' }}>
      These are generic icon properties. For list of all icons please refer to
      folder All
    </h3>
    <GenericIcon {...args} />
  </>
)

Icon.args = {
  type: iconKeys[0],
  color: 'red',
  size: 40,
}

Icon.parameters = {
  docs: {
    description: {
      story: 'Allows you to select one icon using controls and display it.',
    },
  },
}
