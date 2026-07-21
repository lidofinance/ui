import React from 'react'
import { render } from '@testing-library/react'
import * as components from './index.js'

type ComponentName = keyof typeof components

describe('icons', () => {
  Object.keys(components)
    .filter((key) => typeof components[key as ComponentName] === 'object')
    .map((iconName) => {
      const Icon = components[iconName as ComponentName]

      it(`${iconName} renders correctly`, () => {
        const { container } = render(<Icon />)
        const { nodeName, childNodes } = container.firstChild || {}

        expect(nodeName).toBe('svg')
        expect(childNodes?.length).toBeGreaterThan(0)
      })
    })
})
