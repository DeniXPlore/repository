import React from "react";

function Search({ active }) {
  return (
    <div className={`search-bar ${active ? "active" : ""}`}>
      <input
        type="text"
        className="search-input"
        placeholder="Search your location..."
      />
    </div>
  );
}

export default Search;
