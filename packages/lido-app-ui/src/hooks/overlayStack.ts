type LayerOptions = { capture?: boolean }

/** Each layer gets a document listener for `type` that only fires while it's the newest layer in its stack. */
export const createLayerStack = <K extends keyof DocumentEventMap>(
  type: K,
  { capture = false }: LayerOptions = {},
) => {
  const layers: object[] = []
  return (onEvent: (event: DocumentEventMap[K]) => void) => {
    const layer = {}
    layers.push(layer)
    const listener = (event: DocumentEventMap[K]) => {
      if (layers[layers.length - 1] === layer) onEvent(event)
    }
    document.addEventListener(type, listener, capture)
    return () => {
      document.removeEventListener(type, listener, capture)
      layers.splice(layers.indexOf(layer), 1)
    }
  }
}
