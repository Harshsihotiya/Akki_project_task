// Header.jsx

import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">

      

      <div className="container-fluid px-4">

        {/* LOGO */}

        <Link
          className="navbar-brand text-white logo-text"
          to="/"
        >
          Adhishrihaan
        </Link>

        {/* TOGGLER */}

        <button
          className="navbar-toggler bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* NAVBAR */}

        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">

            {/* HOME */}

            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                HOME
              </Link>
            </li>

            {/* ABOUT */}

            <li className="nav-item">
              <Link className="nav-link text-white" to="/about">
                ABOUT
              </Link>
            </li>

            {/* GRANT */}

            <li className="nav-item">
              <Link className="nav-link text-white" to="/grant">
                THE SHRIHAAN SAHYOG GRANT
              </Link>
            </li>

            {/* INITIATIVES */}

            <li className="nav-item">
              <Link className="nav-link text-white" to="/initiatives">
                INITIATIVES
              </Link>
            </li>

            {/* IMPACT */}

            <li className="nav-item">
              <Link className="nav-link text-white" to="/impact">
                OUR IMPACT
              </Link>
            </li>

            {/* EVENTS */}

            <li className="nav-item">
              <Link
                className="nav-link text-white d-flex align-items-center gap-1"
                to="/events"
              >
                EVENTS
                <FaChevronDown size={10} />
              </Link>
            </li>

            {/* NEWS & MEDIA */}

            <li className="nav-item">
              <Link className="nav-link text-white" to="/news-media">
                NEWS & MEDIA
              </Link>
            </li>

            {/* GET INVOLVED */}

            <li className="nav-item">
              <Link
                className="nav-link text-white d-flex align-items-center gap-1"
                to="/get-involved"
              >
                GET INVOLVED
                <FaChevronDown size={10} />
              </Link>
            </li>

          </ul>

        </div>

      </div>

    </nav>
  );
};

export default Header;