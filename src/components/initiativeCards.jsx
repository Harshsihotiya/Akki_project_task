// InitiativeCards.jsx

import React from "react";

const initiatives = [
  {
    id: 1,
    title: "Woman and Child Welfare",

    description:
      "Initiatives for the education, protection, and empowerment of women and children, safeguarding their rights and futures. This includes supporting NGOs that run safe homes, provide educational sponsorships, offer vocational training for women, and advocate for child rights.",

    care:
      "Providing safe havens and pathways to a brighter future for the most vulnerable, nurturing their potential with dignity.",

    image:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 2,
    title: "Healthcare",

    description:
      "Facilitating vital healthcare access, raising awareness about prevalent health issues, and implementing well-being programs, especially in rural and underserved communities. This includes supporting NGOs that provide mobile clinics, health camps, sanitation drives, and crucial mental health awareness initiatives.",

    care:
      "Bringing healing and awareness to every doorstep, fostering healthier communities through compassionate care.",

    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 3,
    title: "Education",

    description:
      "Promoting quality education opportunities for underprivileged children and youth through scholarships, digital literacy programs, school support, and skill development workshops.",

    care:
      "Empowering young minds with knowledge and confidence for a brighter tomorrow.",

    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 4,
    title: "Environmental Sustainability",

    description:
      "Supporting initiatives focused on tree plantation, waste management, water conservation, and climate awareness to build greener and healthier communities.",

    care:
      "Protecting nature today for a sustainable and thriving tomorrow.",

    image:
      "https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 5,
    title: "Animal Welfare",

    description:
      "Supporting rescue shelters, awareness drives, medical camps, and rehabilitation programs dedicated to the care and protection of animals.",

    care:
      "Creating a kinder world where every living being is treated with compassion.",

    image:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 6,
    title: "Rural Development",

    description:
      "Encouraging livelihood opportunities, infrastructure support, sanitation programs, and self-sustainability projects in rural communities.",

    care:
      "Strengthening villages through opportunity, dignity, and long-term growth.",

    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 7,
    title: "Community Empowerment",

    description:
      "Enabling communities through awareness campaigns, social support systems, youth leadership initiatives, and inclusive development projects.",

    care:
      "Building stronger communities through unity, empowerment, and hope.",

    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop",
  },
];

const InitiativeCards = () => {
  return (
    <section className="initiative-cards-section">

      <div className="initiative-cards-container">

        <p className="initiative-top-text">
          We prioritize supporting grassroots NGOs working tirelessly in
          critical social and environmental sectors across Punjab. Our
          commitment to care extends to every area of intervention:
        </p>

        {initiatives.map((item) => (
          <div className="initiative-card" key={item.id}>

            {/* LEFT CONTENT */}

            <div className="initiative-card-content">

              <h2>{item.title}</h2>

              <p>{item.description}</p>

              <h3>Care in Action:</h3>

              <h4>{item.care}</h4>

            </div>

            {/* RIGHT IMAGE */}

            <div className="initiative-card-image">

              <img src={item.image} alt={item.title} />

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default InitiativeCards;