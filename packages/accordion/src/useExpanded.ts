import { useCallback, useEffect, useState } from 'react'
import useCollapse from 'react-collapsed'

export const useExpanded = ({ defaultExpanded = false }) => {
  const [isExpanded, setExpanded] = useState(defaultExpanded)

  useEffect(() => {
    setExpanded(defaultExpanded)
  }, [defaultExpanded])

  const handleToggle = useCallback(
    () => setExpanded((previous) => !previous),
    []
  )

  const { getToggleProps, getCollapseProps } = useCollapse({ isExpanded })

  return {
    toggleProps: getToggleProps({ onClick: handleToggle }),
    collapseProps: getCollapseProps(),
    isExpanded,
  }
}
