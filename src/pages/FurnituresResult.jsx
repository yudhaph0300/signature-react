import "../style/furniture.css";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import heroSearch from "../asset/search-furniture.png";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { FurnitureContext } from "../data/FurnitureContext";
import Card from "../components/Card";
import Footer from "../components/Footer";

function FurnituresResult() {
  const { search } = useParams();

  const { furnitureData } = useContext(FurnitureContext);
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!search) return;
    if (!furnitureData) return;

    const searchFurniture = furnitureData.filter((item) =>
      item.type.toLowerCase().includes(search.toLowerCase())
    );

    if (searchFurniture) {
      setResults(searchFurniture);
    }
  }, [search, furnitureData, setResults]);

  console.log(results);

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
          Found {results.length} furniture for “{search}”
        </p>
        <hr className="border mb-2" />
        <div className="my-4">
          {results.length === 0 && (
            <h3 className="text-center my-5">
              Furniture not found, enter another keyword!
            </h3>
          )}
          {results.map((res, index) => (
            <div className="mb-3">
              <Card
                key={index}
                imageSource={
                  "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c29mYXxlbnwwfHwwfHx8MA%3D%3D"
                }
                title={res.name}
                type={res.type}
                rating={res.rating}
                description={res.description}
              />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default FurnituresResult;
