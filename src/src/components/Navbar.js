import React, { Component } from 'react'

import { Link } from 'gatsby'
import logo from '../assets/images/Flutter Devcamp-logos_transparent.png'
import CustomLink from './CustomLink'

class Navbar extends Component {
  constructor() {
    super()

    this.state = {
      sticky: false,
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)

    //Mobile Menu
    this.mobileMenu()

    //Search Toggle
    //  this.serachButton();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    if (window.scrollY > 70) {
      this.setState({
        sticky: true,
      })
    } else if (window.scrollY < 70) {
      this.setState({
        sticky: false,
      })
    }
  }

  mobileMenu = () => {
    //Mobile Menu Toggle
    let mainNavToggler = document.querySelector('.menu-toggler')
    let mainNav = document.querySelector('.main-navigation')

    mainNavToggler.addEventListener('click', function () {
      mainNav.style.display =
        mainNav.style.display !== 'block' ? 'block' : 'none'
    })
  }
  render() {
    const data = this.props.data?.edges[0]?.node?.frontmatter
    return (
      <header className="site-header site-header__header-one ">
        <nav
          className={`navbar navbar-expand-lg navbar-light header-navigation stricky ${
            this.state.sticky ? 'stricked-menu stricky-fixed' : ''
          }`}
        >
          <div className="container clearfix">
            <div className="logo-box clearfix">
              <Link to="/" className="navbar-brand">
                <img
                  src={logo}
                  className="main-logo"
                  width="128"
                  alt="Awesome alter text"
                />
              </Link>
              <div className="header__social">
                <a href="#none">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#none">
                  <i className="fab fa-facebook-square"></i>
                </a>
                <a href="#none">
                  <i className="fab fa-pinterest-p"></i>
                </a>
                <a href="#none">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
              <button className="menu-toggler">
                <span className="Flutter DevCamp |-icon-menu"></span>
              </button>
            </div>
            <div className="main-navigation">
              {data.menuItems.length > 0 && (
                <ul className=" navigation-box">
                  {data.menuItems.map((menuItem) => (
                    // className="current"
                    <li key={menuItem.linkURL} >
                      <CustomLink
                        linkType={menuItem.linkType}
                        linkURL={menuItem.linkURL}
                      >
                        {menuItem.label}
                      </CustomLink>
                    </li>
                  ))}

                  {/* <ul className="sub-menu">
                  <li>
                    <Link to="/">Home 01</Link>
                  </li>
                  <li>
                    <Link to="/index-2">Home 02</Link>
                  </li>
                  <li>
                    <Link to="/index-3">Home 03</Link>
                  </li>
                  <li>
                    <a href="#none">Header Versions</a>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/">Header 01</Link>
                      </li>
                      <li>
                        <Link to="/index-2">Header 02</Link>
                      </li>
                      <li>
                        <Link to="/index-3">Header 03</Link>
                      </li>
                    </ul>
                  </li>
                </ul> */}
                </ul>
              )}
            </div>
          </div>
        </nav>
        <div className="site-header__decor">
          <div className="site-header__decor-row">
            <div className="site-header__decor-single">
              <div className="site-header__decor-inner-1"></div>
            </div>
            <div className="site-header__decor-single">
              <div className="site-header__decor-inner-2"></div>
            </div>
            <div className="site-header__decor-single">
              <div className="site-header__decor-inner-3"></div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
export default Navbar
