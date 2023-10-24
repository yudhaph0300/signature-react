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
      <div className="container">
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
                        src="https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c29mYXxlbnwwfHwwfHx8MA%3D%3D"
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
