import { ToastContainer as SourceToastContainer } from 'react-toastify'
import { injectStyle } from 'react-toastify/dist/inject-style'

import styled from 'styled-components'

injectStyle()

export const ToastContainer = styled(SourceToastContainer).attrs({
  draggable: false,
})`
  & {
    width: auto;
    max-width: calc(100vw - ${({ theme }) => 2 * theme.spaceMap.lg}px);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .Toastify {
    &__toast {
      box-sizing: border-box;
      background-color: ${({ theme }) => theme.colors.accent};
      color: ${({ theme }) => theme.colors.accentContrast};
      border-radius: ${({ theme }) => theme.borderRadiusesMap.md}px;
      box-shadow: ${({ theme }) =>
        `${theme.boxShadows.xs} ${theme.colors.shadowLight}`};
      margin: ${({ theme }) => theme.spaceMap.xs}px 0 0 0;
      max-width: 360px;
      min-height: 0;
      padding: ${({ theme }) => theme.spaceMap.sm}px
        ${({ theme }) => theme.spaceMap.md}px;
      font-size: ${({ theme }) => theme.fontSizesMap.xs}px;
      line-height: 1.3em;
      font-family: inherit;
      cursor: default;
      a,
      a:hover {
        color: currentColor;
        text-decoration: underline;
      }
    }
    &__toast--info {
      background-color: ${({ theme }) => theme.colors.success};
      color: ${({ theme }) => theme.colors.successContrast};
    }
    &__toast--error {
      background-color: ${({ theme }) => theme.colors.error};
      color: ${({ theme }) => theme.colors.errorContrast};
    }
    &__toast--warning {
      background-color: ${({ theme }) => theme.colors.warning};
      color: ${({ theme }) => theme.colors.warningContrast};
    }
    &__toast--success {
      background-color: ${({ theme }) => theme.colors.success};
      color: ${({ theme }) => theme.colors.successContrast};
    }
    &__progress-bar {
      background: rgba(255, 255, 255, 0.25);
      height: 3px;
    }
  }
`
