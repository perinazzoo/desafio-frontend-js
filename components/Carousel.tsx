import React from 'react'
import { useKeenSlider } from 'keen-slider/react'

type CarouselProps = {
  children: React.ReactNode
  count?: number
  rubberband?: boolean
  dots?: DotsType
  arrows?: ArrowsType
}

type ArrowsType = {
  show: boolean
  nextArrow: React.FC | string
  prevArrow: React.FC | string
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
  nextArrow: '>',
  prevArrow: '<'
}

const dotsPositionsClass = {
  'bottom-middle': 'bm',
  'bottom-left': 'bl'
}

export default function Carousel ({
  children,
  count = 1,
  rubberband = true,
  dots = defaultDots,
  arrows = defaultArrows
}: CarouselProps
) {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slidesPerView: count,
    rubberband,
    slideChanged (s) {
      if (dots.show || arrows.show) {
        setCurrentSlide(s.details().relativeSlide)
      }
    }
  })

  return (
    <div className="navigation-wrap">
      <div ref={sliderRef} className="keen-slider">
        {React.Children.map(children, (child, index) => (
          <div key={index} className="keen-slider__slide">
            {child}
          </div>
        ))}
      </div>

      {slider && (
        <>
          <button
            onClick={() => slider.prev()}
            >
            {() => arrows.prevArrow}
          </button>
          <button
            onClick={() => slider.next()}
          >
            {() => arrows.nextArrow}
          </button>
        </>
      )}

      {slider && dots.show && (
        <div className={'dots' + `--${dotsPositionsClass[dots.position]}`}>
          {Array.from(Array(slider?.details().size).keys()).map(i => (
            <button
              key={i}
              onClick={() => slider.moveToSlideRelative(i)}
              className={'dot' + (currentSlide === i ? ' active' : '')}
            />
          ))}
        </div>
      )}
    </div>
  )
}
