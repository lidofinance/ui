import { FC } from 'react'
import styled from 'styled-components'

export const Block: FC = styled.div`
  font-size: ${({ theme }) => theme.fontSizesMap.xs}px;
  line-height: 1.5em;
  padding: ${({ theme }) => theme.spaceMap.xxl}px;
  margin: ${({ theme }) => theme.spaceMap.md}px 0;
  border-radius: ${({ theme }) => theme.borderRadiusesMap.xl}px;
  background: ${({ theme }) => theme.colors.foreground};
  color: ${({ theme }) => theme.colors.text};

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`
