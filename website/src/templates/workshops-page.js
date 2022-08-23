import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet' 
import Layout from '../components/Layout' 

import PageHeader from "../components/PageHeader"; 
import Workshops from "../components/Workshops";

const WorkshopsPageTemplate = ({
  title,
  content,
  workshops = null, 
}) => {
  
  return (
    <>
      <PageHeader title={title} />
      <Workshops workshops = {workshops}/>
    </>
    // <article className="pastWorkshops">
    //   <div className="container  pastWorkshops-container">
    //     <h1 className="pastWorkshops-title">{title}</h1>
    //     {bodyIsMarkdown ? (
    //       <ReactMarkdown
    //         className="pastWorkshops-description"
    //         source={content}
    //       />
    //     ) : (
    //       <HTMLContent
    //         className="pastWorkshops-description"
    //         content={content}
    //       />
    //     )}
    //     {workshops &&
    //       workshops.map((workshop, index) => (
    //         <WorkshopTemplate
    //           key={index}
    //           className="pastWorkshops-workshop"
    //           workshop={workshop.node.frontmatter}
    //         />
    //       ))}
    //   </div>
    // </article>
  )
}

WorkshopsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  workshops: PropTypes.array,
}

const WorkshopsPage = ({ data }) => {
  const { markdownRemark: page } = data
  const {
    frontmatter: {
      seo: { title: seoTitle, description: seoDescription, browserTitle },
    },
  } = page
  let workshops = data.allMarkdownRemark.edges
  
  // Find all the workshops that occured in the past
  // workshops = workshops.filter((workshop) => {
  //   return isBefore(workshop.node.frontmatter.rawDate, new Date()) && workshop
  // }) 

  return (
    // <Layout footerData={data.footerData} navbarData={data.navbarData}>
    //   <Helmet>
    //     <meta name="title" content={seoTitle} />
    //     <meta name="description" content={seoDescription} />
    //     <title>{browserTitle}</title>
    //   </Helmet>
    //   <WorkshopsPageTemplate
    //     title={page.frontmatter.title}
    //     content={page.html}
    //     workshops={workshops}
    //   />
    // </Layout>
    <Layout footerData={data.footerData} navbarData={data.navbarData}>
      <Helmet>
        <meta name="title" content={seoTitle} />
        <meta name="description" content={seoDescription} />
        <title>{browserTitle}</title>
      </Helmet>
      <WorkshopsPageTemplate
        title={page.frontmatter.title}
        content={page.html}
        workshops={workshops}
      />
    </Layout>
  )
}

WorkshopsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default WorkshopsPage

export const pageQuery = graphql`
  query WorkshopsPage($id: String!) {
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
      filter: {frontmatter: {templateKey: {eq: "workshop"}}}
      sort: {order: ASC, fields: frontmatter___date}
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
            numberOfHours
            numberOfSessions
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
`
