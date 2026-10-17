import {
  createContext,
  useContext,
  useMemo,
  type AnchorHTMLAttributes,
  type ReactNode,
  type Ref,
} from 'react'

export type LinkComponentProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
  ref?: Ref<HTMLAnchorElement>
}

export type LinkComponent = (props: LinkComponentProps) => ReactNode

export type LinkComponents = {
  component?: LinkComponent
  externalComponent?: LinkComponent
}

const LinkContext = createContext<LinkComponents>({})

export type LinkProviderProps = LinkComponents & {
  children?: ReactNode
}

/** Renders app-ui links with your components: `component` for in-app hrefs (e.g. Next.js `Link`), `externalComponent` for absolute URLs; both must forward `ref` to an `<a>`. Pass stable references (module-level, not inline functions): inline ones remount every link on each render. */
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
