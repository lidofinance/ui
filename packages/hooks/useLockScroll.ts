import { useCallback, useLayoutEffect } from 'react'

const getScrollbarSize = (): number => {
  const tempDiv = document.createElement('div')

  Object.assign(tempDiv.style, {
    position: 'absolute',
    left: '-9000px',
    width: '100px',
    height: '100px',
    overflow: 'scroll',
  })

  document.body.appendChild(tempDiv)
  const scrollbarSize = tempDiv.offsetWidth - tempDiv.clientWidth
  document.body.removeChild(tempDiv)

  return scrollbarSize
}

const isVerticalScroll = (element: HTMLElement): boolean => {
  const isBody = document.body === element

  return isBody
    ? window.innerWidth > document.documentElement.clientWidth
    : element.scrollHeight > element.clientHeight
}

const getPaddingRight = (element: HTMLElement): number => {
  return parseInt(window.getComputedStyle(element).paddingRight, 10) || 0
}

const setStyleProperty = (
  element: HTMLElement,
  property: string,
  value?: string
): void => {
  if (value) {
    element.style.setProperty(property, value)
  } else {
    element.style.removeProperty(property)
  }
}

export const useLockScroll = (element: HTMLElement = document.body): void => {
  const lockScroll = useCallback(() => {
    if (!isVerticalScroll(element)) return

    const previousValues = {
      paddingRight: element.style.paddingRight,
      overflow: element.style.overflow,
    }

    const paddingRight = getPaddingRight(element) + getScrollbarSize()
    setStyleProperty(element, 'padding-right', `${paddingRight}px`)
    setStyleProperty(element, 'overflow', 'hidden')

    const unlockScroll = () => {
      const { paddingRight, overflow } = previousValues

      setStyleProperty(element, 'padding-right', paddingRight)
      setStyleProperty(element, 'overflow', overflow)
    }

    return unlockScroll
  }, [element])

  useLayoutEffect(() => {
    const unlockScroll = lockScroll()
    return unlockScroll
  }, [lockScroll])
}
