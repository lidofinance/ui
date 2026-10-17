import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'

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
    expect(current.getAttribute('aria-current')).toBe('page')
    expect(screen.getByRole('link', { name: 'Home' })).toBeTruthy()
    expect(screen.getAllByRole('link')).toHaveLength(1)
  })

  it('sets fade attributes by scroll position', () => {
    render(
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Page' }]} />,
    )
    const list = screen.getByRole('list')
    Object.defineProperty(list, 'scrollWidth', {
      value: 500,
      configurable: true,
    })
    Object.defineProperty(list, 'clientWidth', {
      value: 200,
      configurable: true,
    })
    list.scrollLeft = 0
    fireEvent.scroll(list)
    expect(list.hasAttribute('data-fade-start')).toBe(false)
    expect(list.hasAttribute('data-fade-end')).toBe(true)
    list.scrollLeft = 100
    fireEvent.scroll(list)
    expect(list.hasAttribute('data-fade-start')).toBe(true)
    expect(list.hasAttribute('data-fade-end')).toBe(true)
    list.scrollLeft = 300
    fireEvent.scroll(list)
    expect(list.hasAttribute('data-fade-start')).toBe(true)
    expect(list.hasAttribute('data-fade-end')).toBe(false)
  })

  it('renders links for href and passes click event', () => {
    const onClick = vi.fn()
    render(
      <Breadcrumbs
        items={[{ label: 'Home', href: '#home', onClick }, { label: 'Page' }]}
      />,
    )
    const link = screen.getByRole('link', { name: 'Home' })
    expect(link.getAttribute('href')).toBe('#home')
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
    expect(link.getAttribute('target')).toBe('_blank')
    expect(link.id).toBe('crumb')
    expect(screen.queryByRole('button')).toBeNull()
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
    expect(link.getAttribute('title')).toBe('Long label')
    stubWidths(link, 100, 100)
    fireEvent.pointerOver(link)
    expect(link.hasAttribute('title')).toBe(false)
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
    expect(link.getAttribute('title')).toBe('Custom')
  })
})
