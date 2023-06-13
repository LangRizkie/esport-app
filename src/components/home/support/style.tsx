import classNames from 'classnames'

class SupportStyle {
  static Container = classNames('flex w-full text-white bg-primary justify-center')
  static Wrapper = classNames(
    'flex container w-full py-16 gap-8 flex-col justify-center items-center'
  )
  static Images = classNames('grid grid-cols-7 gap-16 items-center')
  static Image = classNames('aspect-[3/2] object-contain')
}

export default SupportStyle
