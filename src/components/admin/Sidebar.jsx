import { Link, useNavigate } from "react-router-dom";
import "./style/sidebar.css";
import { getAuth } from "firebase/auth";

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
        Dashboard
      </Link>
      <Link to="/admin/furniture" className="link">
        Furniture
      </Link>
      <Link to="/admin/settings" className="link">
        Settings
      </Link>
      <div className="link btn btn-link" onClick={onLogout}>
        Logout
      </div>
    </div>
  );
}

export default Sidebar;
