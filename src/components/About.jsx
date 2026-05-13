const AboutHero = () => {
  return (
    <div>
    <section className="about-hero">

      <img
        src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1920"
        alt="About Banner"
        className="about-hero-image"
      />

      <div className="about-overlay">

        <h1>
          Our Inspiration & Ethos:
          <br />
          Rooted in Love, Rising Through Service
        </h1>

      </div>

    </section>
    <section className="about-content-section">

  <div className="about-content-container">

    <h2>
      About Adhishrihaan
    </h2>

    <p>
      Adhishrihaan Foundation is a philanthropic organization deeply committed
      to fostering profound and sustainable social change. We are inspired by
      the ancient Indian principle of ‘Seva Paramam Dharma’ (Service is the
      highest duty), embodying selfless service in every endeavour. Carrying
      forward a legacy of ‘Seva’ in Adhishrihaan’s cherished memory, our
      foundational ethos —
      <strong>
        “Rooted in Love, Rising through Service”
      </strong>
      — underscores our unwavering commitment to compassionate action and
      tangible, positive transformation.
    </p>

    <p>
      We are driven by “A Legacy of Compassion and Change,” striving to create
      lasting positive transformation within communities. Every initiative
      undertaken by the Foundation is imbued with the spirit of “Empowering
      Communities, Honouring Heritage,” ensuring our efforts not only uplift
      but also respectfully integrate with India’s rich cultural and spiritual
      fabric. Transparency, trust, collaboration, and inclusivity form the
      bedrock of our operations, fostering genuine partnerships built on mutual
      respect and shared goals.
    </p>

    <h2 className="purpose-heading">
      Our Purpose: The Backbone for Frontline Changemakers
    </h2>

    <p>
      In a landscape where genuine, on-the-ground impact often lacks scalable
      resources and visibility, Adhishrihaan Foundation steps in to bridge this
      critical gap. Our core purpose is to be the crucial backbone for
      smaller, purpose-driven Non-Governmental Organizations (NGOs) operating
      directly within communities, primarily across Punjab, India, and
      ultimately, across the nation.
    </p>

    <p>
      We firmly believe that strengthening those who empower others — the
      silent warriors making a real difference — is the most effective pathway
      to collective upliftment and a more compassionate society. We are the
      enablers behind the frontline changemakers, ensuring their dedicated
      efforts can flourish and reach more lives with profound care at every
      step.
    </p>

  </div>

</section>
<section className="vision-mission-section">

  <div className="vision-mission-container">

    {/* VISION CARD */}

    <div className="vision-card">

      <h2>Our Vision</h2>

      <p>
        To be the unwavering backbone support system for smaller grassroots
        NGOs across the state of Punjab and beyond, fostering a vibrant
        ecosystem of empowered changemakers that collectively drive profound,
        sustainable social impact for generations to come.
      </p>

    </div>

    {/* MISSION CARD */}

    <div className="mission-card">

      <h2>Our Mission</h2>

      <p>
        To nurture and uplift grassroots changemakers in Punjab by offering
        them strength, support, and visibility, diligently carrying forward a
        legacy of 'Seva' in Adhishrihaan’s name, ensuring no genuine effort is
        left unheard or unsupported.
      </p>

    </div>

  </div>

</section>
    </div>

  );
};

export default AboutHero;