import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useContext } from "react";
import { FurnitureContext } from "../data/FurnitureContext";
import { Link } from "react-router-dom";

function Furnitures() {
  const { furnitureData } = useContext(FurnitureContext);

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="d-flex justify-content-center">
          <div className="row">
            {furnitureData.map((furniture) => (
              <div className="col-sm-12 col-md-4 col-lg-3 mt-4">
                <div className="card" key={furniture.id}>
                  <img
                    className="card-img-top"
                    src="https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c29mYXxlbnwwfHwwfHx8MA%3D%3D"
                    alt={furniture.name}
                  />
                  <div className="card-img-overlay">
                    <h5 className="card-title text-right w-100">
                      *{furniture.rating}
                    </h5>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{furniture.name}</h5>
                    <div>Type: {furniture.type}</div>
                    <div className="mb-2">Price: $ {furniture.price}</div>
                    <Link className="btn btn-outline-primary w-100 mt-3">
                      View Details
                    </Link>
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
