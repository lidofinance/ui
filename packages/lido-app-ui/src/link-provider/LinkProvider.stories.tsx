/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions -- click delegation to stop demo links from navigating */
import {
  createContext,
  forwardRef,
  useContext,
  useState,
  type MouseEvent,
} from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { StorySection } from '../../.storybook/components'
import { IconArrowNarrowUpRight, IconBell } from '../icons'
import { SmallCard } from '../small-card'
import { TextLink } from '../text-link'
import { LinkProvider, type LinkComponentProps } from './LinkProvider'

type Report = (via: string, href: string) => void

const ReportContext = createContext<Report>(() => {})

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
            report(via, props.href)
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

const DemoLinks = ({ withProvider }: { withProvider: boolean }) => {
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
      <StorySection row={false} style={{ gap: 8 }}>
        <TextLink href='/keys'>In-app: /keys</TextLink>
        <TextLink href='keys?tab=1'>Relative with query: keys?tab=1</TextLink>
        <TextLink href='https://lido.fi'>External: https://lido.fi</TextLink>
        <TextLink href='mailto:support@lido.fi'>
          Mailto: support@lido.fi
        </TextLink>
        <TextLink href='#section'>Hash: #section</TextLink>
        <TextLink href='/exports/keys.csv' download>
          Download: /exports/keys.csv
        </TextLink>
        <TextLink href='/keys' target='_blank'>
          target=_blank: /keys
        </TextLink>
      </StorySection>
      <div style={{ width: 248 }}>
        <SmallCard
          logo={<IconBell />}
          icon={<IconArrowNarrowUpRight />}
          title='SmallCard'
          description='In-app: /keys'
          href='/keys'
        />
      </div>
      <p
        style={{
          margin: 0,
          fontFamily: 'var(--lido-app-ui-font-family)',
          fontSize: 14,
          color: 'var(--lido-app-ui-color-text-secondary)',
        }}
      >
        Last click: {last}
      </p>
    </div>
  )

  return (
    <ReportContext.Provider value={(via, href) => setLast(`${via} → ${href}`)}>
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

const meta: Meta<typeof LinkProvider> = {
  title: 'Navigation/LinkProvider',
  component: LinkProvider,
  tags: ['autodocs'],
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        component:
          'Routes app-ui links through your own components. `component` handles in-app hrefs (e.g. Next.js `Link`), `externalComponent` handles absolute URLs; both must forward `ref` to an `<a>`. Without a provider links render a plain `<a>`. Hash links, `download` links and links with a non-`_self` `target` always stay a plain `<a>`. `TextLink` and `SmallCard` use it. Pass stable, module-level components: inline ones remount every link on each render.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => <DemoLinks withProvider />,
  parameters: {
    docs: {
      description: {
        story:
          'Click each link: in-app hrefs report `component`, absolute URLs (including `mailto:`) report `externalComponent`, and hash, `download` and `target="_blank"` links report a plain `<a>`. Navigation is prevented in the demo.',
      },
    },
  },
}

export const WithoutProvider: Story = {
  render: () => <DemoLinks withProvider={false} />,
  parameters: {
    docs: {
      description: {
        story:
          'The same links without a provider: every click is a plain `<a>`.',
      },
    },
  },
}
