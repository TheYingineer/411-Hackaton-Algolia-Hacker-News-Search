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
        console.log(data.hits);
        setNews(data.hits);
      });
  }, []);

  const handleInput = (e) => {
    let lower = e.target.value.toLowerCase();
    setInputText(lower);
  };

  return (
    <div className="App">
      <div className="mainContainer">
        <header>
          <img src="https://hn.algolia.com/packs/media/images/logo-hn-search-a822432b.png" />
          <h2>Search Hacker News</h2>
          <SearchBar
            handleChange={handleInput}
            placeholder="Search stories by title, url, or author"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
          <h2>Settings</h2>
          {/* <button onClick={filteredSearch}>search</button> */}
          {/* <ol>
            {news.map((article, index) => {
              return (
                <li key={article.objectID + index}>
                  <h2>
                    <div className="title">{article.title}</div>
                    <div className="url">({article.url})</div>
                  </h2>
                  <p>
                    {article.points} points | {article.author} |
                    {article.created_at} | {article.num_comments} comments
                  </p>
                </li>
              );
            })}
          </ol> */}

          {/* <SearchBar
            handleChange={handleInput}
            placeholder="Search stories by title, url, or author"
          /> */}
        </header>
        <List news={news} inputText={inputText} />
      </div>
    </div>
  );
}

export default App;
