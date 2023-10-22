import "./style/index.css";
import Sidebar from "../../components/admin/Sidebar";
import { useContext } from "react";
import { FurnitureContext } from "../../data/FurnitureContext";

function Furniture() {
  const { furnitureData } = useContext(FurnitureContext);

  return (
    <div>
      <Sidebar />
      <div class="content">
        <div class="card shadow border-0 p-3">
          <div class="card-body">
            <div className="d-flex justify-content-between mb-3">
              <div className="card-title">
                <h3>Furniture</h3>
                <p>Showing {furnitureData.length} furniture from all data</p>
              </div>
              <div class="col ms-5">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search..."
                  style={{ width: "100%" }}
                />
              </div>
              <div class="col ms-5">
                <button className="btn btn-primary w-100">Add Furniture</button>
              </div>
            </div>
            <div class="table-responsive">
              <table class="table table-hover">
                <thead class="thead-light">
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
                        <button
                          type="button"
                          class="btn btn-outline-info mr-2 rounded-pill px-4 me-2"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          class="btn btn-outline-danger rounded-pill px-4"
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
