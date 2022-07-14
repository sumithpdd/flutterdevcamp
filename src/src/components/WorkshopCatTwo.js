import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";

const WorkshopCatTwo = () => {
  const params = {
    slidesPerView: 5,
    loop: true,
    speed: 1000,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },

    // Responsive breakpoints
    breakpoints: {
      1024: {
        slidesPerView: 5
      },
      768: {
        slidesPerView: 4
      },
      640: {
        slidesPerView: 3
      },
      320: {
        slidesPerView: 2
      }
    }
  };

  return (
    <section className="Workshop-category-two">
      <div className="container text-center">
        <div className="inner-container">
          <div className="Workshop-category-two__carousel">
            <Swiper {...params}>
              <div className="item">
                <div className="Workshop-category-two__single color-1">
                  <div className="Workshop-category-two__icon">
                    <i className="Flutter DevCamp |-icon-desktop"></i>
                  </div>
                  <h3 className="Workshop-category-two__title">
                    <a href="#none">IT & Software</a>
                  </h3>
                </div>
              </div>
              <div className="item">
                <div className="Workshop-category-two__single color-2">
                  <div className="Workshop-category-two__icon">
                    <i className="Flutter DevCamp |-icon-web-programming"></i>
                  </div>
                  <h3 className="Workshop-category-two__title">
                    <a href="#none">Development</a>
                  </h3>
                </div>
              </div>
              <div className="item">
                <div className="Workshop-category-two__single color-3">
                  <div className="Workshop-category-two__icon">
                    <i className="Flutter DevCamp |-icon-music-player"></i>
                  </div>
                  <h3 className="Workshop-category-two__title">
                    <a href="#none">Music</a>
                  </h3>
                </div>
              </div>
              <div className="item">
                <div className="Workshop-category-two__single color-4">
                  <div className="Workshop-category-two__icon">
                    <i className="Flutter DevCamp |-icon-camera"></i>
                  </div>
                  <h3 className="Workshop-category-two__title">
                    <a href="#none">Photography</a>
                  </h3>
                </div>
              </div>
              <div className="item">
                <div className="Workshop-category-two__single color-5">
                  <div className="Workshop-category-two__icon">
                    <i className="Flutter DevCamp |-icon-targeting"></i>
                  </div>
                  <h3 className="Workshop-category-two__title">
                    <a href="#none">Marketing</a>
                  </h3>
                </div>
              </div>
              <div className="item">
                <div className="Workshop-category-two__single color-6">
                  <div className="Workshop-category-two__icon">
                    <i className="Flutter DevCamp |-icon-health"></i>
                  </div>
                  <h3 className="Workshop-category-two__title">
                    <a href="#none">Health & Fitness</a>
                  </h3>
                </div>
              </div>
              <div className="item">
                <div className="Workshop-category-two__single color-1">
                  <div className="Workshop-category-two__icon">
                    <i className="Flutter DevCamp |-icon-desktop"></i>
                  </div>
                  <h3 className="Workshop-category-two__title">
                    <a href="#none">IT & Software</a>
                  </h3>
                </div>
              </div>
              <div className="item">
                <div className="Workshop-category-two__single color-2">
                  <div className="Workshop-category-two__icon">
                    <i className="Flutter DevCamp |-icon-web-programming"></i>
                  </div>
                  <h3 className="Workshop-category-two__title">
                    <a href="#none">Development</a>
                  </h3>
                </div>
              </div>
              <div className="item">
                <div className="Workshop-category-two__single color-3">
                  <div className="Workshop-category-two__icon">
                    <i className="Flutter DevCamp |-icon-music-player"></i>
                  </div>
                  <h3 className="Workshop-category-two__title">
                    <a href="#none">Music</a>
                  </h3>
                </div>
              </div>
              <div className="item">
                <div className="Workshop-category-two__single color-4">
                  <div className="Workshop-category-two__icon">
                    <i className="Flutter DevCamp |-icon-camera"></i>
                  </div>
                  <h3 className="Workshop-category-two__title">
                    <a href="#none">Photography</a>
                  </h3>
                </div>
              </div>
              <div className="item">
                <div className="Workshop-category-two__single color-1">
                  <div className="Workshop-category-two__icon">
                    <i className="Flutter DevCamp |-icon-desktop"></i>
                  </div>
                  <h3 className="Workshop-category-two__title">
                    <a href="#none">IT & Software</a>
                  </h3>
                </div>
              </div>
              <div className="item">
                <div className="Workshop-category-two__single color-2">
                  <div className="Workshop-category-two__icon">
                    <i className="Flutter DevCamp |-icon-web-programming"></i>
                  </div>
                  <h3 className="Workshop-category-two__title">
                    <a href="#none">Development</a>
                  </h3>
                </div>
              </div>
              <div className="item">
                <div className="Workshop-category-two__single color-3">
                  <div className="Workshop-category-two__icon">
                    <i className="Flutter DevCamp |-icon-music-player"></i>
                  </div>
                  <h3 className="Workshop-category-two__title">
                    <a href="#none">Music</a>
                  </h3>
                </div>
              </div>
              <div className="item">
                <div className="Workshop-category-two__single color-4">
                  <div className="Workshop-category-two__icon">
                    <i className="Flutter DevCamp |-icon-camera"></i>
                  </div>
                  <h3 className="Workshop-category-two__title">
                    <a href="#none">Photography</a>
                  </h3>
                </div>
              </div>
              <div className="item">
                <div className="Workshop-category-two__single color-5">
                  <div className="Workshop-category-two__icon">
                    <i className="Flutter DevCamp |-icon-targeting"></i>
                  </div>
                  <h3 className="Workshop-category-two__title">
                    <a href="#none">Marketing</a>
                  </h3>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopCatTwo;
