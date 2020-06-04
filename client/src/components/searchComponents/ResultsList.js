import React from "react";

function ResultsList(props) {
  return (
    <ul className="list-group">
      {props.results.map((result, i) => (
        <li className="list-group-item" key={i}>
          <img alt={result.title} className="img-fluid" src={result.image.url} />
        </li>
      ))}
    </ul>
  );
}

export default ResultsList;
