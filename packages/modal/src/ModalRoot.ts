const ModalRoot = ((): HTMLElement | null => {
  try {
    let modalRoot = document.getElementById('modal-root')

    if (!modalRoot) {
      modalRoot = document.createElement('div')
      modalRoot.id = 'modal-root'
      document.body.append(modalRoot)
    }

    return modalRoot
  } catch (error) {
    return null
  }
})()

export default ModalRoot
