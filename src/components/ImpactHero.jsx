// ImpactHero.jsx

import React from "react";
import ExploreImpact from "./ExploreImpact";

const ImpactHero = () => {
  return (
    <div>
    <section className="impact-hero-section">

      {/* BACKGROUND IMAGE */}

      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop"
        alt="Impact"
        className="impact-hero-image"
      />

      {/* OVERLAY */}

      <div className="impact-overlay">

        <div className="impact-content">

          <h1>
            Witness the Change
            <br />
            Real Stories, Real Impact
          </h1>

        </div>

      </div>

    </section>
      <section className="our-impact-section">

      <div className="our-impact-container">

        <h2 className="our-impact-heading">
          Our Impact
        </h2>

        <p className="our-impact-text">
          At Adhishrihaan Foundation, our work is defined by the profound
          transformations we enable through our dedicated grassroots partners.
          We believe in the power of every story, every life touched, and every
          community uplifted. Here, you can witness the tangible outcomes of our
          collective ‘Seva’ and feel the ripple effect of care.
        </p>

        <p className="our-impact-text">
          We amplify the voices of the silent warriors – the individuals and
          communities benefiting from the tireless efforts of our supported
          NGOs. From a child accessing quality education for the first time,
          to a woman gaining vocational skills that ensure her family’s
          livelihood, or an animal rescued and rehabilitated, these are the
          true reflections of our mission in action.
        </p>

      </div>

    </section>
    <ExploreImpact />
    </div>
  );
};

export default ImpactHero;