import React from 'react'
import { Link } from 'gatsby'

const div_row_center_style = {
  align: 'center',
}

const Mentor = ({ mentors }) => {
  console.log(mentors)
  return (
    <section className="team-one team-page">
      <div className="container">
        <div className="row" style={div_row_center_style}>
          {mentors &&
            mentors.map((mentor, index) => (
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12" key={index}>
                <div className="team-one__single">
                  <div className="team-one__image">
                    <img src={mentor.node.frontmatter.featuredImage} alt={mentor.node.frontmatter.jobTitle} />
                  </div>
                  <div className="team-one__content">
                    <h2 className="team-one__name">
                      <Link to={mentor.node.fields.slug}>{mentor.node.frontmatter.name} </Link>
                    </h2>
                    <p className="team-one__designation">{mentor.node.frontmatter.jobTitle}</p>
                    <p className="team-one__text">{mentor.node.frontmatter.quote}</p>
                  </div>
                  <div className="team-one__social">
                    <a href={mentor.node.frontmatter.twitter}>
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href={mentor.node.frontmatter.linkedin}>
                      <i className="fab fa-linkedin "></i>
                    </a>
                    <a href={mentor.node.frontmatter.github}>
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Mentor
