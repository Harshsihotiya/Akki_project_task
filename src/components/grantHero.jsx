// GrantHero.jsx

import React from "react";
import GrantDifference from "./GrantDifference";

const GrantHero = () => {
  return (
    <div>
    <section className="grant-hero-section">

      {/* BACKGROUND IMAGE */}

      <img
        src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1600&auto=format&fit=crop"
        alt="Grant Hero"
        className="grant-hero-image"
      />

      {/* OVERLAY */}

      <div className="grant-hero-overlay">

        <div className="grant-hero-content">

          <h1>
            Nurturing Dreams, Fueling Impact:
            <br />
            The Shrihaan Sahyog Grant
          </h1>

        </div>

      </div>

    </section>
     <section className="trust-section">

      <div className="trust-container">

        <h2 className="trust-heading">
          The Shrihaan Sahyog Trust
        </h2>

        <p className="trust-text">
          As a testament to our unwavering commitment to direct and impactful
          support, Adhishrihaan Foundation proudly offers the
          <strong> “Shrihaan Sahyog” Grant.</strong>
          This annual grant provides crucial, catalytic funding to 3–5
          carefully selected micro-NGOs that are undertaking powerful
          ground-level work but are often constrained by a lack of visibility
          or financial resources.
        </p>

        <p className="trust-text">
          This initiative is thoughtfully designed to be a true catalyst,
          enabling these deserving organizations to scale their vital impact
          and reach even more beneficiaries. With every grant, we extend a
          helping hand, ensuring that genuine efforts to create change are not
          only recognized but also sustainably empowered to thrive.
        </p>

      </div>

    </section>
    <GrantDifference />
    </div>
  );
};

export default GrantHero;