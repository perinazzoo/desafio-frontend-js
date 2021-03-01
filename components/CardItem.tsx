import Image from 'next/image'
import Link from 'next/link'
import resolveConfig from 'tailwindcss/resolveConfig'

import tailwindConfig from '../tailwind.config'

import Icon from './Icon'

type CardItemProps = {
  cardData: {
    image: string
    tag: 'interno' | 'confidencial'
    icon: React.FC
    metric: string
    title: string
    category: string
    averageTime: number
    percentage?: number
  }
}

const fullConfig = resolveConfig(tailwindConfig)

export default function CardItem ({ cardData }: CardItemProps) {
  const tagClass = cardData.tag === 'confidencial' ? 'text-orange-500' : 'text-success-500'

  return (
    <div className="mb-6">
      <Link href="/post">
        <a className="relative w-full h-full flex flex-col">
          <span
           className={'opacity-80 rounded-br rounded-tl absolute top-0 left-0 z-10 px-4 bg-base-white uppercase text-xs tracking-wider ' + tagClass}
          >
            {cardData.tag}
          </span>
          <Image
            className="rounded"
            layout="responsive"
            src={cardData.image}
            width="336"
            height="195"
          />
          <div className="flex rounded-full bg-base-white opacity-80 absolute bottom-4 right-4 px-2 py-0.5 items-center">
            <cardData.icon />
            <div className="border-l border-action-600 mx-2 h-3"/>
            <span
              className="text-action-600 text-xs"
            >
              {cardData.metric}
            </span>
          </div>
          {cardData.percentage && (
            <div className="absolute bottom-0 left-0 w-full h-1">
              <div className="bg-action-600 w-full h-full rounded-b">
                <div
                 className={'bg-vibrant-500 h-full ' + (cardData.percentage === 100 ? 'rounded-b' : 'rounded-bl') }
                 style={{ width: `${cardData.percentage}%` }}
                />
              </div>
            </div>
          )}
        </a>
      </Link>
      <p className="text-sm text-grey-800 mt-4 mb-1 truncate">{cardData.title}</p>
      <div className="flex items-center text-grey-500 text-xs">
        <span>{cardData.category}</span>
        <div className="border-l border-grey-500 mx-2 h-4"/>
        <Icon
          size={14}
          color={fullConfig.theme.colors.grey[500]}
          name="clock"
        />
        <span className="ml-1">+ {cardData.averageTime} min</span>
      </div>
    </div>
  )
}
