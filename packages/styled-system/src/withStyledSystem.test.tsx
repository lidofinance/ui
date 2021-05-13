import styled from 'styled-components'
import withStyledSystem from './withStyledSystem'
import { ThemeProvider, themeDefault } from '@lidofinance/theme'
import { render } from '@testing-library/react'
import 'jest-styled-components'

const StyledComponent = withStyledSystem(styled.div``)
const RegularComponent = withStyledSystem((props: {}) => <div {...props} />)

const testComponent = (
  Component: typeof StyledComponent | typeof RegularComponent
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
        <Component color='main' fontSize={1} margin={2} />
      </ThemeProvider>
    )
    const element = container.firstElementChild

    expect(element).toHaveStyleRule('color', theme.colors.main)
    expect(element).toHaveStyleRule('font-size', `${theme.fontSizes[1]}px`)
    expect(element).toHaveStyleRule('margin', `${theme.space[2]}px`)
  })

  it('use theme breakpoints', () => {
    const theme = themeDefault
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Component margin={[1, 2]} />
      </ThemeProvider>
    )
    const element = container.firstElementChild

    expect(element).toHaveStyleRule('margin', `${theme.space[1]}px`)
    expect(element).toHaveStyleRule('margin', `${theme.space[2]}px`, {
      media: `screen and (min-width:${theme.breakpoints[0]})`,
    })
  })
}

describe('styled components', () => {
  testComponent(StyledComponent)
})

describe('regular components', () => {
  testComponent(RegularComponent)
})
