import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { MessageBox } from './MessageBox'

describe('MessageBox', () => {
  it('renders headline and description', () => {
    render(<MessageBox headline='Head'>Body</MessageBox>)
    expect(screen.getByText('Head')).toBeInTheDocument()
    expect(screen.getByText('Body')).toBeInTheDocument()
  })

  it('omits the description node without children', () => {
    render(<MessageBox headline='Head' dataTestId={{ description: 'desc' }} />)
    expect(screen.queryByTestId('desc')).toBeNull()
  })

  it('toggles the icon', () => {
    const { rerender } = render(<MessageBox dataTestId={{ icon: 'icon' }} />)
    expect(screen.getByTestId('icon')).toBeInTheDocument()
    rerender(<MessageBox icon={false} dataTestId={{ icon: 'icon' }} />)
    expect(screen.queryByTestId('icon')).toBeNull()
  })

  it('renders the action with its test id', () => {
    render(
      <MessageBox action={<button>View</button>} dataTestId={{ action: 'act' }}>
        Body
      </MessageBox>,
    )
    expect(screen.getByTestId('act')).toContainElement(
      screen.getByRole('button', { name: 'View' }),
    )
  })

  it('omits the action wrapper by default', () => {
    render(<MessageBox dataTestId={{ action: 'act' }}>Body</MessageBox>)
    expect(screen.queryByTestId('act')).toBeNull()
  })
})
