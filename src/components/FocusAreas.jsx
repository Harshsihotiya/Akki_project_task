const focusData = [
  {
    title: "Woman and Child Welfare",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200",
    large: true,
  },
  {
    title: "Education",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200",
  },
  {
    title: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1200",
  },
  {
    title: "Skill Development",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200",
  },
  {
    title: "Animal Welfare",
    image:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200",
  },
  {
    title: "Elderly Care",
    image:
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=1200",
  },
  {
    title: "Environment",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1200",
  },
];

const FocusAreas = () => {
  return (
    <section className="focus-section">

      <div className="focus-heading">

        <h1>OUR FOCUS AREAS</h1>

        <h3>TOUCHING LIVES WITH COMPASSION</h3>

      </div>

      <div className="focus-grid">

        {focusData.map((item, index) => (
          <div
            key={index}
            className={`focus-card ${item.large ? "large-card" : ""}`}
          >

            <img src={item.image} alt={item.title} />

            <div className="focus-overlay">

              <h2>{item.title}</h2>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default FocusAreas;