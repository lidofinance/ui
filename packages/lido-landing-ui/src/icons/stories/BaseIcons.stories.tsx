// BaseIcons.stories.tsx

import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import * as BaseIconsComponents from '../components/base'
import * as GeneralIconsComponents from '../components/general'
import * as LogotypesIconsComponents from '../components/logo'
import * as StrategyIconsComponents from '../components/strategies'
import * as TokenIconsComponents from '../components/token'
import { GenericIconProps, renderIconGrid } from './IconStoryUtils'

export default {
  title: 'Icons/All',
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

export const Base: StoryFn<GenericIconProps> = (args) => (
  <div>
    <h2
      style={{
        marginBottom: '16px',
        padding: '8px 0',
        borderBottom: '1px solid #eee',
        textTransform: 'capitalize',
      }}
    >
      Base Icons
      <div
        style={{
          fontSize: '0.7em',
          textTransform: 'none',
          fontWeight: 400,
          margin: '10px 0',
        }}
      >
        {' '}
        can be custom colored (hover to check)
      </div>
    </h2>
    <div style={{ marginBottom: '20px' }}>
      Click on the icon to copy its name to clipboard
    </div>
    {renderIconGrid(BaseIconsComponents, args.size, args.size, 110)}
  </div>
)

Base.parameters = {
  actions: { disable: true },
  controls: { disable: true },
}

export const FullLogotypes = () => {
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
        Full Logotypes Icons
        <div
          style={{
            fontSize: '0.7em',
            textTransform: 'none',
            fontWeight: 400,
            margin: '10px 0',
          }}
        >
          {' '}
          can be custom colored (hover to check)
        </div>
      </h2>

      <div style={{ marginBottom: '20px' }}>
        Click on the icon to copy its name to clipboard
      </div>
      {renderIconGrid(LogotypesIconsComponents, 100, 'auto', 110)}
    </div>
  )
}

FullLogotypes.parameters = {
  title: 'Full Logotypes',
  actions: { disable: true },
  controls: { disable: true },
}

export const General = () => {
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
        General Icons{' '}
        <div
          style={{
            fontSize: '0.7em',
            textTransform: 'none',
            fontWeight: 400,
            margin: '10px 0',
          }}
        >
          {' '}
          can <b>not</b> be custom colored
        </div>
      </h2>
      <div style={{ marginBottom: '20px' }}>
        Click on the icon to copy its name to clipboard
      </div>
      {renderIconGrid(GeneralIconsComponents, 36, 36, 110)}
    </div>
  )
}

General.parameters = {
  actions: { disable: true },
  controls: { disable: true },
}

export const Tokens = () => {
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
        Token Icons
        <div
          style={{
            fontSize: '0.7em',
            textTransform: 'none',
            fontWeight: 400,
            margin: '10px 0',
          }}
        >
          {' '}
          can <b>not</b> be custom colored
        </div>
      </h2>
      <div style={{ marginBottom: '20px' }}>
        Click on the icon to copy its name to clipboard
      </div>
      {renderIconGrid(TokenIconsComponents, 36, 36, 110)}
    </div>
  )
}

Tokens.parameters = {
  actions: { disable: true },
  controls: { disable: true },
}

export const Strategy = () => {
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
        Strategy Icons
        <div
          style={{
            fontSize: '0.7em',
            textTransform: 'none',
            fontWeight: 400,
            margin: '10px 0',
          }}
        >
          {' '}
          can <b>not</b> be custom colored
        </div>
      </h2>
      <div style={{ marginBottom: '20px' }}>
        Click on the icon to copy its name to clipboard
      </div>
      {renderIconGrid(StrategyIconsComponents, 36, 36, 110)}
    </div>
  )
}

Strategy.parameters = {
  actions: { disable: true },
  controls: { disable: true },
}
