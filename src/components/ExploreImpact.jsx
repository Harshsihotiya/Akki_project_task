// ExploreImpact.jsx

import React from "react";

const impactCards = [
  {
    id: 1,
    title: "Beneficiary Stories",

    description:
      "Hear directly from individuals whose lives have been transformed",

    button: "Read More",
  },

  {
    id: 2,
    title: "Project Spotlight",

    description:
      "Deep dives into specific initiatives our partner NGOs are undertaking, highlighting challenges and successes.",

    button: "Read More",
  },

  {
    id: 3,
    title: "Impact Reports",

    description:
      "Transparent summaries of our collective achievements, data-driven insights into our reach and outcomes.",

    button: "Read More",
  },

  {
    id: 4,
    title: "Photo & Video Galleries",

    description:
      "Visual journeys showcasing the dedication of our partners and the vibrant communities they serve",

    button: "Read More",
  },
];

const ExploreImpact = () => {
  return (
    <section className="explore-impact-section">

      <div className="explore-impact-container">

        {/* HEADING */}

        <h2 className="explore-impact-heading">
          Explore Our Impact Through
        </h2>

        {/* CARDS */}

        <div className="explore-impact-cards">

          {impactCards.map((card) => (
            <div className="explore-impact-card" key={card.id}>

              <h3>{card.title}</h3>

              <p>{card.description}</p>

              <button>{card.button}</button>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default ExploreImpact;