import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  MapPin,
} from "lucide-react";

const eventsData = [
  {
    title: "Guardians of all Voiceless – Cat Shelter Foundation Stone",
    date: "01-09-2025",
    location: "Patiala",
    category1: "Past Events",
    category2: "Animal Welfare",
    description:
      "In India, millions of street animals face challenges like lack of shelter, medical care, and compassion. Animal welfare remains a critical concern in urban and rural areas...",
    image:
      "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?q=80&w=1400",
  },

  {
    title: "Empowering Education Through Rural Workshops",
    date: "12-08-2025",
    location: "Delhi",
    category1: "Upcoming Events",
    category2: "Education",
    description:
      "Educational workshops focused on digital literacy and child development continue to create meaningful opportunities for rural communities...",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1400",
  },

  {
    title: "Healthcare Support and Awareness Drive",
    date: "18-07-2025",
    location: "Punjab",
    category1: "Past Events",
    category2: "Healthcare",
    description:
      "Community healthcare initiatives are helping underserved regions access medical support, awareness programs, and preventive healthcare solutions...",
    image:
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1400",
  },

  {
    title: "Environment Protection Plantation Campaign",
    date: "24-06-2025",
    location: "Chandigarh",
    category1: "Past Events",
    category2: "Environment",
    description:
      "Our plantation and sustainability campaigns aim to create greener communities while spreading awareness about environmental conservation...",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1400",
  },
];

const EventsSection = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) =>
      prev === eventsData.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? eventsData.length - 1 : prev - 1
    );
  };

  const current = eventsData[activeIndex];

  return (
    <section className="events-section">

      {/* HEADING */}

      <div className="events-heading">

        <h1>Our Events</h1>

        <h3>What’s Next & What’s Been</h3>

        <div className="events-tabs">

          <button className="tab-btn active-tab">
            Past Events
          </button>

          <button className="tab-btn">
            Upcoming Events
          </button>

        </div>

      </div>

      {/* CARD */}

      <div className="events-wrapper">

        {/* LEFT ARROW */}

        <button className="arrow-btn left-arrow" onClick={prevSlide}>
          <ChevronLeft size={22} />
        </button>

        {/* EVENT CARD */}

        <div className="event-card">

          <div className="event-image">

            <img src={current.image} alt={current.title} />

          </div>

          <div className="event-content">

            <h2>{current.title}</h2>

            <div className="event-meta">

              <div className="meta-box">
                <Calendar size={16} />
                <span>{current.date}</span>
              </div>

              <div className="meta-box">
                <MapPin size={16} />
                <span>{current.location}</span>
              </div>

            </div>

            <div className="event-tags">

              <span className="tag blue-tag">
                {current.category1}
              </span>

              <span className="tag green-tag">
                {current.category2}
              </span>

            </div>

            <p>{current.description}</p>

            <button className="read-btn">
              Read More
            </button>

          </div>

        </div>

        {/* RIGHT ARROW */}

        <button className="arrow-btn right-arrow" onClick={nextSlide}>
          <ChevronRight size={22} />
        </button>

        {/* DOTS */}

        <div className="events-dots">

          {eventsData.map((_, index) => (
            <button
              key={index}
              className={`dot ${
                activeIndex === index ? "active-dot" : ""
              }`}
              onClick={() => setActiveIndex(index)}
            ></button>
          ))}

        </div>

      </div>

    </section>
  );
};

export default EventsSection;