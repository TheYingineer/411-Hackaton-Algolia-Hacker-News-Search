import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("http://hn.algolia.com/api/v1/search?tags=front_page")
      .then((res) => res.json())
      .then((data) => {
        setNews(data.hits);
      });
  }, []);

  function filteredSearch() {
    setNews(
      news.filter((element) => {
        if (element.title.includes("Social")) {
          return element;
        }
      })
    );
  }

  return (
    <div className="App">
      <button onClick={filteredSearch}>search</button>
      <ol>
        {news.map((article, index) => {
          return (
            <li key={article.objectID + index}>
              <h2>
                <div className="title">{article.title}</div>
                <div className="url">({article.url})</div>
              </h2>
              <p>
                {article.points} points | {article.author} |{article.created_at}{" "}
                | {article.num_comments} comments
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default App;
