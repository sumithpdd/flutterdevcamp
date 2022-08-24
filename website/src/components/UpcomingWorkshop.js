import React from 'react'


import lcImage1 from '../assets/images/lc-1-1.jpg'
import lcImage2 from '../assets/images/lc-1-2.jpg'
import lcImage3 from '../assets/images/lc-1-3.jpg'

const UpcomingWorkshops = () => {
  return (
    <div className="workshop-details__list">
      <h2 className="workshop-details__list-title">Upcoming Workshops</h2>
      <div className="workshop-details__list-item">
        <div className="workshop-details__list-img">
          <img src={lcImage1} alt="" />
        </div>
        <div className="workshop-details__list-content">
          <a className="workshop-details__list-author" href="#none">
            by <span>Lydia Byrd</span>
          </a>
          <h3>
            <a href="#none">Marketing strategies</a>
          </h3>
          <div className="workshop-details__list-stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <span>4.8</span>
          </div>
        </div>
      </div>
      <div className="workshop-details__list-item">
        <div className="workshop-details__list-img">
          <img src={lcImage2} alt="" />
        </div>
        <div className="workshop-details__list-content">
          <a className="workshop-details__list-author" href="#none">
            by <span>Lydia Byrd</span>
          </a>
          <h3>
            <a href="#none">Marketing strategies</a>
          </h3>
          <div className="workshop-details__list-stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <span>4.8</span>
          </div>
        </div>
      </div>
      <div className="workshop-details__list-item">
        <div className="workshop-details__list-img">
          <img src={lcImage3} alt="" />
        </div>
        <div className="workshop-details__list-content">
          <a className="workshop-details__list-author" href="#none">
            by <span>Lydia Byrd</span>
          </a>
          <h3>
            <a href="#none">Marketing strategies</a>
          </h3>
          <div className="workshop-details__list-stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <span>4.8</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWorkshops
