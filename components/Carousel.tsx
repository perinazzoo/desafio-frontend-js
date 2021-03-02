import React from 'react'
import { TOptions } from 'keen-slider'
import { useKeenSlider } from 'keen-slider/react'
import Icon from './Icon'

type ArrowsType = {
  show: boolean
  nextArrow?: React.FC
  prevArrow?: React.FC
}

type DotsType = {
  show: boolean
}

type CarouselProps = {
  children: React.ReactNode
  dots?: DotsType
  arrows?: ArrowsType
  options?: TOptions
  slideHeightClass?: string
}

const defaultDots: DotsType = {
  show: false
}

const defaultArrows: ArrowsType = {
  show: false,
  nextArrow: () => <Icon name="arrow-right-slim" />,
  prevArrow: () => <Icon name="arrow-left-slim" />
}

export default function Carousel ({
  children,
  dots = defaultDots,
  arrows = defaultArrows,
  slideHeightClass = '',
  options
}: CarouselProps
) {
  const { nextArrow: NextArrow, prevArrow: PrevArrow } = { ...defaultArrows, ...arrows }
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [loaded, setLoaded] = React.useState(false)
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    mounted (s) {
      setLoaded(true)
    },
    slideChanged (s) {
      if (dots.show || arrows.show) {
        setCurrentSlide(s.details().relativeSlide)
      }
    },
    ...options
  })

  const childrenLength = React.Children.toArray(children).length
  const slideLenght = currentSlide + 1

  return (
    <div className="relative w-full">
      <div ref={sliderRef} className={'keen-slider ' + slideHeightClass}>
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            className="keen-slider__slide"
            style={{ width: `calc(100% / ${options.slidesPerView as number || 1} - ${options.spacing / 2})` }}
          >
            {loaded && child}
          </div>
        ))}
      </div>

      {slider && arrows.show && (
        <>
          {currentSlide > 0 && (
            <button
              className="hidden lg:block absolute top-2/4 xl:transform xl:-translate-y-2/4 left-5 p-1 focus:outline-none"
              onClick={() => slider.prev()}
            >
              <PrevArrow />
            </button>
          )}
          {slideLenght < childrenLength && (
            <button
              className="hidden lg:block absolute top-2/4 xl:transform xl:-translate-y-2/4 right-5 p-1 focus:outline-none"
              onClick={() => slider.next()}
            >
              <NextArrow />
            </button>
          )}
        </>
      )}

      {slider && dots.show && (
        <div className="flex absolute space-x-4 dots">
          {Array.from(Array(slider?.details().size).keys()).map(i => (
            <button
              key={i}
              onClick={() => slider.moveToSlideRelative(i)}
              className={'focus:outline-none rounded-full w-2.5 h-2.5' + (currentSlide === i ? ' bg-base-white' : ' border-2 border-base-white')}
            />
          ))}
        </div>
      )}
    </div>
  )
}
