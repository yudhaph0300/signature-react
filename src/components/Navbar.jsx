import { Link } from "react-router-dom";
import useAuth from "../auth";

function Navbar() {
  const { user, logout } = useAuth();

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

            {user ? (
              <>
                <li className="nav-item me-3">
                  <Link
                    to="/profile"
                    className="btn btn-success btn-register-navbar"
                  >
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-danger btn-register-navbar"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item me-3">
                  <Link
                    to="/login"
                    className="btn btn-outline-primary btn-login-navbar"
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/register"
                    className="btn btn-primary btn-register-navbar"
                  >
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
