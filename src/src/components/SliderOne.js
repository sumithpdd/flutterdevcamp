import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide , useSwiper  } from 'swiper/react';

// Import Swiper styles
import 'swiper/css'; 
import slidestrech from "../assets/images/slider-1-scratch.png";
import person1 from "../assets/images/kari-shea-vGgaESc2M1Y-unsplash.jpg";
import person2 from "../assets/images/slider-1-person-2.png";
const SliderOne = () => {
  const swiper  = useSwiper();

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  return (
    <div className="banner-wrapper">
      <section className="banner-one banner-carousel__one no-dots">
        <Swiper >
        <SwiperSlide>
          <div className="banner-one__slide banner-one__slide-one">
            <div className="container">
              <div className="banner-one__bubble-1"></div>
              <div className="banner-one__bubble-2"></div>
              <div className="banner-one__bubble-3"></div>
              <img src={slidestrech} alt="" className="banner-one__scratch" />
              <img src={person1} className="banner-one__person" alt="" />
              <div className="row no-gutters">
                <div className="col-xl-12">
                  <h3 className="banner-one__title banner-one__light-color">
                    We Can <br />
                    Teach You
                  </h3>
                  <p className="banner-one__tag-line">
                    are you ready to learn?
                  </p>
                  <a href="#none" className="thm-btn banner-one__btn">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="banner-one__slide banner-one__slide-two">
            <div className="container">
              <div className="banner-one__bubble-1"></div>
              <div className="banner-one__bubble-2"></div>
              <div className="banner-one__bubble-3"></div>
              <img src={slidestrech} alt="" className="banner-one__scratch" />
              <img src={person2} className="banner-one__person" alt="" />
              <div className="row no-gutters">
                <div className="col-xl-12">
                  <h3 className="banner-one__title banner-one__light-color">
                    We Can <br />
                    Teach You
                  </h3>
                  <p className="banner-one__tag-line">
                    are you ready to learn?
                  </p>
                  <a href="#none" className="thm-btn banner-one__btn">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <div className="banner-carousel-btn">
        <div
          onClick={goPrev}
          onKeyUp={goPrev}
          tabIndex={0}
          role="button"
          className="banner-carousel-btn__left-btn banner-arrow"
        >
          <i className="Flutter DevCamp |-icon-left-arrow"></i>
        </div>
        <div
          onClick={goNext}
          onKeyDown={goNext}
          role="button"
          tabIndex={0}
          className="banner-carousel-btn__right-btn banner-arrow"
        >
          <i className="Flutter DevCamp |-icon-right-arrow"></i>
        </div>
      </div>
      <div className="banner-one__cta">
        <div className="banner-one__cta-icon">
          <i className="Flutter DevCamp |-icon-black-graduation-cap-tool-of-university-student-for-head"></i>
        </div>
        <div className="banner-one__cta-title">
          <h3 className="banner-one__cta-text">
            <a href="#none">Read how we encourage our students to learn</a>
          </h3>
        </div>
        <div className="banner-one__cta-link">
          <a href="#none">
            <i className="Flutter DevCamp |-icon-right-arrow"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
export default SliderOne;
