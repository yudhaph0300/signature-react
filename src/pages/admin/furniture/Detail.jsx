import { doc, getDoc } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../firebase.config";
import SpinnerFull from "../../../components/SpinnerFull";
import Sidebar from "../../../components/admin/Sidebar";

import "../style/detail.css";

function Detail() {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    price: 0,
    imageURL: {},
    description: "",
  });
  const [loading, setLoading] = useState(true);
  const [edit, setEdit] = useState(false);

  const params = useParams();

  useEffect(() => {
    const getDetail = async () => {
      const docRef = doc(db, "furnitures", params.furnitureId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setFormData(docSnap.data());
        setLoading(false);
      }
    };

    getDetail();
  }, [params.furnitureId]);

  const { name, type, price, imageURL, description } = formData;

  console.log(formData);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <Sidebar />
      <div className="content">
        {loading ? (
          <SpinnerFull />
        ) : (
          <div className="card shadow border-0 p-3">
            <div className="card">
              <div className="card-body">
                <div className="row mb-2">
                  <div className="col text-start">
                    <h5 className="card-title fw-bold">Furniture Details</h5>
                  </div>
                  <div className="col text-end">
                    <button
                      className={`btn ${
                        edit ? "btn-danger me-2" : "btn-warning"
                      } px-4`}
                      onClick={() => {
                        setEdit((prevState) => !prevState);
                      }}
                    >
                      {edit ? "Cancel" : "Edit"}
                    </button>
                    {edit && (
                      <button className="btn btn-success px-4">Save</button>
                    )}
                  </div>
                </div>

                <div className="border-all mb-3"></div>
                <div className="card-images">
                  {imageURL.map((image, index) => (
                    <div className="image-wrapper" key={index}>
                      <img src={image} alt={name} />
                    </div>
                  ))}
                </div>

                <form action="" className="mt-3">
                  <div className="form-group mb-2">
                    <label htmlFor="name" className="small mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control small p-3"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      value={name}
                      disabled={!edit}
                      onChange={onChange}
                    />
                  </div>

                  <div className="form-group mb-2">
                    <label className="small mb-1" htmlFor="type">
                      Type
                    </label>
                    <select
                      className="custom-select form-control small p-3"
                      name="type"
                      id="type"
                      onChange={onChange}
                      value={type}
                      disabled={!edit}
                    >
                      <option value="chair">Chair</option>
                      <option value="table">Sofa</option>
                      <option value="desk">Desk</option>
                    </select>
                  </div>

                  <div className="form-group mb-2">
                    <label htmlFor="price" className="small mb-1">
                      Price
                    </label>
                    <input
                      type="number"
                      className="form-control small p-3"
                      id="price"
                      name="price"
                      placeholder="Enter your price"
                      value={price}
                      disabled={!edit}
                      onChange={onChange}
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label htmlFor="description" className="small mb-1">
                      Description
                    </label>
                    <textarea
                      id="description"
                      className="form-control small"
                      name="description"
                      rows="8"
                      onChange={onChange}
                      value={description}
                      disabled={!edit}
                    ></textarea>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Detail;
