import { useContext, useState } from "react";
import Sidebar from "../../../components/admin/Sidebar";
import { v4 as uuidv4 } from "uuid";
import { FurnitureContext } from "../../../data/FurnitureContext";
import { Link } from "react-router-dom";

const AddFurniture = () => {
  const { addFurniture } = useContext(FurnitureContext);
  const [newFurniture, setNewFurniture] = useState({
    id: uuidv4(),
    name: "",
    img: "",
    type: "",
    price: 0,
    rating: 0,
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFurniture({
      ...newFurniture,
      [name]: value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    addFurniture(newFurniture);
    window.location.href = "/admin/furniture";
  };

  return (
    <div>
      <Sidebar />
      <div className="content">
        <div className="card shadow border-0 p-4">
          <h3 className="mb-4">Form Add Furniture</h3>
          <form onSubmit={onSubmit}>
            <div className="form-group mb-3">
              <input
                name="name"
                type="text"
                className="form-control"
                placeholder="Enter your product name"
                //  value={newFurniture.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group mb-3">
              <input
                name="img"
                type="text"
                className="form-control"
                placeholder="Enter link of your image"
                onChange={handleInputChange}
              />
            </div>

            <div className="input-group mb-3">
              <div className="input-group-prepend" style={{ width: "15%" }}>
                <label className="input-group-text" for="type">
                  Type
                </label>
              </div>
              <select
                className="custom-select form-control"
                name="type"
                onChange={handleInputChange}
              >
                <option disabled value="" selected>
                  Choose product type
                </option>
                <option value="Dining Chair">Dining Chair</option>
                <option value="Vanity Table">Vanity Table</option>
                <option value="Bar Stool">Bar Stool</option>
                <option value="Show Rack">Show Rack</option>
                <option value="Study Desk">Study Desk</option>
              </select>
            </div>

            <div className="form-group mb-3">
              <input
                name="price"
                type="number"
                className="form-control"
                placeholder="Enter your product price"
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group mb-3">
              <label for="description">Description</label>
              <textarea
                className="form-control"
                name="description"
                rows="3"
                onChange={handleInputChange}
              ></textarea>
            </div>

            <div className="text-end">
              <Link
                to="/admin/furniture"
                className="btn btn-outline-primary me-2 px-4"
              >
                Cancel
              </Link>
              <button type="submit" className="btn btn-primary px-4">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddFurniture;
