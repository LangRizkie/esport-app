import { BiBookmark, BiMap, BiMedal } from 'react-icons/bi'
import Image from 'next/image'
import CardStyle from './style'

const Card = () => (
  <div className={CardStyle.Container}>
    <div className={CardStyle.Title}>
      <div className={CardStyle.Avatar}>
        <div className={CardStyle.Placeholder}>
          <Image
            width={96}
            height={96}
            src='https://fakeimg.pl/96x96'
            alt='Avatar'
            draggable={false}
          />
        </div>
      </div>
      <div className={CardStyle.Brand}>
        <span className={CardStyle.Name}>Gilang Rizkie</span>
        <span className={CardStyle.Type}>Player</span>
      </div>
      <button type='button' title='bookmark'>
        <BiBookmark />
      </button>
    </div>
    <div className={CardStyle.Content}>
      <div className={CardStyle.Location}>
        <BiMap />
        <span>Bandung, Jawa Barat.</span>
      </div>
      <div className={CardStyle.Overview}>
        <div className={CardStyle.Role}>
          <BiMedal />
          <span>Offlaner</span>
        </div>
        <div className={CardStyle.Signature}>
          <div className={CardStyle.Avatar}>
            <div className={CardStyle.Character}>
              <Image
                width={96}
                height={96}
                src='https://fakeimg.pl/96x96'
                alt='Avatar'
                draggable={false}
              />
            </div>
          </div>
          <div className={CardStyle.Avatar}>
            <div className={CardStyle.Character}>
              <Image
                width={96}
                height={96}
                src='https://fakeimg.pl/96x96'
                alt='Avatar'
                draggable={false}
              />
            </div>
          </div>
          <div className={CardStyle.Avatar}>
            <div className={CardStyle.Character}>
              <Image
                width={96}
                height={96}
                src='https://fakeimg.pl/96x96'
                alt='Avatar'
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Card
