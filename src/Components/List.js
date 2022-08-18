import { React } from "react";
import moment from "moment";

moment().format()



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
            <a
              className="title"
              href={`https://news.ycombinator.com/item?id=${article.objectID}`}
            >
              {article.title}
            </a>
            <div className="url">({article.url})</div>
          </h2>
          <p>

            {article.points} points | {article.author} |{moment(article.created_at.substring(0,10), "YYYY MM DD").fromNow()} |{" "}
            {article.num_comments} comments

          </p>
        </li>
      ))}
    </ol>
  );
}

export default List;
