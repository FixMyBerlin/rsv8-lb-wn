import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from '@heroicons/react/24/outline'
import classNames from 'classnames'
import React, { useState } from 'react'
import { Quote } from '../PageHome'
import QuoteIcon from './assets/quote-icon.svg'

type Props = {
  items: Quote[]
}

export const QuotesSlider: React.FC<Props> = ({ items }) => {
  const [active, setActive] = useState<number>(0)

  const arrow = (icon, right = false) => {
    if ((right && active === items.length - 1) || (!right && active === 0)) {
      return null
    }

    return (
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault()
          setActive(
            Math.min(items.length - 1, Math.max(0, active + (right ? 1 : -1)))
          )
        }}
        className={classNames(
          'absolute top-0 block h-14 w-14 text-gray-400 hover:text-rs8-blue lg:top-[138px]',
          {
            'right-[60px] lg:left-0': !right,
            'right-0': right,
          }
        )}
      >
        {icon}
      </button>
    )
  }

  return (
    <div className="relative mt-10 mb-[110px] lg:h-[20em] lg:px-[70px]">
      {arrow(<ArrowLeftCircleIcon />)}
      <QuoteIcon className="absolute top-[8.25rem] left-2 z-[-1] w-10 stroke-[6px] object-cover text-slate-400 lg:left-[24.5rem] lg:-top-10 lg:w-40 lg:stroke-2" />
      {items.map((item, index) => (
        <figure
          key={item.person}
          className={`transition-opacity duration-500 lg:absolute lg:left-[70px] lg:right-[70px] lg:flex ${
            index === active
              ? 'visible lg:opacity-100'
              : 'hidden lg:visible lg:opacity-0'
          }`}
        >
          <div className="flex flex-col justify-between space-y-6">
            {item.image}
            <p className="max-w-[300px] text-center text-[16px] leading-5 text-gray-400">
              {item.source}
            </p>
          </div>
          <div className="pl-10 pt-6 lg:pt-12">
            <blockquote className="text-[24px] font-medium leading-[32px]">
              {item.quote}
            </blockquote>
            <figcaption className="text-[16px] leading-[24px]">
              <strong className="mt-8 block font-extrabold text-rs8-blue">
                {item.person}
              </strong>
              <span className="block text-rs8-pink">{item.position}</span>
            </figcaption>
          </div>
        </figure>
      ))}
      {arrow(<ArrowRightCircleIcon />, true)}
    </div>
  )
}
