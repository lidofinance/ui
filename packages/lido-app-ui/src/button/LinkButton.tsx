import { forwardRef } from 'react'

import cn from 'classnames'

import { Anchor, type AnchorProps } from '../link-provider/Anchor'
import styles from './Button.module.css'
import { ButtonContent, joinAriaLabel } from './ButtonContent'
import type { ButtonOwnProps } from './types'

export type LinkButtonProps = Omit<AnchorProps, 'href'> &
  ButtonOwnProps & {
    href: string
  }

/** Button-styled `<a>` that routes through `LinkProvider`; `disabled` drops the `href`. */
export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  (
    {
      className,
      children,
      variant = 'primary',
      size = 'big',
      iconLeft,
      iconRight,
      counter,
      counterLabel,
      dataTestId,
      'aria-label': ariaLabel,
      ...rest
    },
    ref,
  ) => (
    <Anchor
      ref={ref}
      className={cn(styles.button, styles[variant], styles[size], className)}
      data-testid={dataTestId?.root}
      aria-label={joinAriaLabel(ariaLabel, counterLabel)}
      {...rest}
    >
      <ButtonContent
        iconLeft={iconLeft}
        iconRight={iconRight}
        counter={counter}
        counterLabel={counterLabel}
        dataTestId={dataTestId}
      >
        {children}
      </ButtonContent>
    </Anchor>
  ),
)

LinkButton.displayName = 'LinkButton'
