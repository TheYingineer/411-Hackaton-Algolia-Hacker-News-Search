import { React, useEffect, useState } from "react";
import Articlecard from "./Articlecard";

function List({ news, inputText, sortType }) {
  const [sorted, setSorted] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    setFiltered(
      sorted.filter((element) => {
        if (inputText === "") {
          return element;
        } else {
          if (typeof element.url === typeof element.title) {
            return (
              element.title.toLowerCase().includes(inputText) ||
              element.url.toLowerCase().includes(inputText) ||
              element.author.toLowerCase().includes(inputText)
            );
          } else {
            return (
              element.title.toLowerCase().includes(inputText) ||
              element.author.toLowerCase().includes(inputText)
            );
          }
        }
      })
    );
  }, [sorted, filtered, inputText]);

  useEffect(() => {
    if (sortType === "Date") {
      setSorted(
        news.sort((a, b) => {
          let dateA = new Date(a.created_at);
          let dateB = new Date(b.created_at);

          return dateB - dateA;
        })
      );
    }
    if (sortType === "Popularity") {
      setSorted(
        news.sort((a, b) => {
          return b.points - a.points;
        })
      );
    }
  }, [news, sortType]);

  return (
    <ol>
      {filtered.map((article, index) => (
        <Articlecard article={article} index={index} />
      ))}
    </ol>
  );
}

export default List;
