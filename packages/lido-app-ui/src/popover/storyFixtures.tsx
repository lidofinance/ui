import type { ReactNode, RefObject } from 'react'

import { Button } from '../button'
import { Identicon } from '../identicon'

type SidebarFooterMockProps = {
  triggerRef: RefObject<HTMLButtonElement>
  sidebarRef?: RefObject<HTMLDivElement>
  label: ReactNode
  onClick: () => void
}

export const SidebarFooterMock = ({
  triggerRef,
  sidebarRef,
  label,
  onClick,
}: SidebarFooterMockProps) => (
  <div
    ref={sidebarRef}
    style={{
      width: 296,
      boxSizing: 'border-box',
      padding: '24px 16px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
    }}
  >
    <Button
      ref={triggerRef}
      variant='outline'
      iconLeft={<Identicon address='0x419' size={24} />}
      onClick={onClick}
      style={{ width: '100%' }}
    >
      {label}
    </Button>
  </div>
)
