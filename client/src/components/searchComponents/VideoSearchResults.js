import React from "react";

function VideoSearchResults(props) {
    return (
        <ul className="list-group">
            {props.results.map((result, i) => (

                <div className="row" key={result.id.videoId}>
                    <div className="col s12">
                        <div className="card blue-grey">
                            <div className="card-content white-text">

                                <div className="card-title"
                                    id={"video-title"+i} >

                                    Title: {result.title}

                                </div>

                                <p id={"lib-des" + i}>
                                    Channel: {result.channelTitle}
                                    <br />
                                    Duration: {result.duration}

                                </p>
                            </div>
                            <div className="card-action">
                                <a href={result.url}
                                    target="_blank"
                                    rel="noopener noreferrer">{result.url}</a>
                            </div>
                        </div>
                    </div>
                </div>

            ))}
        </ul>
    );
}

export default VideoSearchResults;
