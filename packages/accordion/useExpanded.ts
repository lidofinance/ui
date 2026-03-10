import { useCollapse } from 'react-collapsed'
import { AccordionProps } from './types.js'

export const useExpanded = ({
  defaultExpanded = false,
  onExpand,
  onCollapse,
}: Pick<AccordionProps, 'defaultExpanded' | 'onExpand' | 'onCollapse'>) => {
  const { getToggleProps, getCollapseProps, isExpanded } = useCollapse({
    defaultExpanded,
    onTransitionStateChange: (state) => {
      if (state === 'expandEnd') onExpand?.()
      if (state === 'collapseEnd') onCollapse?.()
    },
  })

  return {
    toggleProps: getToggleProps(),
    collapseProps: getCollapseProps(),
    isExpanded,
  }
}
