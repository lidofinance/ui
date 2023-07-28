import { ToastContainer as SourceToastContainer } from 'react-toastify'
import styled from 'styled-components'

export const ToastContainer = styled(SourceToastContainer).attrs({
  draggable: false,
})`
  /* Animations */
  @keyframes Toastify__trackProgress {
    0% {
      transform: scaleX(1);
    }
    to {
      transform: scaleX(0);
    }
  }

  @keyframes Toastify__bounceInRight {
    0%,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
      opacity: 0;
      transform: translate3d(3000px, 0, 0);
    }
    60% {
      opacity: 1;
      transform: translate3d(-25px, 0, 0);
    }
    75% {
      transform: translate3d(10px, 0, 0);
    }
    90% {
      transform: translate3d(-5px, 0, 0);
    }
    to {
      transform: none;
    }
  }

  @keyframes Toastify__bounceOutRight {
    20% {
      opacity: 1;
      transform: translate3d(-20px, 0, 0);
    }
    to {
      opacity: 0;
      transform: translate3d(2000px, 0, 0);
    }
  }

  @keyframes Toastify__bounceInLeft {
    0%,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
      opacity: 0;
      transform: translate3d(-3000px, 0, 0);
    }
    60% {
      opacity: 1;
      transform: translate3d(25px, 0, 0);
    }
    75% {
      transform: translate3d(-10px, 0, 0);
    }
    90% {
      transform: translate3d(5px, 0, 0);
    }
    to {
      transform: none;
    }
  }

  @keyframes Toastify__bounceOutLeft {
    20% {
      opacity: 1;
      transform: translate3d(20px, 0, 0);
    }
    to {
      opacity: 0;
      transform: translate3d(-2000px, 0, 0);
    }
  }

  @keyframes Toastify__bounceInUp {
    0%,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
      opacity: 0;
      transform: translate3d(0, 3000px, 0);
    }
    60% {
      opacity: 1;
      transform: translate3d(0, -20px, 0);
    }
    75% {
      transform: translate3d(0, 10px, 0);
    }
    90% {
      transform: translate3d(0, -5px, 0);
    }
    to {
      transform: translateZ(0);
    }
  }

  @keyframes Toastify__bounceOutUp {
    20% {
      transform: translate3d(0, -10px, 0);
    }
    40%,
    45% {
      opacity: 1;
      transform: translate3d(0, 20px, 0);
    }
    to {
      opacity: 0;
      transform: translate3d(0, -2000px, 0);
    }
  }

  @keyframes Toastify__bounceInDown {
    0%,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
      opacity: 0;
      transform: translate3d(0, -3000px, 0);
    }
    60% {
      opacity: 1;
      transform: translate3d(0, 25px, 0);
    }
    75% {
      transform: translate3d(0, -10px, 0);
    }
    90% {
      transform: translate3d(0, 5px, 0);
    }
    to {
      transform: none;
    }
  }

  @keyframes Toastify__bounceOutDown {
    20% {
      transform: translate3d(0, 10px, 0);
    }
    40%,
    45% {
      opacity: 1;
      transform: translate3d(0, -20px, 0);
    }
    to {
      opacity: 0;
      transform: translate3d(0, 2000px, 0);
    }
  }

  @keyframes Toastify__slideInRight {
    0% {
      transform: translate3d(110%, 0, 0);
      visibility: visible;
    }
    to {
      transform: translateZ(0);
    }
  }

  @keyframes Toastify__slideInLeft {
    0% {
      transform: translate3d(-110%, 0, 0);
      visibility: visible;
    }
    to {
      transform: translateZ(0);
    }
  }

  @keyframes Toastify__slideInUp {
    0% {
      transform: translate3d(0, 110%, 0);
      visibility: visible;
    }
    to {
      transform: translateZ(0);
    }
  }

  @keyframes Toastify__slideInDown {
    0% {
      transform: translate3d(0, -110%, 0);
      visibility: visible;
    }
    to {
      transform: translateZ(0);
    }
  }

  @keyframes Toastify__slideOutRight {
    0% {
      transform: translateZ(0);
    }
    to {
      visibility: hidden;
      transform: translate3d(110%, 0, 0);
    }
  }

  @keyframes Toastify__slideOutLeft {
    0% {
      transform: translateZ(0);
    }
    to {
      visibility: hidden;
      transform: translate3d(-110%, 0, 0);
    }
  }

  @keyframes Toastify__slideOutDown {
    0% {
      transform: translateZ(0);
    }
    to {
      visibility: hidden;
      transform: translate3d(0, 500px, 0);
    }
  }

  @keyframes Toastify__slideOutUp {
    0% {
      transform: translateZ(0);
    }
    to {
      visibility: hidden;
      transform: translate3d(0, -500px, 0);
    }
  }

  @keyframes Toastify__flipIn {
    0% {
      transform: perspective(400px) rotateX(90deg);
      animation-timing-function: ease-in;
      opacity: 0;
    }
    40% {
      transform: perspective(400px) rotateX(-20deg);
      animation-timing-function: ease-in;
    }
    60% {
      transform: perspective(400px) rotateX(10deg);
      opacity: 1;
    }
    80% {
      transform: perspective(400px) rotateX(-5deg);
    }
    to {
      transform: perspective(400px);
    }
  }

  @keyframes Toastify__flipOut {
    0% {
      transform: perspective(400px);
    }
    30% {
      transform: perspective(400px) rotateX(-20deg);
      opacity: 1;
    }
    to {
      transform: perspective(400px) rotateX(90deg);
      opacity: 0;
    }
  }
  /* /Animations */

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
      z-index: 9999;
      transform: translateZ(9999px);
      position: fixed;
      padding: 4px;
      box-sizing: border-box;
      color: #fff;

      /* Positions */
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
      /* /Positions */
    }
  }

  .Toastify {
    &__toast {
      position: relative;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      overflow: hidden;
      direction: ltr;
      max-width: 360px;
      max-height: 800px;
      min-height: 0;

      border-radius: ${({ theme }) => theme.borderRadiusesMap.md}px;
      box-shadow: ${({ theme }) => theme.boxShadows.xs}
        var(--lido-color-shadow-light);
      margin: ${({ theme }) => theme.spaceMap.xs}px 0;
      padding: ${({ theme }) => theme.spaceMap.sm}px
        ${({ theme }) => theme.spaceMap.md}px;
      background-color: var(--lido-color-accent);
      color: var(--lido-color-accent-contrast);
      font-size: ${({ theme }) => theme.fontSizesMap.xs}px;
      line-height: 1.3em;
      font-family: inherit;
      cursor: default;

      &-body {
        margin: auto 0;
        flex: 1 1 auto;
        padding: 6px;
      }

      a,
      a:hover {
        color: currentColor;
        text-decoration: underline;
      }
    }

    &--animate {
      animation-fill-mode: both;
      animation-duration: 0.7s;
    }

    &__progress-bar {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
      z-index: 9999;
      opacity: 0.7;
      background: rgba(255, 255, 255, 0.25);
      transform-origin: left;

      &--animated {
        animation: Toastify__trackProgress linear 1 forwards;
      }

      &--controlled {
        transition: transform 0.2s;
      }

      &--rtl {
        right: 0;
        left: auto;
        transform-origin: right;
      }
    }

    &__toast--rtl {
      direction: rtl;
    }

    /* Variants */
    //&__toast--dark {
    //  background: #121212;
    //  color: #fff;
    //}
    //&__toast--default {
    //  background: #fff;
    //  color: #aaa;
    //}
    &__toast--info {
      background-color: var(--lido-color-accent);
      color: var(--lido-color-accent-contrast);
    }
    &__toast--error {
      background-color: var(--lido-color-error);
      color: var(--lido-color-error-contrast);
    }
    &__toast--warning {
      background-color: var(--lido-color-warning);
      color: var(--lido-color-warning-contrast);
    }
    &__toast--success {
      background-color: var(--lido-color-success);
      color: var(--lido-color-success-contrast);
    }
    /* /Variants */

    /* For animations */
    &__flip-enter {
      animation-name: Toastify__flipIn;
    }

    &__flip-exit {
      animation-name: Toastify__flipOut;
    }

    &__bounce-enter--bottom-left,
    &__bounce-enter--top-left {
      animation-name: Toastify__bounceInLeft;
    }

    &__bounce-enter--bottom-right,
    &__bounce-enter--top-right {
      animation-name: Toastify__bounceInRight;
    }

    &__bounce-enter--top-center {
      animation-name: Toastify__bounceInDown;
    }

    &__bounce-enter--bottom-center {
      animation-name: Toastify__bounceInUp;
    }

    &__bounce-exit--bottom-left,
    &__bounce-exit--top-left {
      animation-name: Toastify__bounceOutLeft;
    }

    &__bounce-exit--bottom-right,
    &__bounce-exit--top-right {
      animation-name: Toastify__bounceOutRight;
    }

    &__bounce-exit--top-center {
      animation-name: Toastify__bounceOutUp;
    }

    &__bounce-exit--bottom-center {
      animation-name: Toastify__bounceOutDown;
    }
    /* /For animations */
  }
`
