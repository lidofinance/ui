import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { ErrorPage } from './ErrorPage'

describe('ErrorPage', () => {
  it('renders the 404 preset', () => {
    render(<ErrorPage code='404' />)
    expect(screen.getByText('404')).toBeTruthy()
    expect(
      screen.getByRole('heading', { level: 1, name: 'Page not found' }),
    ).toBeTruthy()
    expect(screen.getByText(/doesn’t exist or has been moved/)).toBeTruthy()
  })

  it('renders the 500 preset', () => {
    render(<ErrorPage code='500' />)
    expect(screen.getByText('500')).toBeTruthy()
    expect(
      screen.getByRole('heading', { level: 1, name: 'Something went wrong' }),
    ).toBeTruthy()
    expect(screen.getByText(/trouble loading this page/)).toBeTruthy()
  })

  it('lets props override the preset', () => {
    render(
      <ErrorPage code='404' title='Access denied' description='No access.' />,
    )
    expect(screen.getByText('404')).toBeTruthy()
    expect(screen.getByRole('heading', { name: 'Access denied' })).toBeTruthy()
    expect(screen.getByText('No access.')).toBeTruthy()
    expect(screen.queryByText('Page not found')).toBeNull()
  })

  it('renders only the code for an unknown code', () => {
    render(<ErrorPage data-testid='e' code='403' />)
    const el = screen.getByTestId('e')
    expect(screen.getByText('403')).toBeTruthy()
    expect(el.querySelector('h1')).toBeNull()
    expect(el.querySelector('p')).toBeNull()
  })

  it('ignores prototype keys as codes', () => {
    render(<ErrorPage data-testid='e' code='toString' />)
    const el = screen.getByTestId('e')
    expect(el.textContent).toBe('toString')
    expect(el.querySelector('h1')).toBeNull()
    expect(el.querySelector('p')).toBeNull()
  })

  it('renders the action slot', () => {
    render(<ErrorPage code='500' action={<button>Try again</button>} />)
    expect(screen.getByRole('button', { name: 'Try again' })).toBeTruthy()
  })

  it('omits code, description and action when not provided', () => {
    render(<ErrorPage data-testid='e' title='Oops' />)
    const el = screen.getByTestId('e')
    expect(el.querySelector('p')).toBeNull()
    expect(el.textContent).toBe('Oops')
  })

  it('spreads className and rest props', () => {
    render(<ErrorPage data-testid='e' className='x' />)
    expect(screen.getByTestId('e').classList.contains('x')).toBe(true)
  })

  it('applies dataTestId to each part', () => {
    render(
      <ErrorPage
        code='404'
        action={<span>A</span>}
        dataTestId={{
          root: 'root',
          code: 'code',
          title: 'title',
          description: 'description',
          action: 'action',
        }}
      />,
    )
    expect(screen.getByTestId('root')).toBeTruthy()
    expect(screen.getByTestId('code').textContent).toBe('404')
    expect(screen.getByTestId('title').textContent).toBe('Page not found')
    expect(screen.getByTestId('description').tagName).toBe('P')
    expect(screen.getByTestId('action').textContent).toBe('A')
  })
})
