/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions -- click delegation to stop demo links from navigating */
import {
  createContext,
  forwardRef,
  useContext,
  useState,
  type MouseEvent,
  type ReactNode,
} from 'react'

import {
  LinkProvider,
  type LinkComponentProps,
} from '../../src/link-provider/LinkProvider'

const ReportContext = createContext<(text: string) => void>(() => {})

const createDemoLink = (via: string) => {
  const DemoLink = forwardRef<HTMLAnchorElement, LinkComponentProps>(
    ({ onClick, ...props }, ref) => {
      const report = useContext(ReportContext)
      return (
        // eslint-disable-next-line jsx-a11y/anchor-has-content -- children arrive via props
        <a
          ref={ref}
          {...props}
          onClick={(event) => {
            onClick?.(event)
            event.preventDefault()
            report(`${via} → ${props.href}`)
          }}
        />
      )
    },
  )
  DemoLink.displayName = `DemoLink(${via})`
  return DemoLink
}

// Module-level on purpose: LinkProvider needs stable component references.
const RouterLink = createDemoLink('component')
const ExternalLink = createDemoLink('externalComponent')

export type DemoRouterProps = {
  withProvider?: boolean
  children?: ReactNode
}

/** Story-only: reports which component handled each link click and never navigates. */
export const DemoRouter = ({
  withProvider = true,
  children,
}: DemoRouterProps) => {
  const [last, setLast] = useState<string>('none yet')

  // Links handled by a provider component already called preventDefault; any
  // other click is a plain <a>, stopped here so Storybook doesn't navigate.
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.defaultPrevented) return
    const anchor = (event.target as HTMLElement).closest('a')
    if (!anchor) return
    event.preventDefault()
    setLast(`plain <a> → ${anchor.getAttribute('href')}`)
  }

  const content = (
    <div onClick={handleClick} style={{ display: 'grid', gap: 24 }}>
      {children}
      <p
        style={{
          margin: 0,
          fontSize: 14,
          color: 'var(--lido-app-ui-color-text-secondary)',
        }}
      >
        Last click: {last}
      </p>
    </div>
  )

  return (
    <ReportContext.Provider value={setLast}>
      {withProvider ? (
        <LinkProvider component={RouterLink} externalComponent={ExternalLink}>
          {content}
        </LinkProvider>
      ) : (
        content
      )}
    </ReportContext.Provider>
  )
}
