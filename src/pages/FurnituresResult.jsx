import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import heroSearch from "../asset/search-furniture.png";

function FurnituresResult() {
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
    </>
  );
}

export default FurnituresResult;
