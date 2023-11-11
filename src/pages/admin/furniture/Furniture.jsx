import "../style/index.css";
import Sidebar from "../../../components/admin/Sidebar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "../../../firebase.config";
import Spinner from "../../../components/Spinner";

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
          data.push(doc.data());
        });
        setFurnitureData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

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
                        <td>{furniture.name}</td>
                        <td>{furniture.type}</td>
                        <td>$ {furniture.price}</td>
                        {/* <td>{furniture.rating}</td> */}
                        <td className="text-center">
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Furniture;
