import { Meta } from '@storybook/react'
import React from 'react'
import * as LidoProjectIconsComponents from '../components/lido/projects'
import * as LidoTeamsIconsComponents from '../components/lido/teams'
import { renderIconGrid } from './IconStoryUtils'

export default {
  title: 'Icons/All/Lido Illustrations',

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

export const LidoProjects = () => {
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
        Lido Project Icons
      </h2>
      <div style={{ marginBottom: '20px' }}>
        Click on the icon to copy its name to clipboard
      </div>

      {renderIconGrid(LidoProjectIconsComponents, 100, 100, 110)}
    </div>
  )
}

LidoProjects.parameters = {
  actions: { disable: true },
  controls: { disable: true },
  docs: { disable: true },
}

export const LidoTeams = () => {
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
        Lido Teams Icons
      </h2>
      <div style={{ marginBottom: '20px' }}>
        Click on the icon to copy its name to clipboard
      </div>
      {renderIconGrid(LidoTeamsIconsComponents, 100, 100, 110)}
    </div>
  )
}

LidoTeams.parameters = {
  actions: { disable: true },
  controls: { disable: true },
  docs: { disable: true },
}
