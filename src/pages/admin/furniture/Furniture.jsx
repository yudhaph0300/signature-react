import "../style/index.css";
import Sidebar from "../../../components/admin/Sidebar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "../../../firebase.config";
import Spinner from "../../../components/Spinner";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faTrash } from "@fortawesome/free-solid-svg-icons";

function Furniture() {
  const [furnitureData, setFurnitureData] = useState(null);
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchDataFurniture = async () => {
      try {
        const furnitures = collection(db, "furnitures");
        const querySnap = await getDocs(furnitures);

        let data = [];
        querySnap.forEach((doc) => {
          data.push({ id: doc.id, data: doc.data() });
        });
        setFurnitureData(data);
      } catch (error) {
        toast.error("Network Error");
      } finally {
        setLoading(false);
      }
    };

    console.log(furnitureData);

    if (!furnitureData) {
      fetchDataFurniture();
    }
  }, [furnitureData]);

  const handleSearch = (searchInput) => {
    setSearch(searchInput);
    const filteredData = furnitureData.filter((furniture) =>
      furniture.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setResults(filteredData);
    if (searchInput === "") {
      setResults(null);
    }
  };

  return (
    <div>
      <Sidebar />
      <div className="content">
        <div className="card shadow border-0 p-3">
          <div className="card-body">
            <div className="d-flex justify-content-between mb-3">
              <div className="card-title">
                <h3>Furniture</h3>

                {results ? (
                  <p>Showing {results.length} furniture from search results</p>
                ) : (
                  <>
                    {furnitureData && (
                      <p>
                        Showing {furnitureData.length} furniture from all data
                      </p>
                    )}
                  </>
                )}
              </div>
              <div className="col ms-5">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  style={{ width: "100%" }}
                  value={search}
                  onChange={(e) => handleSearch(e.target.value)}
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
            {loading ? (
              <Spinner />
            ) : (
              <div className="table-responsive">
                <table className="table table-hover ">
                  <thead className="thead-light">
                    <tr>
                      <th className="text-center">No</th>
                      <th>Name</th>
                      <th>Type</th>
                      <th>Price</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(results || furnitureData).map((furniture, index) => (
                      <tr key={index}>
                        <td className="text-center">{index + 1}</td>
                        <td>{furniture.data.name}</td>
                        <td>{furniture.data.type}</td>
                        <td>$ {furniture.data.price}</td>
                        {/* <td>{furniture.rating}</td> */}
                        <td className="text-center">
                          <Link
                            to={`/admin/furniture/${furniture.id}`}
                            className="btn btn-primary btn-circle me-2"
                          >
                            <FontAwesomeIcon icon={faInfo} />
                          </Link>

                          <button
                            type="button"
                            className="btn btn-danger btn-circle "
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Furniture;
