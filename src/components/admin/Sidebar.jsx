import { Link, useNavigate } from "react-router-dom";
import "./style/sidebar.css";
import { getAuth } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTableColumns,
  faGear,
  faSignOut,
  faChair,
  faArrowRightArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ nav }) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const onLogout = () => {
    auth.signOut();
    navigate("/login");
  };
  return (
    <div className="sidebar">
      <h3 className="text-center text-white mb-4 mt-3 fw-bold">Signature</h3>
      <div className="border mb-3"></div>
      <Link
        to="/admin"
        className={`mb-1 link ${nav === "dashboard" && "active"}`}
      >
        <div className="d-flex align-items-center">
          <FontAwesomeIcon icon={faTableColumns} className="me-2" />
          Dashboard
        </div>
      </Link>
      <Link
        to="/admin/furniture"
        className={`mb-1 link ${nav === "furnitures" && "active"}`}
      >
        <div className="d-flex align-items-center">
          <FontAwesomeIcon icon={faChair} className="me-2" />
          Furnitures
        </div>
      </Link>
      <Link
        to="/admin/transactions"
        className={`mb-1 link ${nav === "transactions" && "active"}`}
      >
        <div className="d-flex align-items-center">
          <FontAwesomeIcon icon={faArrowRightArrowLeft} className="me-2" />
          Transactions
        </div>
      </Link>
      <Link
        to="/admin/settings"
        className={`mb-1 link ${nav === "settings" && "active"}`}
      >
        <div className="d-flex align-items-center">
          <FontAwesomeIcon icon={faGear} className="me-2" />
          Settings
        </div>
      </Link>
      <div className="logout btn btn-danger mx-3 mb-5" onClick={onLogout}>
        <FontAwesomeIcon icon={faSignOut} className="me-2" />
        Logout
      </div>
    </div>
  );
};

export default Sidebar;
