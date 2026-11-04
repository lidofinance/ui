import { createRef } from 'react'
import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'

import { Callout } from './Callout'

describe('Callout', () => {
  it('renders a link when href is given', () => {
    render(<Callout href='/faq'>Read the FAQ</Callout>)
    expect(
      screen.getByRole('link', { name: /read the faq/i }).getAttribute('href'),
    ).toBe('/faq')
  })

  it('renders a button when onClick is given', () => {
    const onClick = vi.fn()
    render(<Callout onClick={onClick}>Dismiss</Callout>)
    fireEvent.click(screen.getByRole('button', { name: /dismiss/i }))
    expect(onClick).toHaveBeenCalled()
  })

  it('passes onClick to the link with href', () => {
    const onClick = vi.fn()
    render(
      <Callout href='#faq' onClick={onClick}>
        FAQ
      </Callout>,
    )
    fireEvent.click(screen.getByRole('link'))
    expect(onClick).toHaveBeenCalled()
  })

  it('renders a plain div without arrow otherwise', () => {
    render(
      <Callout dataTestId={{ root: 'root', arrow: 'arrow' }}>Message</Callout>,
    )
    expect(screen.queryByRole('link')).toBeNull()
    expect(screen.queryByRole('button')).toBeNull()
    expect(screen.queryByTestId('arrow')).toBeNull()
    expect(screen.getByTestId('root').tagName).toBe('DIV')
  })

  it('shows arrow and icon slots', () => {
    render(
      <Callout
        href='/x'
        icon={<i />}
        dataTestId={{ icon: 'icon', arrow: 'arrow' }}
      >
        Go
      </Callout>,
    )
    expect(screen.getByTestId('icon')).toBeDefined()
    expect(screen.getByTestId('arrow')).toBeDefined()
  })

  it('forwards ref', () => {
    const ref = createRef<HTMLElement>()
    render(<Callout ref={ref}>Text</Callout>)
    expect(ref.current).toBeInstanceOf(HTMLElement)
  })
})
