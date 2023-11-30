import React from 'react'

const HeroSection = () => {
  return (
    <div
      className="site-blocks-cover overlay"
      style={{ backgroundImage: "url(images/hero_2.jpg)" }}
      data-aos="fade"
      id="home-section"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-10 mt-lg-5 text-center">
            <div className="single-text owl-carousel">
              <div className="slide">
                <h1 className="text-uppercase" data-aos="fade-up">
                  Some heading
                </h1>
                <p className="mb-5 desc" data-aos="fade-up" data-aos-delay={100}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae minima delectus accusamus accusantium deleniti
                  libero excepturi porro illo.
                </p>
                <div data-aos="fade-up" data-aos-delay={100}>
                  <a
                    href="#/"
                    target="_blank"
                    className="btn  btn-primary mr-2 mb-2"
                  >
                    Get In Touch
                  </a>
                </div>
              </div>
              <div className="slide">
                <h1 className="text-uppercase" data-aos="fade-up">
                  Another Heading
                </h1>
                <p className="mb-5 desc" data-aos="fade-up" data-aos-delay={100}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae minima delectus accusamus accusantium deleniti
                  libero excepturi porro illo.
                </p>
                <div data-aos="fade-up" data-aos-delay={100}>
                  <a
                    href="#/"
                    target="_blank"
                    className="btn  btn-primary mr-2 mb-2"
                  >
                    Get In Touch
                  </a>
                </div>
              </div>
              <div className="slide">
                <h1 className="text-uppercase" data-aos="fade-up">
                  Heading              
                  </h1>
                <p className="mb-5 desc" data-aos="fade-up" data-aos-delay={100}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae minima delectus accusamus accusantium deleniti
                  libero excepturi porro illo.
                </p>
                <div data-aos="fade-up" data-aos-delay={100}>
                  <a
                    href="#/"
                    className="btn  btn-primary mr-2 mb-2"
                  >
                    Get In Touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="#next" className="mouse smoothscroll">
        <span className="mouse-icon">
          <span className="mouse-wheel" />
        </span>
      </a>
    </div>
  )
}

export default HeroSection