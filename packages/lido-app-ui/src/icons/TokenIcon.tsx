import type { SVGProps } from 'react'
import { TokenEth } from './components/token/TokenEth'
import { TokenSteth } from './components/token/TokenSteth'
import { TokenWsteth } from './components/token/TokenWsteth'

export type TokenIconSymbol = 'ETH' | 'stETH' | 'wstETH'

export type TokenIconProps = SVGProps<SVGSVGElement> & {
  token: TokenIconSymbol
}

const iconBySymbol = {
  ETH: TokenEth,
  stETH: TokenSteth,
  wstETH: TokenWsteth,
} as const

// True when a symbol has a glyph in the kit — callers with arbitrary token symbols guard
// on this before rendering an icon, so tokens without art render no icon rather than crash.
export const isTokenIcon = (symbol: string): symbol is TokenIconSymbol =>
  symbol in iconBySymbol

export const TokenIcon = ({ token, ...props }: TokenIconProps) => {
  const Icon = iconBySymbol[token]
  if (!Icon) return null
  return <Icon {...props} />
}
