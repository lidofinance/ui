import { createRef, forwardRef } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { LinkProvider, type LinkComponentProps } from '../link-provider'
import { LinkButton } from './LinkButton'

describe('LinkButton', () => {
  it('renders a link with the href and forwards ref to the anchor', () => {
    const ref = createRef<HTMLAnchorElement>()
    render(
      <LinkButton ref={ref} href='/keys'>
        Keys
      </LinkButton>,
    )
    const link = screen.getByRole('link', { name: 'Keys' })
    expect(link).toHaveAttribute('href', '/keys')
    expect(ref.current).toBe(link)
  })

  it('opens in a new tab with external', () => {
    render(
      <LinkButton href='https://lido.fi' external>
        Lido
      </LinkButton>,
    )
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('routes through LinkProvider', () => {
    const Routed = forwardRef<HTMLAnchorElement, LinkComponentProps>(
      (props, ref) => (
        // eslint-disable-next-line jsx-a11y/anchor-has-content -- children arrive via props
        <a ref={ref} data-routed='' {...props} />
      ),
    )
    Routed.displayName = 'Routed'
    render(
      <LinkProvider component={Routed}>
        <LinkButton href='/keys'>Keys</LinkButton>
      </LinkProvider>,
    )
    expect(screen.getByRole('link')).toHaveAttribute('data-routed')
  })

  it('drops href and click when disabled', async () => {
    const onClick = vi.fn()
    render(
      <LinkButton href='/keys' disabled onClick={onClick}>
        Keys
      </LinkButton>,
    )
    const link = screen.getByRole('link')
    expect(link).not.toHaveAttribute('href')
    expect(link).toHaveAttribute('aria-disabled', 'true')
    await userEvent.click(link)
    expect(onClick).not.toHaveBeenCalled()
  })

  it('joins aria-label with counterLabel', () => {
    render(
      <LinkButton href='/inbox' aria-label='Inbox' counterLabel='3 unread'>
        Inbox
      </LinkButton>,
    )
    expect(screen.getByRole('link')).toHaveAccessibleName('Inbox, 3 unread')
  })
})
