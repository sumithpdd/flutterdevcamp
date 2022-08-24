import React from 'react'

import ReactMarkdown from 'react-markdown'

import HTMLContent from '../components/Content'
import team1 from '../assets/images/team-1-1.jpg'
import UpcomingWorkshops from './UpcomingWorkshop'

const WorkshopDetails = ({ content, workshop = null }) => {
  return (
    <section className="workshop-details">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="workshop-details__content">
              <div className="workshop-details__top">
                <div className="workshop-details__top-left">
                  <h2 className="workshop-details__title">{workshop.title}</h2>
                </div>
                <div className="workshop-details__top-right">
                  <a href="#none" className="workshop-one__category">
                    {workshop.topic}
                  </a>
                </div>
              </div>
              <p className="workshop-details__author">
                by
                <img src={team1} alt="" />
                <a href="#none">Renuka Kelkar</a>
                <img src={team1} alt="" />
                <a href="#none">Sumith Damodaran</a>
              </p>
              <div className="workshop-one__image">
                <img src={workshop.featuredImage} alt={workshop.title} />
              </div>

              <ul className="workshop-details__tab-navs list-unstyled nav nav-tabs">
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
              </ul>
              <div className="tab-content Workshop-details__tab-content ">
                <div
                  className="tab-pane show active  animated fadeInUp"
                  role="tabpanel"
                  id="overview"
                >
                  {' '}
                  <br />
                  <div className="course-details__tab-text">
                    {workshop.bodyIsMarkdown ? (
                      <ReactMarkdown
                        className="workshop-details__tab-text"
                        source={content}
                      />
                    ) : (
                      <HTMLContent
                        className="workshop-details__tab-text"
                        content={content}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="workshop-details__price">
              <p className="workshop-details__price-text">Workshop </p>
              <p className="workshop-details__price-amount">
                {workshop.formatInperson ? (
                  <>
                    <i className="fa fa-handshake"></i>
                    <span className="workshop-one__stars-count">
                      {' '}
                      In person{' '}
                    </span>
                  </>
                ) : (
                  ''
                )}
                {workshop.formatOnline ? (
                  <>
                    <i className="fa fa-globe"></i>
                    <span className="workshop-one__stars-count"> Online </span>
                  </>
                ) : (
                  ''
                )}
              </p>
              <a href="#none" className="thm-btn Workshop-details__price-btn">
                Register here
              </a>
            </div>

            <div className="workshop-details__meta">
              <div className="workshop-details__meta-link">
                <span className="workshop-details__meta-icon">
                  <i className="far fa-clock"></i>
                </span>
                Durations: <span>{workshop.duration} hours</span>
              </div>
              <div className="workshop-details__meta-link">
                <span className="workshop-details__meta-icon">
                  <i className="far fa-folder-open"></i>
                </span>
                Lectures: <span>{workshop.numberOfLectures}</span>
              </div>
              <div className="workshop-details__meta-link">
                <span className="workshop-details__meta-icon">
                  <i className="far fa-user-circle"></i>
                </span>
                Students: <span>Max {workshop.maxNumberofStudents}</span>
              </div>
              {/* <a href="#none" className="workshop-details__meta-link">
                <span className="workshop-details__meta-icon">
                  <i className="fas fa-play"></i>
                </span>
                Video: <span>8 hours</span>
              </a> */}
              <div className="workshop-details__meta-link">
                <span className="workshop-details__meta-icon">
                  <i className="far fa-flag"></i>
                </span>
                Skill Level: <span>{workshop.skillLevel}</span>
              </div>
              <div className="workshop-details__meta-link">
                <span className="workshop-details__meta-icon">
                  <i className="far fa-bell"></i>
                </span>
                Language: <span>{workshop.language}</span>
              </div>
            </div>
              <UpcomingWorkshops/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkshopDetails
