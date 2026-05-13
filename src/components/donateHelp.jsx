// DonationHelp.jsx

import React from "react";
// import "./DonationHelp.css";

import {
  FaHeartPulse,
  FaHandsHoldingChild,
  FaPeopleGroup,
  FaPaw,
  FaPersonCane,
} from "react-icons/fa6";

const donationCards = [
  {
    id: 1,
    icon: <FaHeartPulse />,
    title: "Health",
    text: "Provides crucial funding for health camps and medical supplies.",
  },

  {
    id: 2,
    icon: <FaHandsHoldingChild />,
    title: "Education",
    text: "Supports educational resources and after-school programs.",
  },

  {
    id: 3,
    icon: <FaPeopleGroup />,
    title: "Women and Child Welfare",
    text: "Enables vocational training for women and youth.",
  },

  {
    id: 4,
    icon: <FaPaw />,
    title: "Animal Welfare",
    text: "Contributes to animal rescue and care.",
  },

  {
    id: 5,
    icon: <FaPersonCane />,
    title: "Elderly Care",
    text: "Supports dignity and care for the elderly.",
  },
];

const DonationHelp = () => {
  return (
    <section className="donation-help-section">

      <div className="donation-help-container">

        {/* HEADING */}

        <h1 className="donation-help-heading">
          How Your Donation Helps
        </h1>

        {/* CARDS */}

        <div className="donation-help-cards">

          {donationCards.map((card) => (
            <div className="donation-help-card" key={card.id}>

              <div className="donation-help-icon">
                {card.icon}
              </div>

              <h2>{card.title}</h2>

              <p>{card.text}</p>

            </div>
          ))}

        </div>

        {/* BUTTONS */}

        <div className="donation-help-buttons">

          <button>Donate Now</button>

          <button>Become a Monthly Donor</button>

        </div>

      </div>

    </section>
  );
};

export default DonationHelp;