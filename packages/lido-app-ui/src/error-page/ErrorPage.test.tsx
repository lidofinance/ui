import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { ErrorPage } from './ErrorPage'

describe('ErrorPage', () => {
  it('renders the 404 preset', () => {
    render(<ErrorPage code='404' />)
    expect(screen.getByText('404')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: 'Page not found' }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/doesn’t exist or has been moved/),
    ).toBeInTheDocument()
  })

  it('renders the 500 preset', () => {
    render(<ErrorPage code='500' />)
    expect(screen.getByText('500')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: 'Something went wrong' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/trouble loading this page/)).toBeInTheDocument()
  })

  it('lets props override the preset', () => {
    render(
      <ErrorPage code='404' title='Access denied' description='No access.' />,
    )
    expect(screen.getByText('404')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Access denied' }),
    ).toBeInTheDocument()
    expect(screen.getByText('No access.')).toBeInTheDocument()
    expect(screen.queryByText('Page not found')).not.toBeInTheDocument()
  })

  it('renders only the code for an unknown code', () => {
    render(<ErrorPage dataTestId={{ root: 'e' }} code='403' />)
    const el = screen.getByTestId('e')
    expect(screen.getByText('403')).toBeInTheDocument()
    expect(el.querySelector('h1')).not.toBeInTheDocument()
    expect(el.querySelector('p')).not.toBeInTheDocument()
  })

  it('ignores prototype keys as codes', () => {
    render(<ErrorPage dataTestId={{ root: 'e' }} code='toString' />)
    const el = screen.getByTestId('e')
    expect(el.textContent).toBe('toString')
    expect(el.querySelector('h1')).not.toBeInTheDocument()
    expect(el.querySelector('p')).not.toBeInTheDocument()
  })

  it('accepts a numeric code and resolves its preset', () => {
    render(<ErrorPage code={404} />)
    expect(screen.getByText('404')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Page not found' }),
    ).toBeInTheDocument()
  })

  it('omits empty title and description instead of rendering empty elements', () => {
    render(
      <ErrorPage
        dataTestId={{ root: 'e' }}
        code='404'
        title={false}
        description=''
      />,
    )
    const el = screen.getByTestId('e')
    expect(el.querySelector('h1')).not.toBeInTheDocument()
    expect(el.querySelector('p')).not.toBeInTheDocument()
  })

  it('renders the action slot', () => {
    render(<ErrorPage code='500' action={<button>Try again</button>} />)
    expect(
      screen.getByRole('button', { name: 'Try again' }),
    ).toBeInTheDocument()
  })

  it('omits code, description and action when not provided', () => {
    render(<ErrorPage dataTestId={{ root: 'e' }} title='Oops' />)
    const el = screen.getByTestId('e')
    expect(el.querySelector('p')).not.toBeInTheDocument()
    expect(el.textContent).toBe('Oops')
  })

  it('spreads className and rest props', () => {
    render(<ErrorPage data-testid='e' className='x' />)
    expect(screen.getByTestId('e')).toHaveClass('x')
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
    expect(screen.getByTestId('root')).toBeInTheDocument()
    expect(screen.getByTestId('code').textContent).toBe('404')
    expect(screen.getByTestId('title').textContent).toBe('Page not found')
    expect(screen.getByTestId('description').tagName).toBe('P')
    expect(screen.getByTestId('action').textContent).toBe('A')
  })
})
