import Image from 'next/image'
import Constant from '@/modules/constant'
import SupportStyle from './style'

const Support = () => (
  <section className={SupportStyle.Container}>
    <div className={SupportStyle.Wrapper}>
      <span>{Constant.Home.Support.Title}</span>
      <div className={SupportStyle.Images}>
        {Constant.Home.Support.Assets.map((logo, index) => (
          <Image
            className={SupportStyle.Image}
            key={index}
            width={96}
            height={96}
            src={`/support/${logo}.svg`}
            alt={logo}
            draggable={false}
          />
        ))}
      </div>
    </div>
  </section>
)

export default Support
