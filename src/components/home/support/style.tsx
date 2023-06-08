import classNames from 'classnames'

class SupportStyle {
  static Container = classNames('flex w-full text-white bg-primary justify-center')
  static Wrapper = classNames(
    'flex container w-full py-8 gap-8 flex-col justify-center items-center'
  )
  static Images = classNames('grid grid-cols-6 gap-8')
  static Image = classNames('aspect-[3/2] object-contain')
}

export default SupportStyle
