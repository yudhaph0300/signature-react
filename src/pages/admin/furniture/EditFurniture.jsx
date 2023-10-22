import { useContext, useEffect, useState } from "react";
import Sidebar from "../../../components/admin/Sidebar";
import { FurnitureContext } from "../../../data/FurnitureContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const EditFurniture = () => {
  const { id } = useParams();

  const { furnitureData, editFurniture } = useContext(FurnitureContext);
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    price: 0,
    description: "",
  });

  useEffect(() => {
    if (!id) return;
    if (!furnitureData) return;
    const selectedFurniture = furnitureData.find(
      (item) => item.id === parseInt(id) || item.id === id
    );

    if (selectedFurniture) {
      setFormData(selectedFurniture);
    }
  }, [id, furnitureData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    editFurniture(id, formData);

    window.location.href = "/admin/furniture";
  };

  return (
    <div>
      <Sidebar />
      <div className="content">
        <div className="card shadow border-0 p-4">
          <h3 className="mb-4">Form Edit Furniture</h3>
          <form onSubmit={onSubmit}>
            <div className="form-group mb-3">
              <input
                name="name"
                type="text"
                className="form-control"
                placeholder="Edit name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            <div className="input-group mb-3">
              <div className="input-group-prepend" style={{ width: "15%" }}>
                <label className="input-group-text" htmlFor="type">
                  Type
                </label>
              </div>
              <select
                className="custom-select form-control"
                name="type"
                value={formData.type}
                onChange={handleInputChange}
              >
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
                placeholder="Edit price"
                value={formData.price}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="description">Description</label>
              <textarea
                className="form-control"
                name="description"
                rows="3"
                value={formData.description}
                onChange={handleInputChange}
              ></textarea>
            </div>

            <div className="text-end">
              <Link
                to="/admin/furniture"
                type="submit"
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

export default EditFurniture;
