import Image from 'next/image'
import Constant from '@/modules/constant'
import SupportStyle from './style'

const Support = () => (
  <section className={SupportStyle.Container}>
    <div className={SupportStyle.Wrapper}>
      <span>{Constant.Home.Support.Title}</span>
      <div className={SupportStyle.Images}>
        {Array.from(Array(8).keys()).map((_, index) => (
          <Image
            key={index}
            width={96}
            height={96}
            src={`https://fakeimg.pl/96x96?text=${index}`}
            alt='Logo'
            draggable={false}
          />
        ))}
      </div>
    </div>
  </section>
)

export default Support
