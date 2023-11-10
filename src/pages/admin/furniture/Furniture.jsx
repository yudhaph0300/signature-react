import "../style/index.css";
import Sidebar from "../../../components/admin/Sidebar";
import { Link } from "react-router-dom";

function Furniture() {
  const furnitureData = [
    {
      id: 1,
      name: "This name",
      type: "this type",
      price: "this price",
      rating: "this rating",
    },
  ];
  return (
    <div>
      <Sidebar />
      <div className="content">
        <div className="card shadow border-0 p-3">
          <div className="card-body">
            <div className="d-flex justify-content-between mb-3">
              <div className="card-title">
                <h3>Furniture</h3>
                <p>Showing 0 furniture from all data</p>
              </div>
              <div className="col ms-5">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  style={{ width: "100%" }}
                />
              </div>
              <div className="col ms-5">
                <Link
                  to="/admin/furniture/add"
                  className="btn btn-primary w-100"
                >
                  Add Furniture
                </Link>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-hover">
                <thead className="thead-light">
                  <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Price</th>
                    <th>Rating</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {furnitureData.map((furniture, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{furniture.name}</td>
                      <td>{furniture.type}</td>
                      <td>$ {furniture.price}</td>
                      <td>{furniture.rating}</td>
                      <td>
                        <Link
                          to={`/admin/furniture/edit/${furniture.id}`}
                          className="btn btn-outline-info mr-2 rounded-pill px-4 me-2"
                        >
                          Edit
                        </Link>
                        <button
                          type="button"
                          className="btn btn-outline-danger rounded-pill px-4"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Furniture;
