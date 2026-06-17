const ROOT_ID = 'lido-ui-modal-root'

const ModalRoot = ((): HTMLElement | null => {
  try {
    let modalRoot = document.getElementById(ROOT_ID)

    if (!modalRoot) {
      modalRoot = document.createElement('div')
      modalRoot.id = ROOT_ID
      document.body.append(modalRoot)
    }

    return modalRoot
  } catch (error) {
    return null
  }
})()

export default ModalRoot
