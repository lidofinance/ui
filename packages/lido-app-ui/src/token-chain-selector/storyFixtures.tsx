import {
  Arbitrum,
  Base,
  Ethereum,
  Linea,
  Optimism,
  Robinhood,
  TokenEth,
  TokenWEth,
  Unichain,
} from '../icons'
import type { TokenChainSelectorChain, TokenChainSelectorToken } from '.'

export const demoChains: TokenChainSelectorChain[] = [
  { value: 'ethereum', label: 'Ethereum', icon: <Ethereum /> },
  { value: 'arbitrum', label: 'Arbitrum', icon: <Arbitrum /> },
  { value: 'base', label: 'Base', icon: <Base /> },
  { value: 'optimism', label: 'Optimism', icon: <Optimism /> },
  { value: 'linea', label: 'Linea', icon: <Linea /> },
]

export const demoManyChains: TokenChainSelectorChain[] = [
  ...demoChains,
  { value: 'robinhood', label: 'Robinhood', icon: <Robinhood /> },
  { value: 'unichain', label: 'Unichain', icon: <Unichain /> },
]

const balance = { amount: '2.4288', secondaryAmount: '$6,035.52' }

export const demoTokens: TokenChainSelectorToken[] = [
  {
    value: 'ETH:ethereum',
    label: 'ETH',
    icon: <TokenEth />,
    chain: 'ethereum',
    ...balance,
  },
  {
    value: 'WETH:ethereum',
    label: 'WETH',
    icon: <TokenWEth />,
    chain: 'ethereum',
    ...balance,
  },
  {
    value: 'ETH:arbitrum',
    label: 'ETH',
    icon: <TokenEth />,
    chain: 'arbitrum',
    ...balance,
  },
  {
    value: 'WETH:arbitrum',
    label: 'WETH',
    icon: <TokenWEth />,
    chain: 'arbitrum',
    ...balance,
  },
  {
    value: 'ETH:base',
    label: 'ETH',
    icon: <TokenEth />,
    chain: 'base',
    ...balance,
  },
  {
    value: 'WETH:base',
    label: 'WETH',
    icon: <TokenWEth />,
    chain: 'base',
    ...balance,
  },
]
