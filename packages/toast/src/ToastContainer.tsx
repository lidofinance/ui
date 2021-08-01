import { ToastContainer as SourceToastContainer } from 'react-toastify'
import { injectStyle } from 'react-toastify/dist/inject-style'

import styled from 'styled-components'

if (typeof window !== 'undefined') {
  injectStyle()
}

export const ToastContainer = styled(SourceToastContainer).attrs({
  draggable: false,
})`
  & {
    width: auto;
    max-width: calc(100vw - ${({ theme }) => 2 * theme.spaceMap.lg}px);
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media screen and (max-width: 480px) {
      max-width: calc(100vw - ${({ theme }) => 2 * theme.spaceMap.sm}px);
    }

    &.Toastify__toast-container {
      &--top-left {
        top: ${({ theme }) => theme.spaceMap.lg}px;
        left: ${({ theme }) => theme.spaceMap.lg}px;

        @media screen and (max-width: 480px) {
          top: ${({ theme }) => theme.spaceMap.sm}px;
          left: ${({ theme }) => theme.spaceMap.sm}px;
        }
      }
      &--top-center {
        top: ${({ theme }) => theme.spaceMap.lg}px;
        left: 50%;
        transform: translateX(-50%);

        @media screen and (max-width: 480px) {
          top: ${({ theme }) => theme.spaceMap.sm}px;
          left: 45%;
          transform: translateX(-40%);
        }
      }
      &--top-right {
        top: ${({ theme }) => theme.spaceMap.lg}px;
        right: ${({ theme }) => theme.spaceMap.lg}px;
        left: auto;

        @media screen and (max-width: 480px) {
          top: ${({ theme }) => theme.spaceMap.sm}px;
          right: ${({ theme }) => theme.spaceMap.sm}px;
          transform: none;
        }
      }
      &--bottom-left {
        bottom: ${({ theme }) => theme.spaceMap.lg}px;
        left: ${({ theme }) => theme.spaceMap.lg}px;

        @media screen and (max-width: 480px) {
          bottom: ${({ theme }) => theme.spaceMap.sm}px;
          left: ${({ theme }) => theme.spaceMap.sm}px;
        }
      }
      &--bottom-center {
        bottom: ${({ theme }) => theme.spaceMap.lg}px;
        transform: translateX(-50%);
        left: 50%;

        @media screen and (max-width: 480px) {
          bottom: ${({ theme }) => theme.spaceMap.sm}px;
          left: 45%;
          transform: translateX(-40%);
        }
      }
      &--bottom-right {
        bottom: ${({ theme }) => theme.spaceMap.lg}px;
        right: ${({ theme }) => theme.spaceMap.lg}px;
        left: auto;

        @media screen and (max-width: 480px) {
          bottom: ${({ theme }) => theme.spaceMap.sm}px;
          right: ${({ theme }) => theme.spaceMap.sm}px;
          transform: none;
        }
      }
    }
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
