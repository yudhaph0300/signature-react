import { Link, useNavigate } from "react-router-dom";
import "./style/sidebar.css";
import { getAuth } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTableColumns,
  faGear,
  faSignOut,
  faChair,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  const auth = getAuth();
  const navigate = useNavigate();
  const onLogout = () => {
    auth.signOut();
    navigate("/login");
  };
  return (
    <div className="sidebar">
      <Link to="/admin" className="link">
        <div className="d-flex align-items-center">
          <FontAwesomeIcon icon={faTableColumns} className="me-2" />
          Dashboard
        </div>
      </Link>
      <Link to="/admin/furniture" className="link">
        <div className="d-flex align-items-center">
          <FontAwesomeIcon icon={faChair} className="me-2" />
          Furniture
        </div>
      </Link>
      <Link to="/admin/settings" className="link">
        <FontAwesomeIcon icon={faGear} className="me-2" />
        Settings
      </Link>
      <div className="link btn btn-link" onClick={onLogout}>
        <FontAwesomeIcon icon={faSignOut} className="me-2" />
        Logout
      </div>
    </div>
  );
}

export default Sidebar;
