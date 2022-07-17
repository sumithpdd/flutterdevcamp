import React from "react";
import circleStripe from "../assets/images/circle-stripe.png";
import category1 from "../assets/images/Workshop-category-1-1.png";
import category2 from "../assets/images/Workshop-category-1-2.png";
import category3 from "../assets/images/Workshop-category-1-3.png";
import category4 from "../assets/images/Workshop-category-1-4.png";
const WorkshopCatThree = () => {
  return (
    <section className="workshop-category-three">
      <img
        src={circleStripe}
        className="workshop-category-three__circle"
        alt=""
      />
      <div className="container">
        <div className="block-title">
          <h2 className="block-title__title">
            Browse online <br />
            Workshop categories
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="workshop-category-three__single">
              <img src={category1} alt="" />
              <div className="workshop-category-three__content">
                <h3 className="workshop-category-three__title">
                  <a href="#none">IT & Software </a>
                </h3>
                <p className="workshop-category-three__text">Over 752 Workshops</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="workshop-category-three__single">
              <img src={category2} alt="" />
              <div className="workshop-category-three__content">
                <h3 className="workshop-category-three__title">
                  <a href="#none">Development </a>
                </h3>
                <p className="workshop-category-three__text">Over 752 Workshops</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="workshop-category-three__single">
              <img src={category3} alt="" />
              <div className="workshop-category-three__content">
                <h3 className="workshop-category-three__title">
                  <a href="#none">Photography</a>
                </h3>
                <p className="workshop-category-three__text">Over 752 Workshops</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="workshop-category-three__single">
              <img src={category4} alt="" />
              <div className="workshop-category-three__content">
                <h3 className="workshop-category-three__title">
                  <a href="#none">Marketing</a>
                </h3>
                <p className="workshop-category-three__text">Over 752 Workshops</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <a href="#none" className="thm-btn Workshop-category-three__more-link">
            View All Categories
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkshopCatThree;
