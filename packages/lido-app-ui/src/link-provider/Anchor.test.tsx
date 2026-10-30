import { createRef } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { LinkProvider } from './LinkProvider'
import { ExternalLink, RouterLink } from './linkStubs.test-utils'
import { Anchor } from './Anchor'

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
    expect(screen.getByRole('link')).toHaveAttribute('href', '/keys')
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
    expect(link).toHaveAttribute('href', '/keys')
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

  it('routes download={false}', () => {
    renderInProvider(
      <Anchor href='/keys' download={false}>
        Keys
      </Anchor>,
    )
    expect(isRouted()).toBe(true)
  })

  describe('external', () => {
    it('sets target and rel and keeps relative links off the router', () => {
      renderInProvider(
        <Anchor href='/x' external>
          X
        </Anchor>,
      )
      const a = screen.getByRole('link', { name: 'X' })
      expect(a).toHaveAttribute('target', '_blank')
      expect(a).toHaveAttribute('rel', 'noopener noreferrer')
      expect(isRouted()).toBe(false)
    })

    it('lets an explicit rel win', () => {
      render(
        <Anchor href='/x' external rel='noopener'>
          X
        </Anchor>,
      )
      expect(screen.getByRole('link')).toHaveAttribute('rel', 'noopener')
    })
  })

  describe('disabled', () => {
    it('renders an href-less link that ignores clicks, tabIndex and routing', () => {
      const onClick = vi.fn()
      renderInProvider(
        <Anchor href='/x' disabled onClick={onClick} tabIndex={0}>
          X
        </Anchor>,
      )
      const a = screen.getByRole('link', { name: 'X' })
      expect(a).not.toHaveAttribute('href')
      expect(a).toHaveAttribute('aria-disabled', 'true')
      expect(a).not.toHaveAttribute('tabindex')
      expect(isRouted()).toBe(false)
      fireEvent.click(a)
      expect(onClick).not.toHaveBeenCalled()
    })
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
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener')
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
      expect(a).not.toHaveAttribute('data-router')
      expect(a).not.toHaveAttribute('data-external')
      expect(a).not.toHaveAttribute('href')
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

describe('Anchor linkProps', () => {
  const linkProps = { 'data-prefetch': 'false' }

  it('reaches the provider component', () => {
    renderInProvider(
      <Anchor href='/keys' linkProps={linkProps}>
        Keys
      </Anchor>,
    )
    expect(screen.getByRole('link')).toHaveAttribute('data-prefetch', 'false')
  })

  it('never reaches a plain anchor', () => {
    render(
      <Anchor href='/keys' linkProps={linkProps}>
        Keys
      </Anchor>,
    )
    expect(screen.getByRole('link')).not.toHaveAttribute('data-prefetch')
  })

  it('stays off the anchor when the link bypasses the provider', () => {
    renderInProvider(
      <Anchor href='#top' linkProps={linkProps}>
        Top
      </Anchor>,
    )
    expect(screen.getByRole('link')).not.toHaveAttribute('data-prefetch')
  })
})
