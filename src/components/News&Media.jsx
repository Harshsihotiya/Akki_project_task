// NewsHero.jsx

import React from "react";
// import "./NewsHero.css";

const NewsHero = () => {
  return (
    <>
    <section className="news-hero-section">

      {/* BACKGROUND IMAGE */}

      <img
        src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop"
        alt="News Hero"
        className="news-hero-image"
      />

      {/* OVERLAY */}

      <div className="news-hero-overlay">

        <div className="news-hero-content">

          <h1>
            Adhishrihaan Foundation
            <br />
            in the News
          </h1>

        </div>

      </div>

    </section>

     <section className="news-media-section">

      <div className="news-media-container">

        {/* HEADING */}

        <h2 className="news-media-heading">
          News & Media
        </h2>

        {/* DESCRIPTION */}

        <p className="news-media-text">
          Stay informed about the latest initiatives, impact stories, and
          milestones from Adhishrihaan Foundation and our incredible
          grassroots partners. This section provides a glimpse into our
          efforts to amplify voices, foster change, and build a narrative
          of compassion and progress.
        </p>

        {/* COMING SOON */}

        <div className="coming-soon-wrapper">

          <h3>Coming Soon</h3>

          <button>
            Back to Home
          </button>

        </div>

      </div>

    </section>
    </>
  );
};

export default NewsHero;