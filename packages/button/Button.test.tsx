import { render } from '@testing-library/react'
import { ThemeProvider, themeDefault } from '../theme'
import 'jest-styled-components'

import { Button } from './Button'

it('renders correctly', () => {
  const { container } = render(
    <ThemeProvider theme={themeDefault}>
      <Button>Test</Button>
    </ThemeProvider>,
  )

  expect(container.firstChild?.firstChild).toMatchSnapshot()
})
