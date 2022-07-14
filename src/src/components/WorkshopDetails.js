import React from "react";
import team1 from "../assets/images/team-1-1.jpg";
import team2 from "../assets/images/team-1-1.jpg";
import WorkshopD1 from "../assets/images/Workshop-d-1.jpg";
import lcImage1 from "../assets/images/lc-1-1.jpg";
import lcImage2 from "../assets/images/lc-1-2.jpg";
import lcImage3 from "../assets/images/lc-1-3.jpg";

const WorkshopDetails = () => {
  return (
    <section className="Workshop-details">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="Workshop-details__content">
              <p className="Workshop-details__author">
                <img src={team1} alt="" />
                by <a href="#none">Addie Walters</a>
              </p>

              <div className="Workshop-details__top">
                <div className="Workshop-details__top-left">
                  <h2 className="Workshop-details__title">
                    Improve editing skills
                  </h2>
                  <div className="Workshop-one__stars">
                    <span className="Workshop-one__stars-wrap">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </span>
                    <span className="Workshop-one__count">4.8</span>
                    <span className="Workshop-one__stars-count">250</span>
                  </div>
                </div>
                <div className="Workshop-details__top-right">
                  <a href="#none" className="Workshop-one__category">
                    marketing
                  </a>
                </div>
              </div>
              <div className="Workshop-one__image">
                <img src={WorkshopD1} alt="" />
                <i className="far fa-heart"></i>
              </div>

              <ul className="Workshop-details__tab-navs list-unstyled nav nav-tabs">
                <li>
                  <a
                    className="active"
                    role="tab"
                    data-toggle="tab"
                    href="#overview"
                  >
                    Overview
                  </a>
                </li>
                <li>
                  <a
                    className=""
                    role="tab"
                    data-toggle="tab"
                    href="#curriculum"
                  >
                    Curriculum
                  </a>
                </li>
                <li>
                  <a className="" role="tab" data-toggle="tab" href="#review">
                    Reviews
                  </a>
                </li>
              </ul>
              <div className="tab-content Workshop-details__tab-content ">
                <div
                  className="tab-pane show active  animated fadeInUp"
                  role="tabpanel"
                  id="overview"
                >
                  <p className="Workshop-details__tab-text">
                    Aelltes port lacus quis enim var sed efficitur turpis gilla
                    sed sit Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry’s
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                  <br />
                  <p className="Workshop-details__tab-text">
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker
                    including versions of lorem ipsum amet finibus eros. Lorem
                    Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry’s standard dummy
                    text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the
                    leap into electronic typesetting.
                  </p>
                  <br />
                  <ul className="list-unstyled Workshop-details__overview-list">
                    <li>It has survived not only five centuries</li>
                    <li>Lorem Ipsum is simply dummy text of the new design</li>
                    <li>Printng and type setting ipsum</li>
                    <li>Take a look at our round up of the best shows</li>
                  </ul>
                </div>
                <div
                  className="tab-pane  animated fadeInUp"
                  role="tabpanel"
                  id="curriculum"
                >
                  <h3 className="Workshop-details__tab-title">
                    Starting beginners level Workshop
                  </h3>
                  <br />
                  <p className="Workshop-details__tab-text">
                    Aelltes port lacus quis enim var sed efficitur turpis gilla
                    sed sit Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry’s
                    standard dummy text ever since.
                  </p>
                  <br />
                  <ul className="Workshop-details__curriculum-list list-unstyled">
                    <li>
                      <div className="Workshop-details__curriculum-list-left">
                        <div className="Workshop-details__meta-icon video-icon">
                          <i className="fas fa-play"></i>
                        </div>
                        <a href="#none">Introduction to Editing</a>{" "}
                        <span>Preview</span>
                      </div>
                      <div className="Workshop-details__curriculum-list-right">
                        16 minutes
                      </div>
                    </li>
                    <li>
                      <div className="Workshop-details__curriculum-list-left">
                        <div className="Workshop-details__meta-icon video-icon">
                          <i className="fas fa-play"></i>
                        </div>
                        <a href="#none">Overview of Editing</a>{" "}
                        <span>Preview</span>
                      </div>
                      <div className="Workshop-details__curriculum-list-right">
                        10 minutes
                      </div>
                    </li>
                    <li>
                      <div className="Workshop-details__curriculum-list-left">
                        <div className="Workshop-details__meta-icon file-icon">
                          <i className="fas fa-folder"></i>
                        </div>
                        <a href="#none">Basic Editing Technology</a>
                      </div>
                    </li>
                    <li>
                      <div className="Workshop-details__curriculum-list-left">
                        <div className="Workshop-details__meta-icon quiz-icon">
                          <i className="fas fa-comment"></i>
                        </div>
                        <a href="#none">Quiz</a>
                      </div>
                      <div className="Workshop-details__curriculum-list-right">
                        6 questions
                      </div>
                    </li>
                  </ul>
                  <br />
                  <br />
                  <h3 className="Workshop-details__tab-title">
                    Intermediate Level
                  </h3>
                  <br />
                  <p className="Workshop-details__tab-text">
                    Aelltes port lacus quis enim var sed efficitur turpis gilla
                    sed sit Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry’s
                    standard dummy text ever since.
                  </p>
                  <br />
                  <ul className="Workshop-details__curriculum-list list-unstyled">
                    <li>
                      <div className="Workshop-details__curriculum-list-left">
                        <div className="Workshop-details__meta-icon video-icon">
                          <i className="fas fa-play"></i>
                        </div>
                        <a href="#none">Introduction to Editing</a>
                        <span>Preview</span>
                      </div>
                      <div className="Workshop-details__curriculum-list-right">
                        16 minutes
                      </div>
                    </li>
                    <li>
                      <div className="Workshop-details__curriculum-list-left">
                        <div className="Workshop-details__meta-icon file-icon">
                          <i className="fas fa-folder"></i>
                        </div>
                        <a href="#none">Basic Editing Technology</a>
                      </div>
                    </li>
                    <li>
                      <div className="Workshop-details__curriculum-list-left">
                        <div className="Workshop-details__meta-icon quiz-icon">
                          <i className="fas fa-comment"></i>
                        </div>
                        <a href="#none">Quiz</a>
                      </div>
                      <div className="Workshop-details__curriculum-list-right">
                        6 questions
                      </div>
                    </li>
                  </ul>
                </div>
                <div
                  className="tab-pane  animated fadeInUp"
                  role="tabpanel"
                  id="review"
                >
                  <div className="row">
                    <div className="col-xl-7 d-flex">
                      <div className="Workshop-details__progress my-auto">
                        <div className="Workshop-details__progress-item">
                          <p className="Workshop-details__progress-text">
                            Excellent
                          </p>
                          <div className="Workshop-details__progress-bar">
                            <span style={{ width: `95%` }}></span>
                          </div>
                          <p className="Workshop-details__progress-count">5</p>
                        </div>
                        <div className="Workshop-details__progress-item">
                          <p className="Workshop-details__progress-text">
                            Very Good
                          </p>
                          <div className="Workshop-details__progress-bar">
                            <span style={{ width: `65%` }}></span>
                          </div>
                          <p className="Workshop-details__progress-count">2</p>
                        </div>
                        <div className="Workshop-details__progress-item">
                          <p className="Workshop-details__progress-text">
                            Average
                          </p>
                          <div className="Workshop-details__progress-bar">
                            <span style={{ width: `33%` }}></span>
                          </div>
                          <p className="Workshop-details__progress-count">1</p>
                        </div>
                        <div className="Workshop-details__progress-item">
                          <p className="Workshop-details__progress-text">Poor</p>
                          <div className="Workshop-details__progress-bar">
                            <span
                              style={{ width: `0%` }}
                              className="no-bubble"
                            ></span>
                          </div>
                          <p className="Workshop-details__progress-count">0</p>
                        </div>
                        <div className="Workshop-details__progress-item">
                          <p className="Workshop-details__progress-text">
                            Terrible
                          </p>
                          <div className="Workshop-details__progress-bar">
                            <span
                              style={{ width: `0%` }}
                              className="no-bubble"
                            ></span>
                          </div>
                          <p className="Workshop-details__progress-count">0</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-5 justify-content-xl-end justify-content-sm-center d-flex">
                      <div className="Workshop-details__review-box">
                        <p className="Workshop-details__review-count">4.6</p>
                        <div className="Workshop-details__review-stars">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star-half"></i>
                        </div>
                        <p className="Workshop-details__review-text">
                          30 reviews
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="Workshop-details__comment">
                    <div className="Workshop-details__comment-single">
                      <div className="Workshop-details__comment-top">
                        <div className="Workshop-details__comment-img">
                          <img src={team1} alt="" />
                        </div>
                        <div className="Workshop-details__comment-right">
                          <h2 className="Workshop-details__comment-name">
                            Steven Meyer
                          </h2>
                          <div className="Workshop-details__comment-meta">
                            <p className="Workshop-details__comment-date">
                              26 July, 2019
                            </p>
                            <div className="Workshop-details__comment-stars">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star star-disabled"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="Workshop-details__comment-text">
                        Lorem ipsum is simply Online only text used by copytyping
                        refreshing. Neque porro est qui dolorem ipsum quia quaed
                        inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo.
                      </p>
                    </div>
                    <div className="Workshop-details__comment-single">
                      <div className="Workshop-details__comment-top">
                        <div className="Workshop-details__comment-img">
                          <img src={team2} alt="" />
                        </div>
                        <div className="Workshop-details__comment-right">
                          <h2 className="Workshop-details__comment-name">
                            Lina Kelley
                          </h2>
                          <div className="Workshop-details__comment-meta">
                            <p className="Workshop-details__comment-date">
                              26 July, 2019
                            </p>
                            <div className="Workshop-details__comment-stars">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star star-disabled"></i>
                              <i className="fa fa-star star-disabled"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="Workshop-details__comment-text">
                        Lorem ipsum is simply Online only text used by copytyping
                        refreshing. Neque porro est qui dolorem ipsum quia quaed
                        inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo.
                      </p>
                    </div>
                  </div>
                  <form action="#" className="Workshop-details__comment-form">
                    <h2 className="Workshop-details__title">Add a review</h2>
                    <p className="Workshop-details__comment-form-text">
                      Rate this Workshop?{" "}
                      <a href="#give-star" aria-label="review stars">
                        <i className="fas fa-star"></i>
                      </a>
                      <a href="#give-star" aria-label="review stars">
                        <i className="fas fa-star"></i>
                      </a>
                      <a href="#give-star" aria-label="review stars">
                        <i className="fas fa-star"></i>
                      </a>
                      <a href="#give-star" aria-label="review stars">
                        <i className="fas fa-star"></i>
                      </a>
                      <a href="#give-star" aria-label="review stars">
                        <i className="fas fa-star"></i>
                      </a>
                    </p>
                    <div className="row">
                      <div className="col-lg-6">
                        <input type="text" placeholder="Your Name" />
                        <input type="text" placeholder="Email Address" />
                      </div>
                      <div className="col-lg-12">
                        <textarea placeholder="Write Message"></textarea>
                        <button
                          type="submit"
                          className="thm-btn Workshop-details__comment-form-btn"
                        >
                          Leave a Review
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="Workshop-details__price">
              <p className="Workshop-details__price-text">Workshop price </p>
              <p className="Workshop-details__price-amount">Online only.00</p>
              <a href="#none" className="thm-btn Workshop-details__price-btn">
                Buy This Workshop
              </a>
            </div>

            <div className="Workshop-details__meta">
              <a href="#none" className="Workshop-details__meta-link">
                <span className="Workshop-details__meta-icon">
                  <i className="far fa-clock"></i>
                </span>
                Durations: <span>10 hours</span>
              </a>
              <a href="#none" className="Workshop-details__meta-link">
                <span className="Workshop-details__meta-icon">
                  <i className="far fa-folder-open"></i>
                </span>
                Lectures: <span>6</span>
              </a>
              <a href="#none" className="Workshop-details__meta-link">
                <span className="Workshop-details__meta-icon">
                  <i className="far fa-user-circle"></i>
                </span>
                Students: <span>Max 4</span>
              </a>
              <a href="#none" className="Workshop-details__meta-link">
                <span className="Workshop-details__meta-icon">
                  <i className="fas fa-play"></i>
                </span>
                Video: <span>8 hours</span>
              </a>
              <a href="#none" className="Workshop-details__meta-link">
                <span className="Workshop-details__meta-icon">
                  <i className="far fa-flag"></i>
                </span>
                Skill Level: <span>Advanced</span>
              </a>
              <a href="#none" className="Workshop-details__meta-link">
                <span className="Workshop-details__meta-icon">
                  <i className="far fa-bell"></i>
                </span>
                Language: <span>English</span>
              </a>
            </div>
            <div className="Workshop-details__list">
              <h2 className="Workshop-details__list-title">New Workshops</h2>
              <div className="Workshop-details__list-item">
                <div className="Workshop-details__list-img">
                  <img src={lcImage1} alt="" />
                </div>
                <div className="Workshop-details__list-content">
                  <a className="Workshop-details__list-author" href="#none">
                    by <span>Lydia Byrd</span>
                  </a>
                  <h3>
                    <a href="#none">Marketing strategies</a>
                  </h3>
                  <div className="Workshop-details__list-stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <span>4.8</span>
                  </div>
                </div>
              </div>
              <div className="Workshop-details__list-item">
                <div className="Workshop-details__list-img">
                  <img src={lcImage2} alt="" />
                </div>
                <div className="Workshop-details__list-content">
                  <a className="Workshop-details__list-author" href="#none">
                    by <span>Lydia Byrd</span>
                  </a>
                  <h3>
                    <a href="#none">Marketing strategies</a>
                  </h3>
                  <div className="Workshop-details__list-stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <span>4.8</span>
                  </div>
                </div>
              </div>
              <div className="Workshop-details__list-item">
                <div className="Workshop-details__list-img">
                  <img src={lcImage3} alt="" />
                </div>
                <div className="Workshop-details__list-content">
                  <a className="Workshop-details__list-author" href="#none">
                    by <span>Lydia Byrd</span>
                  </a>
                  <h3>
                    <a href="#none">Marketing strategies</a>
                  </h3>
                  <div className="Workshop-details__list-stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <span>4.8</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopDetails;
