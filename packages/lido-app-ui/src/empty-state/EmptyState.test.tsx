import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { EmptyState } from '.'

describe('EmptyState', () => {
  it('renders title and description', () => {
    render(<EmptyState title='Nothing here' description='Try again later' />)
    expect(screen.getByText('Nothing here')).toBeDefined()
    expect(screen.getByText('Try again later')).toBeDefined()
  })

  it('renders optional action and illustration', () => {
    render(
      <EmptyState
        title='Empty'
        illustration={<span>art</span>}
        action={<button>Retry</button>}
      />,
    )
    expect(screen.getByText('art')).toBeDefined()
    expect(screen.getByRole('button', { name: 'Retry' })).toBeDefined()
  })

  it('omits empty slots', () => {
    const { container } = render(<EmptyState title='Empty' />)
    expect(
      container.firstElementChild?.firstElementChild?.children,
    ).toHaveLength(1)
  })

  it('renders without a title', () => {
    render(<EmptyState description='Only text' dataTestId={{ root: 'r' }} />)
    expect(screen.getByTestId('r').firstElementChild?.children).toHaveLength(1)
  })

  it('omits boolean and empty-string slots', () => {
    render(
      <EmptyState
        title={false}
        description=''
        action={null}
        dataTestId={{ root: 'r' }}
      />,
    )
    expect(screen.getByTestId('r').firstElementChild?.children).toHaveLength(0)
  })

  it('applies size and fill classes', () => {
    render(
      <EmptyState
        title='Empty'
        size='large'
        fill
        dataTestId={{ root: 'es' }}
      />,
    )
    const cls = screen.getByTestId('es').className
    expect(cls).toContain('large')
    expect(cls).toContain('fill')
  })

  it('forwards ref and dataTestId slots', () => {
    const ref = createRef<HTMLDivElement>()
    render(
      <EmptyState
        ref={ref}
        title='T'
        description='D'
        dataTestId={{ root: 'r', title: 't', description: 'd' }}
      />,
    )
    expect(ref.current).toBe(screen.getByTestId('r'))
    expect(screen.getByTestId('t').textContent).toBe('T')
    expect(screen.getByTestId('d').textContent).toBe('D')
  })
})
