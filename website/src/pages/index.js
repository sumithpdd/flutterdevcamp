import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
// import HeadshotPlaceholder from "../assets/images/headshot-placeholder.svg";
import SliderOne from '../components/SliderOne'
import AboutTwo from '../components/AboutTwo'
import WorkshopOne from '../components/WorkshopOne'
import BrandsTwo from '../components/BrandsTwo'
import CallToActionFour from '../components/CallToActionFour'

import CallToActionTwo from '../components/CallToActionTwo'
const HomePageTemplate = ({ home }) => {
  // const presenters = upcomingWorkshop && upcomingWorkshop.presenters;
  // const latitude = upcomingWorkshop && parseFloat(upcomingWorkshop.location.mapsLatitude);
  // const longitude = upcomingWorkshop && parseFloat(upcomingWorkshop.location.mapsLongitude);
  return (
    <>
      <SliderOne />
      <WorkshopOne />
      <CallToActionTwo />
      <BrandsTwo />
    </>
  )
}

class HomePage extends React.Component {
  render() {
    const { data } = this.props
    const {
      data: { footerData, navbarData },
    } = this.props
    const { frontmatter: home } = data.homePageData.edges[0].node
    const {
      seo: { title: seoTitle, description: seoDescription, browserTitle },
    } = home
    // let workshops = null;

    // data.allMarkdownRemark.edges.every(item => {
    //   const { frontmatter: workshop } = item.node;
    //   // if (isAfter(workshop.rawDate, new Date())) {
    //   //   upcomingWorkshop = workshop;
    //   //   return true;
    //   // } else {
    //   //   return false;
    //   // }
    // });
    return (
      <Layout footerData={footerData} navbarData={navbarData}>
        <Helmet>
          <meta name="title" content={seoTitle} />
          <meta name="description" content={seoDescription} />
          <title>{browserTitle}</title>
        </Helmet>
        <HomePageTemplate home={home} />
      </Layout>
    )
  }
}

HomePage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default HomePage

export const pageQuery = graphql`
  query HomePageQuery {
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
            }
            location {
              mapsLatitude
              mapsLongitude
              mapsLink
              name
            }
          }
        }
      }
    }
    ...LayoutFragment
    homePageData: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "home-page" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            logoImage {
              image
              imageAlt
            }
            upcomingWorkshopHeading
            noUpcomingWorkshopText
            mapsNote
            callToActions {
              firstCTA {
                heading
                subHeading
                linkType
                linkURL
              }
              secondCTA {
                heading
                subHeading
                linkType
                linkURL
              }
            }
            seo {
              browserTitle
              title
              description
            }
          }
        }
      }
    }
  }
`
