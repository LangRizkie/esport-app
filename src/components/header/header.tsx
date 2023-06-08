import { BiLogInCircle } from 'react-icons/bi'
import Link from 'next/link'
import { titleCase } from 'text-case'
import Image from 'next/image'
import Constant from '@/modules/constant'
import Button from '@/components/button/button'
import HeaderStyle from './style'

const Header = () => (
  <header className={HeaderStyle.Container}>
    <div className={HeaderStyle.Wrapper}>
      <div className={HeaderStyle.Logo}>
        <Image
          width={192}
          height={64}
          src='https://fakeimg.pl/192x64?text=Logo'
          alt='Logo'
          draggable={false}
        />
      </div>
      <div className={HeaderStyle.Navigation}>
        <ul className={HeaderStyle.List}>
          {Constant.HeaderNavigation.map((menu, index) => (
            <Link key={index} href={menu.path} shallow>
              <li>
                <span>{titleCase(menu.name)}</span>
              </li>
            </Link>
          ))}
        </ul>
        <div className={HeaderStyle.Button}>
          <Button type='button'>Join</Button>
          <div className={HeaderStyle.Tooltip} data-tip='Login'>
            <Button type='button' square>
              <BiLogInCircle size={20} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  </header>
)

export default Header
