import React from "react";
import ctabg1 from "../assets/images/cta-bg-1-1.jpg";
const CallToActionOne = () => {
  return (
    <section
      className="cta-one cta-one__home-one"
      style={{ backgroundImage: `url(${ctabg1})` }}
    >
      <div className="container">
        <h2 className="cta-one__title">
          Flutter Devcamp <br />
          Our mission is to extend <br />
          your knowledge base
        </h2>
        <div className="cta-one__btn-block">
          <a href="#none" className="thm-btn cta-one__btn">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToActionOne;
