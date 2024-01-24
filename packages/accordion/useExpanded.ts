import { useCallback, useEffect, useState } from 'react'
import { AccordionProps } from './types.js'
import _useCollapse from 'react-collapsed'
import {
  GetCollapsePropsOutput,
  GetTogglePropsOutput,
} from 'react-collapsed/dist/types.js'

//@ts-expect-error Property default doesn't exist on type
const useCollapse: typeof _useCollapse = _useCollapse.default || _useCollapse

type UseExpanded = (
  props: Pick<AccordionProps, 'defaultExpanded' | 'onExpand' | 'onCollapse'>,
) => {
  toggleProps: GetTogglePropsOutput
  collapseProps: GetCollapsePropsOutput
  isExpanded: boolean
}

export const useExpanded: UseExpanded = ({
  defaultExpanded = false,
  onExpand,
  onCollapse,
}) => {
  const [isExpanded, setExpanded] = useState(defaultExpanded)

  useEffect(() => {
    setExpanded(defaultExpanded)
  }, [defaultExpanded])

  const handleToggle = useCallback(
    () => setExpanded((previous) => !previous),
    [],
  )

  const { getToggleProps, getCollapseProps } = useCollapse({
    isExpanded,
    onExpandEnd: onExpand,
    onCollapseEnd: onCollapse,
  })

  return {
    toggleProps: getToggleProps({ onClick: handleToggle }),
    collapseProps: getCollapseProps(),
    isExpanded,
  }
}
