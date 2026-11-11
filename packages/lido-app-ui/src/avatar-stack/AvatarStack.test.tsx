import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { Tooltip } from '../tooltip'
import { AvatarStack } from '.'

const items = (root: HTMLElement) => Array.from(root.children) as HTMLElement[]

describe('AvatarStack', () => {
  it('stacks the first child on top', () => {
    render(
      <AvatarStack dataTestId={{ root: 'root' }}>
        <img src='a.svg' alt='A' />
        <img src='b.svg' alt='B' />
        <img src='c.svg' alt='C' />
      </AvatarStack>,
    )
    expect(
      items(screen.getByTestId('root')).map((el) =>
        el.style.getPropertyValue('--local-z'),
      ),
    ).toEqual(['3', '2', '1'])
  })

  it('flattens fragments into separate items', () => {
    render(
      <AvatarStack dataTestId={{ root: 'root', item: 'item' }}>
        <>
          <img src='a.svg' alt='A' />
          <img src='b.svg' alt='B' />
        </>
        <img src='c.svg' alt='C' />
      </AvatarStack>,
    )
    expect(screen.getAllByTestId('item')).toHaveLength(3)
  })

  it('writes the size var and defaults to 32px', () => {
    const { rerender } = render(
      <AvatarStack dataTestId={{ root: 'root' }}>
        <img src='a.svg' alt='A' />
      </AvatarStack>,
    )
    const root = screen.getByTestId('root')
    expect(root.style.getPropertyValue('--local-size')).toBe('32px')
    rerender(
      <AvatarStack size={24} dataTestId={{ root: 'root' }}>
        <img src='a.svg' alt='A' />
      </AvatarStack>,
    )
    expect(root.style.getPropertyValue('--local-size')).toBe('24px')
  })

  it('keeps child names and links untouched', () => {
    render(
      <AvatarStack>
        <img src='a.svg' alt='Obol' />
        <a href='/ssv' aria-label='SSV'>
          <img src='b.svg' alt='' />
        </a>
      </AvatarStack>,
    )
    expect(screen.getByRole('img', { name: 'Obol' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'SSV' })).toHaveAttribute(
      'href',
      '/ssv',
    )
  })

  it('wraps every child in a slot', () => {
    render(
      <AvatarStack dataTestId={{ root: 'root', item: 'item' }}>
        <img src='a.svg' alt='A' />
      </AvatarStack>,
    )
    const item = screen.getByTestId('item')
    expect(item.parentElement).toBe(screen.getByTestId('root'))
    expect(item).toContainElement(screen.getByRole('img', { name: 'A' }))
  })

  it('orders a wrapped child like any other', () => {
    const Partner = () => (
      <Tooltip content='A'>
        <img src='a.svg' alt='A' />
      </Tooltip>
    )
    render(
      <AvatarStack dataTestId={{ root: 'root', item: 'item' }}>
        <Partner />
        <img src='b.svg' alt='B' />
      </AvatarStack>,
    )
    const slots = screen.getAllByTestId('item')
    expect(slots).toHaveLength(2)
    expect(slots.map((el) => el.style.getPropertyValue('--local-z'))).toEqual([
      '2',
      '1',
    ])
  })

  it('keeps slots keyed by child key across reorders', () => {
    const { rerender } = render(
      <AvatarStack dataTestId={{ item: 'item' }}>
        <img key='a' src='a.svg' alt='A' />
        <img key='b' src='b.svg' alt='B' />
      </AvatarStack>,
    )
    const [slotA] = screen.getAllByTestId('item')
    rerender(
      <AvatarStack dataTestId={{ item: 'item' }}>
        <img key='b' src='b.svg' alt='B' />
        <img key='a' src='a.svg' alt='A' />
      </AvatarStack>,
    )
    expect(screen.getAllByTestId('item')[1]).toBe(slotA)
  })

  it('does not warn about duplicate keys across fragments', () => {
    const error = vi.spyOn(console, 'error').mockImplementation(() => {})
    render(
      <AvatarStack>
        <img key='x' src='a.svg' alt='A' />
        <>
          <img key='x' src='b.svg' alt='B' />
        </>
      </AvatarStack>,
    )
    expect(error).not.toHaveBeenCalled()
    error.mockRestore()
  })

  it('shows the tooltip of a child on hover', async () => {
    render(
      <AvatarStack dataTestId={{ item: 'item' }}>
        <Tooltip content='Obol' dataTestId={{ root: 'tip' }}>
          <img src='a.svg' alt='Obol logo' />
        </Tooltip>
        <img src='b.svg' alt='B' />
      </AvatarStack>,
    )
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
    fireEvent.mouseEnter(screen.getByTestId('tip'))
    expect(await screen.findByRole('tooltip')).toHaveTextContent('Obol')
  })

  it('shows the tooltip when a focusable child is focused', async () => {
    render(
      <AvatarStack>
        <Tooltip content='SSV'>
          <a href='/ssv' aria-label='SSV'>
            <img src='b.svg' alt='' />
          </a>
        </Tooltip>
      </AvatarStack>,
    )
    fireEvent.focus(screen.getByRole('link', { name: 'SSV' }))
    expect(await screen.findByRole('tooltip')).toHaveTextContent('SSV')
  })
})
