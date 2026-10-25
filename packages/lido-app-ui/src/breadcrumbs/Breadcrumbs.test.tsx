import { useState } from 'react'

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Breadcrumbs } from './Breadcrumbs'

describe('Breadcrumbs', () => {
  it('marks last item as current and not a link', () => {
    render(
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Page', href: '/p' },
        ]}
      />,
    )
    const current = screen.getByText('Page')
    expect(current).toHaveAttribute('aria-current', 'page')
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getAllByRole('link')).toHaveLength(1)
  })

  it.each([
    ['href', { href: '/home' }],
    ['onClick', { onClick: vi.fn() }],
  ])('renders a disabled item with %s as plain text', (_, props) => {
    render(
      <Breadcrumbs
        items={[{ label: 'Home', disabled: true, ...props }, { label: 'Page' }]}
      />,
    )
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
    expect(screen.getByText('Home').tagName).toBe('SPAN')
  })

  it('keeps anchor-only props off the current item span', () => {
    render(
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          {
            label: 'Keys',
            href: '/keys',
            external: true,
            linkProps: { 'data-x': '1' } as never,
          },
        ]}
      />,
    )
    const current = screen.getByText('Keys')
    expect(current).not.toHaveAttribute('external')
    expect(current).not.toHaveAttribute('linkprops')
  })

  it('renders links for href and passes click event', () => {
    const onClick = vi.fn()
    render(
      <Breadcrumbs
        items={[{ label: 'Home', href: '#home', onClick }, { label: 'Page' }]}
      />,
    )
    const link = screen.getByRole('link', { name: 'Home' })
    expect(link).toHaveAttribute('href', '#home')
    fireEvent.click(link)
    expect(onClick.mock.calls[0][0].type).toBe('click')
  })

  it('renders buttons for items without href', () => {
    const onClick = vi.fn()
    render(
      <Breadcrumbs items={[{ label: 'Home', onClick }, { label: 'Page' }]} />,
    )
    fireEvent.click(screen.getByRole('button', { name: 'Home' }))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('spreads item props and renders inert ancestors as plain text', () => {
    render(
      <Breadcrumbs
        items={[
          {
            label: 'Home',
            href: '#home',
            id: 'crumb',
            target: '_blank',
          },
          { label: 'Section' },
          { label: 'Page' },
        ]}
      />,
    )
    const link = screen.getByRole('link', { name: 'Home' })
    expect(link).toHaveAttribute('target', '_blank')
    expect(link.id).toBe('crumb')
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
    expect(screen.getByText('Section').tagName).toBe('SPAN')
  })

  const stubWidths = (
    el: HTMLElement,
    scrollWidth: number,
    clientWidth: number,
  ) => {
    Object.defineProperty(el, 'scrollWidth', {
      value: scrollWidth,
      configurable: true,
    })
    Object.defineProperty(el, 'clientWidth', {
      value: clientWidth,
      configurable: true,
    })
  }

  it('shows title only while label is truncated', () => {
    render(
      <Breadcrumbs
        items={[{ label: 'Long label', href: '/' }, { label: 'Page' }]}
      />,
    )
    const link = screen.getByRole('link', { name: 'Long label' })
    stubWidths(link, 300, 100)
    fireEvent.pointerOver(link)
    expect(link).toHaveAttribute('title', 'Long label')
    stubWidths(link, 100, 100)
    fireEvent.pointerOver(link)
    expect(link).not.toHaveAttribute('title')
  })

  it('keeps consumer-provided title', () => {
    render(
      <Breadcrumbs
        items={[
          { label: 'Long label', href: '/', title: 'Custom' },
          { label: 'Page' },
        ]}
      />,
    )
    const link = screen.getByRole('link', { name: 'Long label' })
    stubWidths(link, 300, 100)
    fireEvent.pointerOver(link)
    expect(link).toHaveAttribute('title', 'Custom')
  })

  it('passes title, className and data attributes to current and inert items', () => {
    render(
      <Breadcrumbs
        items={[
          {
            label: 'Mid',
            title: 'Mid full',
            className: 'mid-x',
            'data-x': '1',
          } as never,
          { label: 'Current', title: 'Current full', className: 'cur-x' },
        ]}
      />,
    )
    const mid = screen.getByText('Mid')
    expect(mid).toHaveAttribute('title', 'Mid full')
    expect(mid).toHaveClass('mid-x')
    expect(mid).toHaveAttribute('data-x', '1')
    expect(mid).not.toHaveAttribute('data-label')
    const current = screen.getByText('Current')
    expect(current).toHaveAttribute('title', 'Current full')
    expect(current).toHaveClass('cur-x')
    expect(current).toHaveAttribute('aria-current', 'page')
  })

  describe('scroll position', () => {
    beforeEach(() => {
      vi.spyOn(HTMLElement.prototype, 'scrollWidth', 'get').mockReturnValue(500)
      vi.spyOn(HTMLElement.prototype, 'clientWidth', 'get').mockReturnValue(200)
    })
    afterEach(() => vi.restoreAllMocks())

    const Host = ({ labels }: { labels: string[] }) => {
      const [, setTick] = useState(0)
      return (
        <>
          <button onClick={() => setTick((t) => t + 1)}>tick</button>
          <Breadcrumbs items={labels.map((label) => ({ label }))} />
        </>
      )
    }

    it('starts scrolled to the end', () => {
      render(<Host labels={['A', 'B']} />)
      expect(screen.getByRole('list').scrollLeft).toBe(500)
    })

    it('keeps user scroll on unrelated parent re-render', async () => {
      render(<Host labels={['A', 'B']} />)
      const list = screen.getByRole('list')
      list.scrollLeft = 10
      await userEvent.click(screen.getByRole('button', { name: 'tick' }))
      expect(list.scrollLeft).toBe(10)
    })

    it('scrolls to the end when an item is appended', () => {
      const { rerender } = render(<Host labels={['A', 'B']} />)
      const list = screen.getByRole('list')
      list.scrollLeft = 10
      rerender(<Host labels={['A', 'B', 'C']} />)
      expect(list.scrollLeft).toBe(500)
    })

    it('scrolls to the end when the last label changes at same length', () => {
      const { rerender } = render(<Host labels={['A', 'B']} />)
      const list = screen.getByRole('list')
      list.scrollLeft = 10
      rerender(<Host labels={['A', 'Z']} />)
      expect(list.scrollLeft).toBe(500)
    })
  })

  it('does not pass external to plain text items', () => {
    render(
      <Breadcrumbs
        items={[
          { label: 'Docs', href: 'https://x', external: true, disabled: true },
          { label: 'Page', href: '/p', external: false },
        ]}
      />,
    )
    expect(screen.getByText('Docs')).not.toHaveAttribute('external')
    expect(screen.getByText('Page')).not.toHaveAttribute('external')
  })

  describe('keyboard focus', () => {
    beforeEach(() => {
      Element.prototype.scrollIntoView = vi.fn()
    })
    afterEach(() => {
      delete (Element.prototype as Partial<Element>).scrollIntoView
    })

    it('reveals a keyboard-focused link', async () => {
      render(
        <Breadcrumbs
          items={[{ label: 'Home', href: '/' }, { label: 'Page' }]}
        />,
      )
      await userEvent.tab()
      expect(screen.getByRole('link', { name: 'Home' })).toHaveFocus()
      expect(Element.prototype.scrollIntoView).toHaveBeenCalledWith({
        block: 'nearest',
        inline: 'nearest',
      })
    })
  })

  it('applies dataTestId to root, list and every item kind', () => {
    render(
      <Breadcrumbs
        dataTestId={{ root: 'r', list: 'l' }}
        items={[
          { label: 'Home', href: '/', dataTestId: { root: 'link' } },
          { label: 'Plain', dataTestId: { root: 'plain' } },
          { label: 'Current', dataTestId: { root: 'current' } },
        ]}
      />,
    )
    expect(screen.getByTestId('r')).toBe(
      screen.getByRole('navigation', { name: 'Breadcrumb' }),
    )
    expect(screen.getByTestId('l')).toBe(screen.getByRole('list'))
    expect(screen.getByTestId('link')).toHaveAttribute('href', '/')
    expect(screen.getByTestId('plain')).toHaveTextContent('Plain')
    expect(screen.getByTestId('current')).toHaveAttribute(
      'aria-current',
      'page',
    )
  })
})
