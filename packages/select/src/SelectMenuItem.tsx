import styled, { css } from 'styled-components'
import { HEIGHT, appearanceStrong } from './SelectStyle'
import { SelectSize, SelectAppearance } from './types'

type WrapProps = {
  size?: SelectSize
  appearance?: SelectAppearance
  isActive?: boolean
}

const Wrap = styled.div<WrapProps>`
  display: flex;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  user-select: none;
  height: ${(p) => HEIGHT[p.size || 'default']}px;
  transition: background-color ease ${({ theme }) => theme.duration.norm};

  ${(p) =>
    p.appearance === 'strong'
      ? appearanceStrong
      : css`
          font-size: 16px;
          font-weight: 400;
          line-height: 20px;
        `}

  &:first-child {
    border-radius: 10px 10px 0 0;
  }

  &:last-child {
    border-radius: 0 0 10px 10px;
  }

  &:hover {
    background-color: rgba(0, 163, 255, 0.1);
    transition-duration: ${({ theme }) => theme.duration.fast};
  }

  ${(p) =>
    p.isActive &&
    css`
      background-color: rgba(0, 163, 255, 0.1);
      transition-duration: ${({ theme }) => theme.duration.fast};
    `}
`

const IconWrap = styled.div`
  display: flex;
  width: 24px;
  height: 100%;
  align-items: center;
  justify-content: center;
`

type Props = {
  size?: SelectSize
  appearance?: SelectAppearance
  isActive?: boolean
  icon?: React.ReactNode
  children?: React.ReactNode
  onMouseDown?: React.MouseEventHandler<HTMLDivElement>
}

export function SelectMenuItem({
  size,
  appearance,
  isActive,
  icon,
  children,
  onMouseDown,
}: Props) {
  return (
    <Wrap
      size={size}
      appearance={appearance}
      isActive={isActive}
      onMouseDown={onMouseDown}
    >
      {icon && <IconWrap>{icon}</IconWrap>}
      {children}
    </Wrap>
  )
}
