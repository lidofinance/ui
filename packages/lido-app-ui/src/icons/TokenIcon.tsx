import type { SVGProps } from 'react'
import { TokenEth } from './components/token/TokenEth'
import { TokenStEth } from './components/token/TokenStEth'
import { TokenUsdc } from './components/token/TokenUsdc'
import { TokenUsdt } from './components/token/TokenUsdt'
import { TokenUsdy } from './components/token/TokenUsdy'
import { TokenWEth } from './components/token/TokenWEth'
import { TokenWstEth } from './components/token/TokenWstEth'

export type TokenIconSymbol =
  | 'ETH'
  | 'WETH'
  | 'stETH'
  | 'wstETH'
  | 'USDC'
  | 'USDT'
  | 'USDY'

export type TokenIconProps = SVGProps<SVGSVGElement> & {
  token: TokenIconSymbol
}

const iconBySymbol = {
  ETH: TokenEth,
  WETH: TokenWEth,
  stETH: TokenStEth,
  wstETH: TokenWstEth,
  USDC: TokenUsdc,
  USDT: TokenUsdt,
  USDY: TokenUsdy,
} as const

// True when a symbol has a glyph in the kit — callers with arbitrary token symbols guard
// on this before rendering an icon, so tokens without art render no icon rather than crash.
export const isTokenIcon = (symbol: string): symbol is TokenIconSymbol =>
  Object.hasOwn(iconBySymbol, symbol)

/** Resolves a token symbol to its glyph; symbols without art render nothing, so guard with `isTokenIcon` first. */
export const TokenIcon = ({ token, ...props }: TokenIconProps) => {
  if (!isTokenIcon(token)) return null
  const Icon = iconBySymbol[token]
  return <Icon {...props} />
}
