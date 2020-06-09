import React from "react";
import API from "../../utils/API"

function ResultsList(props) {
  return (
    <ul className="list-group">
      {props.results.map((result, i) => (

        <div className="row">
          <div className="col s12">
            <div className="card blue-grey">
              <div className="card-content white-text">

                <div className="card-title" id="web-title" key={i}>

                  Title: {result.title}

                </div>

                <p id="lib-des">
                  Description: {result.description}
                </p>
              </div>
              <div className="card-action">
                <a href={result.link}
                  target="_blank"
                  rel="noopener noreferrer">{result.link}</a>

                <button
                  // onClick={handleAdd}
                  className="btn waves-effect waves-light"
                  id="card-btn"
                  type="submit" name="action">
                  Add to Library
                        <i className="material-icons right">send</i>
                </button>

              </div>
            </div>
          </div>
        </div>

      ))}
    </ul>
  );
}

export default ResultsList;
