import { Meta } from '@storybook/react'
import React from 'react'

import * as DefiProjectIconsComponents from '../components/defi/defiprojects'
import * as NetworkIconsComponents from '../components/defi/networks'
import * as WalletIconsComponents from '../components/defi/wallets'
import { renderIconGrid } from './IconStoryUtils'

export default {
  title: 'Icons/All/Defi',

  parameters: {
    controls: { disabled: true },
    docs: {
      page: () => <>Please see icons by categories in the sidebar</>,
      source: {
        code: null,
        type: 'code', // or 'auto' — doesn't matter if code=null
      },
    },
  },
} satisfies Meta

export const DefiProjects = () => {
  return (
    <div>
      <h2
        style={{
          marginBottom: '16px',
          padding: '8px 0',
          borderBottom: '1px solid #eee',
          textTransform: 'capitalize',
        }}
      >
        DeFi Project Icons
      </h2>
      {renderIconGrid(DefiProjectIconsComponents, 36, 36, 110)}
    </div>
  )
}

DefiProjects.parameters = {
  actions: { disable: true },
  controls: { disable: true },
  docs: { disable: true },
}

export const Networks = () => {
  return (
    <div>
      <h2
        style={{
          marginBottom: '16px',
          padding: '8px 0',
          borderBottom: '1px solid #eee',
          textTransform: 'capitalize',
        }}
      >
        Network Icons
      </h2>
      {renderIconGrid(NetworkIconsComponents, 36, 36, 110)}
    </div>
  )
}

Networks.parameters = {
  actions: { disable: true },
  controls: { disable: true },
  docs: { disable: true },
}

export const Wallets = () => {
  return (
    <div>
      <h2
        style={{
          marginBottom: '16px',
          padding: '8px 0',
          borderBottom: '1px solid #eee',
          textTransform: 'capitalize',
        }}
      >
        Icons/Wallets/Katya
      </h2>
      {renderIconGrid(WalletIconsComponents, 36, 36, 110)}
    </div>
  )
}

Wallets.parameters = {
  actions: { disable: true },
  controls: { disable: true },
  docs: { disable: true },
}
