import Carousel from "react-bootstrap/Carousel";
import ImpactSection from "./impactsection";
import WhatWeDo from "./Whatwedo";
import FocusAreas from "./FocusAreas";
import GrantSection from "./GrantSection";
import EventsSection from "./EventsSection";

const Hero = () => {
  return (
    <div>
    
    <section className="hero-section">

      <Carousel
        controls={true}
        indicators={false}
        interval={2000}
        pause={false}
        touch={true}
      >

        <Carousel.Item>
          <img
            className="d-block w-100 hero-image"
            src="https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1920"
            alt="slide1"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 hero-image"
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1920"
            alt="slide2"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 hero-image"
            src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1920"
            alt="slide3"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 hero-image"
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1920"
            alt="slide4"
          />
        </Carousel.Item>

      </Carousel>

      <div className="hero-overlay">

        <h1 className="hero-title">
          ENVIRONMENT
        </h1>

        <div className="hero-buttons">

          <button className="hero-btn">
            KNOW MORE
          </button>

          <button className="hero-btn">
            VOLUNTEER
          </button>

          <button className="hero-btn donate-btn">
            DONATE
          </button>

        </div>

      </div>

    </section>
    <ImpactSection />
    <WhatWeDo />
    <FocusAreas />
    <GrantSection />
    <EventsSection />
    

    </div>

    
  );
};

export default Hero;