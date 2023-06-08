import classNames from 'classnames'

class CardStyle {
  static Container = classNames(
    'flex w-full h-48 p-4 shadow bg-white overflow-hidden flex-col justify-between'
  )
  static Title = classNames('flex w-full gap-4 items-start')
  static Avatar = classNames('avatar placeholder')
  static Placeholder = classNames('bg-neutral-focus text-neutral-content rounded-full w-10')
  static Brand = classNames('flex w-full truncate flex-col justify-between')
  static Name = classNames('font-semibold truncate')
  static Type = classNames('text-xs')
  static Content = classNames('flex w-full gap-1 flex-col')
  static Location = classNames('flex gap-2 text-xs text-gray-500 overflow-hidden items-center')
  static Overview = classNames('flex w-full items-center justify-between')
  static Role = classNames('flex gap-2 text-xs text-gray-500 overflow-hidden items-center')
  static Signature = classNames('avatar-group -space-x-3')
  static Character = classNames('bg-neutral-focus text-neutral-content rounded-full w-6')
}

export default CardStyle
