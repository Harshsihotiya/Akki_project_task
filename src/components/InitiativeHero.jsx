// InitiativeHero.jsx

import React from "react";
import InitiativeCards from "./initiativeCards";

const InitiativeHero = () => {
  return (
    <div>
    <section className="initiative-hero-section">

      {/* BACKGROUND IMAGE */}

      <img
        src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=1600&auto=format&fit=crop"
        alt="Initiatives"
        className="initiative-hero-image"
      />

      {/* OVERLAY */}

      <div className="initiative-overlay">

        <div className="initiative-content">

          <h1>Our Initiatives</h1>

        </div>

      </div>

    </section>
    <InitiativeCards />
    </div>
  );
};

export default InitiativeHero;