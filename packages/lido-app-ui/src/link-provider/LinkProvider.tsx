import {
  createContext,
  useContext,
  useMemo,
  type AnchorHTMLAttributes,
  type ReactNode,
  type Ref,
} from 'react'

/** Augment via `declare module '@lidofinance/lido-app-ui'` to type router-only props (e.g. Next's `prefetch`), set per link with `linkProps`. */
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface LinkRouterProps {}

export type LinkComponentProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  LinkRouterProps & {
    href: string
    ref?: Ref<HTMLAnchorElement>
  }

/** Wrap adapters in `forwardRef`: under React 18 `ref` arrives as the second argument, never as a prop. */
export type LinkComponent = (props: LinkComponentProps) => ReactNode

export type LinkComponents = {
  /** Renders in-app hrefs (relative, not hash, `download` or non-`_self` `target`). */
  component?: LinkComponent
  /** Renders absolute URLs, including `mailto:` and protocol-relative `//`. */
  externalComponent?: LinkComponent
}

const LinkContext = createContext<LinkComponents>({})

export type LinkProviderProps = LinkComponents & {
  children?: ReactNode
}

/** Renders app-ui links with your components: `component` for in-app hrefs, `externalComponent` for absolute URLs. Both must be `forwardRef` components forwarding `ref` to an `<a>`, and stable module-level references, or every link remounts each render. */
export const LinkProvider = ({
  component,
  externalComponent,
  children,
}: LinkProviderProps) => {
  const value = useMemo(
    () => ({ component, externalComponent }),
    [component, externalComponent],
  )
  return <LinkContext.Provider value={value}>{children}</LinkContext.Provider>
}

export const useLinkComponents = () => useContext(LinkContext)
