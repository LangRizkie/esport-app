import { Inter } from 'next/font/google'
import classNames from 'classnames'
import Providers from '@/redux/provider'
import Header from '@/components/header/header'
import type { Children } from '@/modules/interface'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'e-sport Recruitment',
  description: 'The one and only largest e-sport recruitment platform'
}

const RootLayout: React.FC<Children> = ({ children }) => {
  const fonts = classNames(inter.className)

  return (
    <html lang='en' data-theme='dark' className={fonts}>
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
