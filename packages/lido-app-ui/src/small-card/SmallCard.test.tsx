import { createRef } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { LinkProvider } from '../link-provider'
import { RouterLink } from '../link-provider/linkStubs.test-utils'
import { SmallCard } from './SmallCard'
import styles from './SmallCard.module.css'

describe('SmallCard with LinkProvider', () => {
  it('routes internal links', () => {
    render(
      <LinkProvider component={RouterLink}>
        <SmallCard href='/vaults' title='Vaults' />
      </LinkProvider>,
    )
    expect(screen.getByRole('link')).toHaveAttribute('data-router')
  })
})

describe('SmallCard external', () => {
  it('sets target and rel', () => {
    render(<SmallCard href='/vaults' title='Vaults' external />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    expect(link).not.toHaveAttribute('external')
  })
})

describe('SmallCard as button', () => {
  it('renders a button without href', () => {
    const onClick = vi.fn()
    render(<SmallCard title='Sentinel' onClick={onClick} />)
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('type', 'button')
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalledTimes(1)
    expect(screen.queryByRole('link')).toBeNull()
  })

  it('is natively disabled', () => {
    const onClick = vi.fn()
    render(<SmallCard title='x' disabled onClick={onClick} />)
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
    fireEvent.click(button)
    expect(onClick).not.toHaveBeenCalled()
  })

  it('renders no div or p inside the card', () => {
    const { container } = render(
      <SmallCard
        title='x'
        image={<img alt='' />}
        description='d'
        footer='f'
        onClick={() => {}}
      />,
    )
    expect(container.querySelector('button div, button p')).toBeNull()
  })
})

describe('SmallCard fill', () => {
  it('adds the fill class only with fill', () => {
    const { rerender } = render(
      <SmallCard title='x' href='/a' dataTestId={{ root: 'card' }} />,
    )
    expect(screen.getByTestId('card')).not.toHaveClass(styles.fill)
    rerender(
      <SmallCard title='x' href='/a' fill dataTestId={{ root: 'card' }} />,
    )
    expect(screen.getByTestId('card')).toHaveClass(styles.fill)
  })

  it('forwards the ref to the anchor', () => {
    const ref = createRef<HTMLAnchorElement>()
    render(<SmallCard ref={ref} href='/a' title='Card' />)
    expect(ref.current).toBe(screen.getByRole('link'))
  })

  it('forwards the ref to the button without href', () => {
    const ref = createRef<HTMLButtonElement>()
    render(<SmallCard ref={ref} title='Card' onClick={() => {}} />)
    expect(ref.current).toBe(screen.getByRole('button'))
  })
})
