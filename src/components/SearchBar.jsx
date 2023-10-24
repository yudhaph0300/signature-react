import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const SearchBar = () => {
  const { search } = useParams();

  const [searchFurniture, setSearchFurniture] = useState(search);

  const handleChange = (search) => {
    setSearchFurniture(search);
  };
  return (
    <div className="search-container mx-auto w-50">
      <input
        type="text"
        className="form-control rounded-pill search-input ms-2"
        placeholder="Search for furniture..."
        value={searchFurniture}
        onChange={(e) => handleChange(e.target.value)}
      />

      <Link
        to={`/furnitures/result/${searchFurniture}`}
        className="btn btn-primary rounded-pill search-button"
      >
        Search
      </Link>
    </div>
  );
};

export default SearchBar;
