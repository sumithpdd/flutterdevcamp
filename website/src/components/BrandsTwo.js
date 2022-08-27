import React from 'react'
import Swiper from 'react-id-swiper'
import { StaticQuery, graphql } from 'gatsby' 
import brand1 from '../assets/images/brand-1-1.png'
// Import Swiper styles
import 'swiper/css'
const BrandsTwo = () => {
  const params = {
    slidesPerView: 5,
    loop: true,
    speed: 1000,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    // Responsive breakpoints
    breakpoints: {
      1024: {
        slidesPerView: 5,
      },
      768: {
        slidesPerView: 4,
      },
      640: {
        slidesPerView: 3,
      },
      320: {
        slidesPerView: 2,
      },
    },
  }
  return (
    <StaticQuery
      query={graphql`
        query PartnersList {
          allMarkdownRemark(
            filter: { frontmatter: { templateKey: { eq: "partners" } } }
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
          <section className="brand-two ">
            <div className="container">
              <div className="block-title">
                <h2 className="block-title__title">Our Sponsors & partners</h2>
              </div>
              <div className="brand-one__carousel">
                <Swiper {...params}>
                  <div className="item">
                    <img src={brand1} alt="" />
                  </div>
                  <div className="item">
                    <img src={brand1} alt="" />
                  </div>
                  <div className="item">
                    <img src={brand1} alt="" />
                  </div>
                  <div className="item">
                    <img src={brand1} alt="" />
                  </div>
                  <div className="item">
                    <img src={brand1} alt="" />
                  </div>
                  <div className="item">
                    <img src={brand1} alt="" />
                  </div>
                  <div className="item">
                    <img src={brand1} alt="" />
                  </div>
                  <div className="item">
                    <img src={brand1} alt="" />
                  </div>
                  <div className="item">
                    <img src={brand1} alt="" />
                  </div>
                  <div className="item">
                    <img src={brand1} alt="" />
                  </div>
                </Swiper>
              </div>
            </div>
          </section>
        )
      }}
    />
  )
}

export default BrandsTwo
