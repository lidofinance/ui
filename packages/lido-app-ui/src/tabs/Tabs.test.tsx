import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { Tabs } from './Tabs'

const items = [
  { value: 'a', label: 'A' },
  { value: 'b', label: 'B' },
]

describe('Tabs keyboard', () => {
  it('tabs are focusable buttons operable with Enter and Space', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<Tabs items={items} value='a' onChange={onChange} />)
    await user.tab()
    await user.tab()
    expect(screen.getByRole('tab', { name: 'B' })).toHaveFocus()
    await user.keyboard('{Enter}')
    expect(onChange).toHaveBeenCalledWith('b')
    onChange.mockClear()
    await user.keyboard(' ')
    expect(onChange).toHaveBeenCalledWith('b')
  })
})
