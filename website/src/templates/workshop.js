import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import WorkshopDetails from '../components/WorkshopDetails'

const WorkshopPageTemplate = ({content, workshop = null }) => {
  return (
    <>
      <PageHeader title="Workshop Details" />
      <WorkshopDetails workshop={workshop} content={content}/>
    </>
  )
}

WorkshopPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  workshops: PropTypes.array,
}

const WorkshopPage = ({ data }) => {
  const { markdownRemark: page } = data
  console.log(data)

  return (
    <Layout footerData={data.footerData} navbarData={data.navbarData}>
      <Helmet>
        <meta name="title" content={page.frontmatter.title} />
        <meta name="description" content={page.frontmatter.title} />
        <title>{page.frontmatter.title}</title>
      </Helmet>
      <WorkshopPageTemplate
         
        content={page.html}
        workshop={page.frontmatter}
      />
    </Layout>
  )
}

WorkshopPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default WorkshopPage

export const pageQuery = graphql`
  query WorkshopPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      id
      frontmatter {
        title
        seo {
          browserTitle
          title
          description
        }
        formattedDate: date(formatString: "MMMM Do YYYY @ h:mm A")
        rawDate: date
        topic
        templateKey
        featuredImage
        showonfooter
        duration
        numberOfLectures
        maxNumberofStudents
        skillLevel
        language
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
`
