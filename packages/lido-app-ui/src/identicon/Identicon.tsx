import cn from 'classnames'
import { type ComponentPropsWithoutRef, forwardRef } from 'react'
import * as ReactJazzicon from 'react-jazzicon'

import styles from './Identicon.module.css'

export type IdenticonDataTestId = {
  root?: string
}

export type IdenticonProps = ComponentPropsWithoutRef<'span'> & {
  address?: string
  size?: number
  dataTestId?: IdenticonDataTestId
}

// react-jazzicon's own `dist/index.js` re-exports its default via an
// Object.defineProperty getter chaining to a nested submodule, rather than a
// plain assignment. esbuild's CJS interop (used by Vite — including when this
// package is only pulled in transitively, e.g. by a consuming app that has no
// direct dependency on react-jazzicon) sets a self-referential `.default`
// before copying the module's own properties, so that nested getter gets
// shadowed: `ReactJazzicon.default` can end up being the raw CJS exports
// object instead of the component. When that happens, the real component is
// one level deeper, at `.default.default`.
const Jazzicon =
  typeof ReactJazzicon.default === 'function'
    ? ReactJazzicon.default
    : (
        ReactJazzicon.default as unknown as {
          default: typeof ReactJazzicon.default
        }
      ).default
const { jsNumberForAddress } = ReactJazzicon

export const Identicon = forwardRef<HTMLSpanElement, IdenticonProps>(
  ({ address, size = 40, className, style, dataTestId, ...rest }, ref) => (
    <span
      ref={ref}
      className={cn(styles.root, !address && styles.empty, className)}
      style={{ width: size, height: size, ...style }}
      aria-hidden='true'
      data-testid={dataTestId?.root}
      {...rest}
    >
      {address ? (
        <Jazzicon diameter={size} seed={jsNumberForAddress(address)} />
      ) : null}
    </span>
  ),
)

Identicon.displayName = 'Identicon'
