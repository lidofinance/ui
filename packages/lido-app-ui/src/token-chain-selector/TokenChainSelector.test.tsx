import { createRef } from 'react'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { ALL_CHAINS, TokenChainSelector } from './TokenChainSelector'
import type {
  TokenChainSelectorChain,
  TokenChainSelectorToken,
} from './TokenChainSelector'

const chains: TokenChainSelectorChain[] = [
  {
    value: 'ethereum',
    label: 'Ethereum',
    icon: <svg data-testid='eth-chain' />,
  },
  {
    value: 'arbitrum',
    label: 'Arbitrum',
    icon: <svg data-testid='arb-chain' />,
  },
  { value: 'linea', label: 'Linea', icon: <svg /> },
]

const tokens: TokenChainSelectorToken[] = [
  {
    value: 'ETH:ethereum',
    label: 'ETH',
    icon: <svg />,
    chain: 'ethereum',
    amount: '1.5',
    secondaryAmount: '$3,000',
  },
  {
    value: 'WETH:ethereum',
    label: 'WETH',
    icon: <svg />,
    chain: 'ethereum',
    disabled: true,
  },
  { value: 'ETH:arbitrum', label: 'ETH', icon: <svg />, chain: 'arbitrum' },
]

const options = () => screen.getAllByRole('option')

describe('TokenChainSelector', () => {
  it('renders chain filters, caption and token options', () => {
    render(<TokenChainSelector tokens={tokens} chains={chains} />)
    const group = screen.getByRole('radiogroup', { name: 'Filter by chain' })
    const radios = within(group).getAllByRole('radio')
    expect(
      radios.map((r) => r.textContent || r.getAttribute('aria-label')),
    ).toEqual(['All', 'Ethereum', 'Arbitrum', 'Linea'])
    expect(radios[0]).toHaveAttribute('aria-checked', 'true')
    expect(screen.getByText('Your tokens')).toBeInTheDocument()
    expect(
      screen.getByRole('listbox', { name: 'Select token' }),
    ).toBeInTheDocument()
    expect(options()).toHaveLength(3)
  })

  it('names options with symbol and chain, shows balance and chain badge', () => {
    render(<TokenChainSelector tokens={tokens} chains={chains} />)
    const first = screen.getByRole('option', { name: 'ETH on Ethereum' })
    expect(first).toHaveTextContent('1.5')
    expect(first).toHaveTextContent('$3,000')
    expect(within(first).getByTestId('eth-chain')).toBeInTheDocument()
    expect(
      screen.getByRole('option', { name: 'ETH on Arbitrum' }),
    ).toBeInTheDocument()
  })

  it('filters tokens by chain and calls onChainChange', () => {
    const onChainChange = vi.fn()
    render(
      <TokenChainSelector
        tokens={tokens}
        chains={chains}
        onChainChange={onChainChange}
      />,
    )
    fireEvent.click(screen.getByRole('radio', { name: 'Arbitrum' }))
    expect(onChainChange).toHaveBeenCalledWith('arbitrum')
    expect(options()).toHaveLength(1)
    expect(screen.getByRole('radio', { name: 'Arbitrum' })).toHaveAttribute(
      'aria-checked',
      'true',
    )

    fireEvent.click(screen.getByRole('radio', { name: 'All' }))
    expect(onChainChange).toHaveBeenLastCalledWith(ALL_CHAINS)
    expect(options()).toHaveLength(3)
  })

  it('shows emptyText when no token is on the chain', () => {
    render(
      <TokenChainSelector
        tokens={tokens}
        chains={chains}
        defaultChain='linea'
        dataTestId={{ empty: 'empty' }}
      />,
    )
    expect(screen.queryByRole('listbox')).toBeNull()
    expect(screen.getByTestId('empty')).toHaveTextContent(
      'No tokens on this chain',
    )
  })

  it('selects a token on click and Enter, ignores disabled ones', () => {
    const onChange = vi.fn()
    render(
      <TokenChainSelector
        tokens={tokens}
        chains={chains}
        onChange={onChange}
      />,
    )
    fireEvent.click(options()[0])
    expect(onChange).toHaveBeenCalledWith('ETH:ethereum')
    expect(options()[0]).toHaveAttribute('aria-selected', 'true')

    fireEvent.click(options()[1])
    expect(options()[1]).toHaveAttribute('aria-disabled', 'true')
    expect(onChange).toHaveBeenCalledTimes(1)

    fireEvent.keyDown(options()[2], { key: 'Enter' })
    expect(onChange).toHaveBeenLastCalledWith('ETH:arbitrum')
  })

  it('stays controlled', () => {
    const onChange = vi.fn()
    render(
      <TokenChainSelector
        tokens={tokens}
        value='ETH:arbitrum'
        onChange={onChange}
      />,
    )
    fireEvent.click(options()[0])
    expect(onChange).toHaveBeenCalledWith('ETH:ethereum')
    expect(options()[2]).toHaveAttribute('aria-selected', 'true')
    expect(options()[0]).toHaveAttribute('aria-selected', 'false')
  })

  it('keeps one tab stop per group and moves focus with the arrows', () => {
    render(
      <TokenChainSelector
        tokens={tokens}
        chains={chains}
        defaultValue='ETH:arbitrum'
      />,
    )
    const [first, disabled, selected] = options()
    expect(selected).toHaveAttribute('tabindex', '0')
    expect(first).toHaveAttribute('tabindex', '-1')

    selected.focus()
    fireEvent.keyDown(selected, { key: 'ArrowUp' })
    // Disabled options are skipped.
    expect(document.activeElement).toBe(first)
    expect(disabled).toHaveAttribute('tabindex', '-1')
    fireEvent.keyDown(first, { key: 'End' })
    expect(document.activeElement).toBe(selected)
  })

  it('selects chains as focus moves with the arrows', () => {
    const onChainChange = vi.fn()
    render(
      <TokenChainSelector
        tokens={tokens}
        chains={chains}
        onChainChange={onChainChange}
      />,
    )
    const all = screen.getByRole('radio', { name: 'All' })
    expect(all).toHaveAttribute('tabindex', '0')
    all.focus()
    fireEvent.keyDown(all, { key: 'ArrowRight' })
    expect(document.activeElement).toBe(
      screen.getByRole('radio', { name: 'Ethereum' }),
    )
    expect(onChainChange).toHaveBeenCalledWith('ethereum')
  })

  it('hides the chain row without chains and the caption with null', () => {
    render(<TokenChainSelector tokens={tokens} caption={null} />)
    expect(screen.queryByRole('radiogroup')).toBeNull()
    expect(screen.queryByText('Your tokens')).toBeNull()
    expect(options()).toHaveLength(3)
  })

  it('uses chainLabel and chainIcon overrides', () => {
    render(
      <TokenChainSelector
        tokens={[
          {
            value: 'x',
            label: 'X',
            icon: <svg />,
            chainLabel: 'Custom',
            chainIcon: <svg data-testid='badge' />,
          },
        ]}
      />,
    )
    const option = screen.getByRole('option', { name: 'X on Custom' })
    expect(within(option).getByTestId('badge')).toBeInTheDocument()
  })

  it('forwards ref and native props', () => {
    const ref = createRef<HTMLDivElement>()
    render(<TokenChainSelector ref={ref} tokens={tokens} id='picker' />)
    expect(ref.current).toHaveAttribute('id', 'picker')
  })
})
