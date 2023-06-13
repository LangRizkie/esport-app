import classNames from 'classnames'

class ButtonStyle {
  static Container = (square?: boolean, custom?: string) =>
    classNames('relative inline-block px-4 py-2 font-medium group', { '!p-2.5': square }, custom)

  static Inset = classNames(
    'absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0'
  )

  static AbsoluteInset = classNames(
    'absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-primary'
  )

  static Button = classNames('relative text-black group-hover:text-white')
}

export default ButtonStyle
