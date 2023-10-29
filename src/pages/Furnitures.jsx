import "../style/furniture.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useContext } from "react";
import { FurnitureContext } from "../data/FurnitureContext";
import SearchBar from "../components/SearchBar";
import heroSearch from "../asset/search-furniture.png";

function Furnitures() {
  const { furnitureData } = useContext(FurnitureContext);

  const handleClick = () => {};

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
        <p className="fw-bold">Showing 12 of 60 pieces of furniture</p>
        <hr className="border mb-2" />
        <div className="d-flex justify-content-center">
          <div className="row">
            {furnitureData.map((furniture) => (
              <div
                className="col-sm-12 col-md-4 col-lg-3 mt-4"
                key={furniture.id}
              >
                <div className="card card-furniture" onClick={handleClick}>
                  <div className="card-img-container">
                    <div className="card-img-overlay">
                      <h5 className="card-title text-right w-100">
                        *{furniture.rating}
                      </h5>
                    </div>
                    <div className="card-img-wrapper">
                      <img
                        className="card-img-top"
                        src={furniture.img}
                        height="200"
                        alt={furniture.name}
                        style={{
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <p className="mb-1 fw-bold">{furniture.name}</p>
                    <p className="mb-1 fs-small">Type: {furniture.type}</p>
                    <p className="fs-small">Price: $ {furniture.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Furnitures;
