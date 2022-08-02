import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import isAfter from "date-fns/isAfter";

import Layout from "../components/Layout";
import Map from "../components/Map";
import HeadshotPlaceholder from "../assets/images/headshot-placeholder.svg";
import CustomLink from "../components/CustomLink";

import Topbar from "../components/Topbar";
import NavOne from "../components/NavOne";
import SliderOne from "../components/SliderOne"; 
import AboutTwo from "../components/AboutTwo";
import WorkshopOne from "../components/WorkshopOne";
import VideoTwo from "../components/VideoTwo";
import WorkshopCountdown from "../components/WorkshopCountdown";
import WorkshopCatOne from "../components/WorkshopCatOne";
import CallToActionThree from "../components/CallToActionThree";
import BrandsTwo from "../components/BrandsTwo"; 
import CallToActionFour from "../components/CallToActionFour"; 


export const HomePageTemplate = ({ home, upcomingWorkshop = null }) => {
  const presenters = upcomingWorkshop && upcomingWorkshop.presenters;
  const latitude = upcomingWorkshop && parseFloat(upcomingWorkshop.location.mapsLatitude);
  const longitude = upcomingWorkshop && parseFloat(upcomingWorkshop.location.mapsLongitude);
  return (
    <>
      <section className="header">
        <div className="header-container  container">
          {home.headerImage && <img className="header-image" src={home.headerImage.image} alt={home.headerImage.imageAlt} />}
          <h3 className="header-tagline">
            <span className="header-taglinePart">{home.title}</span>
          </h3>
        </div>
      </section>
      <section className="upcomingWorkshop  section">
        <div className="upcomingWorkshop-container  container">
          <h2 className="upcomingWorkshop-title">{home.upcomingWorkshopHeading}</h2>
          {upcomingWorkshop ? (
            <>
              <p className="upcomingWorkshop-detail  upcomingWorkshop-detail--date">
                <span className="upcomingWorkshop-detailLabel">Date: </span>
                {upcomingWorkshop.formattedDate}
              </p>
              <p className="upcomingWorkshop-detail  upcomingWorkshop-detail--location">
                <span className="upcomingWorkshop-detailLabel">Location: </span>
                {upcomingWorkshop.location.name}
              </p>
              {presenters.length > 0 && (
                <div className="upcomingWorkshop-presenters">
                  {presenters.map(presenter => (
                    <div className="upcomingWorkshop-presenter" key={presenter.text}>
                      <img
                        className="upcomingWorkshop-presenterImage"
                        src={presenter.image ? presenter.image : HeadshotPlaceholder}
                        alt={presenter.image ? presenter.name : "Default headshot placeholder"}
                      />
                      <span className="upcomingWorkshop-presenterName">{presenter.name}</span>
                      <span className="upcomingWorkshop-presenterPresentationTitle">
                        {presenter.presentationTitle}
                      </span>
                      <p className="upcomingWorkshop-presenterDescription">{presenter.text}</p>
                    </div>
                  ))}
                </div>
              )}
              <p className="upcomingWorkshop-mapNote">{home.mapsNote}</p>
              <div className="upcomingWorkshop-mapWrapper">
                <Map
                  isMarkerShown
                  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBTxauB_VWpo0_8hWELlE3pN59uuHzxD-8&v=3.exp&libraries=geometry,drawing,places"
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ height: `100%` }} />}
                  mapElement={<div style={{ height: `100%` }} />}
                  link={upcomingWorkshop.location.mapsLink}
                  latitude={latitude}
                  longitude={longitude}
                />
              </div>
            </>
          ) : (
            <p className="upcomingWorkshop-detail">{home.noUpcomingWorkshopText}</p>
          )}
        </div>
      </section>
      <section className="ctaBlock">
        <CustomLink
          linkType={home.callToActions.firstCTA.linkType}
          linkURL={home.callToActions.firstCTA.linkURL}
          className="ctaBlock-pattern  ctaBlock-pattern--first"
        >
          <div className="ctaBlock-cta">
            <span className="ctaBlock-ctaHeading">{home.callToActions.firstCTA.heading}</span>
            <p className="ctaBlock-ctaDescription">{home.callToActions.firstCTA.subHeading}</p>
          </div>
        </CustomLink>
        <CustomLink
          linkType={home.callToActions.secondCTA.linkType}
          linkURL={home.callToActions.secondCTA.linkURL}
          className="ctaBlock-pattern  ctaBlock-pattern--second"
        >
          <div className="ctaBlock-cta">
            <span className="ctaBlock-ctaHeading">{home.callToActions.secondCTA.heading}</span>
            <p className="ctaBlock-ctaDescription">{home.callToActions.secondCTA.subHeading}</p>
          </div>
        </CustomLink>
      </section>
      <Topbar />
      <NavOne />
      <SliderOne />
      <AboutTwo />
      <WorkshopOne />
      <VideoTwo />
      <WorkshopCountdown />
      <WorkshopCatOne />
      <CallToActionThree />
      <BrandsTwo /> 
      <CallToActionFour /> 
    </>
  );
};

class HomePage extends React.Component {
  render() {
    const { data } = this.props;
    const {
      data: { footerData, navbarData },
    } = this.props;
    const { frontmatter: home } = data.homePageData.edges[0].node;
    const {
      seo: { title: seoTitle, description: seoDescription, browserTitle },
    } = home;
    let upcomingWorkshop = null;
    // Find the next workshop that is closest to today
    data.allMarkdownRemark.edges.every(item => {
      const { frontmatter: workshop } = item.node;
      if (isAfter(workshop.rawDate, new Date())) {
        upcomingWorkshop = workshop;
        return true;
      } else {
        return false;
      }
    });
    return (
      <Layout footerData={footerData} navbarData={navbarData}>
        <Helmet>
          <meta name="title" content={seoTitle} />
          <meta name="description" content={seoDescription} />
          <title>{browserTitle}</title>
        </Helmet>
        <HomePageTemplate home={home} upcomingWorkshop={upcomingWorkshop} />
      </Layout>
    );
  }
}

HomePage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default HomePage;

export const pageQuery = graphql`
  query HomePageQuery {
    allMarkdownRemark(
      filter: { frontmatter: { presenters: { elemMatch: { text: { ne: null } } } } }
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
    homePageData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "home-page" } } }) {
      edges {
        node {
          frontmatter {
            title
            headerImage {
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
`;
