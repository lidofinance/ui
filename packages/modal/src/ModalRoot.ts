const ModalRoot = ((): HTMLElement => {
  let modalRoot = document.getElementById('modal-root')

  if (!modalRoot) {
    modalRoot = document.createElement('div')
    modalRoot.id = 'modal-root'
    document.body.append(modalRoot)
  }

  return modalRoot
})()

export default ModalRoot
