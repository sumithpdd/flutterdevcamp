import React, { Component } from "react";
import PropTypes from "prop-types"; 

import HeadshotPlaceholder from "../assets/images/headshot-placeholder.svg";

class WorkshopTemplate extends Component {
  render() {
    return (
      <section
        className={`workshop  ${this.props.className && this.props.className}`}
        key={this.props.workshop.rawDate}
      >
        <h2 className="workshop-title">{this.props.workshop.title}</h2>
        <div className="workshop-meta">
          <p className="workshop-metaField  workshop-metaField--date">
            <span className="workshop-label">Date:</span> {this.props.workshop.formattedDate}
          </p>
          <p className="workshop-metaField  workshop-metaField--location">
            <span className="workshop-label">Location:</span> {this.props.workshop.location.name}
          </p>
        </div>
        <div className="workshop-presenters">
          {this.props.workshop.presenters.map(presenter => (
            <div className="workshop-presenter" key={presenter.name}>
              <div className="workshop-presenterImageContainer">
                <img
                  className="workshop-presenterImage"
                  src={presenter.image ? presenter.image : HeadshotPlaceholder}
                  alt={presenter.image ? presenter.name : "Default headshot placeholder"}
                />
                <span className="workshop-presenterName">{presenter.name}</span>
              </div>
              <div className="workshop-presenterInfo">
                {presenter.presentationTitle && (
                  <h3 className="workshop-presenterTitle">{presenter.presentationTitle}</h3>
                )}
                <p className="workshop-presenterText">{presenter.text}</p>
                <ul className="workshop-presenterLinks">
                  {presenter.links &&
                    presenter.links.map((link, index) => (
                      <li key={index} className="workshop-presenterLinkItem">
                        <a className="workshop-presenterLink" href={link.linkURL}>
                          {link.linkText}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

WorkshopTemplate.propTypes = {
  workshop: PropTypes.shape({
    title: PropTypes.string,
    name: PropTypes.string,
    presenters: PropTypes.array,
  }),
};

export default WorkshopTemplate;
