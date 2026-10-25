import {
  createRef,
  useRef,
  type ComponentProps,
  type ElementRef,
  type MouseEvent,
  type RefObject,
} from 'react'
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Grid, GridItem, Stack, type GridAlign, type StackProps } from '..'

describe('polymorphic layout components', () => {
  it('accepts element-specific props for the `as` element', () => {
    const anchorRef: RefObject<HTMLAnchorElement> = createRef()
    render(
      <>
        <Stack as='a' href='/x' ref={anchorRef}>
          link
        </Stack>
        <Stack as='label' htmlFor='field'>
          label
        </Stack>
        <Stack as='button' type='submit'>
          submit
        </Stack>
        <Grid as='ol' start={2}>
          <GridItem as='li' value={2}>
            item
          </GridItem>
        </Grid>
      </>,
    )

    expect(screen.getByRole('link', { name: 'link' })).toHaveAttribute(
      'href',
      '/x',
    )
    expect(anchorRef.current).toBeInstanceOf(HTMLAnchorElement)
    expect(screen.getByText('label')).toHaveAttribute('for', 'field')
    expect(screen.getByRole('button', { name: 'submit' })).toHaveAttribute(
      'type',
      'submit',
    )
    expect(screen.getByRole('list')).toHaveAttribute('start', '2')
    expect(screen.getByRole('listitem')).toHaveAttribute('value', '2')
  })

  it('keeps accepting HTMLElement refs and handlers on the default element', () => {
    const ref: RefObject<HTMLElement> = createRef()
    const props: StackProps = {
      onClick: (event: MouseEvent<HTMLElement>) => event.currentTarget,
    }
    render(
      <Stack ref={ref} {...props}>
        x
      </Stack>,
    )
    expect(ref.current).toBeInstanceOf(HTMLElement)
  })

  it('rejects props the default element does not have', () => {
    // @ts-expect-error href belongs to anchors, not the default div
    void (<Stack href='/x' />)
  })

  it('keeps plain StackProps open to any `as` element', () => {
    const legacy: StackProps = { as: 'section', gap: 8 }
    const Card = (p: StackProps) => <Stack {...p} />
    render(
      <>
        <Stack {...legacy}>s</Stack>
        <Card as='ul' />
      </>,
    )
    expect(screen.getByRole('list')).toBeInTheDocument()
  })

  it('keeps the non-generic overload usable for components, refs and excess props', () => {
    const Comp = (props: { foo: string }) => <i>{props.foo}</i>
    const Refs = () => {
      const ref = useRef<ElementRef<typeof Stack>>(null)
      return <Stack ref={ref}>x</Stack>
    }
    // @ts-expect-error excess props are rejected through ComponentProps
    const excess: ComponentProps<typeof Stack> = { bogus: 1 }
    const aligns: Record<GridAlign, string> = {
      start: '',
      center: '',
      end: '',
      stretch: '',
    }
    render(
      <>
        <Stack as={Comp} id='x' />
        <Refs />
      </>,
    )
    expect(excess).toBeDefined()
    expect(Object.keys(aligns)).toHaveLength(4)
  })
})
