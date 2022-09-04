import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import ReactMarkdown from 'react-markdown'
import Helmet from 'react-helmet'
import PageHeader from '../components/PageHeader'

import Layout from '../components/Layout'
import HTMLContent from '../components/Content'

import ClientStripe from '../assets/images/circle-stripe.png'
const AboutPageTemplate = (props) => {
  const { page } = props
  return (
    <>
      <PageHeader title={page.frontmatter.title} />
      <section className="about-one ">
        <img src={ClientStripe} className="about-one__circle" alt="" />
        <div className="container text-center">
          <div className="block-title text-center">
            <h2 className="block-title__title">
              Let’s do study with <br />
              expert Mentors
            </h2>
          </div>
          <div className="about-imageWrapper">
            <img
              src={page.frontmatter.mainImage.image}
              alt={page.frontmatter.mainImage.imageAlt}
            />
          </div>{' '}
          {/* The page.html is actually markdown when viewing the page from the netlify CMS,
              so we must use the ReactMarkdown component to parse the markdown in that case  */}
          {page.bodyIsMarkdown ? (
            <ReactMarkdown source={page.html} />
          ) : (
            <HTMLContent content={page.html} />
          )}{' '}
          <ul className="list-unstyled">
            {page.frontmatter.gallery.map((galleryImage, index) => (
              <li key={index} className="galleryList-item">
                <img src={galleryImage.image} alt={galleryImage.imageAlt} />
              </li>
            ))}
          </ul>{' '}
        </div>
      </section>
      <div className="container">
        <ReactMarkdown source={page.frontmatter.developerGroups} />
      </div>
      <div className="container  organizers-container">
        <h2 className="organizers-title">
          {page.frontmatter.organizers.title}
        </h2>
        <ul className="list-unstyled course-details__overview-list">
          {page.frontmatter.organizers.gallery.map((galleryImage, index) => (
            <li key={index}>
              <div className="comment-one__image">
                <div className="inner-block">
                  <img src={galleryImage.image} alt={galleryImage.imageAlt} />
                </div>
              </div>
              <img />
              <h3 className="comment-one__author">{galleryImage.name} </h3>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

const AboutPage = ({ data }) => {
  const { markdownRemark: page, footerData, navbarData } = data
  const {
    frontmatter: {
      seo: { title: seoTitle, description: seoDescription, browserTitle },
    },
  } = page

  return (
    <Layout footerData={footerData} navbarData={navbarData}>
      <Helmet>
        <meta name="title" content={seoTitle} />
        <meta name="description" content={seoDescription} />
        <title>{browserTitle}</title>
      </Helmet>
      <AboutPageTemplate page={{ ...page, bodyIsMarkdown: false }} />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const pageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        mainImage {
          image
          imageAlt
        }
        gallery {
          image
          imageAlt
        }
        developerGroups
        organizers {
          title
          gallery {
            image
            imageAlt
            name
          }
        }
        seo {
          browserTitle
          title
          description
        }
      }
    }
    ...LayoutFragment
  }
`
