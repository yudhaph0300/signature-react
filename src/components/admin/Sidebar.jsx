import { Link } from "react-router-dom";
import "./style/sidebar.css";

function Sidebar() {
  return (
    <div class="sidebar">
      <Link to="/admin" className="link">
        Dashboard
      </Link>
      <Link to="/admin/furniture" className="link">
        Furniture
      </Link>
      <Link to="/admin/settings" className="link">
        Settings
      </Link>
    </div>
  );
}

export default Sidebar;
