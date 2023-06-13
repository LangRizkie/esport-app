'use client'

import { useEffect, useState } from 'react'
import { titleCase } from 'text-case'
import Link from 'next/link'
import Button from '@/components/button/button'
import Constant from '@/modules/constant'
import Function from '@/modules/function'
import Card from '@/components/card/card'
import { useGetBuffedListMutation } from '@/redux/services/buffed'
import OpportunityStyle from './style'

const Opportunity = () => {
  const [selected, setSelected] = useState<number>(0)
  const [getBuffedList, list] = useGetBuffedListMutation()

  useEffect(() => {
    getBuffedList(Constant.Home.Variant[selected])
  }, [getBuffedList, selected])

  return (
    <section className={OpportunityStyle.Container}>
      <div className={OpportunityStyle.Wrapper}>
        <div className={OpportunityStyle.Title}>
          <article className={OpportunityStyle.Article}>
            <h2 className={OpportunityStyle.H2}>{Constant.Home.Opportunity.Title[0]}</h2>
          </article>
          <div className={OpportunityStyle.Dropdown}>
            <Button tabIndex={selected}>{titleCase(Constant.Home.Variant[selected])}</Button>
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
          {list.isLoading &&
            Array.from(Array(4).keys()).map((_, index) => (
              <div key={index} className={OpportunityStyle.CardPlaceholder} />
            ))}
          {list &&
            list.data &&
            list.data.map((data, index) => (
              <Link key={index} href={Function.toDetailPage(data)} passHref shallow>
                <Card data={data} />
              </Link>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Opportunity
