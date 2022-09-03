import { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'

export const Block: FC<PropsWithChildren> = styled.div`
  font-size: ${({ theme }) => theme.fontSizesMap.xs}px;
  line-height: 1.5em;
  padding: ${({ theme }) => theme.spaceMap.xxl}px;
  margin: ${({ theme }) => theme.spaceMap.md}px 0;
  border-radius: ${({ theme }) => theme.borderRadiusesMap.xl}px;
  background: ${({ theme }) => theme.colors.foreground};
  color: ${({ theme }) => theme.colors.text};

  &:not(:only-child):first-child {
    margin-top: 0;
  }

  &:not(:only-child):last-child {
    margin-bottom: 0;
  }
`
