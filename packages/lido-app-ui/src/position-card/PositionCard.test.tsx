import { createRef } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { PositionCard, PositionCardStatus } from './PositionCard'
import styles from './PositionCard.module.css'

describe('PositionCard', () => {
  it('renders a static card without an interactive element', () => {
    render(
      <PositionCard
        label='Staked position'
        value='1 ETH'
        secondaryValue='$42,779.90'
        aside='2.3% APR'
        dataTestId={{ action: 'main' }}
      />,
    )
    expect(screen.queryByRole('button')).toBeNull()
    expect(screen.queryByRole('link')).toBeNull()
    expect(screen.getByTestId('main')).not.toHaveClass(styles.interactive)
    expect(screen.getByText('1 ETH')).toBeInTheDocument()
    expect(screen.getByText('2.3% APR')).toBeInTheDocument()
  })

  it('renders a button with onClick and forwards ref', () => {
    const onClick = vi.fn()
    const ref = createRef<HTMLButtonElement>()
    render(
      <PositionCard
        ref={ref as never}
        value='Stake with 2.3% APR'
        variant='disconnected'
        onClick={onClick}
      />,
    )
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('type', 'button')
    expect(ref.current).toBe(button)
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('renders a link with href', () => {
    render(<PositionCard value='1 ETH' href='/stake' />)
    expect(screen.getByRole('link')).toHaveAttribute('href', '/stake')
  })

  it('reflects expanded on the button and swaps the chevron', () => {
    const { rerender } = render(
      <PositionCard
        label='Staked position'
        value='1 ETH'
        expanded={false}
        onClick={() => {}}
      />,
    )
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(button.querySelector('svg')).not.toBeNull()

    rerender(
      <PositionCard
        label='Staked position'
        value='1 ETH'
        expanded
        onClick={() => {}}
      />,
    )
    expect(button).toHaveAttribute('aria-expanded', 'true')
  })

  it('omits the chevron and aria-expanded when expanded is undefined', () => {
    render(
      <PositionCard label='Staked position' value='1 ETH' onClick={() => {}} />,
    )
    const button = screen.getByRole('button')
    expect(button).not.toHaveAttribute('aria-expanded')
    expect(button.querySelector('svg')).toBeNull()
  })

  it('mutes the value for no-position', () => {
    render(
      <PositionCard
        variant='no-position'
        value='No position'
        dataTestId={{ root: 'card' }}
      />,
    )
    expect(screen.getByTestId('card')).toHaveClass(styles.noPosition)
  })

  it('renders status rows as separate actions', () => {
    const onClaim = vi.fn()
    const onCard = vi.fn()
    render(
      <PositionCard
        value='1 ETH'
        onClick={onCard}
        footer={
          <PositionCardStatus action='Claim' onClick={onClaim}>
            14.2 ETH withdrawal ready.
          </PositionCardStatus>
        }
      />,
    )
    const claim = screen.getByRole('button', { name: /withdrawal ready/ })
    expect(claim).toHaveTextContent('Claim')
    fireEvent.click(claim)
    expect(onClaim).toHaveBeenCalledTimes(1)
    expect(onCard).not.toHaveBeenCalled()
  })

  it('toggles the footer with expanded and links it via aria-controls', () => {
    const footer = (
      <PositionCardStatus action='Claim' onClick={() => {}}>
        14.2 ETH withdrawal ready.
      </PositionCardStatus>
    )
    const { rerender } = render(
      <PositionCard
        label='Staked position'
        value='1 ETH'
        expanded={false}
        onClick={() => {}}
        footer={footer}
      />,
    )
    const card = screen.getByRole('button', { name: /Staked position/ })
    expect(screen.queryByText('14.2 ETH withdrawal ready.')).toBeNull()
    expect(card).not.toHaveAttribute('aria-controls')

    rerender(
      <PositionCard
        label='Staked position'
        value='1 ETH'
        expanded
        onClick={() => {}}
        footer={footer}
      />,
    )
    const row = screen.getByText('14.2 ETH withdrawal ready.')
    const controls = card.getAttribute('aria-controls')
    expect(controls).toBeTruthy()
    expect(document.getElementById(controls!)).toContainElement(row)
  })

  it('renders a status row as a link with href', () => {
    render(
      <PositionCardStatus href='/claim' action='Claim'>
        Ready.
      </PositionCardStatus>,
    )
    expect(screen.getByRole('link')).toHaveAttribute('href', '/claim')
  })
})
