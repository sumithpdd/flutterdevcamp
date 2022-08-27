import React from 'react'
import { Link } from 'gatsby'
import team2 from '../assets/images/team-1-2.jpg'

const Workshops = ({ workshops }) => { 
  return (
    <section className="workshop-one Workshop-page">
      <div className="container">
        <div className="row">
          {workshops &&
            workshops.map((workshop, index) => (
              <div className="col-lg-4" key={index}>
                <div className="workshop-one__single">
                  <div className={`workshop-one__single color-${index}`}>
                    <div className="workshop-one__image">
                      <img
                        src={workshop.node.frontmatter.featuredImage}
                        alt={workshop.node.frontmatter.title}
                      />
                    </div>
                    <div className="workshop-one__content">
                      <a
                        href={workshop.node.fields.slug}
                        className="workshop-one__category"
                      >
                        {workshop.node.frontmatter.topic}
                      </a>
                      <h2 className="workshop-one__title">
                        <Link to={workshop.node.fields.slug}>
                          {workshop.node.frontmatter.title}
                        </Link>
                      </h2>
                      <div className="workshop-one__admin">
                        <img src={team2} alt="" />
                        by <a href="/mentor-details">Renuka Kelkar</a>
                      </div>
                      <div className="workshop-one__admin">
                        <img src={team2} alt="" />
                        by <a href="/mentor-details">Sumith Damodaran</a>
                      </div>
                      <div className="comment-one__date">
                        <p className="workshop-one__meta">
                          <i className="fa fa-calendar-alt"></i>
                          {workshop.node.frontmatter.formattedDate}
                        </p>{' '}
                        {workshop.node.frontmatter.formatInperson ? (
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
                        {workshop.node.frontmatter.formatOnline ? (
                          <>
                            <i className="fa fa-globe"></i>
                            <span className="workshop-one__stars-count">
                              {' '}
                              Online{' '}
                            </span>
                          </>
                        ) : (
                          ''
                        )}
                      </div>
                      <div className="workshop-one__meta">
                        <i className="far fa-clock"></i>{' '}
                        {workshop.node.frontmatter.duration} Hours{' '}
                        <i className="far fa-folder-open"></i>{' '}
                        {workshop.node.frontmatter.numberOfLectures}{' '}
                        Lectures
                      </div>{' '}
                      <a
                        href={workshop.node.fields.slug}
                        className="workshop-one__link"
                      >
                        See Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {/* <div className="post-pagination">
          <a href="#none">
            <i className="fa fa-angle-double-left"></i>
          </a>
          <a className="active" href="#none">
            1
          </a>
          <a href="#none">2</a>
          <a href="#none">3</a>
          <a href="#none">4</a>
          <a href="#none">
            <i className="fa fa-angle-double-right"></i>
          </a>
        </div> */}
      </div>
    </section>
  )
}

export default Workshops
