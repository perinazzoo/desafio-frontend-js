import React from 'react'
import { useKeenSlider } from 'keen-slider/react'
import Icon from './Icon'

type CarouselProps = {
  children: React.ReactNode
  count?: number
  rubberband?: boolean
  dots?: DotsType
  arrows?: ArrowsType
  loop?: boolean
  spacing?: number
}

type ArrowsType = {
  show: boolean
  nextArrow?: React.FC
  prevArrow?: React.FC
}

type DotsType = {
  show: boolean
  position: keyof typeof dotsPositionsClass
}

const defaultDots: DotsType = {
  show: false,
  position: 'bottom-middle'
}

const defaultArrows: ArrowsType = {
  show: false,
  nextArrow: () => <Icon name="arrow-right-slim" />,
  prevArrow: () => <Icon name="arrow-left-slim" />
}

const dotsPositionsClass = {
  'bottom-middle': 'bm',
  'bottom-left': 'bl'
}

export default function Carousel ({
  children,
  count = 1,
  loop = true,
  spacing = 0,
  rubberband = true,
  dots = defaultDots,
  arrows = defaultArrows
}: CarouselProps
) {
  const { nextArrow: NextArrow, prevArrow: PrevArrow } = { ...defaultArrows, ...arrows }
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slidesPerView: count,
    rubberband,
    loop,
    spacing,
    slideChanged (s) {
      if (dots.show || arrows.show) {
        setCurrentSlide(s.details().relativeSlide)
      }
    }
  })

  return (
    <div className="navigation-wrap relative">
      <div ref={sliderRef} className="keen-slider">
        {React.Children.map(children, (child, index) => (
          <div key={index} className="keen-slider__slide">
            {child}
          </div>
        ))}
      </div>

      {slider && arrows.show && (
        <>
          <button
            className="hidden lg:block absolute top-2/4"
            onClick={() => slider.prev()}
            >
            <PrevArrow />
          </button>
          <button
            className="hidden lg:block absolute top-2/4 right-0"
            onClick={() => slider.next()}
          >
            <NextArrow />
          </button>
        </>
      )}

      {slider && dots.show && (
        <div className={'flex absolute space-x-4 dots' + `--${dotsPositionsClass[dots.position]}`}>
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
