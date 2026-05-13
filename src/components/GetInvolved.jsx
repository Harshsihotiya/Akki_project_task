// GetInvolvedHero.jsx

import React from "react";
import DonationHelp from "./donateHelp";
// import "./GetInvolvedHero.css";

const GetInvolvedHero = () => {
  return (
    <>
    <section className="getinvolved-hero-section">

      {/* BACKGROUND IMAGE */}

      <img
        src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1600&auto=format&fit=crop"
        alt="Get Involved"
        className="getinvolved-hero-image"
      />

      {/* OVERLAY */}

      <div className="getinvolved-overlay">

        <div className="getinvolved-content">

          <h1>Get Involved</h1>

        </div>

      </div>

    </section>

     <section className="compassion-section">

      <div className="compassion-container">

        {/* HEADING */}

        <h1 className="compassion-heading">
          Your Compassion, Our Collective Strength:
          Join the Journey of Seva!
        </h1>

        {/* TEXT */}

        <p className="compassion-text">
          Every act of kindness, every contribution, and every hour of
          dedication fuels the vital work of grassroots changemakers across
          Punjab. Adhishrihaan Foundation offers multiple pathways for you
          to become a cherished part of our mission and directly contribute
          to sustainable social impact. Your involvement helps us nurture
          initiatives with unparalleled care.
        </p>

        {/* SUB HEADING */}

        <h2 className="compassion-subheading">
          Donate: Fuelling Transformation
        </h2>

        <p className="compassion-text">
          Your financial support directly empowers our partner NGOs to
          continue their critical work on the ground. Every rupee you
          contribute helps us provide vital resources, expand programs,
          and reach more lives in need, ensuring our ‘Shrihaan Sahyog’
          Grant can continue its crucial mission.
        </p>

        {/* CARE TEXT */}

        <p className="compassion-care">
          <span>Care in Action:</span>
          Your generosity is the lifeline that sustains ground-level
          efforts, ensuring help reaches where it’s needed most.
        </p>

      </div>

    </section>
    <DonationHelp/>
    </>

  );
};

export default GetInvolvedHero;