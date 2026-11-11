import { createRef, type ReactElement, type Ref } from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Breadcrumbs } from './breadcrumbs'
import { Callout } from './callout'
import { Checkbox } from './checkbox'
import { CheckboxRow } from './checkbox-row'
import { Counter } from './counter'
import { Input } from './input'
import { ActionRow } from './action-list'
import { RadioButton } from './radio-button'
import { RichInput } from './rich-input'
import { Slider } from './slider'
import { Switch } from './switch'
import { EmptyState } from './empty-state'
import { ProgressBar } from './progress-bar'
import { VisuallyHidden } from './visually-hidden'
import { Select, SelectItem } from './select'
import { TokenSelector } from './token-selector'
import { StatCard } from './stat-card'
import { TableRoot } from './table'
import { Textarea } from './textarea'
import { Disclaimer } from './disclaimer'
import { Disclosure } from './disclosure'
import { ErrorPage } from './error-page'
import { Footer } from './footer'
import { FormLayout } from './page-layout'
import { Header } from './header'
import { Skeleton } from './skeleton'
import { Spinner } from './spinner'
import { Steps } from './steps'
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
    (root) => root === screen.getByText('Tag').parentElement,
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
    'Spinner',
    (ref) => <Spinner ref={ref} />,
    (root) => root.tagName === 'SPAN',
  ],
  [
    'Callout',
    (ref) => (
      <Callout ref={ref} dataTestId={{ root: 'root' }}>
        Notice
      </Callout>
    ),
    (root) => root === screen.getByTestId('root'),
  ],
  [
    'CheckboxRow input',
    (ref) => <CheckboxRow ref={ref} label='Key' />,
    (root) => root === screen.getByRole('checkbox'),
  ],
  [
    'Disclosure',
    (ref) => (
      <Disclosure ref={ref} label='More' dataTestId={{ root: 'root' }}>
        Body
      </Disclosure>
    ),
    (root) => root === screen.getByTestId('root'),
  ],
  [
    'EmptyState',
    (ref) => (
      <EmptyState ref={ref} title='None' dataTestId={{ root: 'root' }} />
    ),
    (root) => root === screen.getByTestId('root'),
  ],
  [
    'FormLayout',
    (ref) => (
      <FormLayout ref={ref} aside='Aside' data-testid='root'>
        Form
      </FormLayout>
    ),
    (root) => root === screen.getByTestId('root'),
  ],
  [
    'ProgressBar',
    (ref) => <ProgressBar ref={ref} value={10} aria-label='Progress' />,
    (root) => root === screen.getByRole('progressbar'),
  ],
  [
    'VisuallyHidden',
    (ref) => <VisuallyHidden ref={ref}>Hidden</VisuallyHidden>,
    (root) => root.tagName === 'SPAN',
  ],
  [
    'Select trigger',
    (ref) => <Select ref={ref} label='Net' options={[]} />,
    (root) => root === screen.getByRole('combobox'),
  ],
  [
    'TokenSelector trigger',
    (ref) => <TokenSelector ref={ref} options={[]} />,
    (root) => root === screen.getByRole('combobox'),
  ],
  [
    'SelectItem',
    (ref) => <SelectItem ref={ref} label='Item' data-testid='item' />,
    (root) => root === screen.getByTestId('item'),
  ],
  [
    'StatCard',
    (ref) => <StatCard ref={ref} value='1' dataTestId={{ root: 'root' }} />,
    (root) => root === screen.getByTestId('root'),
  ],
  [
    'Table root',
    (ref) => (
      <TableRoot ref={ref}>
        <tbody />
      </TableRoot>
    ),
    (root) => root === screen.getByRole('table'),
  ],
  [
    'Textarea',
    (ref) => <Textarea ref={ref} label='Notes' />,
    (root) => root === screen.getByRole('textbox'),
  ],
  [
    'Input',
    (ref) => <Input ref={ref} label='Name' />,
    (root) => root === screen.getByRole('textbox'),
  ],
  [
    'Checkbox',
    (ref) => <Checkbox ref={ref} label='Agree' />,
    (root) => root === screen.getByRole('checkbox'),
  ],
  [
    'RadioButton',
    (ref) => <RadioButton ref={ref} label='Pick' />,
    (root) => root === screen.getByRole('radio'),
  ],
  [
    'Switch',
    (ref) => <Switch ref={ref} label='On' />,
    (root) => root === screen.getByRole('switch'),
  ],
  [
    'Slider',
    (ref) => <Slider ref={ref} label='Amount' />,
    (root) => root === screen.getByRole('slider'),
  ],
  [
    'RichInput',
    (ref) => <RichInput ref={ref} label='Amount' />,
    (root) => root === screen.getByRole('textbox'),
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
  [
    'Steps',
    (ref) => (
      <Steps
        ref={ref}
        steps={[{ label: 'One' }, { label: 'Two' }]}
        current={0}
        dataTestId={{ root: 'root' }}
      />
    ),
    (root) => root === screen.getByTestId('root'),
  ],
  [
    'ActionRow',
    (ref) => (
      <ActionRow ref={ref} href='/a'>
        Manager
      </ActionRow>
    ),
    (root) => root === screen.getByRole('listitem'),
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
