// App.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

/* HOME */

import Hero from "./components/Hero";

/* ABOUT */

import About from "./components/About";

/* GRANT */

import GrantHero from "./components/grantHero";
import GrantSection from "./components/GrantSection";
import GrantDifference from "./components/GrantDifference";

/* INITIATIVES */

import InitiativeHero from "./components/InitiativeHero";
import InitiativeCards from "./components/initiativeCards";

/* IMPACT */

import ImpactHero from "./components/ImpactHero";
import OurImpact from "./components/impactsection";
import ExploreImpact from "./components/ExploreImpact";

/* EVENTS */

import EventsSection from "./components/EventsSection";

/* NEWS & MEDIA */

import NewsHero from "./components/News&Media";
import NewsMediaSection from "./components/Whatwedo";

/* GET INVOLVED */

import GetInvolvedHero from "./components/GetInvolved";
import CompassionSection from "./components/Trust";
import DonationHelp from "./components/donateHelp";

function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>

        {/* HOME */}

        <Route
          path="/"
          element={
            <>
              <Hero />
            </>
          }
        />

        {/* ABOUT */}

        <Route
          path="/about"
          element={
            <>
              <About />
            </>
          }
        />

        {/* THE SHRIHAAN SAHYOG GRANT */}

        <Route
          path="/grant"
          element={
            <>
              <GrantHero />
              <GrantSection />
              <GrantDifference />
            </>
          }
        />

        {/* INITIATIVES */}

        <Route
          path="/initiatives"
          element={
            <>
              <InitiativeHero />
              <InitiativeCards />
            </>
          }
        />

        {/* OUR IMPACT */}

        <Route
          path="/impact"
          element={
            <>
              <ImpactHero />
              <OurImpact />
              <ExploreImpact />
            </>
          }
        />

        {/* EVENTS */}

        <Route
          path="/events"
          element={
            <>
              <EventsSection />
            </>
          }
        />

        {/* NEWS & MEDIA */}

        <Route
          path="/news-media"
          element={
            <>
              <NewsHero />
              <NewsMediaSection />
            </>
          }
        />

        {/* GET INVOLVED */}

        <Route
          path="/get-involved"
          element={
            <>
              <GetInvolvedHero />
              <CompassionSection />
              <DonationHelp />
            </>
          }
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;