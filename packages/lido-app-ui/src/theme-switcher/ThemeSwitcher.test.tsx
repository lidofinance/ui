import { createRef, type ComponentProps } from 'react'
import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'

import { ThemeName, ThemeToggleContext } from '@lidofinance/lido-shared-ui'

import { ThemeSwitcher } from './ThemeSwitcher'

const setup = (
  themeName: ThemeName,
  props: ComponentProps<typeof ThemeSwitcher> = {},
) => {
  const toggleTheme = vi.fn()
  render(
    <ThemeToggleContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeSwitcher {...props} />
    </ThemeToggleContext.Provider>,
  )
  return { toggleTheme }
}

describe('ThemeSwitcher', () => {
  it('offers dark theme when light is active', () => {
    setup(ThemeName.light)
    expect(
      screen.getByRole('button', { name: 'Switch to dark theme' }),
    ).toBeInTheDocument()
  })

  it('offers light theme when dark is active', () => {
    setup(ThemeName.dark)
    expect(
      screen.getByRole('button', { name: 'Switch to light theme' }),
    ).toBeInTheDocument()
  })

  it('toggles theme and calls onClick', () => {
    const onClick = vi.fn()
    const { toggleTheme } = setup(ThemeName.light, { onClick })
    fireEvent.click(screen.getByRole('button'))
    expect(toggleTheme).toHaveBeenCalledTimes(1)
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('lets aria-label override the default label', () => {
    setup(ThemeName.light, { 'aria-label': 'Tema' })
    expect(screen.getByRole('button', { name: 'Tema' })).toBeInTheDocument()
  })

  it('offers dark theme and ignores clicks outside a theme provider', () => {
    const onClick = vi.fn()
    render(<ThemeSwitcher onClick={onClick} />)
    const button = screen.getByRole('button', { name: 'Switch to dark theme' })
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('renders both icons so CSS picks one', () => {
    setup(ThemeName.dark)
    expect(screen.getByRole('button').querySelectorAll('svg')).toHaveLength(2)
  })

  it('forwards ref and className', () => {
    const ref = createRef<HTMLButtonElement>()
    setup(ThemeName.light, { ref, className: 'custom' })
    expect(ref.current).toBe(screen.getByRole('button'))
    expect(ref.current).toHaveClass('custom')
  })
})
