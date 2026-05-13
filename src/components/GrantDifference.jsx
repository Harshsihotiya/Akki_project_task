// GrantDifference.jsx

import React from "react";

import {
  FaCoins,
  FaPersonChalkboard,
  FaHandsClapping,
  FaUpRightAndDownLeftFromCenter,
} from "react-icons/fa6";

const cardData = [
  {
    id: 1,
    icon: <FaCoins />,
    title: "Crucial Funding",
    description:
      "Providing the financial backbone for grassroots projects.",
  },

  {
    id: 2,
    icon: <FaPersonChalkboard />,
    title: "Capacity Building",
    description:
      "Enabling NGOs to invest in training and resources.",
  },

  {
    id: 3,
    icon: <FaHandsClapping />,
    title: "Visibility & Recognition",
    description:
      "Highlighting the impactful work of grant recipients.",
  },

  {
    id: 4,
    icon: <FaUpRightAndDownLeftFromCenter />,
    title: "Scalable Impact",
    description:
      "Helping organizations expand their reach and serve more lives.",
  },
];

const GrantDifference = () => {
  return (
    <section className="difference-section">

      <div className="difference-container">

        {/* HEADING */}

        <h2 className="difference-heading">
          How the Grant Makes a Difference
        </h2>

        {/* CARDS */}

        <div className="difference-cards">

          {cardData.map((card) => (
            <div className="difference-card" key={card.id}>

              <div className="difference-icon">
                {card.icon}
              </div>

              <h3>{card.title}</h3>

              <p>{card.description}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default GrantDifference;