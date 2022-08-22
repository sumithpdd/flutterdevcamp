import React, { Component } from "react";
import { Link } from "gatsby";
import logo from "../assets/images/Flutter_Devcamp-logos_transparent.png";
class NavOne extends Component {
  constructor() {
    super();
    this.state = {
      sticky: false
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);

    //Mobile Menu
    this.mobileMenu();

    //Search Toggle
  //  this.serachButton();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 70) {
      this.setState({
        sticky: true
      });
    } else if (window.scrollY < 70) {
      this.setState({
        sticky: false
      });
    }
  };

  mobileMenu = () => {
    //Mobile Menu Toggle
    let mainNavToggler = document.querySelector(".menu-toggler");
    let mainNav = document.querySelector(".main-navigation");

    mainNavToggler.addEventListener("click", function () {
      mainNav.style.display =
        mainNav.style.display !== "block" ? "block" : "none";
    });
  };

  // serachButton = () => {
  //   let searchToggle = document.querySelector(".search-toggle");
  //   let searchPopup = document.querySelector(".search-popup");
  //   let searchClose = document.querySelector(".cancel");
  //   let searchOverlay = document.querySelector(".search-overlay");

  //   searchToggle.addEventListener("click", function () {
  //     searchPopup.classList.add("active");
  //   });

  //   searchClose.addEventListener("click", function () {
  //     searchPopup.classList.remove("active");
  //   });

  //   searchOverlay.addEventListener("click", function () {
  //     searchPopup.classList.remove("active");
  //   });
  // };

  render() {
    return (
      <header className="site-header site-header__header-one ">
        <nav
          className={`navbar navbar-expand-lg navbar-light header-navigation stricky ${
            this.state.sticky ? "stricked-menu stricky-fixed" : ""
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
              <ul className=" navigation-box">
                <li className="current">
                  <Link to="/">Home</Link>
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
                </li>
                
                <li>
                  <a href="/workshops">Workshops</a>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/workshops">Workshops</Link>
                    </li>
                    <li>
                      <Link to="/workshop-details">Workshops Details</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/mentors">Mentors</Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/mentors">Mentors</Link>
                    </li>
                    <li>
                      <Link to="/mentor-details">Mentors Details</Link>
                    </li>
                    <li>
                      <Link to="/become-mentor">Become Mentor</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#none">About</a>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/about">Community Guidelines</Link>
                    </li>
                    <li>
                      <Link to="/gallery">Gallery</Link>
                    </li>
                   
                    <li>
                      <Link to="/faq">FAQ'S</Link>
                    </li>
                  </ul>
                </li>
                  
              </ul>
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
    );
  }
}

export default NavOne;
