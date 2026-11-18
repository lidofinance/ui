import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { Accordion } from '.'

const getWrapper = () =>
  document.getElementById(
    screen.getByRole('button').getAttribute('aria-controls') as string,
  ) as HTMLElement

describe('Accordion', () => {
  it('collapsed at rest is aria-expanded=false', () => {
    render(
      <Accordion title='Title'>
        <p>Content</p>
      </Accordion>,
    )
    expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'false')
    expect(getWrapper()).toContainElement(screen.getByText('Content'))
  })

  it('keeps content mounted while closed', () => {
    render(
      <Accordion title='Title' defaultExpanded>
        <p>Content</p>
      </Accordion>,
    )
    const wrapper = getWrapper()
    expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'true')

    fireEvent.click(screen.getByRole('button'))
    expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'false')
    expect(wrapper).toBeInTheDocument()
    expect(wrapper).toContainElement(screen.getByText('Content'))
  })

  it('keeps the same node when toggled twice', () => {
    render(
      <Accordion title='Title' defaultExpanded>
        <p>Content</p>
      </Accordion>,
    )
    const wrapper = getWrapper()
    const button = screen.getByRole('button')
    fireEvent.click(button)
    fireEvent.click(button)
    expect(getWrapper()).toBe(wrapper)
    expect(button).toHaveAttribute('aria-expanded', 'true')
  })

  it('expands from defaultExpanded and toggles on click when uncontrolled', () => {
    render(
      <Accordion title='Title' defaultExpanded>
        <p>Content</p>
      </Accordion>,
    )
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('aria-expanded', 'true')
    fireEvent.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  it('stays put when controlled and reports changes', () => {
    const onExpandedChange = vi.fn()
    render(
      <Accordion
        title='Title'
        expanded={false}
        onExpandedChange={onExpandedChange}
      >
        <p>Content</p>
      </Accordion>,
    )
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(onExpandedChange).toHaveBeenCalledWith(true)
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  it('warns when expanded and defaultExpanded are both passed', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined)
    render(
      <Accordion title='Title' expanded defaultExpanded>
        <p>Content</p>
      </Accordion>,
    )
    expect(warn).toHaveBeenCalledWith(
      expect.stringMatching(/Accordion.*defaultExpanded/),
    )
  })
})
