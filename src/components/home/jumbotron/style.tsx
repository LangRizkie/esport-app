import classNames from 'classnames'

class JumbotronStyle {
  static Container = classNames('flex relative w-full h-[80vh] justify-center')
  static Background = classNames(
    'absolute w-full h-full bg-[url("/background-2.jpg")] bg-cover bg-no-repeat bg-center -z-10'
  )
  static Gradient = classNames(
    'absolute w-full h-full bg-gradient-to-r from-base-100 from-20% to-transparent -z-10'
  )
  static Wrapper = classNames('flex container gap-y-24 py-16 z-10 flex-col')
  static Article = classNames('prose max-w-none')
  static Title = classNames('text-6xl text-white leading-tight')
  static Variant = classNames('text-primary')
  static Description = classNames('whitespace-pre-wrap')
  static Button = classNames('btn-wide btn-lg')
}

export default JumbotronStyle
