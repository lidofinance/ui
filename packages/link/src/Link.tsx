import React, { FC } from 'react'
import { LinkStyle } from './LinkStyles'

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement>

export default function Input({ children, ...props }: Props) {
  return (
    <LinkStyle target='_blank' rel='noopener' {...props}>
      {children}
    </LinkStyle>
  )
}
