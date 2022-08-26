import React from 'react'
import certificate1 from '../assets/images/certificate-1-1.png'
import certificate2 from '../assets/images/certificate-1-2.png'
 

const MentorDetails = ({ content, mentor = null }) => {
  return (
    <section className="team-details">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <div className="team-details__content">
              <h2 className="team-details__title">Read my story</h2>
              <p className="team-details__text">{mentor.bio}</p>
              {/* <h3 className="team-details__subtitle">Certificate</h3>
              <ul className="list-unstyled team-details__certificate-list">
                <li>
                  <img src={certificate1} alt="" />
                </li>
                <li>
                  <img src={certificate2} alt="" />
                </li>
              </ul> */}
              <h3 className="team-details__subtitle">Skills</h3>
              <div className="progress-one__wrap">
                {mentor.skillset.map((skillset, index) => (
                  <div className="progress-one__single" key={index}>
                    <div className="progress-one__top">
                      <h3 className="progress-one__title">{skillset.skill}</h3>
                      <h3 className="progress-one__percent">
                        <span className="counter">{skillset.skillLevel}</span>%
                      </h3>
                    </div>
                    <div className="progress-one__bar">
                      <span
                        style={{ width: `${skillset.skillLevel}%` }}
                        className="wow slideInLeft"
                      ></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="team-one__single">
              <div className="team-one__image">
                <img src={mentor.mainImage} alt={mentor.name} />
              </div>
              <div className="team-one__content">
                <h2 className="team-one__name">
                  <a href="/team-details">{mentor.name}</a>
                </h2>
                <p className="team-one__designation">{mentor.jobTitle}</p>
              </div>
              <div className="team-one__social">
                <a href={mentor.twitter}>
                  <i className="fab fa-twitter"></i>
                </a>
                <a href={mentor.linkedin}>
                  <i className="fab fa-linkedin "></i>
                </a>
                <a href={mentor.github}>
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MentorDetails
