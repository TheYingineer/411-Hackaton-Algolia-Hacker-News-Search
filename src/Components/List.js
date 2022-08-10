import { React } from "react";

function List({ news, inputText }) {
  const filtered = news.filter((element) => {
    if (inputText === "") {
      return element;
    } else {
      return element.title.toLowerCase().includes(inputText);
    }
  });

  return (
    <ol>
      {filtered.map((article, index) => (
        <li key={article.objectID + index}>
          <h2>
            <div className="title">{article.title}</div>
            <a className="url" href={article.url}>
              ({article.url})
            </a>
          </h2>
          <p>
            {article.points} points | {article.author} |{article.created_at} |{" "}
            {article.num_comments} comments
          </p>
        </li>
      ))}
    </ol>
  );
}

export default List;
