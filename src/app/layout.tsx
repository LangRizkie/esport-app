import { Inter } from 'next/font/google'
import classNames from 'classnames'
import type { Children } from '@/modules/interface'
import Header from '@/components/header/header'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'e-sport Recruitment',
  description: 'The one and only largest e-sport recruitment platform'
}

const RootLayout: React.FC<Children> = ({ children }) => {
  const fonts = classNames(inter.className)

  return (
    <html lang='en' data-theme='light' className={fonts}>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
