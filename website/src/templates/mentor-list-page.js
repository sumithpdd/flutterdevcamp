import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'

import PageHeader from '../components/PageHeader'

import Mentors from '../components/Mentors'
const MentorsPageTemplate = ({ title, mentors = null }) => {
  return (
    <>
      <PageHeader title={title} />
      <Mentors mentors={mentors} />
    </>
  )
}

const MentorsPage = ({ data }) => {
  const { markdownRemark: page } = data
  const {
    frontmatter: {
      seo: { title: seoTitle, description: seoDescription, browserTitle },
    },
  } = page
  let mentors = data.allMarkdownRemark.edges

  return (
    <Layout footerData={data.footerData} navbarData={data.navbarData}>
      <Helmet>
        <meta name="title" content={seoTitle} />
        <meta name="description" content={seoDescription} />
        <title>{browserTitle}</title>
      </Helmet>
      <MentorsPageTemplate
        title={page.frontmatter.title}
        content={page.html}
        mentors={mentors}
      />
    </Layout>
  )
}

export default MentorsPage

export const pageQuery = graphql`
  query MentorsPage($id: String!) {
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
      filter: { frontmatter: { templateKey: { eq: "mentor" } } }
      sort: { order: ASC, fields: frontmatter___date }
    ) {
      edges {
        node {
          id
          frontmatter {
            templateKey
            name
            bio
            featuredImage
            quote
            bio
            jobTitle
            linkedin
            twitter
            github
            email
            skillset {
              skill
              skillLevel
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
`
