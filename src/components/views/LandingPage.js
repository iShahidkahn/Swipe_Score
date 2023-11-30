import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config } from "react-spring";
import HeroSection from "../pages/landing_page/HeroSection";
import AboutSection from "../pages/landing_page/AboutSection";
import TeamSection from "../pages/landing_page/TeamSection";
import HowitWork from "../pages/landing_page/HowitWork";
import HappyClients from "../pages/landing_page/HappyClients";
import ContactUs from "../pages/landing_page/ContactUs";


export default function LandingPage(props) {
  const table = props.cards.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(null);
  const [cards] = useState(table);

  useEffect(() => {
    setOffsetRadius(2);
    setShowArrows(false);
  }, []);


  return (
    <>
      <HeroSection />
      <AboutSection />
      {/* Carousel Slider Component ************************ */}
      <div className="slider-wrapper">
        <div className="row mb-5 justify-content-center">
          <div className="col-md-8 text-center">
            <h2
              className="section-title mb-3"
              data-aos="fade-up"
              data-aos-delay=""
            >
              Tinder
            </h2>
            <p className="lead" data-aos="fade-up" data-aos-delay={100}>
              orem ipsum dolor sit amet consectetur adipisicing elit. Minus minima neque tempora reiciendis.
            </p>
          </div>
        </div>
        <div className="carousel-wrapper">
          <Carousel
            showArrows={false}
            slides={cards}
            goToSlide={goToSlide}
            offsetRadius={offsetRadius}
            showNavigation={showArrows}
            animationConfig={config.gentle}
          />
        </div>
      </div>
      {/* Carousel Slider Component ************************ */}

      <TeamSection />
      <HowitWork />
      <HappyClients />
      <ContactUs />
    </>

  );
}
