const GrantSection = () => {
  return (
    <section className="grant-section">

      <div className="grant-container">

        {/* LEFT CONTENT */}

        <div className="grant-content">

          <h2>
            The Shrihaan Sahyog Grant
          </h2>

          <p>
            As a testament to our unwavering commitment to direct and impactful
            support, Adhishrihaan Foundation proudly offers the
            <strong> “Shrihaan Sahyog” Grant.</strong>
          </p>

          <p>
            This annual grant provides crucial, catalytic funding to 3–5
            carefully selected micro-NGOs that are undertaking powerful
            ground-level work but are often constrained by a lack of visibility
            or financial resources.
          </p>

          <button className="grant-btn">
            Know More
          </button>

        </div>

        {/* RIGHT IMAGE */}

        <div className="grant-image">

          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1400"
            alt="Grant"
          />

        </div>

      </div>

    </section>
  );
};

export default GrantSection;