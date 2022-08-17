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
        {/* <div ClassName="searchIcon"></div> */}
      </div>
      <div ClassName="searchFilterContainer">
        Search
        <select>
          <label>All</label>
          <option value="All">All</option>
          <option value="Stories">Stories</option>
          <option value="Comments">Comments</option>
        </select>
        by
        <select>
          <option value="Popularity">Popularity</option>
          <option value="Date">Date</option>
        </select>
        for
        <select>
          <option value="All Time">All Time</option>
          <option value="Last 24h">Last 24h</option>
          <option value="Past Week">Past Week</option>
          <option value="Past Month">Past Month</option>
          <option value="Past Year">Past Year</option>
          <option value="Custom Range">Custom Range</option>
        </select>
      </div>
      {/* <div ClassName="dataResults"></div> */}
    </div>
  );
}

export default SearchBar;
