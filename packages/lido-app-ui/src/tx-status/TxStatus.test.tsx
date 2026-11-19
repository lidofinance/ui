import '@testing-library/jest-dom'
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { TxStatus } from './TxStatus'

describe('TxStatus', () => {
  it('renders a zero amount', () => {
    render(
      <TxStatus
        status='success'
        title='Done'
        amount={0}
        dataTestId={{ amount: 'amount' }}
      />,
    )
    expect(screen.getByTestId('amount')).toHaveTextContent('0')
  })

  it('renders no amount or message wrapper for false or empty values', () => {
    render(
      <TxStatus
        status='success'
        title='Done'
        amount={false}
        message=''
        dataTestId={{ amount: 'amount', message: 'message' }}
      />,
    )
    expect(screen.queryByTestId('amount')).toBeNull()
    expect(screen.queryByTestId('message')).toBeNull()
  })
})
