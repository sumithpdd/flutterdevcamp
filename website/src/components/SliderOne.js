import React from 'react'
// Import Swiper React components
import { useSwiper } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import slidestrech from '../assets/images/slider-1-scratch.png'
const SliderOne = () => {
  const swiper = useSwiper()

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext()
    }
  }

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev()
    }
  }

  return (
    <div className="banner-wrapper">
      <section className="banner-one banner-carousel__one no-dots">
        <div className="banner-one__slide banner-one__slide-one">
          <div className="container">
            <div className="banner-one__bubble-1"></div>
            <div className="banner-one__bubble-2"></div>
            <div className="banner-one__bubble-3"></div>
            <img src={slidestrech} alt="" className="banner-one__scratch" />
         
            <div className="row no-gutters">
              <div className="col-xl-12">
                <h3 className="banner-one__title banner-one__light-color">
                  We Can <br />
                  help You
                </h3>
                <p className="banner-one__tag-line">
                  are you ready to learn flutter?
                </p>
                <a
                  href="https://docs.google.com/forms/d/1OvAHbrlW7Dxp_lbqrororZ9XCa7VeixrDcUTlxTs20o"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="thm-btn banner-one__btn"
                >
                  Signup here ➡
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default SliderOne
