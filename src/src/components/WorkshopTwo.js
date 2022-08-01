import React from "react"; 
import { Swiper, SwiperSlide , useSwiper  } from 'swiper/react';

import Workshop1 from "../assets/images/workshop-1-1.jpg";
import Workshop2 from "../assets/images/workshop-1-2.jpg";
import Workshop3 from "../assets/images/workshop-1-3.jpg";
import Workshop4 from "../assets/images/workshop-1-4.jpg";
import Workshop5 from "../assets/images/workshop-1-5.jpg";
import Workshop6 from "../assets/images/workshop-1-6.jpg";
import team1 from "../assets/images/team-1-1.jpg";
import team2 from "../assets/images/team-1-2.jpg";
import team3 from "../assets/images/team-1-3.jpg";
import team4 from "../assets/images/team-1-4.jpg";
import team5 from "../assets/images/team-1-5.jpg";
import team6 from "../assets/images/team-1-6.jpg";
import line from "../assets/images/line-stripe.png";



// Import Swiper styles
import 'swiper/css';
import 'swiper/css';

const WorkshopTwo = () => {
  const params = {
    slidesPerView: 3,
    loop: true,
    speed: 1000,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },

    // Responsive breakpoints
    breakpoints: {
      1024: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 2
      },
      640: {
        slidesPerView: 2
      },
      320: {
        slidesPerView: 1
      }
    }
  };
  return (
    <div>
      <section className="workshop-one__top-title home-two">
        <div className="container">
          <div className="block-title">
            <h2 className="block-title__title">
              Explore our <br />
              popular Workshops
            </h2>
          </div>
        </div>
      </section>

      <section className="workshop-one Workshop-one__mentor-details home-two">
        <img src={line} className="workshop-one__line" alt="" />
        <div className="container">
          <div className="workshop-one__carousel">
            <Swiper {...params}>
              <div className="item">
                <div className="workshop-one__single color-1">
                  <div className="workshop-one__image">
                    <img src={Workshop1} alt="" />
                    <i className="far fa-heart"></i>
                  </div>
                  <div className="workshop-one__content">
                    <a href="#none" className="workshop-one__category">
                      development
                    </a>
                    <div className="workshop-one__admin">
                      <img src={team1} alt="" />
                      by <a href="/mentor-details">Renuka Kelkar</a>
                    </div>
                    <h2 className="workshop-one__title">
                      <a href="/Workshop-details">New react bootcamp</a>
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
                      <a href="/Workshop-details">
                        <i className="far fa-clock"></i> 10 Hours
                      </a>
                      <a href="/Workshop-details">
                        <i className="far fa-folder-open"></i> 6 Lectures
                      </a>
                      <a href="/Workshop-details">Online only</a>
                    </div>
                    <a href="#none" className="workshop-one__link">
                      See Details
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="workshop-one__single color-2">
                  <div className="workshop-one__image">
                    <img src={Workshop2} alt="" />
                    <i className="far fa-heart"></i>
                  </div>
                  <div className="workshop-one__content">
                    <a href="#none" className="workshop-one__category">
                      It & Software
                    </a>
                    <div className="workshop-one__admin">
                      <img src={team2} alt="" />
                      by <a href="/mentor-details">Cora Diaz</a>
                    </div>
                    <h2 className="workshop-one__title">
                      <a href="/Workshop-details">Improve editing skills</a>
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
                      <a href="/Workshop-details">
                        <i className="far fa-clock"></i> 10 Hours
                      </a>
                      <a href="/Workshop-details">
                        <i className="far fa-folder-open"></i> 6 Lectures
                      </a>
                      <a href="/Workshop-details">Online only</a>
                    </div>
                    <a href="#none" className="workshop-one__link">
                      See Details
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="workshop-one__single color-3">
                  <div className="workshop-one__image">
                    <img src={Workshop3} alt="" />
                    <i className="far fa-heart"></i>
                  </div>
                  <div className="workshop-one__content">
                    <a href="#none" className="workshop-one__category">
                      marketing
                    </a>
                    <div className="workshop-one__admin">
                      <img src={team3} alt="" />
                      by <a href="/mentor-details">Renuka Kelkar</a>
                    </div>
                    <h2 className="workshop-one__title">
                      <a href="/Workshop-details">Marketing strategies</a>
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
                      <a href="/Workshop-details">
                        <i className="far fa-clock"></i> 10 Hours
                      </a>
                      <a href="/Workshop-details">
                        <i className="far fa-folder-open"></i> 6 Lectures
                      </a>
                      <a href="/Workshop-details">Online only</a>
                    </div>
                    <a href="#none" className="workshop-one__link">
                      See Details
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="workshop-one__single color-4">
                  <div className="workshop-one__image">
                    <img src={Workshop4} alt="" />
                    <i className="far fa-heart"></i>
                  </div>
                  <div className="workshop-one__content">
                    <a href="#none" className="workshop-one__category">
                      Photography
                    </a>
                    <div className="workshop-one__admin">
                      <img src={team4} alt="" />
                      by <a href="/mentor-details">Sumith Damodaran</a>
                    </div>
                    <h2 className="workshop-one__title">
                      <a href="/Workshop-details">Basics of photography</a>
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
                      <a href="/Workshop-details">
                        <i className="far fa-clock"></i> 10 Hours
                      </a>
                      <a href="/Workshop-details">
                        <i className="far fa-folder-open"></i> 6 Lectures
                      </a>
                      <a href="/Workshop-details">Online only</a>
                    </div>
                    <a href="#none" className="workshop-one__link">
                      See Details
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="workshop-one__single color-5">
                  <div className="workshop-one__image">
                    <img src={Workshop5} alt="" />
                    <i className="far fa-heart"></i>
                  </div>
                  <div className="workshop-one__content">
                    <a href="#none" className="workshop-one__category">
                      marketing
                    </a>
                    <div className="workshop-one__admin">
                      <img src={team5} alt="" />
                      by <a href="/mentor-details">Isabella Stanley</a>
                    </div>
                    <h2 className="workshop-one__title">
                      <a href="/Workshop-details">Affiliate bootcamp</a>
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
                      <a href="/Workshop-details">
                        <i className="far fa-clock"></i> 10 Hours
                      </a>
                      <a href="/Workshop-details">
                        <i className="far fa-folder-open"></i> 6 Lectures
                      </a>
                      <a href="/Workshop-details">Online only</a>
                    </div>
                    <a href="#none" className="workshop-one__link">
                      See Details
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="workshop-one__single color-6">
                  <div className="workshop-one__image">
                    <img src={Workshop6} alt="" />
                    <i className="far fa-heart"></i>
                  </div>
                  <div className="workshop-one__content">
                    <a href="#none" className="workshop-one__category">
                      Health & Fitness
                    </a>
                    <div className="workshop-one__admin">
                      <img src={team6} alt="" />
                      by <a href="/mentor-details">Sumith Damodaran</a>
                    </div>
                    <h2 className="workshop-one__title">
                      <a href="/Workshop-details">Healthy workout tips </a>
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
                      <a href="/Workshop-details">
                        <i className="far fa-clock"></i> 10 Hours
                      </a>
                      <a href="/Workshop-details">
                        <i className="far fa-folder-open"></i> 6 Lectures
                      </a>
                      <a href="/Workshop-details">Online only</a>
                    </div>
                    <a href="#none" className="workshop-one__link">
                      See Details
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="workshop-one__single color-1">
                  <div className="workshop-one__image">
                    <img src={Workshop1} alt="" />
                    <i className="far fa-heart"></i>
                  </div>
                  <div className="workshop-one__content">
                    <a href="#none" className="workshop-one__category">
                      development
                    </a>
                    <div className="workshop-one__admin">
                      <img src={team1} alt="" />
                      by <a href="/mentor-details">Renuka Kelkar</a>
                    </div>
                    <h2 className="workshop-one__title">
                      <a href="/Workshop-details">New react bootcamp</a>
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
                      <a href="/Workshop-details">
                        <i className="far fa-clock"></i> 10 Hours
                      </a>
                      <a href="/Workshop-details">
                        <i className="far fa-folder-open"></i> 6 Lectures
                      </a>
                      <a href="/Workshop-details">Online only</a>
                    </div>
                    <a href="#none" className="workshop-one__link">
                      See Details
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="workshop-one__single color-2">
                  <div className="workshop-one__image">
                    <img src={Workshop2} alt="" />
                    <i className="far fa-heart"></i>
                  </div>
                  <div className="workshop-one__content">
                    <a href="#none" className="workshop-one__category">
                      It & Software
                    </a>
                    <div className="workshop-one__admin">
                      <img src={team2} alt="" />
                      by <a href="/mentor-details">Cora Diaz</a>
                    </div>
                    <h2 className="workshop-one__title">
                      <a href="/Workshop-details">Improve editing skills</a>
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
                      <a href="/Workshop-details">
                        <i className="far fa-clock"></i> 10 Hours
                      </a>
                      <a href="/Workshop-details">
                        <i className="far fa-folder-open"></i> 6 Lectures
                      </a>
                      <a href="/Workshop-details">Online only</a>
                    </div>
                    <a href="#none" className="workshop-one__link">
                      See Details
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="workshop-one__single color-3">
                  <div className="workshop-one__image">
                    <img src={Workshop3} alt="" />
                    <i className="far fa-heart"></i>
                  </div>
                  <div className="workshop-one__content">
                    <a href="#none" className="workshop-one__category">
                      marketing
                    </a>
                    <div className="workshop-one__admin">
                      <img src={team3} alt="" />
                      by <a href="/mentor-details">Renuka Kelkar</a>
                    </div>
                    <h2 className="workshop-one__title">
                      <a href="/Workshop-details">Marketing strategies</a>
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
                      <a href="/Workshop-details">
                        <i className="far fa-clock"></i> 10 Hours
                      </a>
                      <a href="/Workshop-details">
                        <i className="far fa-folder-open"></i> 6 Lectures
                      </a>
                      <a href="/Workshop-details">Online only</a>
                    </div>
                    <a href="#none" className="workshop-one__link">
                      See Details
                    </a>
                  </div>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};
export default WorkshopTwo;
