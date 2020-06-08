import React from "react";

function VideoSearchResults(props) {
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
                    </div>
                </div>
            </div>
        </div>

      ))}
    </ul>
  );
}

export default VideoSearchResults;
