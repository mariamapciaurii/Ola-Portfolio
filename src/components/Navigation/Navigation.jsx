import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);


  const trackScreenWidth = () => {
    const width = window.innerWidth;
    setScreenWidth(width);
    if (width > 800) {
      setOpen(true);
    }
  };

  const handleClose = () => {
    if (screenWidth < 800) {
      setOpen(false);
    }
  };

  useEffect(() => {
    trackScreenWidth();
    window.addEventListener("resize", trackScreenWidth);
    return () => window.removeEventListener("resize", trackScreenWidth);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        <div className="logo">
        </div>
        <div className="list-wrapper">

          <ul style={{ left: open ? "0" : "-100vw" }}>
              
            <li>
              <Link
                to="/"
                onClick={handleClose}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                onClick={handleClose}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/projects"
                onClick={handleClose}
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                onClick={handleClose}
              >
                Contact
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;