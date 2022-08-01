import React from 'react';

const BecomeMentor = () => {
    return (
        <section className="become-mentor">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="become-mentor__content">
                            <h2 className="become-mentor__title">Mentoring benefits</h2>
                            <p className="become-mentor__text">Lorem Ipsum is simply dummy text of the printing and
                                type industry.
                                Lorem Ipsum has been the standard dummy text ever since the when an unknown was
                                popularised. It
                                has survived not only five centuries, but also the leap into electronic typesetting
                                remaining
                                unchanged.</p>
                            <h2 className="become-mentor__subtitle">Health and
                                Pension</h2>
                            <p className="become-mentor__text">Lorem Ipsum has been the standard dummy text ever since
                                the when an
                                unknown was popularised. It has survived not only five centuries. but also the leap into
                                electronic typesetting remaining unchanged.</p>
                            <h2 className="become-mentor__subtitle">Vacation
                                Time</h2>
                            <p className="become-mentor__text">Lorem Ipsum has been the standard dummy text ever since
                                the when an
                                unknown was popularised. It has survived not only five centuries. but also the leap into
                                electronic typesetting remaining unchanged.</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="become-mentor__form">
                            <div className="become-mentor__form-top">
                                <h2 className="become-mentor__form-title">
                                    Apply for Mentoring
                                </h2>
                            </div>
                            <form action="#"
                                  className="become-mentor__form-content contact-form-validated"
                                  noValidate="novalidate">
                                <input type="text" placeholder="Your Name" name="name" />
                                <input type="text" placeholder="Email Address" name="email" />
                                <input type="text" placeholder="Phone Number" name="phone" />
                                <input type="text" placeholder="Comment" name="message" />
                                <button type="submit" className="thm-btn become-mentor__form-btn">Apply
                                    For It
                                </button>
                            </form>
                            <div className="result text-center"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BecomeMentor;
