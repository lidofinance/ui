import {
  forwardRef,
  useRef,
  type HTMLAttributes,
  type KeyboardEvent,
  type ReactNode,
} from 'react'

import cn from 'classnames'

import { useControllableState, useEdgeFade } from '../hooks'
import { IconChevronRight } from '../icons'
import styles from './TokenChainSelector.module.css'

/** `chain` value of the "All" filter. */
export const ALL_CHAINS = 'all'

export type TokenChainSelectorChain = {
  value: string
  /** Accessible name of the chain button, also the default chain caption of its tokens. */
  label: string
  icon: ReactNode
}

export type TokenChainSelectorToken = {
  /** Unique across chains, e.g. `ETH:arbitrum`: the same token on two chains is two options. */
  value: string
  /** Token symbol, e.g. "ETH". */
  label: ReactNode
  /** 32px token glyph. */
  icon: ReactNode
  /** `value` of the token's chain: drives filtering and the default badge and caption. */
  chain?: string
  /** Caption under the symbol; defaults to the chain's `label`. */
  chainLabel?: ReactNode
  /** 12px badge on the token glyph; defaults to the chain's `icon`. */
  chainIcon?: ReactNode
  /** Balance, right-aligned. */
  amount?: ReactNode
  /** Muted line under the balance, e.g. its fiat value. */
  secondaryAmount?: ReactNode
  disabled?: boolean
  /** Plain-text name for the option; defaults to `label` when it is a string. */
  textValue?: string
}

export type TokenChainSelectorDataTestId = {
  root?: string
  chains?: string
  chain?: string
  caption?: string
  list?: string
  option?: string
  empty?: string
}

export type TokenChainSelectorProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  'onChange' | 'defaultValue'
> & {
  tokens: TokenChainSelectorToken[]
  /** Selected token `value`. */
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  /** Chain filter buttons; omit or pass an empty list to hide the row. */
  chains?: TokenChainSelectorChain[]
  /** Active chain filter; `ALL_CHAINS` shows every token. */
  chain?: string
  defaultChain?: string
  onChainChange?: (chain: string) => void
  /** Text of the "All" filter button. */
  allChainsLabel?: ReactNode
  /** Uppercase caption above the list; `null` hides it. */
  caption?: ReactNode
  /** Shown when no token matches the chain filter. */
  emptyText?: ReactNode
  dataTestId?: TokenChainSelectorDataTestId
}

const NAV_KEYS: Record<string, 'prev' | 'next' | 'first' | 'last'> = {
  Home: 'first',
  End: 'last',
}

/** Moves focus among enabled `selector` items inside the handler's element with arrows (`keys`), Home and End; `activate` also clicks the item (radio groups select on focus). */
const handleRovingKey = (
  event: KeyboardEvent<HTMLElement>,
  selector: string,
  keys: { prev: string; next: string },
  { flipInRtl = false, activate = false } = {},
) => {
  if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return
  const container = event.currentTarget
  const items = Array.from(
    container.querySelectorAll<HTMLElement>(selector),
  ).filter((item) => item.getAttribute('aria-disabled') !== 'true')
  const current = items.findIndex((item) => item.contains(event.target as Node))
  if (current === -1) return

  const rtl = flipInRtl && getComputedStyle(container).direction === 'rtl'
  let move = NAV_KEYS[event.key]
  if (event.key === keys.prev) move = rtl ? 'next' : 'prev'
  if (event.key === keys.next) move = rtl ? 'prev' : 'next'
  if (!move) return

  event.preventDefault()
  const next =
    move === 'first'
      ? 0
      : move === 'last'
        ? items.length - 1
        : Math.min(
            Math.max(current + (move === 'next' ? 1 : -1), 0),
            items.length - 1,
          )
  items[next].focus()
  if (activate) items[next].click()
}

/** Token picker panel: an optional row of chain filters ("All" first, scrolls with edge fades when it overflows), a caption and a listbox of tokens with a chain badge and balance. Place it in a `Popover` or `Modal`; size the panel with `className`/`style` and the list scrolls. */
export const TokenChainSelector = forwardRef<
  HTMLDivElement,
  TokenChainSelectorProps
>(
  (
    {
      tokens,
      value,
      defaultValue,
      onChange,
      chains = [],
      chain,
      defaultChain,
      onChainChange,
      allChainsLabel = 'All',
      caption = 'Your tokens',
      emptyText = 'No tokens on this chain',
      className,
      dataTestId,
      ...rest
    },
    ref,
  ) => {
    const [currentValue, setCurrentValue] = useControllableState({
      value,
      defaultValue,
      onChange,
      name: 'TokenChainSelector',
    })
    const [currentChain = ALL_CHAINS, setCurrentChain] = useControllableState({
      value: chain,
      defaultValue: defaultChain,
      onChange: onChainChange,
      name: 'TokenChainSelector',
      prop: 'chain',
    })

    const chainsRef = useRef<HTMLDivElement>(null)
    useEdgeFade(chainsRef)

    const hasChains = chains.length > 0
    const chainByValue = new Map(chains.map((item) => [item.value, item]))
    const visibleTokens =
      !hasChains || currentChain === ALL_CHAINS
        ? tokens
        : tokens.filter((token) => token.chain === currentChain)

    const chainItems: { value: string; label: ReactNode; icon?: ReactNode }[] =
      [{ value: ALL_CHAINS, label: allChainsLabel }, ...chains]
    const chainTabStop = chainItems.some((item) => item.value === currentChain)
      ? currentChain
      : ALL_CHAINS

    const enabledTokens = visibleTokens.filter((token) => !token.disabled)
    const tokenTabStop = enabledTokens.some(
      (token) => token.value === currentValue,
    )
      ? currentValue
      : enabledTokens[0]?.value

    const selectChain = (next: string) => {
      if (next !== currentChain) setCurrentChain(next)
    }

    const selectToken = (token: TokenChainSelectorToken) => {
      if (token.disabled || token.value === currentValue) return
      setCurrentValue(token.value)
    }

    const scrollChains = () => {
      const el = chainsRef.current
      if (!el) return
      const rtl = getComputedStyle(el).direction === 'rtl'
      const delta = el.clientWidth / 2
      el.scrollBy?.({ left: rtl ? -delta : delta, behavior: 'smooth' })
    }

    return (
      <div
        ref={ref}
        className={cn(styles.root, className)}
        data-testid={dataTestId?.root}
        {...rest}
      >
        {hasChains ? (
          <div className={styles.chainsBar}>
            <div
              ref={chainsRef}
              role='radiogroup'
              aria-label={'Filter by chain'}
              tabIndex={-1}
              className={styles.chains}
              data-testid={dataTestId?.chains}
              onKeyDown={(event) =>
                handleRovingKey(
                  event,
                  '[role=radio]',
                  { prev: 'ArrowLeft', next: 'ArrowRight' },
                  { flipInRtl: true, activate: true },
                )
              }
            >
              {chainItems.map((item) => {
                const checked = item.value === currentChain
                const isAll = item.value === ALL_CHAINS
                return (
                  <button
                    key={item.value}
                    type='button'
                    role='radio'
                    aria-checked={checked}
                    aria-label={isAll ? undefined : (item.label as string)}
                    tabIndex={item.value === chainTabStop ? 0 : -1}
                    className={cn(styles.chain, {
                      [styles.chainSelected]: checked,
                      [styles.chainText]: isAll,
                    })}
                    data-testid={dataTestId?.chain}
                    onClick={() => selectChain(item.value)}
                  >
                    {isAll ? (
                      item.label
                    ) : (
                      <span className={styles.chainIcon} aria-hidden='true'>
                        {item.icon}
                      </span>
                    )}
                  </button>
                )
              })}
            </div>
            {/* Pointer shortcut; keyboard users reach hidden chains with the arrows. */}
            <button
              type='button'
              tabIndex={-1}
              aria-hidden='true'
              className={styles.scrollNext}
              onClick={scrollChains}
            >
              <IconChevronRight />
            </button>
          </div>
        ) : null}
        <div className={styles.body}>
          {caption != null ? (
            <p className={styles.caption} data-testid={dataTestId?.caption}>
              {caption}
            </p>
          ) : null}
          {visibleTokens.length > 0 ? (
            <div
              role='listbox'
              aria-label={'Select token'}
              tabIndex={-1}
              className={styles.list}
              data-testid={dataTestId?.list}
              onKeyDown={(event) =>
                handleRovingKey(event, '[role=option]', {
                  prev: 'ArrowUp',
                  next: 'ArrowDown',
                })
              }
            >
              {visibleTokens.map((token) => {
                const tokenChain =
                  token.chain !== undefined
                    ? chainByValue.get(token.chain)
                    : undefined
                const badge = token.chainIcon ?? tokenChain?.icon
                const chainLabel = token.chainLabel ?? tokenChain?.label
                const selected = token.value === currentValue
                return (
                  <div
                    key={token.value}
                    role='option'
                    aria-selected={selected}
                    aria-disabled={token.disabled || undefined}
                    aria-label={
                      token.textValue ??
                      (typeof token.label === 'string' &&
                      typeof chainLabel === 'string'
                        ? `${token.label} on ${chainLabel}`
                        : undefined)
                    }
                    tabIndex={token.value === tokenTabStop ? 0 : -1}
                    className={cn(styles.option, {
                      [styles.optionSelected]: selected,
                      [styles.optionDisabled]: token.disabled,
                    })}
                    data-testid={dataTestId?.option}
                    onClick={() => selectToken(token)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault()
                        selectToken(token)
                      }
                    }}
                  >
                    <span className={styles.tokenIcon} aria-hidden='true'>
                      <span className={styles.tokenGlyph}>{token.icon}</span>
                      {badge != null ? (
                        <span className={styles.tokenBadge}>{badge}</span>
                      ) : null}
                    </span>
                    <span className={styles.tokenName}>
                      <span className={styles.primary}>{token.label}</span>
                      {chainLabel != null ? (
                        <span className={styles.secondary}>{chainLabel}</span>
                      ) : null}
                    </span>
                    {token.amount != null || token.secondaryAmount != null ? (
                      <span className={styles.amount}>
                        {token.amount != null ? (
                          <span className={styles.primary}>{token.amount}</span>
                        ) : null}
                        {token.secondaryAmount != null ? (
                          <span className={styles.secondary}>
                            {token.secondaryAmount}
                          </span>
                        ) : null}
                      </span>
                    ) : null}
                  </div>
                )
              })}
            </div>
          ) : (
            <p className={styles.empty} data-testid={dataTestId?.empty}>
              {emptyText}
            </p>
          )}
        </div>
      </div>
    )
  },
)

TokenChainSelector.displayName = 'TokenChainSelector'
