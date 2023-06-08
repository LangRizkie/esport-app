import classNames from 'classnames'

class OpportunityStyle {
  static Container = classNames('flex w-full justify-center')
  static Wrapper = classNames('flex container py-8 gap-8 flex-col')
  static Article = classNames('prose')
  static Title = classNames('flex w-full items-center justify-between')
  static Dropdown = classNames('dropdown')
  static DropdownContent = classNames(
    'dropdown-content menu p-2 mt-2 shadow rounded-box bg-base-100'
  )
  static Content = classNames('grid grid-cols-4 gap-8')
  static CardPlaceholder = classNames('w-full h-40 bg-gray-100 animate-pulse')
}

export default OpportunityStyle
