import { BiLogInCircle } from 'react-icons/bi'
import Link from 'next/link'
import Constant from '@/modules/constant'
import HeaderStyle from './style'

const Header = () => (
  <header className={HeaderStyle.Container}>
    <div className={HeaderStyle.Wrapper}>
      <div className={HeaderStyle.Logo} />
      <div className={HeaderStyle.Navigation}>
        <div className={HeaderStyle.Link}>
          {Constant.HeaderNavigation.map((menu, index) => (
            <Link key={index} href={menu.path} shallow>
              {menu.name}
            </Link>
          ))}
        </div>
        <div className={HeaderStyle.Button}>
          <button type='button' title='Register' className={HeaderStyle.Register}>
            Register
          </button>
          <div className={HeaderStyle.Tooltip} data-tip='Login'>
            <button type='button' title='Login' className={HeaderStyle.Login}>
              <BiLogInCircle size={20} color='white' />
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
)

export default Header
