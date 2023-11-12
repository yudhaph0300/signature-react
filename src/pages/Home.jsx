import "../style/home.css";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import heroImage from "../asset/home-hero.png";
import SearchBar from "../components/SearchBar";
import Spinner from "../components/Spinner";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";

function Home() {
  const [furnitureRec, setFurnitureRec] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataFurniture = async () => {
      try {
        const furnitures = collection(db, "furnitures");
        const querySnap = await getDocs(furnitures);

        let data = [];
        querySnap.forEach((doc) => {
          data.push(doc.data());
        });

        const shuffledFurniture = data.sort(() => 0.5 - Math.random());
        const randomFurniture = shuffledFurniture.slice(0, 4);
        setFurnitureRec(randomFurniture);
      } catch (error) {
        toast.error("Network Error");
      } finally {
        setLoading(false);
      }
    };

    if (!furnitureRec) {
      fetchDataFurniture();
    }
  }, [furnitureRec]);

  console.log(furnitureRec);

  const handleClick = () => {};
  return (
    <>
      <Navbar />
      <div className="position-relative">
        <img src={heroImage} alt="Hero" className="hero-image img-fluid" />

        <div className="container text-center position-absolute top-50 start-50 translate-middle">
          <h1 className="text-white mb-4 hero-text">Find your furniture</h1>
          <p className="text-white mb-4 hero-text-second">
            Search your best quality furniture...
          </p>

          <SearchBar />
        </div>
      </div>

      <div className="container furniture-recommended">
        <h2 className="text-heading-rec text-center fw-bold">
          Featured furnitures recommended for you
        </h2>
        <p className="text-heading-rec text-center">
          Transform Your Living Space with Our Expertly Curated Selection of
          Premium Furnishings, Crafted for Unmatched Comfort and Elegance!
        </p>
        <hr className="border mb-2" />

        {loading ? (
          <Spinner />
        ) : (
          <div className="d-flex justify-content-center mt-4">
            <div className="row">
              {furnitureRec.map((furniture, index) => (
                <div className="col-sm-12 col-md-4 col-lg-3" key={index}>
                  <div className="card card-furniture" onClick={handleClick}>
                    <div className="card-img-container">
                      <div className="card-img-overlay">
                        {/* <h5 className="card-title text-right w-100">
                          *{furniture.rating}
                        </h5> */}
                      </div>
                      <div className="card-img-wrapper">
                        <img
                          className="card-img-top"
                          src={furniture.imageURL[0]}
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
        )}
      </div>
      <Footer />
    </>
  );
}

export default Home;
