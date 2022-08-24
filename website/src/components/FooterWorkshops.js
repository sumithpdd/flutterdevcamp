import React from 'react'

import { StaticQuery, graphql, Link } from 'gatsby'
const FooterWorkshops = () => {
  return (
    <StaticQuery
      query={graphql`
        query FooterWorkshopList {
          allMarkdownRemark(
            filter: {
              frontmatter: {
                templateKey: { eq: "workshop" }
                showonfooter: { eq: true }
              }
            }
            sort: { order: ASC, fields: frontmatter___date }
          ) {
            edges {
              node {
                id
                frontmatter {
                  title
                  formattedDate: date(formatString: "MMMM Do YYYY @ h:mm A")
                  rawDate: date
                  templateKey
                  showonfooter
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
          <>
            <h2 className="footer-widget__title">Workshops</h2>
            <ul className="list-unstyled footer-widget__workshop-list">
              {workshops.map((workshop, index) => {
                const { frontmatter } = workshop.node
                return (
                  <li key={index}>
                    <h2>
                      <Link to={workshop.node.fields.slug}>
                        {frontmatter.title}
                      </Link>
                    </h2>
                    <a href="/mentor-details">Renuka Kelkar</a>
                    <br />
                    <a href="/mentor-details">Sumith Damodaran</a>
                  </li>
                )
              })}
            </ul>
          </>
        )
      }}
    />
  )
}

export default FooterWorkshops
