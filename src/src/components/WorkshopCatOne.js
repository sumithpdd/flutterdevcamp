import React from "react";
// Import Swiper React components
import Swiper from "react-id-swiper";

// Import Swiper styles
import 'swiper/scss';

const WorkshopCatOne = () => {
  const params = {
    slidesPerView: 6,
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
        slidesPerView: 6
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
    <section className="thm-gray-bg Workshop-category-one">
      <div className="container-fluid text-center">
        <div className="block-title text-center">
          <h2 className="block-title__title">
            Browse online <br />
            Workshop categories
          </h2>
        </div>
        <div className="workshop-category-one__carousel">
          <Swiper {...params}>
            <div className="item">
              <div className="workshop-category-one__single color-1">
                <div className="workshop-category-one__icon">
                  <i className="Flutter DevCamp |-icon-desktop"></i>
                </div>
                <h3 className="workshop-category-one__title">
                  <a href="#none">IT & Software</a>
                </h3>
              </div>
            </div>
            <div className="item">
              <div className="workshop-category-one__single color-2">
                <div className="workshop-category-one__icon">
                  <i className="Flutter DevCamp |-icon-web-programming"></i>
                </div>
                <h3 className="workshop-category-one__title">
                  <a href="#none">Development</a>
                </h3>
              </div>
            </div>
            <div className="item">
              <div className="workshop-category-one__single color-3">
                <div className="workshop-category-one__icon">
                  <i className="Flutter DevCamp |-icon-music-player"></i>
                </div>
                <h3 className="workshop-category-one__title">
                  <a href="#none">Music</a>
                </h3>
              </div>
            </div>
            <div className="item">
              <div className="workshop-category-one__single color-4">
                <div className="workshop-category-one__icon">
                  <i className="Flutter DevCamp |-icon-camera"></i>
                </div>
                <h3 className="workshop-category-one__title">
                  <a href="#none">Photography</a>
                </h3>
              </div>
            </div>
            <div className="item">
              <div className="workshop-category-one__single color-5">
                <div className="workshop-category-one__icon">
                  <i className="Flutter DevCamp |-icon-targeting"></i>
                </div>
                <h3 className="workshop-category-one__title">
                  <a href="#none">Marketing</a>
                </h3>
              </div>
            </div>
            <div className="item">
              <div className="workshop-category-one__single color-6">
                <div className="workshop-category-one__icon">
                  <i className="Flutter DevCamp |-icon-health"></i>
                </div>
                <h3 className="workshop-category-one__title">
                  <a href="#none">Health & Fitness</a>
                </h3>
              </div>
            </div>
            <div className="item">
              <div className="workshop-category-one__single color-1">
                <div className="workshop-category-one__icon">
                  <i className="Flutter DevCamp |-icon-desktop"></i>
                </div>
                <h3 className="workshop-category-one__title">
                  <a href="#none">IT & Software</a>
                </h3>
              </div>
            </div>
            <div className="item">
              <div className="workshop-category-one__single color-2">
                <div className="workshop-category-one__icon">
                  <i className="Flutter DevCamp |-icon-web-programming"></i>
                </div>
                <h3 className="workshop-category-one__title">
                  <a href="#none">Development</a>
                </h3>
              </div>
            </div>
            <div className="item">
              <div className="workshop-category-one__single color-3">
                <div className="workshop-category-one__icon">
                  <i className="Flutter DevCamp |-icon-music-player"></i>
                </div>
                <h3 className="workshop-category-one__title">
                  <a href="#none">Music</a>
                </h3>
              </div>
            </div>
            <div className="item">
              <div className="workshop-category-one__single color-4">
                <div className="workshop-category-one__icon">
                  <i className="Flutter DevCamp |-icon-camera"></i>
                </div>
                <h3 className="workshop-category-one__title">
                  <a href="#none">Photography</a>
                </h3>
              </div>
            </div>
          </Swiper>
        </div>

        <a href="#none" className="thm-btn">
          View All Categories
        </a>
      </div>
    </section>
  );
};
export default WorkshopCatOne;
