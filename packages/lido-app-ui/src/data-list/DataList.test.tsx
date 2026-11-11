import '@testing-library/jest-dom'
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { DataList } from './DataList'
import styles from './DataList.module.css'

describe('DataList', () => {
  it('has no flush class by default', () => {
    render(<DataList dataTestId={{ root: 'root' }}>x</DataList>)
    expect(screen.getByTestId('root')).not.toHaveClass(styles.flush)
  })

  it('applies flush and keeps divided', () => {
    render(
      <DataList flush divided dataTestId={{ root: 'root' }}>
        x
      </DataList>,
    )
    const root = screen.getByTestId('root')
    expect(root).toHaveClass(styles.flush)
    expect(root).toHaveClass(styles.divided)
  })
})
