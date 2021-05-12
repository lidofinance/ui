import styled, { css, keyframes } from 'styled-components'

const menuAppearing = keyframes`
  from {
    opacity: 0;
    transform: translateY(6px);
  }

  to {
    opacity: 1;
    transform: none;
  }
`

const SelectMenuWrap = styled.div`
  z-index: 1;
  position: absolute;
  left: 0;
  top: calc(100% + 5px);
  width: 100%;
  overflow: hidden;
  padding: 1px;
  background: ${({ theme }) => theme.colors.controlBg};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  animation: ${menuAppearing} ${({ theme }) => theme.dur.norm} ease 1;
`

const SelectMenuScroll = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  max-height: 240px;
  scrollbar-color: ${({ theme }) => theme.colors.border} #fff;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    width: 4px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-track {
    width: 0;
    overflow: overlay;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.border};
    border-radius: 2px;
  }
`

type Props = {
  children?: React.ReactNode
  optionsRef?: React.Ref<HTMLDivElement>
}

export function SelectMenu({ children, optionsRef }: Props) {
  return (
    <SelectMenuWrap>
      <SelectMenuScroll ref={optionsRef}>{children}</SelectMenuScroll>
    </SelectMenuWrap>
  )
}
