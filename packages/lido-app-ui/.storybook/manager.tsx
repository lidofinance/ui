import React from 'react'
import { createPortal } from 'react-dom'
import { addons, types } from '@storybook/manager-api'

import pkg from '../package.json'

const BANNER_HEIGHT = 39

const LibraryBanner = () =>
  createPortal(
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: BANNER_HEIGHT,
        zIndex: 2147483647,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(90deg, #7c6fee 0%, #4b2fc9 100%)',
        color: '#fff',
        fontWeight: 700,
        fontSize: 13,
        boxSizing: 'border-box',
      }}
    >
      {pkg.name}
    </div>,
    document.body,
  )

addons.register('lido-app-ui/library-banner', () => {
  document.body.style.paddingTop = `${BANNER_HEIGHT}px`

  addons.add('lido-app-ui/library-banner', {
    type: types.TOOL,
    title: 'library-banner',
    match: () => true,
    render: LibraryBanner,
  })
})
