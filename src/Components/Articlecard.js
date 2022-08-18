import React from "react";
import moment from "moment";
moment().format();

function Articlecard({ article, index }) {
  return (
    <div>
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
          {article.points} points | {article.author} |
          {moment(
            article.created_at.replace(/\D/g, ""),
            "YYYYMMDDhhmmss"
          ).fromNow()}{" "}
          | {article.num_comments} comments
        </p>
      </li>
    </div>
  );
}

export default Articlecard;
