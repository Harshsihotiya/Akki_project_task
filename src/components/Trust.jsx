// GrantSection.jsx

import React from "react";
// import "./GrantSection.css";
import {
  FaCoins,
  FaPersonChalkboard,
  FaHandsClapping,
  FaUpRightAndDownLeftFromCenter,
} from "react-icons/fa6";

const grantData = [
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

const GrantCard = ({ icon, title, description }) => {
  return (
    <div className="grant-card">
      <div className="grant-icon">{icon}</div>

      <h3>{title}</h3>

      <p>{description}</p>
    </div>
  );
};

const GrantSection = () => {
  return (
    <section className="grant-section">

      <div className="grant-container">

        {/* TOP CONTENT */}

        <div className="grant-top-content">

          <h1>The Shrihaan Sahyog Trust</h1>

          <p>
            As a testament to our unwavering commitment to direct and impactful
            support, Adhishrihaan Foundation proudly offers the
            <strong> “Shrihaan Sahyog” Grant.</strong>
            This annual grant provides crucial, catalytic funding to 3–5
            carefully selected micro-NGOs that are undertaking powerful
            ground-level work but are often constrained by a lack of visibility
            or financial resources.
          </p>

          <p>
            This initiative is thoughtfully designed to be a true catalyst,
            enabling these deserving organizations to scale their vital impact
            and reach even more beneficiaries. With every grant, we extend a
            helping hand, ensuring that genuine efforts to create change are not
            only recognized but also sustainably empowered to thrive.
          </p>

        </div>

        {/* HEADING */}

        <div className="grant-heading">
          <h2>How the Grant Makes a Difference</h2>
        </div>

        {/* CARDS */}

        <div className="grant-card-wrapper">

          {grantData.map((item) => (
            <GrantCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default GrantSection;