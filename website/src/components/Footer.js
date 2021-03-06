import React from 'react'
import footer1 from '../assets/images/footer-1-1.png'
import footer2 from '../assets/images/footer-1-2.png'
import footer3 from '../assets/images/footer-1-3.png'
import footer4 from '../assets/images/footer-1-4.png'
import footer5 from '../assets/images/footer-1-5.png'
import footer6 from '../assets/images/footer-1-6.png'

export const FooterTemplate = ({ data }) => {
  const { copyrightInfo,  socialLinks } = data
  function scrollTop() {
    window.scrollTo(0, 0)
  }
  return (
    <div>
      <footer className="site-footer">
        <div className="site-footer__upper">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-6 col-sm-12">
                <div className="footer-widget footer-widget__contact">
                  <h2 className="footer-widget__title">Workshops</h2>
                  <ul className="list-unstyled footer-widget__Workshop-list">
                    <li>
                      <h2>
                        <a href="Workshop-details.html">
                          Introduction Web Design
                        </a>
                      </h2>
                      <p>Mike Hardson</p>
                    </li>
                    <li>
                      <h2>
                        <a href="Workshop-details.html">
                          {' '}
                          Learning MBA Management{' '}
                        </a>
                      </h2>
                      <p>Jessica Brown</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-sm-12">
                <div className="footer-widget footer-widget__link">
                  <h2 className="footer-widget__title">Explore</h2>
                  <div className="footer-widget__link-wrap">
                    <ul className="list-unstyled footer-widget__link-list">
                      <li>
                        <a href="#none">About</a>
                      </li>
                      <li>
                        <a href="#none">Overview</a>
                      </li>
                      <li>
                        <a href="#none">Mentors</a>
                      </li>
                      <li>
                        <a href="#none">Join Us</a>
                      </li>
                      <li>
                        <a href="#none">Our News</a>
                      </li>
                    </ul>
                    <ul className="list-unstyled footer-widget__link-list">
                      <li>
                        <a href="#none">Help </a>
                      </li>
                      <li>
                        <a href="#none">Contact</a>
                      </li>
                      <li>
                        <a href="#none">Register Now</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-sm-12">
                <div className="footer-widget footer-widget__gallery">
                  <h2 className="footer-widget__title">Gallery</h2>
                  <ul className="list-unstyled footer-widget__gallery-list">
                    <li>
                      <a href="#none">
                        <img src={footer1} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#none">
                        <img src={footer2} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#none">
                        <img src={footer3} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#none">
                        <img src={footer4} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#none">
                        <img src={footer5} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#none">
                        <img src={footer6} alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-sm-12">
                <div className="footer-widget footer-widget__about">
                  <h2 className="footer-widget__title">About</h2>
                  <p className="footer-widget__text">
                    Lorem ipsum dolor sit ametcon, sectetur adipiscing elit.
                    Phasellus vehic sagittis euismod.
                  </p>
                  <div className="footer-widget__btn-block">
                    <a href="#none" className="thm-btn">
                      Contact
                    </a>
                    <a href="#none" className="thm-btn">
                      Purchase
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <div className="container">
            <p className="site-footer__copy">{copyrightInfo.tagline}</p>
            {socialLinks.length > 0 && (
              <div className="site-footer__social">
                <div
                  onClick={scrollTop}
                  onKeyDown={scrollTop}
                  role="button"
                  tabIndex={0}
                  className="scroll-to-target site-footer__scroll-top"
                >
                  <i className="kipso-icon-top-arrow"></i>
                </div>
                {socialLinks.map((socialLink) => (
                  <a href={socialLink.linkURL}>
                    <i className={"fab " + socialLink.icon}></i>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </footer>

      <div className="search-popup">
        <div className="search-popup__overlay custom-cursor__overlay search-overlay"></div>
        <div className="search-popup__inner">
          <form action="#" className="search-popup__form">
            <input
              type="text"
              name="search"
              placeholder="Type here to Search...."
            />
            <button type="submit">
              <i className="Flutter DevCamp |-icon-magnifying-glass"></i>
            </button>
            <div className="cancel"></div>
          </form>
        </div>
      </div>
    </div>
  )
}

const Footer = (props) => {
  console.log(props)
  if (!props.data) {
    return null
  }
  const data = props.data.edges[0].node.frontmatter
  return <FooterTemplate data={data} />
}

export default Footer
