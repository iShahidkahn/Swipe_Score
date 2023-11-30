import React from 'react'

const HowitWork = () => {
    return (
        <section className="site-section">
            <div className="container">
                <div className="row mb-5 justify-content-center">
                    <div className="col-md-7 text-center">
                        <h2
                            className="section-title mb-3"
                            data-aos="fade-up"
                            data-aos-delay=""
                        >
                            How It Works
                        </h2>
                        <p className="lead" data-aos="fade-up" data-aos-delay={100}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
                            fugiat molestiae eligendi repudiandae error?
                        </p>
                    </div>
                </div>
                <div className="row align-items-lg-center">
                    <div className="col-lg-6 mb-5" data-aos="fade-up" data-aos-delay="">
                        <div className="owl-carousel slide-one-item-alt">
                            <img src="images/img_1.jpg" alt="" className="img-fluid" />
                            <img src="images/img_2.jpg" alt="" className="img-fluid" />
                            <img src="images/img_3.jpg" alt="" className="img-fluid" />
                        </div>
                        <div className="custom-direction">
                            <a href="#/" className="custom-prev">
                                <img width="24" height="24" src="/images/left.png" style={{ color: "white" }} alt="arrow" />
                            </a>
                            <a href="#/" className="custom-next">
                                <img width="24" height="24" src="/images/next.png" style={{ color: "white" }} alt="arrow" />
                            </a>
                        </div>
                    </div>
                    <div
                        className="col-lg-5 ml-auto"
                        data-aos="fade-up"
                        data-aos-delay={100}
                    >
                        <div className="owl-carousel slide-one-item-alt-text">
                            <div>
                                <h2 className="section-title mb-3">01. Heading</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                                    nisi, deserunt necessitatibus odio magnam nihil illum neque
                                    voluptas?
                                </p>
                                <p>
                                    <a href="#/" className="btn btn-primary mr-2 mb-2">
                                        Learn More
                                    </a>
                                </p>
                            </div>
                            <div>
                                <h2 className="section-title mb-3">02. Heading</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                                    nisi, deserunt necessitatibus odio magnam nihil illum neque
                                    voluptas?
                                </p>
                                <p>
                                    <a href="#/" className="btn btn-primary mr-2 mb-2">
                                        Learn More
                                    </a>
                                </p>
                            </div>
                            <div>
                                <h2 className="section-title mb-3">03. Heading</h2>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Inventore sapiente labore eius ullam? Iusto?
                                </p>
                                <p>
                                    <a href="#/" className="btn btn-primary mr-2 mb-2">
                                        Learn More
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    )
}

export default HowitWork