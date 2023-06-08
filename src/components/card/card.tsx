import { BiMap, BiMedal } from 'react-icons/bi'
import Image from 'next/image'
import type { userProps } from '@/modules/result/interface'
import CardStyle from './style'

const Card = ({ data }: { data: userProps }) => (
  <div className={CardStyle.Container}>
    <div className={CardStyle.Title}>
      <div className={CardStyle.Avatar}>
        <div className={CardStyle.Placeholder}>
          <Image width={96} height={96} src={data.avatar} alt='Avatar' draggable={false} />
        </div>
      </div>
      <div className={CardStyle.Brand}>
        <span className={CardStyle.Name}>{data.isTeam ? data.name : data.username}</span>
        <span className={CardStyle.Type}>{data.type}</span>
      </div>
    </div>
    <div className={CardStyle.Content}>
      <div className={CardStyle.Location}>
        <BiMap />
        <span>{data.location}</span>
      </div>
      <div className={CardStyle.Overview}>
        <div className={CardStyle.Role}>
          <BiMedal />
          <span>{data.role}</span>
        </div>
        <div className={CardStyle.Signature}>
          {data.signature.map((signature, index) => (
            <div key={index} className={CardStyle.Avatar}>
              <div className={CardStyle.Character}>
                <Image
                  width={96}
                  height={96}
                  src={signature.icon || signature.portrait || ''}
                  alt='Avatar'
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default Card
