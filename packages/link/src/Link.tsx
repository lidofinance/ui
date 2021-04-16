import React from 'react'
import { LinkStyle } from './LinkStyles'

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement>

export default function Link({ children, ...props }: Props) {
  return (
    <LinkStyle target='_blank' rel='noopener' {...props}>
      {children}
    </LinkStyle>
  )
}
