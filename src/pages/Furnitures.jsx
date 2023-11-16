import "../style/furniture.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import heroSearch from "../asset/search-furniture.png";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "../firebase.config";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Furnitures() {
  const [furnitureData, setFurnitureData] = useState(null);
  const [loading, setLoading] = useState(true);

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

    if (!furnitureData) {
      fetchDataFurniture();
    }
  }, [furnitureData]);

  console.log(furnitureData);

  const navigate = useNavigate();

  const handleClick = (FurnitureId) => {
    navigate(`/furnitures/${FurnitureId}`);
  };

  return (
    <>
      <Navbar />
      <div className="position-relative">
        <img src={heroSearch} alt="Hero" className="hero-image img-fluid" />

        <div className="container text-center position-absolute top-50 start-50 translate-middle">
          <h1 className="text-white mb-4 hero-text">Find your furniture</h1>
          <p className="text-white mb-4 hero-text-second">
            Search your best quality furniture...
          </p>

          <SearchBar />
        </div>
      </div>
      <div className="container mt-5">
        <p className="fw-bold">
          Showing {loading ? "0" : "12"} of {loading ? "0" : "60"} pieces of
          furniture
        </p>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <hr className="border mb-2" />
            <div className="d-flex justify-content-center">
              <div className="row">
                {furnitureData.map((furniture, index) => (
                  <div className="col-sm-12 col-md-4 col-lg-3 mt-4" key={index}>
                    <div
                      className="card card-furniture"
                      onClick={() => handleClick(furniture.id)}
                    >
                      <div className="card-img-container">
                        <div className="card-img-overlay"></div>
                        <div className="card-img-wrapper">
                          <img
                            className="card-img-top"
                            src={furniture.data.imageURL[0]}
                            height="200"
                            alt={furniture.data.name}
                            style={{
                              objectFit: "cover",
                            }}
                          />
                        </div>
                      </div>
                      <div className="card-body">
                        <p className="mb-1 fw-bold">{furniture.data.name}</p>
                        <p className="mb-1 fs-small">
                          Type: {furniture.data.type}
                        </p>
                        <p className="fs-small">
                          Price: $ {furniture.data.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Furnitures;
