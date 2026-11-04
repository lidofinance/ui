import { createRef } from 'react'

import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { Tag } from '../tag'
import { StatCard, StatCardMeta } from '.'

describe('StatCard', () => {
  it('forwards ref and rest props', () => {
    const ref = createRef<HTMLDivElement>()
    render(<StatCard ref={ref} value='1' data-testid='c' />)
    expect(ref.current).toBe(screen.getByTestId('c'))
  })

  it('renders a button link and calls onClick', () => {
    const onClick = vi.fn()
    render(
      <StatCard
        title='TVL'
        value='9,087,872'
        link={{ label: 'Details', onClick }}
      />,
    )
    fireEvent.click(screen.getByRole('button', { name: /details/i }))
    expect(onClick).toHaveBeenCalled()
  })

  it('renders an anchor link when href is set', () => {
    render(<StatCard value='1' link={{ label: 'Details', href: '/x' }} />)
    expect(screen.getByRole('link', { name: /details/i })).toHaveAttribute(
      'href',
      '/x',
    )
  })

  it('renders title, suffix, secondary, tag, description and footer', () => {
    render(
      <StatCard
        title='Bond'
        value='15.4'
        valueSuffix='stETH'
        secondary='$100'
        tag={<Tag variant='success'>+6%</Tag>}
        description='Desc'
        footer={<span>Required bond</span>}
        dataTestId={{ root: 'root', footer: 'footer' }}
      />,
    )
    for (const text of [
      'Bond',
      '15.4',
      'stETH',
      '$100',
      '+6%',
      'Desc',
      'Required bond',
    ]) {
      expect(screen.getByText(text)).toBeInTheDocument()
    }
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  it('applies the hero size', () => {
    render(<StatCard value='1' size='hero' />)
    expect(screen.getByText('1').parentElement?.className).toMatch(/hero/)
  })
})

describe('StatCardMeta', () => {
  it('renders label: value pairs and forwards ref', () => {
    const ref = createRef<HTMLDivElement>()
    render(
      <StatCardMeta
        ref={ref}
        items={[{ label: 'Required', value: '15 stETH' }]}
      />,
    )
    expect(screen.getByText('Required:')).toBeInTheDocument()
    expect(screen.getByText('15 stETH')).toBeInTheDocument()
    expect(ref.current).not.toBeNull()
  })
})
