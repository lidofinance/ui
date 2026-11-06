import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Banner } from './Banner'

describe('Banner', () => {
  it('renders title, description, icon and action', () => {
    render(
      <Banner
        icon={<svg />}
        title='Title'
        description='Description'
        action={<button>Go</button>}
        dataTestId={{ root: 'root', icon: 'icon', action: 'action' }}
      />,
    )
    expect(screen.getByText('Title')).toBeInTheDocument()
    expect(screen.getByText('Description')).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
    expect(screen.getByTestId('action')).toBeInTheDocument()
  })

  it('keeps className and rest props on the container root', () => {
    render(<Banner title='T' className='custom' data-testid='root' />)
    const root = screen.getByTestId('root')
    expect(root.className).toContain('custom')
    expect(root.firstElementChild?.textContent).toBe('T')
  })

  it('omits optional parts', () => {
    render(<Banner title='T' dataTestId={{ icon: 'icon', action: 'action' }} />)
    expect(screen.queryByTestId('icon')).toBeNull()
    expect(screen.queryByTestId('action')).toBeNull()
  })
})
