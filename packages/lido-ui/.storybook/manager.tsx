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
        background: 'linear-gradient(90deg, #ff7a59 0%, #d43f2d 100%)',
        color: '#fff',
        fontWeight: 700,
        fontSize: 13,
        boxSizing: 'border-box',
      }}
    >
      {pkg.name} (deprecated)
    </div>,
    document.body,
  )

addons.register('lido-ui/library-banner', () => {
  document.body.style.paddingTop = `${BANNER_HEIGHT}px`

  addons.add('lido-ui/library-banner', {
    type: types.TOOL,
    title: 'library-banner',
    match: () => true,
    render: LibraryBanner,
  })
})
