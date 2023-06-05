import classNames from 'classnames'

class HeaderStyle {
  static Container = classNames('absolute flex w-full h-full max-h-32 justify-center')
  static Wrapper = classNames('flex container justify-between items-center')
  static Logo = classNames('w-48 h-16')
  static Navigation = classNames('flex gap-8 items-center')
  static Link = classNames('flex gap-4 items-center')
  static Button = classNames('flex gap-4 items-center')
  static Register = classNames('btn btn-primary')
  static Tooltip = classNames('tooltip tooltip-bottom')
  static Login = classNames('btn btn-primary btn-square btn-outline')
}

export default HeaderStyle
