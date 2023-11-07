import { render } from '@testing-library/react'
import { ThemeProvider, themeDefault } from '../theme/index.js'
import 'jest-styled-components'

import { Button } from './Button.js'

it('renders correctly', () => {
  const { container } = render(
    <ThemeProvider theme={themeDefault}>
      <Button>Test</Button>
    </ThemeProvider>,
  )

  expect(container.firstChild?.firstChild).toMatchSnapshot()
})
