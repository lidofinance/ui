import { createRef, forwardRef } from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { LinkProvider, type LinkComponentProps } from './LinkProvider'
import { Anchor } from './Anchor'

const RouterLink = forwardRef<HTMLAnchorElement, LinkComponentProps>(
  ({ children, ...props }, ref) => (
    <a ref={ref} data-router='' {...props}>
      {children}
    </a>
  ),
)
RouterLink.displayName = 'RouterLink'

const ExternalLink = forwardRef<HTMLAnchorElement, LinkComponentProps>(
  ({ children, ...props }, ref) => (
    <a ref={ref} data-external='' {...props}>
      {children}
    </a>
  ),
)
ExternalLink.displayName = 'ExternalLink'

const renderInProvider = (ui: JSX.Element) =>
  render(<LinkProvider component={RouterLink}>{ui}</LinkProvider>)

const isRouted = () => screen.getByRole('link').hasAttribute('data-router')
const isExternal = () => screen.getByRole('link').hasAttribute('data-external')

// mailto first: a preceding `https://` makes CI semgrep flag `:help@` as password-in-url
const EXTERNAL_HREFS = [
  'mailto:help@lido.fi',
  'https://lido.fi',
  '//cdn.lido.fi/a.pdf',
]

describe('Anchor', () => {
  it('renders a plain anchor without a provider', () => {
    render(<Anchor href='/keys'>Keys</Anchor>)
    expect(isRouted()).toBe(false)
    expect(screen.getByRole('link').getAttribute('href')).toBe('/keys')
  })

  it('routes internal hrefs through the provider component and forwards ref', () => {
    const ref = createRef<HTMLAnchorElement>()
    renderInProvider(
      <Anchor ref={ref} href='/keys' className='x'>
        Keys
      </Anchor>,
    )
    const link = screen.getByRole('link')
    expect(isRouted()).toBe(true)
    expect(link.getAttribute('href')).toBe('/keys')
    expect(link.className).toBe('x')
    expect(ref.current).toBe(link)
  })

  it('routes relative and query hrefs', () => {
    renderInProvider(<Anchor href='keys?tab=1'>Keys</Anchor>)
    expect(isRouted()).toBe(true)
  })

  it.each(EXTERNAL_HREFS)('keeps %s as a plain anchor', (href) => {
    renderInProvider(<Anchor href={href}>Out</Anchor>)
    expect(isRouted()).toBe(false)
  })

  it('keeps target=_blank as a plain anchor', () => {
    renderInProvider(
      <Anchor href='/keys' target='_blank'>
        Keys
      </Anchor>,
    )
    expect(isRouted()).toBe(false)
  })

  it('keeps download links as plain anchors', () => {
    renderInProvider(
      <Anchor href='/exports/keys.csv' download>
        Keys
      </Anchor>,
    )
    expect(isRouted()).toBe(false)
  })

  it('routes target=_self', () => {
    renderInProvider(
      <Anchor href='/keys' target='_self'>
        Keys
      </Anchor>,
    )
    expect(isRouted()).toBe(true)
  })

  describe('externalComponent', () => {
    const renderWithBoth = (ui: JSX.Element) =>
      render(
        <LinkProvider component={RouterLink} externalComponent={ExternalLink}>
          {ui}
        </LinkProvider>,
      )

    it.each(EXTERNAL_HREFS)('renders %s with externalComponent', (href) => {
      renderWithBoth(<Anchor href={href}>Out</Anchor>)
      expect(isExternal()).toBe(true)
      expect(isRouted()).toBe(false)
    })

    it('keeps target and rel on external links', () => {
      renderWithBoth(
        <Anchor href='https://lido.fi' target='_blank' rel='noopener'>
          Out
        </Anchor>,
      )
      const link = screen.getByRole('link')
      expect(isExternal()).toBe(true)
      expect(link.getAttribute('target')).toBe('_blank')
      expect(link.getAttribute('rel')).toBe('noopener')
    })

    it('routes internal hrefs with component, not externalComponent', () => {
      renderWithBoth(<Anchor href='/keys'>Keys</Anchor>)
      expect(isRouted()).toBe(true)
      expect(isExternal()).toBe(false)
    })

    it('does not use externalComponent for hash links', () => {
      renderWithBoth(<Anchor href='#section'>Out</Anchor>)
      expect(isExternal()).toBe(false)
      expect(isRouted()).toBe(false)
    })

    it('renders a plain anchor without href', () => {
      const { container } = renderWithBoth(<Anchor>Disabled</Anchor>)
      const a = container.querySelector('a')
      expect(a?.hasAttribute('data-router')).toBe(false)
      expect(a?.hasAttribute('data-external')).toBe(false)
      expect(a?.hasAttribute('href')).toBe(false)
    })

    it('renders internal hrefs plain when only externalComponent is given', () => {
      render(
        <LinkProvider externalComponent={ExternalLink}>
          <Anchor href='/keys'>Keys</Anchor>
        </LinkProvider>,
      )
      expect(isExternal()).toBe(false)
      expect(isRouted()).toBe(false)
    })

    it('forwards ref through externalComponent', () => {
      const ref = createRef<HTMLAnchorElement>()
      renderWithBoth(
        <Anchor ref={ref} href='https://lido.fi'>
          Out
        </Anchor>,
      )
      expect(ref.current).toBe(screen.getByRole('link'))
    })
  })
})
