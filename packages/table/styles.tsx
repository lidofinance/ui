import styled, { css } from 'styled-components'
import { ArrowTop, ArrowBottom } from '../icons/index.js'
import {
  TableAligns,
  TableTextColors,
  Theme,
  ThTdVariants,
  TrHighlights,
} from './types.js'

type InjectedPropsTr = {
  $highlight?: TrHighlights
  $interactive: boolean
}

type InjectedPropsThead = {
  $sticky: boolean
}

type InjectedPropsTh = {
  $align: TableAligns
  theme: Theme
  $interactive: boolean
  $variant?: ThTdVariants
}

type InjectedPropsTd = {
  $align: TableAligns
  $textColor: TableTextColors
  theme: Theme
  $variant?: ThTdVariants
  $interactive: boolean
  $numeric: boolean
}

const getMainColorTd = (props: InjectedPropsTd) =>
  ({
    primary: `var(--lido-color-primary)`,
    secondary: `var(--lido-color-textSecondary)`,
    warning: `var(--lido-color-warning)`,
    error: `var(--lido-color-error)`,
    success: `var(--lido-color-success)`,
    default: `var(--lido-color-text)`,
  })[props.$textColor]

const TdThAlign = {
  left: css`
    text-align: left;
  `,
  center: css`
    text-align: center;
  `,
  right: css`
    text-align: right;
  `,
}

export const ThTdContentStyle = styled.div`
  position: relative;
  min-height: 16px;
`

const TdThVariants = {
  string: css`
    ${ThTdContentStyle} {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  `,
  icon: css`
    line-height: 0;
    width: 24px;
    text-align: center;

    ${ThTdContentStyle} {
      width: 24px;

      svg {
        margin: -4px 0;
      }
    }
  `,
}

const ThTdInteractive = css`
  cursor: pointer;

  &:hover {
    color: var(--lido-color-primary);
  }
`

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

const TheadStickyStyle = css`
  background: var(--lido-color-foreground);
  top: 0;
  position: sticky;
  z-index: 5;
`

export const TheadStyle = styled.thead<InjectedPropsThead>`
  border-top: 1px solid var(--lido-color-borderLight);
  border-bottom: 1px solid var(--lido-color-borderLight);

  ${({ $sticky }) => $sticky && TheadStickyStyle}

  & > tr::before,
  & > tr::after {
    content: '';
    display: table-cell;
    width: 32px;

    border-top: 1px solid var(--lido-color-borderLight);
    border-bottom: 1px solid var(--lido-color-borderLight);
  }
`

export const TfootStyle = styled.tfoot``

const TrColors = {
  negative: css`
    background: rgba(var(--lido-rgb-error), 0.07);
  `,
  positive: css`
    background: rgba(var(--lido-rgb-success), 0.07);
  `,
  warning: css`
    background: rgba(var(--lido-rgb-warning), 0.07);
  `,
}

const TrInteractive = css`
  cursor: pointer;
`

export const TrStyle = styled.tr<InjectedPropsTr>`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizesMap.xxs}px;
  line-height: 1.6em;
  ${({ $highlight }) => $highlight && TrColors[$highlight]}
  ${({ $interactive }) => $interactive && TrInteractive}
`

const TdNumericStyle = css`
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
`

export const TdStyle = styled.td<InjectedPropsTd>`
  border-bottom: 1px solid var(--lido-color-borderLight);
  padding: 18px;

  color: ${getMainColorTd};

  ${(props) => TdThAlign[props.$align]}
  ${({ $variant }) => $variant && TdThVariants[$variant]}
  ${({ $interactive }) => $interactive && ThTdInteractive}
  ${({ $numeric }) => $numeric && TdNumericStyle}

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }
`

export const ThStyle = styled.th<InjectedPropsTh>`
  border-top: 1px solid var(--lido-color-borderLight);
  border-bottom: 1px solid var(--lido-color-borderLight);

  padding: 7px 18px;

  font-weight: 700;
  color: var(--lido-color-text);

  ${(props) => TdThAlign[props.$align]}
  ${({ $interactive }) => $interactive && ThTdInteractive}
  ${({ $variant }) => $variant && TdThVariants[$variant]}

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }
`

export const ArrowTopStyle = styled(ArrowTop)`
  margin: -7px 0 -7px 2px;
`

export const ArrowBottomStyle = styled(ArrowBottom)`
  margin: -7px 0 -7px 2px;
`
