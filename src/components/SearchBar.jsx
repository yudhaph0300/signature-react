const SearchBar = () => {
  return (
    <div className="search-container mx-auto w-50">
      <input
        type="text"
        className="form-control rounded-pill search-input ms-2"
        placeholder="Search for furniture..."
      />
      <button className="btn btn-primary rounded-pill search-button">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
