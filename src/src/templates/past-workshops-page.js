import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import isBefore from 'date-fns/isBefore'
import ReactMarkdown from 'react-markdown'

import WorkshopTemplate from './workshop'
import Layout from '../components/Layout'
import HTMLContent from '../components/Content'

const PastWorkshopsPageTemplate = ({
  title,
  content,
  workshops = null,
  bodyIsMarkdown = false,
}) => {
  return (
    <article className="pastWorkshops">
      <div className="container  pastWorkshops-container">
        <h1 className="pastWorkshops-title">{title}</h1>
        {bodyIsMarkdown ? (
          <ReactMarkdown
            className="pastWorkshops-description"
            source={content}
          />
        ) : (
          <HTMLContent
            className="pastWorkshops-description"
            content={content}
          />
        )}
        {workshops &&
          workshops.map((workshop, index) => (
            <WorkshopTemplate
              key={index}
              className="pastWorkshops-workshop"
              workshop={workshop.node.frontmatter}
            />
          ))}
      </div>
    </article>
  )
}

PastWorkshopsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  workshops: PropTypes.array,
}

const PastWorkshopsPage = ({ data }) => {
  const { markdownRemark: page } = data
  const {
    frontmatter: {
      seo: { title: seoTitle, description: seoDescription, browserTitle },
    },
  } = page
  let workshops = data.allMarkdownRemark.edges

  // Find all the workshops that occured in the past
  workshops = workshops.filter((workshop) => {
    return isBefore(workshop.node.frontmatter.rawDate, new Date()) && workshop
  })

  return (
    <Layout footerData={data.footerData} navbarData={data.navbarData}>
      <Helmet>
        <meta name="title" content={seoTitle} />
        <meta name="description" content={seoDescription} />
        <title>{browserTitle}</title>
      </Helmet>
      <PastWorkshopsPageTemplate
        title={page.frontmatter.title}
        content={page.html}
        workshops={workshops}
      />
    </Layout>
  )
}

PastWorkshopsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PastWorkshopsPage

export const pageQuery = graphql`
  query PastWorkshopsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        seo {
          browserTitle
          title
          description
        }
      }
    }
    ...LayoutFragment
    allMarkdownRemark(
      filter: {
        frontmatter: { presenters: { elemMatch: { text: { ne: null } } } }
      }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      edges {
        node {
          frontmatter {
            title
            formattedDate: date(formatString: "MMMM Do YYYY @ h:mm A")
            rawDate: date
            presenters {
              name
              image
              text
              presentationTitle
              links {
                linkText
                linkURL
              }
            }
            location {
              name
            }
          }
        }
      }
    }
  }
`
