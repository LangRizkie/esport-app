import classNames from 'classnames'

class SupportStyle {
  static Container = classNames('flex w-full bg-gray-50 justify-center')
  static Wrapper = classNames(
    'flex container w-full py-8 gap-8 flex-col justify-center items-center'
  )
  static Images = classNames('grid grid-cols-8 gap-4')
}

export default SupportStyle
