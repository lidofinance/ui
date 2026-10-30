import { createRef, type ReactElement, type Ref } from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Breadcrumbs } from './breadcrumbs'
import { Counter } from './counter'
import { Disclaimer } from './disclaimer'
import { ErrorPage } from './error-page'
import { Footer } from './footer'
import { Header } from './header'
import { Skeleton } from './skeleton'
import { SmallCard } from './small-card'
import { Tag } from './tag'
import { TextLink } from './text-link'

const cases: Array<
  [string, (ref: Ref<never>) => ReactElement, (root: HTMLElement) => boolean]
> = [
  [
    'TextLink',
    (ref) => (
      <TextLink ref={ref} href='/a'>
        Link
      </TextLink>
    ),
    (root) => root === screen.getByRole('link'),
  ],
  [
    'SmallCard',
    (ref) => <SmallCard ref={ref} href='/a' title='Card' />,
    (root) => root === screen.getByRole('link'),
  ],
  [
    'Tag',
    (ref) => <Tag ref={ref}>Tag</Tag>,
    (root) => root === screen.getByText('Tag'),
  ],
  [
    'Tag as button',
    (ref) => (
      <Tag ref={ref} as='button' onClick={() => {}}>
        Tag
      </Tag>
    ),
    (root) => root === screen.getByRole('button'),
  ],
  [
    'Counter',
    (ref) => <Counter ref={ref}>3</Counter>,
    (root) => root === screen.getByText('3'),
  ],
  [
    'Breadcrumbs',
    (ref) => <Breadcrumbs ref={ref} items={[{ label: 'A' }]} />,
    (root) => root === screen.getByRole('navigation'),
  ],
  [
    'Header',
    (ref) => <Header ref={ref}>Head</Header>,
    (root) => root === screen.getByRole('banner'),
  ],
  [
    'Footer',
    (ref) => <Footer ref={ref}>Foot</Footer>,
    (root) => root === screen.getByRole('contentinfo'),
  ],
  [
    'Skeleton',
    (ref) => <Skeleton ref={ref} />,
    (root) => root.tagName === 'SPAN',
  ],
  [
    'Disclaimer',
    (ref) => <Disclaimer ref={ref}>Note</Disclaimer>,
    (root) => root === screen.getByText('Note'),
  ],
  [
    'ErrorPage',
    (ref) => <ErrorPage ref={ref} code='404' dataTestId={{ root: 'root' }} />,
    (root) => root === screen.getByTestId('root'),
  ],
]

describe('ref forwarding', () => {
  it.each(cases)('%s forwards ref to its root', (_name, element, isRoot) => {
    const ref = createRef<HTMLElement>()
    render(element(ref as Ref<never>))
    expect(ref.current).toBeInstanceOf(HTMLElement)
    expect(isRoot(ref.current as HTMLElement)).toBe(true)
  })
})
