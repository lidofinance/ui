// get max height between all elements
export const getContainerSize = (elementIds: string[]) => {
  if (!elementIds.length) return null

  const isCenterAlign = elementIds.every((id) => {
    const element = document.getElementById(id)
    return (
      element?.dataset.labelPosition === 'top' ||
      element?.dataset.labelPosition === 'bottom'
    )
  })

  const size = elementIds.reduce((acc, id) => {
    const element = document.getElementById(id)
    if (element && element.offsetHeight > 0) {
      return Math.max(acc, element.offsetHeight)
    }
    return acc
  }, 0)

  return {
    size: isCenterAlign ? size * 2 : size,
    isCenterAlign,
  }
}
