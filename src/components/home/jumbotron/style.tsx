import classNames from 'classnames'

class JumbotronStyle {
  static Container = classNames('flex w-full justify-center')
  static Wrapper = classNames('flex container gap-y-24 py-16 flex-col')
  static Article = classNames('prose max-w-none')
  static Title = classNames('text-6xl leading-tight')
  static Variant = classNames('text-primary')
  static Description = classNames('whitespace-pre-wrap')
}

export default JumbotronStyle
