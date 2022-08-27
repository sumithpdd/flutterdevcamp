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
          ) {
            edges {
              node {
                id
                frontmatter {
                  partners {
                    companyLogo
                    companyName
                    companyURL
                    companyType
                  }
                }
                fields {
                  slug
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        const partners =
          data.allMarkdownRemark.edges[0].node.frontmatter.partners
        return (
          <section className="brand-two ">
            <div className="container">
              <div className="block-title">
                <h2 className="block-title__title">Our Sponsors & partners</h2>
              </div>
              <div className="brand-one__carousel">
                <Swiper {...params}>
                  {partners.map((partner, index) => {
                    return (
                      <div className="item" key={index}>
                        <img
                          src={partner.companyLogo}
                          alt={partner.companyName}
                        />
                      </div>
                    )
                  })}
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
