import { forwardRef, useState, type MouseEvent } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { StorySection } from '../../.storybook/components'
import { Breadcrumbs } from '../breadcrumbs'
import { IconArrowNarrowUpRight, IconBell } from '../icons'
import { NavLink } from '../nav-link'
import { SmallCard } from '../small-card'
import { TextLink } from '../text-link'
import { LinkProvider, type LinkComponentProps } from './LinkProvider'

const createLink = (via: string) => {
  const Link = forwardRef<HTMLAnchorElement, LinkComponentProps>(
    ({ onClick, ...props }, ref) => (
      // eslint-disable-next-line jsx-a11y/anchor-has-content, jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions -- children arrive via props; click only prevents navigation
      <a
        ref={ref}
        {...props}
        data-via={via}
        onClick={(event) => {
          onClick?.(event)
          event.preventDefault()
        }}
      />
    ),
  )
  Link.displayName = `Link(${via})`
  return Link
}

const RouterLink = createLink('component')
const ExternalLink = createLink('externalComponent')

const links = (
  <>
    <StorySection row={false} style={{ gap: 8 }}>
      <TextLink href='/keys'>In-app: /keys</TextLink>
      <TextLink href='keys?tab=1'>Relative with query: keys?tab=1</TextLink>
      <TextLink href='https://lido.fi'>External: https://lido.fi</TextLink>
      <TextLink href='mailto:support@lido.fi'>Mailto: support@lido.fi</TextLink>
      <TextLink href='#section'>Hash: #section</TextLink>
      <TextLink href='/exports/keys.csv' download>
        Download: /exports/keys.csv
      </TextLink>
      <TextLink href='/keys' target='_blank'>
        target=_blank: /keys
      </TextLink>
    </StorySection>
    <StorySection style={{ gap: 8 }}>
      <NavLink href='/keys'>NavLink: /keys</NavLink>
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Keys', href: '/keys' },
          { label: 'Details' },
        ]}
      />
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
  </>
)

const lastClick = (event: MouseEvent<HTMLElement>) => {
  const anchor = (event.target as HTMLElement).closest('a')
  if (!anchor) return null
  event.preventDefault()
  return `${anchor.dataset.via ?? 'plain <a>'} → ${anchor.getAttribute('href')}`
}

const meta: Meta<typeof LinkProvider> = {
  title: 'Navigation/LinkProvider',
  component: LinkProvider,
  parameters: {
    controls: { disable: true },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: function Render() {
    const [last, setLast] = useState('none yet')
    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions -- click delegation keeps demo links from navigating
      <div
        onClick={(event) => setLast(lastClick(event) ?? last)}
        style={{ display: 'grid', gap: 24 }}
      >
        <LinkProvider component={RouterLink} externalComponent={ExternalLink}>
          {links}
        </LinkProvider>
        <p>Last click: {last}</p>
      </div>
    )
  },
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
  render: function Render() {
    const [last, setLast] = useState('none yet')
    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions -- click delegation keeps demo links from navigating
      <div
        onClick={(event) => setLast(lastClick(event) ?? last)}
        style={{ display: 'grid', gap: 24 }}
      >
        {links}
        <p>Last click: {last}</p>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'The same links without a provider: every click is a plain `<a>`.',
      },
    },
  },
}
