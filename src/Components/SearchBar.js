import React from "react";
import "./SearchBar.css";

function SearchBar({ handleChange, placeholder, data }) {
  return (
    <div ClassName="Search">
      <div ClassName="searchInputs">
        <input
          onChange={handleChange}
          type="text"
          placeholder={placeholder}
        ></input>
        <div ClassName="searchIcon"></div>
      </div>
      {/* <div ClassName="SortByBar">
        <h4>Search</h4>
        <input list="Stories">
          {/* <option value="All"/> */}
        {/* </input>
        <h4>by</h4>
        <input type=""></input>
        <h4>for</h4>
        <input type=""></input>
      </div> */} 
      <div ClassName="dataResults"></div>
    </div>
  );
}

export default SearchBar;
