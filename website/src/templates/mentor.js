import React from 'react' 
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import MentorDetails from '../components/MentorDetails'

const MentorPageTemplate = ({ content, mentor = null }) => {
  return (
    <>
      <PageHeader title="Mentor Details" />
      <MentorDetails mentor={mentor} content={content} />
    </>
  )
}

const MentorPage = ({ data }) => {
  const { markdownRemark: page } = data
  console.log(data)

  return (
    <Layout footerData={data.footerData} navbarData={data.navbarData}>
      <Helmet>
        <meta name="title" content={page.frontmatter.title} />
        <meta name="description" content={page.frontmatter.title} />
        <title>{page.frontmatter.title}</title>
      </Helmet>
      <MentorPageTemplate content={page.html} mentor={page.frontmatter} />
    </Layout>
  )
}

export default MentorPage

export const pageQuery = graphql`
  query MentorPage($id: String!) {
    markdownRemark(id: {eq: $id}) {
      html
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
`
