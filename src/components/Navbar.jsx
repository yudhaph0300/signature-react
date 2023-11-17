import { Link } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";
import Spinner from "./Spinner";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faRightToBracket,
  faTableColumns,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const { loggedIn, checkingStatus, isAdmin } = useAuthStatus();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom py-3">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Signature
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-3">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link to="/furnitures" className="nav-link">
                Furnitures
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/readme" className="nav-link">
                Readme
              </Link>
            </li>
            <div className="line mx-3"></div>

            {checkingStatus ? (
              <Spinner />
            ) : (
              <>
                {loggedIn && !isAdmin && (
                  <>
                    <li className="nav-item me-3">
                      <Link
                        to="/profile"
                        className="btn btn-success btn-register-navbar"
                      >
                        <div className="d-flex align-items-center">
                          <FontAwesomeIcon icon={faUser} className="me-2" />
                          Profile
                        </div>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/cart"
                        className="btn btn-primary btn-register-navbar"
                      >
                        <div className="d-flex align-items-center">
                          <FontAwesomeIcon
                            icon={faCartShopping}
                            className="me-2"
                          />
                          Cart
                        </div>
                      </Link>
                    </li>
                  </>
                )}
                {loggedIn && isAdmin && (
                  <>
                    <li className="nav-item">
                      <Link
                        to="/admin"
                        className="btn btn-dark btn-login-navbar"
                      >
                        <div className="d-flex align-items-center">
                          <FontAwesomeIcon
                            icon={faTableColumns}
                            className="me-2"
                          />
                          Back to dashboard
                        </div>
                      </Link>
                    </li>
                  </>
                )}
                {!loggedIn && (
                  <>
                    <li className="nav-item me-3">
                      <Link
                        to="/login"
                        className="btn btn-primary btn-login-navbar"
                      >
                        <div className="d-flex align-items-center">
                          <FontAwesomeIcon
                            icon={faRightToBracket}
                            className="me-2"
                          />
                          Login
                        </div>
                      </Link>
                    </li>
                  </>
                )}
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
