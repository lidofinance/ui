import { useCallback, useEffect, useState } from 'react'
import { AccordionProps } from './Accordion'
import useCollapse from 'react-collapsed'
import {
  GetCollapsePropsOutput,
  GetTogglePropsOutput,
} from 'react-collapsed/dist/types'

type UseExpanded = (props: AccordionProps) => {
  toggleProps: GetTogglePropsOutput
  collapseProps: GetCollapsePropsOutput
  isExpanded: boolean
}

export const useExpanded: UseExpanded = ({ defaultExpanded = false }) => {
  const [isExpanded, setExpanded] = useState(defaultExpanded)

  useEffect(() => {
    setExpanded(defaultExpanded)
  }, [defaultExpanded])

  const handleToggle = useCallback(
    () => setExpanded((previous) => !previous),
    [],
  )

  const { getToggleProps, getCollapseProps } = useCollapse({ isExpanded })

  return {
    toggleProps: getToggleProps({ onClick: handleToggle }),
    collapseProps: getCollapseProps(),
    isExpanded,
  }
}
