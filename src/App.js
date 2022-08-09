import "./App.css";
import React, { useState, useEffect } from "react";
import SearchBar from "./Components/SearchBar";
import List from "./Components/List";

function App() {
  const [news, setNews] = useState([]);
  const [inputText, setInputText] = useState("");
  // const [filtered, setfiltered] = useState([]);

  useEffect(() => {
    fetch("http://hn.algolia.com/api/v1/search?tags=front_page")
      .then((res) => res.json())
      .then((data) => {
        setNews(data.hits);
      });
  }, []);

  const handleInput = (e) => {
    let lower = e.target.value.toLowerCase();
    setInputText(lower);
  };

  return (
    <div className="App">
      <header>
        <SearchBar
          handleChange={handleInput}
          placeholder="Search stories by title, url, or author"
        />
      </header>
      <List news={news} inputText={inputText} />
    </div>
  );
}

export default App;
