import { Button } from '@/modules/interface'
import ButtonStyle from './style'

const Button = ({ children, square = false, ...props }: Button) => {
  const buttonProps = { ...props } as React.ButtonHTMLAttributes<HTMLButtonElement>

  return (
    <button {...buttonProps} className={ButtonStyle.Container(square, props.className)}>
      <span className={ButtonStyle.Inset} />
      <span className={ButtonStyle.AbsoluteInset} />
      <span className={ButtonStyle.Button}>{children}</span>
    </button>
  )
}

export default Button
