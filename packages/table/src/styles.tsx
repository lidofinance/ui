import styled, { css } from 'styled-components'
import { TableAligns, TableTextColors, Theme } from './types'

type InjectedPropsTdTh = {
  $align: TableAligns
  theme: Theme
}

type InjectedPropsTd = {
  $align: TableAligns
  $textColor: TableTextColors
  theme: Theme
}

const getMainColorTd = (props: InjectedPropsTd) => {
  const colorsMap = {
    primary: props.theme.colors.primary,
    secondary: props.theme.colors.textSecondary,
    warning: props.theme.colors.warning,
    error: props.theme.colors.error,
    success: props.theme.colors.success,
  }
  return colorsMap[props.$textColor]
}

const getAlign = {
  left: css<InjectedPropsTdTh>`
    text-align: left;
  `,
  center: css<InjectedPropsTdTh>`
    text-align: center;
  `,
  right: css<InjectedPropsTdTh>`
    text-align: right;
  `,
}

export const TableStyle = styled.table`
  border-spacing: 0;
`

export const TbodyStyle = styled.tbody`
  & > tr::before,
  & > tr::after {
    content: '';
    display: table-cell;
    width: 32px;
  }
`

export const TheadStyle = styled.thead`
  border-top: 1px solid ${({ theme }) => theme.colors.borderLight};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderLight};

  & > tr::before,
  & > tr::after {
    content: '';
    display: table-cell;
    width: 32px;

    border-top: 1px solid ${({ theme }) => theme.colors.borderLight};
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderLight};
  }
`

export const TfootStyle = styled.tfoot``

export const TrStyle = styled.tr`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizesMap.xxs}px;
  line-height: 1.6em;
`

export const TdStyle = styled.td<InjectedPropsTd>`
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderLight};
  padding: 18px;

  color: ${getMainColorTd};

  ${(props) => getAlign[props.$align]}

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }
`

export const ThStyle = styled.th<InjectedPropsTdTh>`
  border-top: 1px solid ${({ theme }) => theme.colors.borderLight};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderLight};

  padding: 7px 18px;

  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};

  ${(props) => getAlign[props.$align]}

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }
`
