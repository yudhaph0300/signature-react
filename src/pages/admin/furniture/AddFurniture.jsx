import { useState } from "react";
import Sidebar from "../../../components/admin/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRef } from "react";
import { useEffect } from "react";
import SpinnerFull from "../../../components/SpinnerFull";

const AddFurniture = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    images: {},
    price: 0,
    description: "",
  });

  const { name, type, images, price, description } = formData;

  const auth = getAuth();
  const navigate = useNavigate();
  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setFormData({ ...formData, userRef: user.uid });
        } else {
          navigate("/login");
        }
      });
    }

    return () => {
      isMounted.current = false;
    };
  }, [isMounted]);

  if (loading) {
    return <SpinnerFull />;
  }

  const onMutate = (e) => {
    // Files
    if (e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        images: e.target.files,
      }));
    }

    // Text/Number
    if (!e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: e.target.value,
      }));
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <Sidebar />
      <div className="content">
        <div className="card shadow border-0 p-4">
          <h3 className="mb-4 fw-bold">Create new furniture</h3>
          <form onSubmit={onSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="text">Name</label>
              <input
                name="name"
                id="name"
                type="text"
                className="form-control"
                placeholder="Enter your product name"
                value={name}
                onChange={onMutate}
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
                id="type"
                onChange={onMutate}
                value={type}
              >
                <option value="chair">Chair</option>
                <option value="table">Sofa</option>
                <option value="desk">Desk</option>
              </select>
            </div>

            <div className="form-group mb-3">
              <label htmlFor="price">Price</label>
              <input
                id="price"
                name="price"
                type="number"
                className="form-control"
                placeholder="Enter your product price"
                onChange={onMutate}
                value={price}
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="images">Images</label>
              <input
                id="images"
                name="images"
                type="file"
                className="form-control"
                onChange={onMutate}
                accept=".jpg,.png,.jpeg"
                multiple
                max="6"
                required
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                className="form-control"
                name="description"
                rows="3"
                onChange={onMutate}
                value={description}
              ></textarea>
            </div>

            <div className="text-end">
              <Link
                to="/admin/furniture"
                className="btn btn-outline-danger me-2 px-4"
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
