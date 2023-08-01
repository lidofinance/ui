import React from 'react'
import { render } from '@testing-library/react'
import { LightThemeProvider } from '../theme'
import 'jest-styled-components'
import { Button } from './Button'

it('renders correctly', () => {
  const { container } = render(
    <LightThemeProvider>
      <Button>Test</Button>
    </LightThemeProvider>,
  )

  expect(container.firstChild?.firstChild).toMatchSnapshot()
})
