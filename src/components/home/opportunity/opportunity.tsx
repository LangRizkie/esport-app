'use client'

import { useState } from 'react'
import Button from '@/components/button/button'
import Constant from '@/modules/constant'
import Function from '@/modules/function'
import Card from '@/components/card/card'
import OpportunityStyle from './style'

const Opportunity = () => {
  const [selected, setSelected] = useState<number>(0)

  return (
    <section className={OpportunityStyle.Container}>
      <div className={OpportunityStyle.Wrapper}>
        <div className={OpportunityStyle.Title}>
          <article className={OpportunityStyle.Article}>
            <h2>{Constant.Home.Opportunity.Title[0]}</h2>
          </article>
          <div className={OpportunityStyle.Dropdown}>
            <Button tabIndex={selected}>{Constant.Home.Variant[selected] + 's'}</Button>
            <ul tabIndex={selected} className={OpportunityStyle.DropdownContent}>
              {Constant.Home.Variant.map((el, index) => (
                <li key={index} onClick={() => Function.handleDropdown(() => setSelected(index))}>
                  <span>{el}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={OpportunityStyle.Content}>
          {Array.from(Array(4).keys()).map((_, index) => (
            <Card key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Opportunity
