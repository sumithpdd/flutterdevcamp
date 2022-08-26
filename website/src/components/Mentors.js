import React from 'react'
import { Link } from 'gatsby'
import team1 from '../assets/images/team-1-1.jpg'
import team2 from '../assets/images/team-1-2.jpg'
import team3 from '../assets/images/team-1-3.jpg'
import team4 from '../assets/images/team-1-4.jpg'
import team5 from '../assets/images/team-1-5.jpg'
import team6 from '../assets/images/team-1-6.jpg'
import team7 from '../assets/images/team-1-7.jpg'
import team8 from '../assets/images/team-1-8.jpg'

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
