import React from "react";

const CallToActionTwo = () => {
  return (
    <div className="cta-two">
      <div className="container-fluid">
        <div className="row no-gutters">
          <div className="col-lg-6 thm-base-bg">
            <div className="cta-two__single">
              <div className="cta-two__icon">
                <span>
                  <i className="Flutter DevCamp |-icon-professor"></i>
                </span>
              </div>
              <div className="cta-two__content">
                <h2 className="cta-two__title">Become an mentor</h2>
                <p className="cta-two__text">
                  There are many variations of passages of lore available but{" "}
                  <br /> the majority have suffered alteration in some form.
                </p>
                <a href="https://docs.google.com/forms/d/1OvAHbrlW7Dxp_lbqrororZ9XCa7VeixrDcUTlxTs20o" className="thm-btn cta-two__btn">
                  Mentor Signup
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 thm-base-bg-2">
            <div className="cta-two__single">
              <div className="cta-two__icon">
                <span>
                  <i className="Flutter DevCamp |-icon-knowledge"></i>
                </span>
              </div>
              <div className="cta-two__content">
                <h2 className="cta-two__title">Join our community</h2>
                <p className="cta-two__text">
                  Love Flutter 💙{" "}
                  <br /> Join our community to learn and buila a career you love.
                  Code meaningful applications from scratch by becoming a Flutter Developer.
                </p>
                <a href="https://docs.google.com/forms/d/1GSGRXNdGAA2dEKECRlVmB5Px9f1M-iyg6an9vgv-1lE" className="thm-btn cta-two__btn">
                  Start Learning
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionTwo;
