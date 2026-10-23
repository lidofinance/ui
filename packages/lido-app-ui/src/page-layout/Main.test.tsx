import { createRef } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { SkipLink } from '../skip-link'
import { Main } from './Main'

describe('Main', () => {
  it('renders a main landmark with the default id', () => {
    render(<Main>Content</Main>)
    expect(screen.getByRole('main').id).toBe('main-content')
  })

  it('allows overriding the id and forwards ref and className', () => {
    const ref = createRef<HTMLElement>()
    render(
      <Main ref={ref} id='page' className='x'>
        Content
      </Main>,
    )
    const main = screen.getByRole('main')
    expect(main.id).toBe('page')
    expect(main.className).toContain('x')
    expect(ref.current).toBe(main)
  })

  it('receives focus from SkipLink', () => {
    render(
      <>
        <SkipLink />
        <Main>Content</Main>
      </>,
    )
    fireEvent.click(screen.getByRole('link'))
    expect(document.activeElement).toBe(screen.getByRole('main'))
  })
})
