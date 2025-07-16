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
    </h2>
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
      </h2>
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
          these icons can not be custom colored
        </div>
      </h2>
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
      </h2>
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
      </h2>
      {renderIconGrid(StrategyIconsComponents, 36, 36, 110)}
    </div>
  )
}

Strategy.parameters = {
  actions: { disable: true },
  controls: { disable: true },
}
