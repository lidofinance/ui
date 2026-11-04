import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { readFileSync } from 'fs'
import { resolve } from 'path'

import { FormLayout } from './FormLayout'

describe('FormLayout', () => {
  it('renders children and the aside landmark', () => {
    render(<FormLayout aside={<span>Summary</span>}>Form</FormLayout>)
    expect(screen.getByText('Form')).toBeDefined()
    expect(screen.getByRole('complementary').textContent).toBe('Summary')
  })

  it('forwards ref, className and props', () => {
    const ref = createRef<HTMLDivElement>()
    render(
      <FormLayout ref={ref} aside='A' className='x' data-testid='fl'>
        Form
      </FormLayout>,
    )
    expect(ref.current).toBe(screen.getByTestId('fl'))
    expect(ref.current?.className).toContain('x')
  })

  it('offsets the sticky aside by --lido-app-ui-sticky-top, set only by a sticky Header', () => {
    const read = (file: string) =>
      readFileSync(resolve(__dirname, file), 'utf-8')
    expect(read('FormLayout.module.css')).toMatch(
      /top: calc\(var\(--lido-app-ui-sticky-top, 0px\)/,
    )
    expect(read('../header/Header.module.css')).toMatch(
      /:where\(:global\(html\):has\(\.sticky\)\)\s*{[^}]*--lido-app-ui-sticky-top: var\(--lido-app-ui-header-height\)/,
    )
  })
})
