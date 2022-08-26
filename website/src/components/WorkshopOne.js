import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby' 
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
// import required modules
import { Pagination } from 'swiper'

import team2 from '../assets/images/team-1-2.jpg'

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
    <StaticQuery
      query={graphql`
        query WorkshopList {
          allMarkdownRemark(
            filter: { frontmatter: { templateKey: { eq: "workshop" } } }
            sort: { order: ASC, fields: frontmatter___date }
          ) {
            edges {
              node {
                id
                frontmatter {
                  title
                  formattedDate: date(formatString: "MMMM Do YYYY @ h:mm A")
                  rawDate: date
                  topic
                  templateKey
                  featuredImage
                  showonfooter
                  duration
                  numberOfLectures
                  formatInperson
                  formatOnline
                  presenters {
                    name
                    image
                    text
                    presentationTitle
                  }
                  location {
                    mapsLatitude
                    mapsLongitude
                    mapsLink
                    name
                  }
                }
                fields {
                  slug
                }
              }
            }
            totalCount
          }
        }
      `}
      render={(data) => {
        const { edges: workshops } = data.allMarkdownRemark
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
                    {workshops.map((workshop, index) => {
                      const { frontmatter } = workshop.node
                      return (
                        <SwiperSlide key={workshop.node.id}>
                          <div className="item">
                            <div
                              className={`workshop-one__single color-${index}`}
                            >
                              <div className="workshop-one__image">
                                <img src={frontmatter.featuredImage} alt="" />
                              </div>
                              <div className="workshop-one__content">
                                <a
                                  href={workshop.node.fields.slug}
                                  className="workshop-one__category"
                                >
                                  {frontmatter.topic}
                                </a>
                                <h2 className="workshop-one__title">
                                  <Link to={workshop.node.fields.slug}>
                                    {frontmatter.title}
                                  </Link>
                                </h2>
                                <div className="workshop-one__admin">
                                  <img src={team2} alt="" />
                                  by <a href="/mentor-details">Renuka Kelkar</a>
                                </div>
                                <div className="workshop-one__admin">
                                  <img src={team2} alt="" />
                                  by{' '}
                                  <a href="/mentor-details">Sumith Damodaran</a>
                                </div>
                                <div className="comment-one__date">
                                  <p className="workshop-one__meta">
                                    <i className="fa fa-calendar-alt"></i>
                                    {frontmatter.formattedDate}
                                  </p>{' '}
                                  {frontmatter.formatInperson ? (
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
                                  {frontmatter.formatOnline ? (
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
                                  {frontmatter.duration} Hours{' '}
                                  <i className="far fa-folder-open"></i>{' '}
                                  {frontmatter.numberOfLectures}
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
                        </SwiperSlide>
                      )
                    })}
                  </Swiper>
                </div>
              </div>
            </section>
          </div>
        )
      }}
    />
  )
}
export default WorkshopOne
