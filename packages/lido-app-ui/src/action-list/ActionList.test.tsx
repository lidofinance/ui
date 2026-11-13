import { createRef } from 'react'
import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'

import { ActionList, ActionRow } from '.'

describe('ActionList', () => {
  it('labels the list by the overline', () => {
    render(
      <ActionList overline='Roles'>
        <ActionRow>Manager</ActionRow>
      </ActionList>,
    )
    expect(screen.getByRole('list', { name: 'Roles' })).toBeInTheDocument()
  })

  it('has no accessible name without an overline', () => {
    render(
      <ActionList>
        <ActionRow>Manager</ActionRow>
      </ActionList>,
    )
    expect(screen.getByRole('list')).not.toHaveAttribute('aria-labelledby')
  })
})

describe('ActionRow', () => {
  it('renders a static row without link, button or chevron', () => {
    render(
      <ActionList>
        <ActionRow end='0x1' dataTestId={{ chevron: 'c' }}>
          Manager
        </ActionRow>
      </ActionList>,
    )
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
    expect(screen.queryByTestId('c')).not.toBeInTheDocument()
  })

  it('renders a link with chevron when href is set', () => {
    render(
      <ActionList>
        <ActionRow href='/m' dataTestId={{ chevron: 'c' }}>
          Manager
        </ActionRow>
      </ActionList>,
    )
    expect(screen.getByRole('link', { name: 'Manager' })).toHaveAttribute(
      'href',
      '/m',
    )
    expect(screen.getByTestId('c')).toBeInTheDocument()
  })

  it('names the link from children and end, excluding leading', () => {
    render(
      <ActionList>
        <ActionRow leading='L' end='0x1' href='/m'>
          Manager
        </ActionRow>
      </ActionList>,
    )
    const link = screen.getByRole('link', { name: 'Manager 0x1' })
    expect(link).not.toHaveAccessibleName(expect.stringContaining('L '))
  })

  it('renders a button without paragraphs inside and fires onClick', () => {
    const onClick = vi.fn()
    render(
      <ActionList>
        <ActionRow onClick={onClick}>
          <p>Manager</p>
        </ActionRow>
      </ActionList>,
    )
    const button = screen.getByRole('button', { name: 'Manager' })
    expect(button.querySelector('p')).toBeNull()
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalled()
  })

  it('hides the chevron with chevron=false and can force it', () => {
    render(
      <ActionList>
        <ActionRow href='/a' chevron={false} dataTestId={{ chevron: 'a' }}>
          A
        </ActionRow>
        <ActionRow chevron dataTestId={{ chevron: 'b' }}>
          B
        </ActionRow>
      </ActionList>,
    )
    expect(screen.queryByTestId('a')).not.toBeInTheDocument()
    expect(screen.getByTestId('b')).toBeInTheDocument()
  })

  it('renders trailing outside the link', () => {
    render(
      <ActionList>
        <ActionRow href='/m' trailing={<button type='button'>Change</button>}>
          Manager
        </ActionRow>
      </ActionList>,
    )
    const link = screen.getByRole('link')
    const button = screen.getByRole('button', { name: 'Change' })
    expect(link).not.toContainElement(button)
    expect(within(link).queryByRole('button')).not.toBeInTheDocument()
  })

  it('forwards the ref to the li', () => {
    const ref = createRef<HTMLLIElement>()
    render(
      <ActionList>
        <ActionRow ref={ref}>A</ActionRow>
      </ActionList>,
    )
    expect(ref.current).toBeInstanceOf(HTMLLIElement)
  })
})
