'use client'

import type { PropsWithChildren } from 'react'
import { useEffect, useState } from 'react'
import type { TextTransitionProps } from 'react-text-transition'
import TextTransition, { presets } from 'react-text-transition'
import Constant from '@/modules/constant'
import Button from '@/components/button/button'
import JumbotronStyle from './style'

const Jumbotron = () => {
  const [index, setIndex] = useState<number>(0)
  const transitionConfig: PropsWithChildren<TextTransitionProps> = {
    springConfig: presets.gentle,
    direction: 'down',
    inline: true,
    delay: 2000
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(index == Constant.Home.Variant.length - 1 ? 0 : index + 1)
    }, 2000)

    return () => clearInterval(interval)
  }, [index])

  return (
    <section className={JumbotronStyle.Container}>
      <div className={JumbotronStyle.Background} />
      <div className={JumbotronStyle.Gradient} />
      <div className={JumbotronStyle.Wrapper}>
        <article className={JumbotronStyle.Article}>
          <h1 className={JumbotronStyle.Title}>
            {Constant.Home.Jumbotron.Title[0]}&nbsp;
            <TextTransition className={JumbotronStyle.Variant} {...transitionConfig}>
              {Constant.Home.Variant[index]}
            </TextTransition>
            <br />
            {Constant.Home.Jumbotron.Title[1]}
          </h1>
          <p className={JumbotronStyle.Description}>{Constant.Home.Jumbotron.Description}</p>
        </article>
        <Button type='button' className={JumbotronStyle.Button}>
          {Constant.Home.Jumbotron.Button}
        </Button>
      </div>
    </section>
  )
}

export default Jumbotron
