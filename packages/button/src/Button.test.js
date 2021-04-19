import { render } from '@testing-library/react'
import 'jest-styled-components'

import Button from './Button'

it('renders correctly', () => {
  const { container } = render(<Button>Test</Button>)

  expect(container.firstChild).toMatchSnapshot()
})
