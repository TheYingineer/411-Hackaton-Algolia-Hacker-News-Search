import React from "react";
import "./SearchBar.css";

function SearchBar({ placeholder, data }) {
  return (
    <div ClassName="Search">
      <div ClassName="searchInputs">
        <input type="text" placeholder={placeholder}></input>
        <div ClassName="searchIcon"></div>
      </div>
      <div ClassName="dataResults"></div>
    </div>
  );
}

export default SearchBar;