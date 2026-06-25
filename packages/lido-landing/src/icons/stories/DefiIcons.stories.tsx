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
      <div style={{ marginBottom: '20px' }}>
        Click on the icon to copy its name to clipboard
      </div>
      {renderIconGrid(DefiProjectIconsComponents, 50, 50, 110)}
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
      <div style={{ marginBottom: '20px' }}>
        Click on the icon to copy its name to clipboard
      </div>
      {renderIconGrid(NetworkIconsComponents, 50, 50, 110)}
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
        Wallet icons
      </h2>
      <div style={{ marginBottom: '20px' }}>
        Click on the icon to copy its name to clipboard
      </div>
      {renderIconGrid(WalletIconsComponents, 50, 50, 110)}
    </div>
  )
}

Wallets.parameters = {
  actions: { disable: true },
  controls: { disable: true },
  docs: { disable: true },
}
