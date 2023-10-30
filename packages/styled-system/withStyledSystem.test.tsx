import React, {
  HTMLAttributes,
  createRef,
  forwardRef,
  ForwardedRef,
} from 'react'
import styled from 'styled-components'
import 'jest-styled-components'
import { render } from '@testing-library/react'
import withStyledSystem from './withStyledSystem.js'
import { ThemeProvider, themeDefault } from '../theme/index.js'

const StyledComponent = withStyledSystem(styled.div``)
const RegularComponent = withStyledSystem(
  forwardRef(function Regular(
    props: HTMLAttributes<HTMLDivElement>,
    ref?: ForwardedRef<HTMLDivElement>,
  ) {
    return <div {...props} ref={ref} />
  }),
)

const testComponent = (
  Component: typeof StyledComponent | typeof RegularComponent,
) => {
  it('render children', () => {
    const { container } = render(<Component>Example</Component>)
    expect(container.firstElementChild?.textContent).toBe('Example')
  })

  it('convert props to styles', () => {
    const { container } = render(<Component color='#fff' />)
    const element = container.firstElementChild

    expect(element).toHaveStyleRule('color', '#fff')
  })

  it('filter attributes', () => {
    const { container } = render(<Component color='#fff' width={100} />)
    const element = container.firstElementChild

    expect(element?.getAttribute('color')).toBeNull()
    expect(element?.getAttribute('width')).toBeNull()
    expect(typeof element?.getAttribute('class')).toBe('string')
  })

  it('use theme variables', () => {
    const theme = themeDefault
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Component color='primary' fontSize={1} margin={2} />
      </ThemeProvider>,
    )
    const element = container.firstElementChild?.firstElementChild
    expect(element).toHaveStyleRule('color', theme.colors.primary)
    expect(element).toHaveStyleRule('font-size', `${theme.fontSizes[1]}px`)
    expect(element).toHaveStyleRule('margin', `${theme.space[2]}px`)
  })

  it('use theme breakpoints', () => {
    const theme = themeDefault
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Component margin={[1, 2]} />
      </ThemeProvider>,
    )
    const element = container.firstElementChild?.firstElementChild

    expect(element).toHaveStyleRule('margin', `${theme.space[1]}px`)
    expect(element).toHaveStyleRule('margin', `${theme.space[2]}px`, {
      media: `screen and (min-width:${theme.breakpoints[0]})`,
    })
  })

  it('forward ref', () => {
    const ref = createRef<HTMLDivElement>()
    const { container } = render(<Component ref={ref} />)
    const element = container.firstElementChild

    expect(ref.current).toBeTruthy()
    expect(element).toBe(ref.current)
  })
}

describe('styled components', () => {
  testComponent(StyledComponent)
})

describe('regular components', () => {
  testComponent(RegularComponent)
})
