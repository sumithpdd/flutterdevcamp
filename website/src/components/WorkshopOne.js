import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
// import required modules
import { Pagination } from 'swiper'

import Workshop1 from '../assets/images/workshop-1-1.jpg'
import Workshop2 from '../assets/images/workshop-1-2.jpg'
import Workshop3 from '../assets/images/workshop-1-3.jpg'
import Workshop4 from '../assets/images/workshop-1-4.jpg'
import Workshop5 from '../assets/images/workshop-1-5.jpg'
import Workshop6 from '../assets/images/workshop-1-6.jpg'
import team1 from '../assets/images/team-1-1.jpg'
import team2 from '../assets/images/team-1-2.jpg'
import team3 from '../assets/images/team-1-3.jpg'
import team4 from '../assets/images/team-1-4.jpg'
import team5 from '../assets/images/team-1-5.jpg'
import team6 from '../assets/images/team-1-6.jpg'

const WorkshopOne = () => {
  const params = {
    slidesPerView: 3,
    loop: true,
    speed: 1000,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Responsive breakpoints
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },
  }
  return (
    <div>
      <section className="workshop-one__top-title home-one">
        <div className="container">
          <div className="block-title mb-0">
            <h2 className="block-title__title">
              Explore our <br />
              popular Workshops
            </h2>
          </div>
        </div>
        <div className="workshop-one__top-title__curve"></div>
      </section>

      <section className="workshop-one Workshop-one__mentor-details home-one">
        <div className="container">
          <div className="workshop-one__carousel">
            <Swiper {...params} pagination={true} modules={[Pagination]}>
              <SwiperSlide>
                <div className="item">
                  <div className="workshop-one__single color-1">
                  <div className="workshop-one__image">
                      <img src={Workshop2} alt="" />
                      <i className="far fa-heart"></i>
                    </div> <div className="workshop-one__content">
                      <a href="#none" className="workshop-one__category">
                        Flutter Basics
                      </a>
                      <h2 className="workshop-one__title">
                        <a href="/workshop-details">FlutterDevcamp Week 1</a>
                      </h2>
                      <div className="workshop-one__admin">
                        <img src={team1} alt="" />
                        by <a href="/mentor-details">Renuka Kelkar</a>
                      </div>

                      <div className="comment-one__date">
                        <p className="workshop-one__meta">
                          <i className="fa fa-calendar-alt"></i>
                          20 April, 2019{' '}
                          <span className="comment-one__date-sep">-</span> 4:00
                          pm
                        </p>{' '}
                        <i className="fa fa-handshake"></i>
                        <i className="fa fa-globe"></i>
                        <span className="workshop-one__stars-count">  In person and online</span>
                      </div><div className="workshop-one__meta">
                      <i className="far fa-clock"></i> 2 Hours{' '}
                      <i className="far fa-folder-open"></i> 4 Lectures
                    </div>{' '}
                    <a href="/workshop-details" className="workshop-one__link">
                      See Details
                    </a>
                    </div>
                    
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item">
                  <div className="workshop-one__single color-2">
                    <div className="workshop-one__image">
                      <img src={Workshop2} alt="" />
                      <i className="far fa-heart"></i>
                    </div>
                    <div className="workshop-one__content">
                      <a href="#none" className="workshop-one__category">
                        Flutter and Firebase
                      </a>
                      <div className="workshop-one__admin">
                        <img src={team2} alt="" />
                        by <a href="/mentor-details">Sumith Damodaran</a>
                      </div>
                      <h2 className="workshop-one__title">
                        <a href="/workshop-details">FlutterDevcamp Week 2</a>
                      </h2>
                      <div className="workshop-one__stars">
                        <span className="workshop-one__stars-wrap">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                        <span className="workshop-one__count">4.8</span>
                        <span className="workshop-one__stars-count">250</span>
                      </div>
                      <div className="workshop-one__meta">
                        <a href="/workshop-details">
                          <i className="far fa-clock"></i> 2 Hours
                        </a>
                        <a href="/workshop-details">
                          <i className="far fa-folder-open"></i> 3 Lectures
                        </a>
                        <a href="/workshop-details">Online only</a>
                      </div>
                      <a href="#none" className="workshop-one__link">
                        See Details
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item">
                  <div className="workshop-one__single color-3">
                    <div className="workshop-one__image">
                      <img src={Workshop3} alt="" />
                      <i className="far fa-heart"></i>
                    </div>
                    <div className="workshop-one__content">
                      <a href="#none" className="workshop-one__category">
                        Flutter and API
                      </a>
                      <div className="workshop-one__admin">
                        <img src={team3} alt="" />
                        by <a href="/mentor-details">Renuka Kelkar</a>
                      </div>
                      <h2 className="workshop-one__title">
                        <a href="/workshop-details">FlutterDevcamp Week 3</a>
                      </h2>
                      <div className="workshop-one__stars">
                        <span className="workshop-one__stars-wrap">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                        <span className="workshop-one__count">4.8</span>
                        <span className="workshop-one__stars-count">250</span>
                      </div>
                      <div className="workshop-one__meta">
                        <a href="/workshop-details">
                          <i className="far fa-clock"></i> 3 Hours
                        </a>
                        <a href="/workshop-details">
                          <i className="far fa-folder-open"></i> 3 Lectures
                        </a>
                        <a href="/workshop-details">Online only</a>
                      </div>
                      <a href="#none" className="workshop-one__link">
                        See Details
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item">
                  <div className="workshop-one__single color-4">
                    <div className="workshop-one__image">
                      <img src={Workshop4} alt="" />
                      <i className="far fa-heart"></i>
                    </div>
                    <div className="workshop-one__content">
                      <a href="#none" className="workshop-one__category">
                        Flutter Statemanagement
                      </a>
                      <div className="workshop-one__admin">
                        <img src={team4} alt="" />
                        by <a href="/mentor-details">Sumith Damodaran</a>
                      </div>
                      <h2 className="workshop-one__title">
                        <a href="/workshop-details">FlutterDevcamp Week 4</a>
                      </h2>
                      <div className="workshop-one__stars">
                        <span className="workshop-one__stars-wrap">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                        <span className="workshop-one__count">4.8</span>
                        <span className="workshop-one__stars-count">250</span>
                      </div>
                      <div className="workshop-one__meta">
                        <a href="/workshop-details">
                          <i className="far fa-clock"></i> 3 Hours
                        </a>
                        <a href="/workshop-details">
                          <i className="far fa-folder-open"></i> 5 Lectures
                        </a>
                        <a href="/workshop-details">Online only</a>
                      </div>
                      <a href="#none" className="workshop-one__link">
                        See Details
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item">
                  <div className="workshop-one__single color-5">
                    <div className="workshop-one__image">
                      <img src={Workshop5} alt="" />
                      <i className="far fa-heart"></i>
                    </div>
                    <div className="workshop-one__content">
                      <a href="#none" className="workshop-one__category">
                        Flutter Web
                      </a>
                      <div className="workshop-one__admin">
                        <img src={team5} alt="" />
                        by <a href="/mentor-details">Renuka Kelkar</a>
                      </div>
                      <h2 className="workshop-one__title">
                        <a href="/workshop-details">FlutterDevcamp Week 5</a>
                      </h2>
                      <div className="workshop-one__stars">
                        <span className="workshop-one__stars-wrap">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                        <span className="workshop-one__count">4.8</span>
                        <span className="workshop-one__stars-count">250</span>
                      </div>
                      <div className="workshop-one__meta">
                        <a href="/workshop-details">
                          <i className="far fa-clock"></i> 2 Hours
                        </a>
                        <a href="/workshop-details">
                          <i className="far fa-folder-open"></i> 3 Lectures
                        </a>
                        <a href="/workshop-details">Online only</a>
                      </div>
                      <a href="#none" className="workshop-one__link">
                        See Details
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item">
                  <div className="workshop-one__single color-6">
                    <div className="workshop-one__image">
                      <img src={Workshop6} alt="" />
                      <i className="far fa-heart"></i>
                    </div>
                    <div className="workshop-one__content">
                      <a href="#none" className="workshop-one__category">
                        Animation
                      </a>
                      <div className="workshop-one__admin">
                        <img src={team6} alt="" />
                        by <a href="/mentor-details">Sumith Damodaran</a>
                      </div>
                      <h2 className="workshop-one__title">
                        <a href="/workshop-details">FlutterDevcamp Week 6 </a>
                      </h2>
                      <div className="workshop-one__stars">
                        <span className="workshop-one__stars-wrap">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                        <span className="workshop-one__count">4.8</span>
                        <span className="workshop-one__stars-count">250</span>
                      </div>
                      <div className="workshop-one__meta">
                        <a href="/workshop-details">
                          <i className="far fa-clock"></i> 3 Hours
                        </a>
                        <a href="/workshop-details">
                          <i className="far fa-folder-open"></i> 4 Lectures
                        </a>
                        <a href="/workshop-details">Online only</a>
                      </div>
                      <a href="#none" className="workshop-one__link">
                        See Details
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item">
                  <div className="workshop-one__single color-1">
                    <div className="workshop-one__image">
                      <img src={Workshop1} alt="" />
                      <i className="far fa-heart"></i>
                    </div>
                    <div className="workshop-one__content">
                      <a href="#none" className="workshop-one__category">
                        Flutter Testing
                      </a>
                      <div className="workshop-one__admin">
                        <img src={team1} alt="" />
                        by <a href="/mentor-details">Renuka Kelkar</a>
                      </div>
                      <h2 className="workshop-one__title">
                        <a href="/workshop-details">FlutterDevcamp Week 7</a>
                      </h2>
                      <div className="workshop-one__stars">
                        <span className="workshop-one__stars-wrap">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                        <span className="workshop-one__count">4.8</span>
                        <span className="workshop-one__stars-count">250</span>
                      </div>
                      <div className="workshop-one__meta">
                        <a href="/workshop-details">
                          <i className="far fa-clock"></i> 3 Hours
                        </a>
                        <a href="/workshop-details">
                          <i className="far fa-folder-open"></i> 2 Lectures
                        </a>
                        <a href="/workshop-details">Online only</a>
                      </div>
                      <a href="#none" className="workshop-one__link">
                        See Details
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item">
                  <div className="workshop-one__single color-2">
                    <div className="workshop-one__image">
                      <img src={Workshop2} alt="" />
                      <i className="far fa-heart"></i>
                    </div>
                    <div className="workshop-one__content">
                      <a href="#none" className="workshop-one__category">
                        Graduation
                      </a>
                      <div className="workshop-one__admin">
                        <img src={team2} alt="" />
                        by <a href="/mentor-details">Renuka Kelkar</a>
                      </div>
                      <div className="workshop-one__admin">
                        <img src={team2} alt="" />
                        by <a href="/mentor-details">Sumith Damodaran</a>
                      </div>
                      <h2 className="workshop-one__title">
                        <a href="/workshop-details">
                          FlutterDevcamp Graduation
                        </a>
                      </h2>
                      <div className="workshop-one__stars">
                        <span className="workshop-one__stars-wrap">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                        <span className="workshop-one__count">4.8</span>
                        <span className="workshop-one__stars-count">250</span>
                      </div>
                      <div className="workshop-one__meta">
                        <a href="/workshop-details">
                          <i className="far fa-clock"></i> 3 Hours
                        </a>
                        <a href="/workshop-details">
                          <i className="far fa-folder-open"></i> Interviews
                        </a>
                        <a href="/workshop-details">Inperson and Online</a>
                      </div>
                      <a href="#none" className="workshop-one__link">
                        See Details
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  )
}
export default WorkshopOne
