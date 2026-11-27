import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { SecurityNote } from './SecurityNote'

describe('SecurityNote', () => {
  it('renders the default copy with a decorative shield', () => {
    render(<SecurityNote dataTestId={{ root: 'note', icon: 'icon' }} />)
    const root = screen.getByTestId('note')
    expect(root.tagName).toBe('P')
    expect(root).toHaveTextContent('Non-custodial. Audited. Open-source.')
    const icon = screen.getByTestId('icon')
    expect(icon).toHaveAttribute('aria-hidden', 'true')
    expect(icon.querySelector('svg')).not.toBeNull()
  })

  it('replaces copy and icon, and hides the icon with null', () => {
    const { rerender } = render(
      <SecurityNote icon={<svg data-testid='custom' />}>Custom</SecurityNote>,
    )
    expect(screen.getByText('Custom')).toBeInTheDocument()
    expect(screen.getByTestId('custom')).toBeInTheDocument()

    rerender(
      <SecurityNote icon={null} dataTestId={{ root: 'note' }}>
        Custom
      </SecurityNote>,
    )
    expect(screen.getByTestId('note').querySelector('svg')).toBeNull()
  })

  it('forwards ref and native props', () => {
    const ref = createRef<HTMLParagraphElement>()
    render(<SecurityNote ref={ref} id='n' className='extra' />)
    expect(ref.current).toHaveAttribute('id', 'n')
    expect(ref.current).toHaveClass('extra')
  })
})
