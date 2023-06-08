export interface Children {
  children?: React.ReactNode
}

export interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement>, Children {
  square?: boolean
}
