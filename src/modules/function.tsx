class Function {
  static handleDropdown = (callback: CallableFunction) => {
    const element = document.activeElement as HTMLElement
    if (element) element.blur()

    callback()
  }
}

export default Function
