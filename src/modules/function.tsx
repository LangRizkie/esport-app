import type { userProps } from './result/interface'

class Function {
  static handleDropdown = (callback: CallableFunction) => {
    const element = document.activeElement as HTMLElement
    if (element) element.blur()

    callback()
  }

  static toDetailPage = (data: userProps) => `/${data.type}/${data.username}`
}

export default Function
