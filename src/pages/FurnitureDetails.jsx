import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { doc, getDoc } from "@firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import SpinnerFull from "../components/SpinnerFull";
import "../style/details.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function FurnitureDetails() {
  const [loading, setLoading] = useState(true);
  const [furnitureDetails, setFurnitureDetail] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getDetails = async () => {
      const docRef = doc(db, "furnitures", params.furnitureId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setFurnitureDetail(docSnap.data());
        setLoading(false);
      } else {
        navigate("/furnitures");
        toast.error("Furniture doesnt exist");
      }
    };

    if (!furnitureDetails) {
      getDetails();
    }
  }, [furnitureDetails, navigate, params.furnitureId]);

  console.log(furnitureDetails);

  if (loading) {
    return <SpinnerFull />;
  }

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="card p-3 shadow-lg">
          <div className="row">
            <div className="col-md-6">
              <div className="card-images-detail">
                {furnitureDetails.imageURL.map((item, index) => (
                  <div className="image-wrapper" key={index}>
                    <img src={item} alt="..." />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-6">
              <div className="my-2">
                <h5 className="fw-bold">Name: {furnitureDetails.name}</h5>
                <p className="my-1">Type: {furnitureDetails.type}</p>
                <p className="my-1">Price: {furnitureDetails.price}</p>
                <p className="my-1">
                  Description: {furnitureDetails.description}
                </p>
                <button className="btn btn-primary mt-3 w-100 d-flex align-items-center justify-content-center">
                  <div className=" ">
                    <FontAwesomeIcon icon={faCartShopping} className="me-2" />
                    Add to cart
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FurnitureDetails;
