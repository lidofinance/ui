import { ForwardedRef, ReactNode, forwardRef } from 'react'
import { ModalOverlay, ModalOverlayProps } from './ModalOverlay'
import styles from './Modal.module.css'
import cn from 'classnames'
import { ArrowBack, Close } from '../icons'
import { ButtonIcon } from '../button'

export type ModalProps = Omit<ModalOverlayProps, 'title' | 'in'> & {
  title?: ReactNode
  titleIcon?: ReactNode
  subtitle?: ReactNode
  extra?: ReactNode
  center?: boolean
  open?: boolean
}

export const Modal = forwardRef(
  (props: ModalProps, ref?: ForwardedRef<HTMLDivElement>) => {
    const {
      children,
      title,
      titleIcon,
      subtitle,
      center = false,
      extra,
      open,
      onClose,
      onBack,
      ...rest
    } = props
    const withTitleIcon = !!titleIcon
    const withSubtitle = !!subtitle
    const withCloseButton = !!onClose
    const withBackButton = !!onBack

    const modalHeader = (
      <div className={cn(styles.modalHeader, { [styles.short]: !title })}>
        {withBackButton && (
          <ButtonIcon
            className={styles.modalBack}
            icon={<ArrowBack />}
            color='secondary'
            variant='ghost'
            size='xs'
            onClick={onBack}
          />
        )}
        <div
          className={cn(styles.modalTitle, {
            [styles.center]: center,
            [styles.withIcon]: withTitleIcon,
            [styles.withCloseButton]: withCloseButton,
            [styles.withBackButton]: withBackButton,
          })}
        >
          {withTitleIcon && (
            <div
              className={cn(styles.modalTitleIcon, { [styles.center]: center })}
            >
              {titleIcon}
            </div>
          )}
          <div className={styles.modalTitleText}>{title}</div>
        </div>
        {withCloseButton && (
          <ButtonIcon
            className={styles.modalClose}
            icon={<Close />}
            color='secondary'
            variant='ghost'
            size='xxs'
            onClick={onClose}
          />
        )}
      </div>
    )

    return (
      <ModalOverlay in={open} {...rest} ref={ref}>
        <div className={cn(styles.modal, { [styles.center]: center })}>
          <div className={styles.modalBase}>
            {modalHeader}
            {withSubtitle && (
              <div className={styles.modalSubtitle}>{subtitle}</div>
            )}
            <div className={styles.modalContent}>{children}</div>
          </div>
          {extra}
        </div>
      </ModalOverlay>
    )
  },
)
Modal.displayName = 'Modal'
