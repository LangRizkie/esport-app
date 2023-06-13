import classNames from 'classnames'

class HeaderStyle {
  static Container = classNames(
    'fixed flex top-0 left-0 w-full h-full max-h-24 bg-base-200 z-20 justify-center'
  )
  static Wrapper = classNames('flex container justify-between items-center')
  static Logo = classNames('flex w-48 h-16 items-center')
  static Navigation = classNames('flex gap-16 items-center')
  static List = classNames('menu gap-x-4 menu-horizontal px-1')
  static Button = classNames('flex gap-4 items-center')
  static Tooltip = classNames('tooltip tooltip-bottom')
}

export default HeaderStyle
