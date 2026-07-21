import { useCallback, useState, useEffect } from 'react'

type WindowSize = [width: number, height: number]

const getWindowSize = (): WindowSize => {
  const width = window.innerWidth
  const height = window.innerHeight

  return [width, height]
}

export const useWindowSize = (): WindowSize => {
  const [size, setSize] = useState(getWindowSize)

  const handleResize = useCallback(() => {
    setSize(getWindowSize())
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [handleResize])

  return size
}
