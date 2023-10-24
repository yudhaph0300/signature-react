import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Readme = () => {
  return (
    <>
      <Navbar />

      <div className="container my-5">
        <div className="card p-4 mb-4" style={{ border: "0" }}>
          <div className="card-body">
            <h4 className="card-title fw-bold">Pages</h4>
            <p className="fw-bold">Admin: </p>
            <ol>
              <li>
                <Link to="/admin">/admin</Link>
              </li>
              <li>
                <Link to="/admin/furniture">/admin/furniture</Link>
              </li>
              <li>
                <Link to="/admin/settings">/admin/settings</Link>
              </li>
            </ol>
            <p className="fw-bold">User: </p>
            <ol>
              <li>
                <Link to="/">/</Link>
              </li>
              <li>
                <Link to="/about">/about</Link>
              </li>
              <li>
                <Link to="furnitures">furnitures</Link>
              </li>
            </ol>
          </div>
        </div>

        <div className="card p-4 mb-4" style={{ border: "0" }}>
          <div className="card-body">
            <h4 className="card-title fw-bold">Functionality</h4>
            <p className="fw-bold">Admin: </p>
            <ol>
              <li>Create Furniture Data</li>
              <li>Read Furniture Data</li>
              <li>Update Furniture Data</li>
              <li>Delete Furniture Data</li>
            </ol>
            <p className="fw-bold">User: </p>
            <ol>
              <li>Read all data furniture</li>
              <li>Search furniture</li>
            </ol>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Readme;
