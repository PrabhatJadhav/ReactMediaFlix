import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="container-fluid pt-2 fs-5 bg-black border-btm">
        <div className="row nav-shadow">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <Link className="navbar-brand fs-2" to="/home">
                  MediaFlix
                </Link>
                <button
                  className="navbar-toggler btn-dark"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon navbar-rotate color-crimson">
                    |||
                  </span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link dropdown-toggle"
                        to="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Watch Now!
                      </Link>
                      <ul
                        className="dropdown-menu p-0 border-0"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                          <Link
                            className="dropdown-item color-crimson bg-black text-center"
                            to="/movies"
                          >
                            Movies
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item color-crimson bg-black  text-center"
                            to="/shows"
                          >
                            Shows
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/kids">
                        For Kids
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/contact">
                        Contact Us
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/about">
                        About
                      </Link>
                    </li>
                    <button type="button" className="btn btn-signin">
                      Sign In
                    </button>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

// const [signInButton, setButtonPopUp] = useState(false);
